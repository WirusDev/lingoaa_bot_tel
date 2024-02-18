import { Context, session, Telegraf, Markup } from "telegraf";
import axios, { Axios } from "axios";
import { languageArray } from "./data/routers";
import { botMessages } from "./data/reply";
import { log } from "console";
import { get } from "http";
import { button } from "telegraf/typings/markup";
import nodemailer from "nodemailer";

require("dotenv").config();

const getAnswer = (language: string, botMessages: any) => {
  switch (language) {
    case "🇷🇺 Russisch":
      return botMessages.ru;
      break;
    case "🇺🇸 English":
      return botMessages.en;
      break;
    default:
      console.log("Language not found");
      return botMessages.none;
      break;
  }
};

interface SessionData {
  cahtId: number;
  messageCount: number;
  language: string;
  userName: string;
  firstName: string;
  lastName: string;

  // ... more session data go here
}

// Define your own context type
interface MyContext extends Context {
  session?: SessionData;
}

const { TELEGRAM_TOKEN, EMAIL_USERNAME, EMAIL_PASSWORD, EMAIL_HOST } =
  process.env;
if (TELEGRAM_TOKEN === undefined) {
  throw new TypeError("TELEGRAM_TOKEN must be provided!");
}
const bot = new Telegraf<MyContext>(TELEGRAM_TOKEN);
bot.use(session());

//Add bot session - https://github.com/feathers-studio/telegraf-docs/blob/master/examples/session-bot.ts

bot.hears("/status", async (ctx) => {
  if (ctx.session === undefined) {
    ctx.reply(`You dint have status yet please press /start`, {
      reply_markup: {
        keyboard: [["/start"]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
    return;
  }
  //console.log(ctx.session);

  const language = ctx.session.language;
  await ctx.reply(
    `${getAnswer(ctx.session.language, botMessages).language} ${
      ctx.session.language
    }\n${getAnswer(ctx.session.language, botMessages).messages} ${
      ctx.session.messageCount
    } `
  );
});

bot.start(async (ctx) => {
  const keyboard = Markup.inlineKeyboard(
    languageArray.reduce(
      (accumulator: any[], currentValue: string, index: number) => {
        if (index % 2 === 0) {
          accumulator.push([
            Markup.button.callback(currentValue, currentValue),
          ]);
        } else {
          accumulator[accumulator.length - 1].push(
            Markup.button.callback(currentValue, currentValue)
          );
        }
        return accumulator;
      },
      []
    ),
    { columns: 2 } // Указываем количество колонок в клавиатуреww
  );
  ctx.session ??= {
    messageCount: 0,
    language: "not definte",
    cahtId: 0,
    userName: "",
    firstName: "",
    lastName: "",
  };

  const chatId = ctx.chat?.id;

  console.log(
    `User Info - Chat ID: ${chatId}, Username: ${ctx.from?.username}, First Name: ${ctx.from?.first_name}, Last Name: ${ctx.from?.last_name}`
  );

  if (chatId) {
    ctx.reply("Please Select your Language", keyboard);
  }

  ctx.session.cahtId = chatId;
  ctx.session.userName = ctx.from?.username ?? "";
  ctx.session.firstName = ctx.from?.first_name ?? "";
  ctx.session.lastName = ctx.from?.last_name ?? "";
  console.log(ctx.session);
});

// Handle document uploads
bot.on("document", async (ctx) => {
  if (ctx.session === undefined) {
    ctx.reply(`Session is undefined, please press /start`, {
      reply_markup: {
        keyboard: [["/start"]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
    return;
  }
  const document = ctx.message.document;
  const fileId = document.file_id;

  // Get the file path from Telegram
  const fileDetails = await ctx.telegram.getFile(fileId);
  const fileUrl = `https://api.telegram.org/file/bot${TELEGRAM_TOKEN}/${fileDetails.file_path}`;

  // Download the file
  const response = await axios.get(fileUrl, {
    responseType: "stream",
  });

  // Send the downloaded file via email
  const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: EMAIL_USERNAME,
      pass: EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: EMAIL_USERNAME,
    to: "zlarin63@gmail.com", // Replace with recipient's email address
    subject: "Document from Telegram",
    text: `Telegram link: https://t.me/${ctx.session?.userName}(Für Antwort)`,
    attachments: [
      {
        filename: document.file_name,
        content: response.data,
      },
    ],
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  await ctx.reply("Document sent via email.");
});

bot.on("message", async (ctx) => {
  // set a default value
  if (ctx.session === undefined) {
    await ctx.reply("Session is undefined");
    console.log("Session is undefined");
    return;
  }
  ctx.session.messageCount++;
  await ctx.reply(`Seen ${ctx.session.messageCount} messages.`);
});

// bot.help((ctx) => ctx.reply('Send me a message for assistance.'));
bot.on("text", (ctx) => ctx.reply(`You said: ${ctx.message.text}`));

// Handling callback queries here
bot.action(/.*/, async (ctx) => {
  // Assuming you want to set the selected language in the user's session and reply with a confirmation
  const language = ctx.match[0]; // Getting the data from the callback query
  if (ctx.session === undefined) {
    console.log("Session is undefined!");
    return;
  }

  ctx.session.language = language; // Storing the selected language in the session

  await ctx.answerCbQuery(`Language set to ${language}.`); // Optionally notify the user about their choice

  await ctx.reply(getAnswer(language, botMessages).welcomeMessage); // Reply to the user confirming their selection
});

bot.launch().then(() => {
  console.log("Bot is running!");
});
