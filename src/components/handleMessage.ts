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

    const useLater = Markup.inlineKeyboard([
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
    ]);

    const interpritationLanguageKeyboard = Markup.inlineKeyboard(
      getAnswer(ctx.session?.language).LanguageArray.reduce(
        (accumulator: any[], currentValue: string, index: number) => {
          if (index % 2 === 0) {
            accumulator.push([
              Markup.button.callback(currentValue, `${currentValue}:fromLang`),
            ]);
          } else {
            accumulator[accumulator.length - 1].push(
              Markup.button.callback(currentValue, `${currentValue}:fromLang`)
            );
          }
          return accumulator;
        },
        []
      ),
      { columns: 2 } // Указываем количество колонок в клавиатуреww
    );

    const userCallBack = ctx.match[0];

    // Getting the data from the callback query
    const [language, aditionalOption] = userCallBack
      .split(":")
      .map((part) => part.trim());
    //console.log("Language selected: ", language);

    if (aditionalOption === "chatLang") {
      if (languageArray.includes(language)) {
        ctx.session.language = language; // Storing the selected language in the session
        console.log("Language selected:", ctx.session.language);

        await ctx.reply(
          getAnswer(language).translateFrom,
          interpritationLanguageKeyboard
        ); // Reply to the user confirming their selection
        console.log(ctx.session?.language);
        return;
      }
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
