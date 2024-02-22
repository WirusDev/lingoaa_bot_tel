const botMessages = {
  en: {
    greeting: "Please select your language: Deutsch, English, Español...",
    languageSelected: "Deutsch",
    welcomeMessage:
      "Good day! How can we assist you? Do you need translation or interpretation?",
    translationNeeded: "I need translation.",
    translationNeededYes: "Would you like to fill out the form or call us?",
    callUs: "I would like to call you.",
    callUsYes:
      "Press the button to call us. Or tip the Nummber: +49 30 2359 666 80",
    fillOutForm: "I would like to fill out the form.",
    fillOutFormYes: "Press the button to fill out the form.",
    interpretationNeeded: "I need interpretation.",
    interpretationNeededYes: "Please send us your Documents.",
    selectFromOptions:
      "Please choose from the provided options.(From bot Relply)",
    SessionUndefined: "Session is  undefined, please press /start",
    startOver: "Please press /start to start over.",
    translateFrom: "Which language do you need the translation from?",
    translateTo: "Which language do you need the translation to?",
    certifiedNeeded: "Does the translation need to be certified?",
    certifiedYes: "Yes, please, certified translation.",
    uploadDocuments: "Please upload the documents for translation.",
    documentsUploaded:
      "Document uploaded successfully. Do you want to upload more documents?",
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
    error: "Please select your language! Press on /start ",
  },
  ru: {
    greeting: "Пожалуйста, выберите ваш язык: Deutsch, English, Español...",
    languageSelected: "Deutsch",
    welcomeMessage:
      "Добрый день! Чем мы можем вам помочь? Вам нужен перевод или интерпретация?",
    translationNeeded: "Мне нужен перевод.",
    translationNeededYes: "Хотели бы вы заполнить форму или позвонить нам?",
    callUs: "Я бы хотел позвонить вам.",
    callUsYes:
      "Нажмите кнопку, чтобы позвонить нам. Или наберите номер: +49 30 2359 666 80",
    fillOutForm: "Я хочу заполнить форму.",
    fillOutFormYes: "Нажмите кнопку, чтобы заполнить форму.",
    interpretationNeeded: "Мне нужна интерпретация.",
    interpretationNeededYes: "Пожалуйста, отправьте нам ваши документы.",
    selectFromOptions:
      "Пожалуйста, выберите из предоставленных вариантов. (Ответ от бота)",
    SessionUndefined: "Сессия не определена, пожалуйста, нажмите /start",
    startOver: "Пожалуйста, нажмите /start, чтобы начать сначала.",
    translateFrom: "С какого языка вам нужен перевод?",
    translateTo: "На какой язык вам нужен перевод?",
    certifiedNeeded: "Нужен ли сертифицированный перевод?",
    certifiedYes: "Да, пожалуйста, сертифицированный перевод.",
    uploadDocuments: "Пожалуйста, загрузите документы для перевода.",
    documentsUploaded:
      "Документ успешно загружен. Хотите загрузить еще документы?",
    checkingDocuments:
      "Спасибо, мы проверим ваши документы и свяжемся с вами в течение 30 минут.",
    priceOffer:
      "Ваше предложение по цене: экспресс-доставка - 200 евро, стандартная доставка - 150 евро. Пожалуйста, выберите.",
    standardDeliveryChosen: "Я выбираю стандартную доставку.",
    paymentInstructions:
      "Спасибо за ваш выбор. Пожалуйста, переведите сумму в 150 евро на следующий банковский счет: [Банковские реквизиты]",
    orderConfirmation:
      "Спасибо за размещение заказа. Пожалуйста, отправьте нам ваше полное имя и адрес для доставки.",
    language: "Ваш язык: ",
    messages: "Сообщения: ",
    error: "Пожалуйста, выберите ваш язык! Нажмите на /start ",
  },
};

const languageArray = ["🇺🇸 English", "🇺🇸 Russian"];

const getAnswer = (language: string) => {
  const data = botMessages;
  switch (language) {
    case "🇺🇸 English":
      return data.en;
      break;
    case "🇺🇸 Russian":
      return data.ru;
      break;
    default:
      console.log("Language not found");
      return data.en;
      break;
  }
};

export { botMessages, getAnswer, languageArray };
