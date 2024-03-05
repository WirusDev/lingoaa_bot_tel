import { Context, session, Telegraf, Markup } from "telegraf";

require("dotenv").config();

interface SessionData {
  chatId: number;
  language: string;
  userName: string;
  firstName: string;
  lastName: string;
  anliegen: string;
  languageFrom: string;
  languageTo: string;
  art: string;
  eMail: string;
  doWeNeedEmail: boolean;
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

export {
  bot,
  TELEGRAM_TOKEN,
  EMAIL_USERNAME,
  EMAIL_PASSWORD,
  EMAIL_HOST,
  Markup,
};
