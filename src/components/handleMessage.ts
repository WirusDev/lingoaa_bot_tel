import { bot, Markup } from "./bot_and_session";
import { sendDocumentsViaEmail } from "./handleDocUpload";
import {
  getAnswer,
  languageArray,
  interpritationLanguageKeyboard,
  interpritationLanguageKeyboardTo,
} from "../data/reply";
import { get } from "http";

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

// const interpritationLanguageKeyboard = (lang: string) => {
//   return Markup.inlineKeyboard(
//     getAnswer(lang).LanguageArray.reduce(
//       (accumulator: any[], currentValue: string, index: number) => {
//         if (index % 2 === 0) {
//           accumulator.push([
//             Markup.button.callback(currentValue, `${currentValue}:fromLang`),
//           ]);
//         } else {
//           accumulator[accumulator.length - 1].push(
//             Markup.button.callback(currentValue, `${currentValue}:fromLang`)
//           );
//         }
//         return accumulator;
//       },
//       []
//     ),
//     { columns: 2 } // Указываем количество колонок в клавиатуреww
//   );
// };

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

    // Getting the data from the callback query
    const splitCallback = userCallBack.split(":");
    const languageCallback = splitCallback[0].trim();
    var aditionalOption =
      splitCallback.length > 1 ? splitCallback[1].trim() : "else";

    await ctx.answerCbQuery(`You selected ${languageCallback}`);

    const answer = getAnswer(languageCallback);
    if (!answer || !answer.LanguageArray) {
      // Handle error
      console.log("Language not found ERROR:", languageCallback);
      return;
    }

    // const languageArray = answer.LanguageArray;
    // console.log("NEW Language Array:", languageArray) ;

    if (
      aditionalOption === "chatLang" &&
      languageArray.includes(languageCallback)
    ) {
      ctx.session.language = languageCallback; // Storing the selected language in the session
      console.log("Language selected:", ctx.session.language);

      await ctx.reply(
        getAnswer(languageCallback).translateFrom,
        interpritationLanguageKeyboard(languageCallback)
      ); // Reply to the user confirming their selection
      //console.log(ctx.session?.language);
      aditionalOption = "";
      return;
    } else if (aditionalOption === "fromLang") {
      ctx.session.languageFrom = languageCallback;
      console.log("LanguageFrom selected:", ctx.session.languageFrom);
      ctx.reply(
        getAnswer(ctx.session?.language).translateTo,
        interpritationLanguageKeyboardTo(ctx.session?.language)
      );
      aditionalOption = "";
      return;
    } else if (aditionalOption === "toLang") {
      ctx.session.languageTo = languageCallback;
      console.log("LanguageTo selected:", ctx.session.languageTo);
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
      return;
    } else {
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
          ctx.reply(getAnswer(ctx.session?.language).interpretationNeededYes);
          break;

        case "callUs":
          ctx.reply(
            getAnswer(ctx.session?.language).callUsYes,
            Markup.inlineKeyboard([
              Markup.button.url("Call us!", "https://lingoaa.com/kontakt/"),
            ])
          );
          break;

        case "yesUploadMoreDocs":
          ctx.reply(getAnswer(ctx.session?.language).uploadNextDocument);
          break;

        case "noUploadMoreDocs":
          sendDocumentsViaEmail(ctx);
          break;

        default:
          ctx.reply(
            getAnswer(ctx.session?.language).selectFromOptions + "FROM SWITCH"
          );
          break;
      }
      return;
    }
  });
};
// Check if the user's response is to upload documents and if the user has uploaded documents

export { handleUserResponse, handleCallbackQuerry };
