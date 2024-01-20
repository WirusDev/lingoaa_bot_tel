import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import { Message } from 'node-telegram-bot-api';
const TelegramBot = require('node-telegram-bot-api');
const app = express();
const port = 3000;

// Подключение к базе данных MongoDB (замените URL и dbName на свои)
mongoose.connect('mongodb://localhost:27017/dbName');

// Определение схемы и модели для заявок
const requestSchema = new mongoose.Schema({
  userId: String,
  language: String,
  documents: String,
  status: String,
}, { timestamps: true });

const Request = mongoose.model('Request', requestSchema);

// Настройка Telegram бота
const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg: Message) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Пожалуйста, выберите ваш язык:', {
    reply_markup: {
      keyboard: [['Deutsch', 'English', 'Español']],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});

bot.onText(/(Deutsch|English|Español)/, (msg: Message) => {
  const chatId = msg.chat.id;
  const userId = msg.from?.id.toString();
  const language = msg.text;

  bot.sendMessage(chatId, 'Добрый день! Чем мы можем вам помочь? Вам нужен перевод или устный перевод?');

  // Создание новой заявки
  const newRequest = new Request({
    userId,
    language,
    documents: '',
    status: 'pending',
  });

  newRequest.save();
});

// Добавьте логику для следующих шагов диалога и обработку заявок

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
