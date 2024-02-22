import { Markup } from "telegraf";
//import { languageArray } from "./data/routers";
import { bot } from "./components/bot_and_session";
import { handleDocUpload } from "./components/handleDocUpload";
import {
  handleUserResponse,
  getAnswer,
  handleCallbackQuerry,
} from "./components/handleMessage";
import { languageArray } from "./data/reply";

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
    language: "not definte",
    chatId: 0,
    userName: "",
    firstName: "",
    lastName: "",
    anliegen: "",
    languageFrom: "",
    languageTo: "",
    art: "",
  };

  const chatId = ctx.chat?.id;

  // console.log(
  //   `User Info - Chat ID: ${chatId}, Username: ${ctx.from?.username}, First Name: ${ctx.from?.first_name}, Last Name: ${ctx.from?.last_name}`
  // );

  if (chatId) {
    ctx.reply("Please Select your Language", keyboard);
  }

  ctx.session.chatId = chatId;
  ctx.session.userName = ctx.from?.username ?? "";
  ctx.session.firstName = ctx.from?.first_name ?? "";
  ctx.session.lastName = ctx.from?.last_name ?? "";
  //console.log(ctx.session); // Debugging
});

// Handle the /status command
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
    `${getAnswer(ctx.session.language).language} ${ctx.session.language}\n
    `
  );
});

// Handle the callback query
handleCallbackQuerry();

// Handle the document upload
handleDocUpload();

// Handle user's response to uploading more documents
handleUserResponse();

bot.launch().then(() => {
  console.log("Bot is running!");
});
