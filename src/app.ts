import { Context, session, Telegraf, Markup } from "telegraf";
import axios, { Axios } from "axios";
import { languageArray, sortetArray } from "./data/routers";
import { botMessages } from "./data/reply";
import { log } from "console";
import { get } from "http";

require("dotenv").config();

const getAnswer = (language: string, botMessages: any) => {
  switch (language) {
    case "🇷🇺 Russisch":
      return botMessages.ru;
      break;
    case "🇺🇸 English":
      return botMessages.en;
      break;
    case "🇩🇪 Deutsch":
      return botMessages.de;
      break;
    default:
      console.log("Language not found");
      return botMessages.none;
      break;
  }
};

interface SessionData {
  messageCount: number;
  language: string;

  // ... more session data go here
}

// Define your own context type
interface MyContext extends Context {
  session?: SessionData;
}

const { TELEGRAM_TOKEN } = process.env;
if (TELEGRAM_TOKEN === undefined) {
  throw new TypeError("TELEGRAM_TOKEN must be provided!");
}
const bot = new Telegraf<MyContext>(TELEGRAM_TOKEN);
bot.use(session());

//Add bot session - https://github.com/feathers-studio/telegraf-docs/blob/master/examples/session-bot.ts

bot.hears("/status", async (ctx) => {
  if (ctx.session === undefined) {
    ctx.reply(`You dint have status yet`);
    return;
  }
  await ctx.reply(
    `Messages: ${ctx.session.messageCount} Your Language: ${ctx.session.language}`
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
    { columns: 2 } // Указываем количество колонок в клавиатуре
  );
  ctx.session ??= { messageCount: 0, language: "not definte" };

  const chatId = ctx.chat?.id;
  if (chatId) {
    ctx.reply("Please Select your Language", keyboard);
  }
});

//Обработка ответов от пользователя
// bot.hears(languageArray, async (ctx) => {
//   const chatId = ctx.chat?.id;
//   console.log(chatId);

//   if (ctx.session === undefined) {
//     ctx.reply(`You dint have status yet`);
//     return;
//   }
//   ctx.session.language = ctx.message.text;
//   await ctx.reply(
//     "Добрый день! Чем мы можем вам помочь? Вам нужен перевод или устный перевод?" +
//       ctx.session.language,
//     {
//       reply_markup: {
//         keyboard: [["перевод", "устный перевод"]],
//         resize_keyboard: true,
//         one_time_keyboard: true,
//       },
//     }
//   );
// });

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
