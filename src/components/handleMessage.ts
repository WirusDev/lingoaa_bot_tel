import { bot, Markup } from "./bot_and_session";
import { sendDocumentsViaEmail } from "./handleDocUpload";
import {
  getAnswer,
  interpritationLanguageKeyboard,
  startOver,
} from "../data/reply";

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
      //ctx.session = {}; // Initialize session with default values if needed
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

    // Getting the data from the callback query and splitting it
    const splitCallback = userCallBack.split(":");
    const languageCallback = splitCallback[0].trim();
    var aditionalOption =
      splitCallback.length > 1 ? splitCallback[1].trim() : "else";

    //console.log("Aditional Option:", aditionalOption);

    //await ctx.answerCbQuery(`You selected ${languageCallback}`);

    switch (aditionalOption) {
      case "chatLang":
        ctx.session.language = languageCallback; // Storing the selected language in the session
        console.log("Language selected:", ctx.session.language);

        await ctx.reply(
          getAnswer(languageCallback).translateFrom,
          interpritationLanguageKeyboard(languageCallback, "fromLang") // Show keyboard with languages to select from
        ); // Reply to the user confirming their selection
        //console.log(ctx.session?.language);
        aditionalOption = "";

        break;

      case "fromLang":
        ctx.session.languageFrom = languageCallback;
        console.log("LanguageFrom selected:", ctx.session.languageFrom);
        ctx.reply(
          getAnswer(ctx.session?.language).translateTo,
          interpritationLanguageKeyboard(ctx.session?.language, "toLang") // Show keyboard with languages to select to
        );
        aditionalOption = "";
        break;

      // If the user selects the language from "toLang" keyboard
      case "toLang":
        ctx.session.languageTo = languageCallback;
        console.log("LanguageTo selected:", ctx.session.languageTo);
        ctx.reply(
          "Is that correct? " +
            ctx.session?.languageFrom +
            "->" +
            ctx.session?.languageTo,
          Markup.inlineKeyboard([
            Markup.button.callback("Yes", "yesIsThatCorrect:isThatCorrect"),
            Markup.button.callback("No", ":editLang"),
          ])
        );
        // ctx.reply(
        //   getAnswer(ctx.session?.language).welcomeMessage,
        //   Markup.inlineKeyboard([
        //     Markup.button.callback(
        //       getAnswer(ctx.session?.language).translationNeeded,
        //       "translationNeeded"
        //     ),
        //     Markup.button.callback(
        //       getAnswer(ctx.session?.language).interpretationNeeded,
        //       "interpretationNeeded"
        //     ),
        //   ])
        // );
        aditionalOption = "";
        break;

      case "editLang":
        ctx.reply(
          getAnswer(ctx.session?.language).translateFrom,
          interpritationLanguageKeyboard(ctx.session?.language, "fromLang") // Show keyboard with languages to select to
        );
        aditionalOption = "";
        break;

      case "isThatCorrect":
        // ctx.reply(
        //   "Is that correct? " +
        //     ctx.session?.languageFrom +
        //     "->" +
        //     ctx.session?.languageTo,
        //   Markup.inlineKeyboard([
        //     Markup.button.callback("Yes", "yesIsThatCorrect"),
        //     Markup.button.callback("No", "noIsThatCorrect"),
        //   ])
        // );
        ctx.reply(
          getAnswer(ctx.session?.language).welcomeMessage,
          Markup.inlineKeyboard([
            Markup.button.callback(
              getAnswer(ctx.session?.language).translationNeeded,
              "translationNeeded"
            ),
            Markup.button.callback(
              getAnswer(ctx.session?.language).interpretationNeeded,
              "interpretationNeeded"
            ),
          ])
        );
        aditionalOption = "";
        break;

      case "else":
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
            break;

          case "interpretationNeeded":
            ctx.session.anliegen = "interpretationNeeded";
            ctx.session.doWeNeedEmaul = true;
            //ctx.reply(getAnswer(ctx.session?.language).interpretationNeededYes);
            ctx.reply("Please send us your E-Mail address");
            break;

          case "callUs":
            ctx.reply(
              getAnswer(ctx.session?.language).callUsYes,
              Markup.inlineKeyboard([
                Markup.button.url("Call us !", "https://lingoaa.com/kontakt/"),
              ])
            );
            break;

          case "fillOutForm":
            ctx.reply(
              getAnswer(ctx.session?.language).fillOutFormYes,
              Markup.inlineKeyboard([
                Markup.button.url(
                  "Fill out the form!",
                  "https://lingoaa.com/dolmetscher-anfragen/"
                ),
                startOver(),
              ])
            );
            break;
            break;

          case "yesUploadMoreDocs":
            ctx.reply(getAnswer(ctx.session?.language).uploadNextDocument);
            break;

          case "noUploadMoreDocs":
            sendDocumentsViaEmail(ctx);

            break;

          case "startOver":
            ctx.reply(`To start over please press /start`, {
              reply_markup: {
                keyboard: [["/start"]],
                resize_keyboard: true,
                one_time_keyboard: true,
              },
            });
            break;
          default:
            ctx.reply(
              getAnswer(ctx.session?.language).selectFromOptions + "FROM SWITCH"
            );
            break;
          // }
          // return;
        }
        break;
      default:
        ctx.reply(
          getAnswer(ctx.session?.language).selectFromOptions + "FROM SWITCH"
        );
        break;
    }
  });
};
// Check if the user's response is to upload documents and if the user has uploaded documents

export { handleUserResponse, handleCallbackQuerry };
