import { Markup } from "telegraf";
//import { languageArray } from "./data/routers";
import { bot } from "./components/bot_and_session";
import { handleDocUpload } from "./components/handleDocUpload";
import {
  handleUserResponse,
  handleCallbackQuerry,
} from "./components/handleMessage";
import { languageArray, getAnswer } from "./data/reply";

const startOver = bot.start(async (ctx) => {
  const keyboard = Markup.inlineKeyboard(
    languageArray.reduce(
      (accumulator: any[], currentValue: string, index: number) => {
        if (index % 2 === 0) {
          accumulator.push([
            Markup.button.callback(currentValue, `${currentValue}:chatLang`),
          ]);
        } else {
          accumulator[accumulator.length - 1].push(
            Markup.button.callback(currentValue, `${currentValue}:chatLang`)
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

  if (chatId) {
    ctx.reply("Please Select your Language", keyboard);
  }

  ctx.session.chatId = chatId;
  ctx.session.userName = ctx.from?.username ?? "";
  ctx.session.firstName = ctx.from?.first_name ?? "";
  ctx.session.lastName = ctx.from?.last_name ?? "";
  //console.log(ctx.session); // Debugging
});
//startOver;
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
      Lang from: ${ctx.session.languageFrom}\n
      Lang to: ${ctx.session.languageTo}\n
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

export { startOver };
