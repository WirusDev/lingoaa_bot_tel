import { bot, Markup } from "./bot_and_session";
import { sendDocumentsViaEmail } from "./handleDocUpload";
//import { languageArray } from "../data/routers";
import { getAnswer, languageArray } from "../data/reply";

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
    if (anliegen === "interpretationNeeded") {
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
      ctx.reply(getAnswer(ctx.session?.language).selectFromOptions);
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
        getAnswer(userCallBack).welcomeMessage,
        Markup.inlineKeyboard([
          [
            Markup.button.callback(
              getAnswer(ctx.session?.language).translationNeeded,
              "translationNeeded"
            ),
            Markup.button.callback(
              getAnswer(ctx.session?.language).interpretationNeeded,
              "interpretationNeeded"
            ),
          ],
        ])
      ); // Reply to the user confirming their selection
      return;
    }
    if (userCallBack === "translationNeeded") {
      ctx.session.anliegen = "translationNeeded";
      await ctx.reply(
        getAnswer(ctx.session?.language).translationNeededYes,
        Markup.inlineKeyboard([
          [
            Markup.button.callback(
              getAnswer(ctx.session?.language).callUs,
              "callUs"
            ),
            Markup.button.callback(
              getAnswer(ctx.session?.language).fillOutForm,
              "fillOutForm"
            ),
          ],
        ])
      );
      return;
    }
    if (userCallBack === "callUs") {
      ctx.reply(
        getAnswer(ctx.session?.language).callUsYes,
        Markup.inlineKeyboard([
          Markup.button.url("Call us!", "https://lingoaa.com/kontakt/"),
        ])
      );

      return;
    }
    if (userCallBack === "interpretationNeeded") {
      ctx.session.anliegen = "interpretationNeeded";
      ctx.reply(getAnswer(ctx.session?.language).interpretationNeededYes);
      return;
    } else {
      ctx.reply(getAnswer(ctx.session?.language).selectFromOptions);
    }
  });
};

export { handleUserResponse, getAnswer, handleCallbackQuerry };
