import axios from "axios";
import nodemailer from "nodemailer";
import {
  bot,
  TELEGRAM_TOKEN,
  EMAIL_USERNAME,
  EMAIL_PASSWORD,
  EMAIL_HOST,
  Markup,
} from "./bot_and_session";
import { getAnswer, startOver } from "../data/reply";

// Store uploaded documents in an array
let uploadedDocuments: any = [];

// Handle document uploads
const handleDocUpload = async () => {
  bot.on("document", async (ctx) => {
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

    if (ctx.session?.anliegen !== "interpretationNeeded") {
      ctx.reply(
        getAnswer(ctx.session?.language).selectFromOptions,
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
      );
      return;
    }

    // Get the document uploaded by the user
    const document = ctx.message.document;
    const fileId = document.file_id;

    // Get the file path from Telegram
    const fileDetails = await ctx.telegram.getFile(fileId);
    const fileUrl = `https://api.telegram.org/file/bot${TELEGRAM_TOKEN}/${fileDetails.file_path}`;

    // Download the file
    const response = await axios.get(fileUrl, {
      responseType: "stream",
    });

    // Push the document into the array
    uploadedDocuments.push({
      filename: document.file_name,
      content: response.data,
    });

    // Ask if the customer wants to upload more documents
    ctx.reply(
      getAnswer(ctx.session?.language).documentsUploaded,
      Markup.inlineKeyboard([
        [
          Markup.button.callback(
            getAnswer(ctx.session?.language).yes,
            "yesUploadMoreDocs"
          ),
          Markup.button.callback(
            getAnswer(ctx.session?.language).no,
            "noUploadMoreDocs"
          ),
        ],
      ])
    );
  });

  bot.on("photo", async (ctx) => {
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

    if (ctx.session?.anliegen !== "interpretationNeeded") {
      ctx.reply(
        getAnswer(ctx.session?.language).selectFromOptions,
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
      );
      return;
    }

    // Get the photo uploaded by the user
    const photo = ctx.message.photo;
    const fileId = photo[photo.length - 1].file_id;

    // Get the file path from Telegram
    const fileDetails = await ctx.telegram.getFile(fileId);
    const fileUrl = `https://api.telegram.org/file/bot${TELEGRAM_TOKEN}/${fileDetails.file_path}`;

    // Download the file
    const response = await axios.get(fileUrl, {
      responseType: "stream",
    });

    // Push the document into the array
    uploadedDocuments.push({
      filename: `${fileId}.jpg`,
      content: response.data,
    });

    // Ask if the customer wants to upload more documents
    ctx.reply(
      getAnswer(ctx.session?.language).documentsUploaded,
      Markup.inlineKeyboard([
        [
          Markup.button.callback(
            getAnswer(ctx.session?.language).yes,
            "yesUploadMoreDocs"
          ),
          Markup.button.callback(
            getAnswer(ctx.session?.language).no,
            "noUploadMoreDocs"
          ),
        ],
      ])
    );
  });
};

// Function to send the collected documents via email
const sendDocumentsViaEmail = async (ctx: any) => {
  // Create transporter
  const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: EMAIL_USERNAME,
      pass: EMAIL_PASSWORD,
    },
  });

  // Compose email
  const mailOptions = {
    from: EMAIL_USERNAME,
    to: "zlarin63@gmail.com", // Replace with recipient's email address
    subject: "Documents from Telegram",
    html: `
      <h1>Nachricht vom Telegram BOT</h1>
      <p>Telegram-Link: https://t.me/${ctx.session?.userName} (Für Antworten)</p>
      <p>E-Mail: ${ctx.session?.eMail}</p>
      <p>Anliegen: ${ctx.session?.anliegen}</p>
      <p>${ctx.session?.art}</p>
      <p>Übersetzung von ${ctx.session?.languageFrom} auf ${ctx.session?.languageTo}</p>
    `,
    attachments: uploadedDocuments,
  };

  // Send email
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  // Clear the uploaded documents array for future use
  uploadedDocuments = [];

  // Inform the user that the documents have been sent via email
  ctx.reply(
    getAnswer(ctx.session?.language).checkingDocuments,
    Markup.inlineKeyboard([startOver(ctx.session?.language)])
  );
};

export { handleDocUpload, sendDocumentsViaEmail };
