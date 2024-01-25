import { Context, session, Telegraf } from "telegraf";
import axios, { Axios } from "axios";
import { languageArray, sortetArray } from "./data/routers";

require("dotenv").config();

interface SessionData {
  messageCount: number;
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
const bot = new Telegraf(TELEGRAM_TOKEN || "");

const clientStates = new Map<
  number,
  { language?: string; certifiedTranslation?: boolean; documents?: string }
>();

//Add bot session - https://github.com/feathers-studio/telegraf-docs/blob/master/examples/session-bot.ts

bot.start((ctx: Context) => {
  const chatId = ctx.chat?.id;

  if (chatId) {
    ctx.reply("Please Select your Language", {
      reply_markup: {
        keyboard: [languageArray],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });

    clientStates.set(chatId, {
      language: undefined,
      certifiedTranslation: undefined,
      documents: undefined,
    });
  }
});

//Обработка ответов от пользователя
bot.hears(languageArray, (ctx: Context) => {
  const chatId = ctx.chat?.id;
  const clientState = chatId ? clientStates.get(chatId) : undefined;

  if (clientState && ctx.message && "text" in ctx.message) {
    const language = ctx.message.text;
    if (language) {
      clientState.language = language;
      ctx.reply(
        "Добрый день! Чем мы можем вам помочь? Вам нужен перевод или устный перевод?" +
          clientState.language,
        {
          reply_markup: {
            keyboard: [["перевод", "устный перевод"]],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        }
      );
    }
  }
});

// bot.hears(languageArray, (ctx) => {
//   console.log(ctx.message.text);

//   return ctx.reply("hello how can i help you? ");
// });
bot.hears("/status", (ctx) => {
  const chatId = ctx.chat?.id;
  const clientState = chatId ? clientStates.get(chatId) : undefined;
  console.log(clientState, chatId);
});

// bot.help((ctx) => ctx.reply('Send me a message for assistance.'));
bot.on("text", (ctx) => ctx.reply(`You said: ${ctx.message.text}`));

bot.launch().then(() => {
  console.log("Bot is running!");
});
