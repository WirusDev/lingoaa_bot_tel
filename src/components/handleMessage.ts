import { bot } from "./bot_and_session";
import { sendDocumentsViaEmail } from "./handleDocUpload";
import { languageArray } from "../data/routers";
import { botMessages } from "../data/reply";

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

// Handle user's response to uploading more documents
const handleUserResponse = async () => {
  bot.on("text", (ctx) => {
    const userResponse = ctx.message.text;
    if (userResponse === "Yes") {
      // If the user wants to upload more, continue the conversation
      ctx.reply("Please upload the next document.");
    } else if (userResponse === "No") {
      // If the user doesn't want to upload more, send the collected documents via email
      sendDocumentsViaEmail(ctx);
    } else {
      // If the user's response is neither "Yes" nor "No", ask them to choose from the provided options
      ctx.reply("Please choose from the provided options.");
    }
  });
};

const handleCallbackQuerry = async () => {
  bot.action(/.*/, async (ctx) => {
    // Assuming you want to set the selected language in the user's session and reply with a confirmation
    const language = ctx.match[0]; // Getting the data from the callback query

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

    ctx.session.language = language; // Storing the selected language in the session

    await ctx.answerCbQuery(`Language set to ${language}.`); // Optionally notify the user about their choice

    await ctx.reply(getAnswer(language, botMessages).welcomeMessage); // Reply to the user confirming their selection
  });
};

export { handleUserResponse, getAnswer, handleCallbackQuerry };
