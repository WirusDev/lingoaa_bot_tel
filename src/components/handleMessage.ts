import { bot, Markup } from "./bot_and_session";
import { sendDocumentsViaEmail } from "./handleDocUpload";
import { languageArray } from "../data/routers";
import { botMessages } from "../data/reply";
import { match } from "assert";

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
    if (ctx.session === undefined) {
      ctx.reply(`Session is  undefined, please press /start`, {
        reply_markup: {
          keyboard: [["/start"]],
          resize_keyboard: true,
          one_time_keyboard: true,
        },
      });
      return;
    }
    const anliegen = ctx.session.anliegen;
    const userResponse = ctx.message.text;
    // Check if the user's response is to upload documents and if the user has uploaded documents
    if (anliegen === "uploadDocuments") {
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
    } else {
      ctx.reply("Please choose from the provided options.");
    }
  });
};

const handleCallbackQuerry = async () => {
  bot.action(/.*/, async (ctx) => {
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
    const userCallBack = ctx.match[0]; // Getting the data from the callback query
    // Check if the user's response is a language
    if (languageArray.includes(userCallBack)) {
      ctx.session.language = userCallBack; // Storing the selected language in the session
      await ctx.answerCbQuery(`Language set to ${userCallBack}.`); // Optionally notify the user about their choice
      await ctx.reply(
        getAnswer(userCallBack, botMessages).welcomeMessage,
        Markup.inlineKeyboard([
          [
            Markup.button.callback("translationNeeded", "translationNeeded"),
            Markup.button.callback(
              "interpretationNeeded",
              "interpretationNeeded"
            ),
          ],
        ])
      ); // Reply to the user confirming their selection
      return;
    }

    if (userCallBack === "translationNeeded") {
      ctx.session.anliegen = "translationNeeded";
      //await ctx.reply(getAnswer(ctx.session.language, botMessages).translateTo);
      await ctx.reply("anliegen set to translationNeeded");
      return;
    }
    if (userCallBack === "interpretationNeeded") {
      ctx.session.anliegen = "interpretationNeeded";
      await ctx.reply("anliegen set to interpretationNeeded");
      console.log(ctx.session);

      return;
    } else {
      ctx.reply("Please choose from the provided options.!");
    }
  });
};

export { handleUserResponse, getAnswer, handleCallbackQuerry };
