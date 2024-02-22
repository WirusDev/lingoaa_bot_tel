const botMessages = {
  none: { greeting: "Please select your language! Press on /start " },
  en: {
    greeting: "Please select your language: Deutsch, English, Español...",
    languageSelected: "Deutsch",
    welcomeMessage:
      "Good day! How can we assist you? Do you need translation or interpretation?",
    translationNeeded: "I need translation.",
    interpretationNeeded: "I need interpretation.",
    translateTo: "Which language do you need the translation to?",
    fromGermanToEnglish: "From German to English.",
    certifiedNeeded: "Does the translation need to be certified?",
    certifiedYes: "Yes, please, certified translation.",
    uploadDocuments: "Please upload the documents for translation.",
    documentsUploaded: "[Documents uploaded]",
    checkingDocuments:
      "Thank you, we will check your documents and contact you within 30 minutes.",
    priceOffer:
      "Your price offer: express delivery - 200 euros, standard delivery - 150 euros. Please choose.",
    standardDeliveryChosen: "I choose standard delivery.",
    paymentInstructions:
      "Thank you for your choice. Please transfer the amount of 150 euros to the following bank account: [Bank details]",
    orderConfirmation:
      "Thank you for placing your order. Please send us your full name and address for delivery.",
    language: "Your language: ",
    messages: "Messages: ",
  },
};

// const keyboard = Markup.inlineKeyboard([
//   [
//     Markup.button.callback("translationNeeded", "translationNeeded"),
//     Markup.button.callback("interpretationNeeded", "interpretationNeeded"),
//   ],
// ]);
export { botMessages };
