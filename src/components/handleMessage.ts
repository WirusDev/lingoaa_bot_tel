import { bot, Markup } from "./bot_and_session";
import { sendDocumentsViaEmail } from "./handleDocUpload";
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

    const userCallBack = ctx.match[0];

    // Getting the data from the callback query
    if (languageArray.includes(userCallBack)) {
      ctx.session.language = userCallBack; // Storing the selected language in the session
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

    switch (userCallBack) {
      case "translationNeeded":
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
        break; //------------------------------------------>

      case "interpretationNeeded":
        ctx.session.anliegen = "interpretationNeeded";
        ctx.reply(getAnswer(ctx.session?.language).interpretationNeededYes);
        break; //------------------------------------------>

      case "callUs":
        ctx.reply(
          getAnswer(ctx.session?.language).callUsYes,
          Markup.inlineKeyboard([
            Markup.button.url("Call us!", "https://lingoaa.com/kontakt/"),
          ])
        );
        break; //------------------------------------------>

      case "yesUploadMoreDocs":
        ctx.reply(getAnswer(ctx.session?.language).uploadNextDocument);
        break; //------------------------------------------>

      case "noUploadMoreDocs":
        sendDocumentsViaEmail(ctx);
        break; //------------------------------------------>

      default:
        ctx.reply(getAnswer(ctx.session?.language).selectFromOptions);
        break;
    }
  });
};
// Check if the user's response is to upload documents and if the user has uploaded documents

export { handleUserResponse, handleCallbackQuerry };
