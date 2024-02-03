import { Context, session, Telegraf, Markup } from "telegraf";
import axios, { Axios } from "axios";
import { languageArray, sortetArray } from "./data/routers";

require("dotenv").config();

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

    // {
    //   reply_markup: {
    //     keyboard: [languageArray],
    //     resize_keyboard: true,
    //     one_time_keyboard: true,
    //   },
    // });
  }
});

//Обработка ответов от пользователя
bot.hears(languageArray, async (ctx) => {
  const chatId = ctx.chat?.id;
  console.log(chatId);

  if (ctx.session === undefined) {
    ctx.reply(`You dint have status yet`);
    return;
  }
  ctx.session.language = ctx.message.text;
  await ctx.reply(
    "Добрый день! Чем мы можем вам помочь? Вам нужен перевод или устный перевод?" +
      ctx.session.language,
    {
      reply_markup: {
        keyboard: [["перевод", "устный перевод"]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    }
  );
});

bot.on("message", async (ctx) => {
  // set a default value
  if (ctx.session === undefined) {
    console.log("Session is undefined");
    return;
  }
  ctx.session.messageCount++;
  await ctx.reply(`Seen ${ctx.session.messageCount} messages.`);
});

// bot.help((ctx) => ctx.reply('Send me a message for assistance.'));
bot.on("text", (ctx) => ctx.reply(`You said: ${ctx.message.text}`));

bot.launch().then(() => {
  console.log("Bot is running");
});
