require('dotenv').config()

import { Telegraf, Context } from 'telegraf';

const { TELEGRAM_TOKEN } = process.env;

const bot = new Telegraf(TELEGRAM_TOKEN || '');



// Хранение состояний клиента
const clientStates = new Map<
  number,
  { language?: string; certifiedTranslation?: boolean; documents?: string }
>();

// Команда /start
bot.start((ctx: Context) => {
  const chatId = ctx.chat?.id;

  if (chatId) {
    ctx.reply("Пожалуйста, выберите ваш язык:", {
      reply_markup: {
        keyboard: [["Deutsch", "English", "Español"]],
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

// Обработка ответов от пользователя
bot.hears(/(Deutsch|English|Español)/, (ctx: Context) => {
  const chatId = ctx.chat?.id;
  const clientState = chatId ? clientStates.get(chatId) : undefined;

  if (clientState && ctx.message && 'text' in ctx.message) {
    const language = ctx.message.text?.match(/(Deutsch|English|Español)/)?.[0];
    if (language) {
      clientState.language = language;
      ctx.reply('Добрый день! Чем мы можем вам помочь? Вам нужен перевод или устный перевод?'), {
        reply_markup: {
          keyboard: [["перевод", "устный перевод"]],
          resize_keyboard: true,
          one_time_keyboard: true,
        },
      };
    }
  }
});





bot.hears("перевод", (ctx: Context) => {
  const chatId = ctx.chat?.id;
  const clientState = chatId ? clientStates.get(chatId) : undefined;

  if (chatId && clientState) {
    ctx.reply("На какой язык нужно перевести?");
  }
});

bot.hears(
  /(с немецкого на английский|from German to English)/,
  (ctx: Context) => {
    const chatId = ctx.chat?.id;
    const clientState = chatId ? clientStates.get(chatId) : undefined;

    if (chatId && clientState) {
      ctx.reply("Должен ли перевод быть заверенным?");
    }
  }
);

bot.hears(/(да|yes)/, (ctx: Context) => {
  const chatId = ctx.chat?.id;
  const clientState = chatId ? clientStates.get(chatId) : undefined;

  if (chatId && clientState) {
    ctx.reply("Пожалуйста, загрузите документы для перевода.");
  }
});

// Добавьте обработку загрузки документов и остальные шаги сценария

// Запустите бот
bot.launch().then(() => {
  console.log("Bot has been started");
});
