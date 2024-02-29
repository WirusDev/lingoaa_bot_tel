import { Markup } from "../components/bot_and_session";

const botMessages = {
  de: {
    greeting: "Bitte wählen Sie Ihre Sprache: Deutsch, Englisch, Spanisch...",
    languageSelected: "Deutsch",
    welcomeMessage:
      "Guten Tag! Wie können wir Ihnen helfen? Benötigen Sie eine Übersetzung oder Interpretation?",
    translationNeeded: "Ich brauche eine Übersetzung.",
    translationNeededYes:
      "Möchten Sie das Formular ausfüllen oder uns anrufen?",
    callUs: "Ich möchte Sie anrufen.",
    callUsYes:
      "Drücken Sie die Taste, um uns anzurufen. Oder geben Sie die Nummer ein: +49 30 2359 666 80",
    fillOutForm: "Ich möchte das Formular ausfüllen.",
    fillOutFormYes: "Drücken Sie die Taste, um das Formular auszufüllen.",
    interpretationNeeded: "Ich benötige eine Interpretation.",
    interpretationNeededYes: "Bitte senden Sie uns Ihre Dokumente.",
    selectFromOptions:
      "Bitte wählen Sie aus den bereitgestellten Optionen. (Antwort vom Bot)",
    yes: "Ja",
    no: "Nein",
    SessionUndefined: "Sitzung ist nicht definiert, bitte drücken Sie /start",
    startOver: "Bitte drücken Sie /start, um von vorne zu beginnen.",
    translateFrom: "Aus welcher Sprache benötigen Sie die Übersetzung?",
    translateTo: "In welche Sprache benötigen Sie die Übersetzung?",
    certifiedNeeded: "Muss die Übersetzung beglaubigt werden?",
    certifiedYes: "Ja, bitte, beglaubigte Übersetzung.",
    uploadDocuments: "Bitte laden Sie die Dokumente zur Übersetzung hoch.",
    documentsUploaded:
      "Dokument erfolgreich hochgeladen. Möchten Sie weitere Dokumente hochladen?",
    checkingDocuments:
      "Vielen Dank, wir werden Ihre Dokumente überprüfen und uns innerhalb von 30 Minuten bei Ihnen melden.",
    priceOffer:
      "Ihr Preisangebot: Expresslieferung - 200 Euro, Standardlieferung - 150 Euro. Bitte wählen Sie.",
    standardDeliveryChosen: "Ich wähle die Standardlieferung.",
    paymentInstructions:
      "Vielen Dank für Ihre Wahl. Bitte überweisen Sie den Betrag von 150 Euro auf das folgende Bankkonto: [Bankdaten]",
    orderConfirmation:
      "Vielen Dank für Ihre Bestellung. Bitte senden Sie uns Ihren vollständigen Namen und Ihre Adresse für die Lieferung.",
    language: "Ihre Sprache: ",
    messages: "Nachrichten: ",
    documentSentViaEmail: "Dokumente per E-Mail gesendet.",
    uploadNextDocument: "Bitte laden Sie das nächste Dokument hoch.",
    error: "Bitte wählen Sie Ihre Sprache aus! Drücken Sie /start ",
    LanguageArray: [
      "🇩🇪 Deutsch",
      "🇬🇧 Englisch",
      "🇺🇦 Ukrainisch",
      "🇷🇺 Russisch",
      "🇹🇷 Türkisch",
      "🇸🇦 Arabisch",
      "🇮🇷 Persisch",
      "🇫🇷 Französisch",
      "🇪🇸 Spanisch",
      "🇷🇴 Rumänisch",
      "🇮🇹 Italienisch",
    ],
  },
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
    yes: "Yes",
    no: "No",
    SessionUndefined: "Session is undefined, please press /start",
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
    documentSentViaEmail: "Documents sent via email.",
    uploadNextDocument: "Please upload the next document.",
    error: "Please select your language! Press on /start ",
    LanguageArray: [
      "🇩🇪 German",
      "🇬🇧 English",
      "🇺🇦 Ukrainian",
      "🇷🇺 Russian",
      "🇹🇷 Turkish",
      "🇸🇦 Arabic",
      "🇮🇷 Persian",
      "🇫🇷 French",
      "🇪🇸 Spanish",
      "🇷🇴 Romanian",
      "🇮🇹 Italian",
    ],
  },
  ua: {
    greeting:
      "Будь ласка, виберіть свою мову: Німецька, Англійська, Іспанська...",
    languageSelected: "Німецька",
    welcomeMessage:
      "Добрий день! Як ми можемо вам допомогти? Вам потрібен переклад або інтерпретація?",
    translationNeeded: "Мені потрібен переклад.",
    translationNeededYes: "Хочете заповнити форму або зателефонувати нам?",
    callUs: "Я б хотів зателефонувати вам.",
    callUsYes:
      "Натисніть кнопку, щоб зателефонувати нам. Або введіть номер: +49 30 2359 666 80",
    fillOutForm: "Я хочу заповнити форму.",
    fillOutFormYes: "Натисніть кнопку, щоб заповнити форму.",
    interpretationNeeded: "Мені потрібна інтерпретація.",
    interpretationNeededYes: "Будь ласка, надішліть нам ваші документи.",
    selectFromOptions:
      "Будь ласка, виберіть з наданих варіантів. (Відповідь від бота)",
    yes: "Так",
    no: "Ні",
    SessionUndefined: "Сесія не визначена, будь ласка, натисніть /start",
    startOver: "Будь ласка, натисніть /start, щоб почати спочатку.",
    translateFrom: "З якої мови вам потрібен переклад?",
    translateTo: "На яку мову вам потрібен переклад?",
    certifiedNeeded: "Чи потрібен переклад сертифікований?",
    certifiedYes: "Так, будь ласка, сертифікований переклад.",
    uploadDocuments: "Будь ласка, завантажте документи для перекладу.",
    documentsUploaded:
      "Документ успішно завантажений. Хочете завантажити ще документи?",
    checkingDocuments:
      "Дякуємо, ми перевіримо ваші документи і зв'яжемося з вами протягом 30 хвилин.",
    priceOffer:
      "Ваша пропозиція ціни: експрес-доставка - 200 євро, стандартна доставка - 150 євро. Будь ласка, виберіть.",
    standardDeliveryChosen: "Я вибираю стандартну доставку.",
    paymentInstructions:
      "Дякуємо за ваш вибір. Будь ласка, перекажіть суму в 150 євро наступному банківському рахунку: [Банківські реквізити]",
    orderConfirmation:
      "Дякуємо за розміщення замовлення. Будь ласка, надішліть нам ваше повне ім'я та адресу для доставки.",
    language: "Ваша мова: ",
    messages: "Повідомлення: ",
    documentSentViaEmail: "Документи відправлені електронною поштою.",
    uploadNextDocument: "Будь ласка, завантажте наступний документ.",
    error: "Будь ласка, виберіть свою мову! Натисніть /start ",
    LanguageArray: [
      "🇩🇪 Німецька",
      "🇬🇧 Англійська",
      "🇺🇦 Українська",
      "🇷🇺 Російська",
      "🇹🇷 Турецька",
      "🇸🇦 Арабська",
      "🇮🇷 Перська",
      "🇫🇷 Французька",
      "🇪🇸 Іспанська",
      "🇷🇴 Румунська",
      "🇮🇹 Італійська",
    ],
  },
  ru: {
    greeting:
      "Пожалуйста, выберите ваш язык: Немецкий, Английский, Испанский...",
    languageSelected: "Немецкий",
    welcomeMessage:
      "Добрый день! Чем мы можем вам помочь? Вам нужен перевод или интерпретация?",
    translationNeeded: "Мне нужен перевод.",
    translationNeededYes: "Хотели бы вы заполнить форму или позвонить нам?",
    callUs: "Я бы хотел позвонить вам.",
    callUsYes:
      "Нажмите кнопку, чтобы позвонить нам. Или наберите номер: +49 30 2359 666 80",
    yes: "Да",
    no: "Нет",
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
    documentSentViaEmail: "Документы отправлены по электронной почте.",
    uploadNextDocument: "Пожалуйста, загрузите следующий документ.",
    error: "Пожалуйста, выберите ваш язык! Нажмите на /start ",
    LanguageArray: [
      "🇩🇪 Немецкий",
      "🇬🇧 Английский",
      "🇺🇦 Украинский",
      "🇷🇺 Русский",
      "🇹🇷 Турецкий",
      "🇸🇦 Арабский",
      "🇮🇷 Персидский",
      "🇫🇷 Французский",
      "🇪🇸 Испанский",
      "🇷🇴 Румынский",
      "🇮🇹 Итальянский",
    ],
  },
  tr: {
    greeting: "Lütfen dilinizi seçin: Almanca, İngilizce, İspanyolca...",
    languageSelected: "Almanca",
    welcomeMessage:
      "İyi günler! Nasıl yardımcı olabiliriz? Çeviri veya yorumlama yapmak istiyor musunuz?",
    translationNeeded: "Çeviriye ihtiyacım var.",
    translationNeededYes: "Formu doldurmak mı yoksa bizi aramak mı istersiniz?",
    callUs: "Sizi aramak istiyorum.",
    callUsYes:
      "Bizi aramak için düğmeye basın. Veya Numara: +49 30 2359 666 80 yazın",
    fillOutForm: "Formu doldurmak istiyorum.",
    fillOutFormYes: "Formu doldurmak için düğmeye basın.",
    interpretationNeeded: "Yorumlama ihtiyacım var.",
    interpretationNeededYes: "Lütfen bize belgelerinizi gönderin.",
    selectFromOptions:
      "Lütfen sunulan seçeneklerden birini seçin. (Bot Yanıtı)",
    yes: "Evet",
    no: "Hayır",
    SessionUndefined: "Oturum tanımsız, lütfen /start tuşuna basın",
    startOver: "Lütfen yeniden başlamak için /start tuşuna basın.",
    translateFrom: "Çeviri yapılacak dil hangisi?",
    translateTo: "Çeviri hangi dile yapılacak?",
    certifiedNeeded: "Çevirinin onaylanması mı gerekiyor?",
    certifiedYes: "Evet, lütfen onaylanmış çeviri.",
    uploadDocuments: "Lütfen çeviri için belgeleri yükleyin.",
    documentsUploaded:
      "Belge başarıyla yüklendi. Başka belge yüklemek ister misiniz?",
    checkingDocuments:
      "Teşekkür ederiz, belgelerinizi kontrol edeceğiz ve 30 dakika içinde sizinle iletişime geçeceğiz.",
    priceOffer:
      "Fiyat teklifiniz: express teslimat - 200 euro, standart teslimat - 150 euro. Lütfen seçin.",
    standardDeliveryChosen: "Standart teslimatı seçiyorum.",
    paymentInstructions:
      "Seçiminiz için teşekkür ederiz. Lütfen 150 euro tutarını aşağıdaki banka hesabına transfer edin: [Banka detayları]",
    orderConfirmation:
      "Siparişiniz için teşekkür ederiz. Lütfen teslimat için tam adınızı ve adresinizi bize gönderin.",
    language: "Diliniz: ",
    messages: "Mesajlar: ",
    documentSentViaEmail: "Belgeler e-posta ile gönderildi.",
    uploadNextDocument: "Lütfen bir sonraki belgeyi yükleyin.",
    error: "Lütfen dilinizi seçin! /start tuşuna basın ",
    LanguageArray: [
      "🇩🇪 Almanca",
      "🇬🇧 İngilizce",
      "🇺🇦 Ukraynaca",
      "🇷🇺 Rusça",
      "🇹🇷 Türkçe",
      "🇸🇦 Arapça",
      "🇮🇷 Farsça",
      "🇫🇷 Fransızca",
      "🇪🇸 İspanyolca",
      "🇷🇴 Rumence",
      "🇮🇹 İtalyanca",
    ],
  },
  ar: {
    greeting: "الرجاء اختيار لغتك: الألمانية، الإنجليزية، الإسبانية...",
    languageSelected: "الألمانية",
    welcomeMessage: "مرحبًا! كيف يمكننا مساعدتك؟ هل تحتاج إلى ترجمة أو تفسير؟",
    translationNeeded: "أحتاج ترجمة.",
    translationNeededYes: "هل ترغب في ملء النموذج أم الاتصال بنا؟",
    callUs: "أريد الاتصال بكم.",
    callUsYes: "اضغط على الزر للاتصال بنا. أو اكتب الرقم: +49 30 2359 666 80",
    fillOutForm: "أريد ملء النموذج.",
    fillOutFormYes: "اضغط على الزر لملء النموذج.",
    interpretationNeeded: "أحتاج تفسيرًا.",
    interpretationNeededYes: "يرجى إرسال لنا مستنداتك.",
    selectFromOptions: "الرجاء اختيار من الخيارات المقدمة. (الرد من الروبوت)",
    yes: "نعم",
    no: "لا",
    SessionUndefined: "الجلسة غير محددة، يرجى الضغط على /start",
    startOver: "الرجاء الضغط على /start للبدء من جديد.",
    translateFrom: "من أي لغة تحتاج إلى الترجمة؟",
    translateTo: "إلى أي لغة تحتاج إلى الترجمة؟",
    certifiedNeeded: "هل تحتاج الترجمة إلى شهادة؟",
    certifiedYes: "نعم، من فضلك، ترجمة معتمدة.",
    uploadDocuments: "الرجاء تحميل المستندات للترجمة.",
    documentsUploaded:
      "تم تحميل المستند بنجاح. هل تريد تحميل المزيد من المستندات؟",
    checkingDocuments:
      "شكرًا لك، سوف نقوم بفحص مستنداتك والاتصال بك في غضون 30 دقيقة.",
    priceOffer:
      "عرض السعر الخاص بك: توصيل سريع - 200 يورو، توصيل عادي - 150 يورو. الرجاء الاختيار.",
    standardDeliveryChosen: "أختار التوصيل العادي.",
    paymentInstructions:
      "شكرًا لاختيارك. الرجاء تحويل مبلغ 150 يورو إلى الحساب المصرفي التالي: [تفاصيل البنك]",
    orderConfirmation: "شكرًا لطلبك. الرجاء إرسال اسمك الكامل وعنوانك للتسليم.",
    language: "لغتك: ",
    messages: "رسائل: ",
    documentSentViaEmail: "تم إرسال المستندات عبر البريد الإلكتروني.",
    uploadNextDocument: "الرجاء تحميل المستند التالي.",
    error: "الرجاء اختيار لغتك! اضغط على /start ",
    LanguageArray: [
      "🇩🇪 ألمانية",
      "🇬🇧 إنجليزية",
      "🇺🇦 أوكرانية",
      "🇷🇺 روسية",
      "🇹🇷 تركية",
      "🇸🇦 عربية",
      "🇮🇷 فارسية",
      "🇫🇷 فرنسية",
      "🇪🇸 إسبانية",
      "🇷🇴 رومانية",
      "🇮🇹 إيطالية",
    ],
  },
  fa: {
    greeting: "لطفا زبان خود را انتخاب کنید: Deutsch، English، Español...",
    languageSelected: "Deutsch",
    welcomeMessage:
      "روز خوب! چگونه می‌توانیم به شما کمک کنیم؟ آیا نیاز به ترجمه یا تفسیر دارید؟",
    translationNeeded: "من به ترجمه نیاز دارم.",
    translationNeededYes: "آیا می‌خواهید فرم را پر کنید یا به ما زنگ بزنید؟",
    callUs: "می‌خواهم به شما زنگ بزنم.",
    callUsYes:
      "برای به ما زنگ بزنید دکمه را فشار دهید. یا شماره را وارد کنید: +49 30 2359 666 80",
    fillOutForm: "می‌خواهم فرم را پر کنم.",
    fillOutFormYes: "برای پر کردن فرم دکمه را فشار دهید.",
    interpretationNeeded: "من به تفسیر نیاز دارم.",
    interpretationNeededYes: "لطفاً سند‌های خود را برای ما ارسال کنید.",
    selectFromOptions:
      "لطفاً از گزینه‌های ارائه شده انتخاب کنید. (از پاسخ روبات)",
    yes: "بله",
    no: "خیر",
    SessionUndefined: "جلسه تعریف نشده است، لطفاً /start را فشار دهید",
    startOver: "لطفاً /start را برای شروع مجدد فشار دهید.",
    translateFrom: "از کدام زبان نیاز به ترجمه دارید؟",
    translateTo: "به کدام زبان نیاز به ترجمه دارید؟",
    certifiedNeeded: "آیا نیاز به ترجمه مدارک دارید؟",
    certifiedYes: "بله، لطفاً ترجمه گواهی شده.",
    uploadDocuments: "لطفاً سند‌ها را برای ترجمه آپلود کنید.",
    documentsUploaded:
      "سند با موفقیت بارگذاری شد. آیا می‌خواهید سند دیگری بارگذاری کنید؟",
    checkingDocuments:
      "سپاسگزاریم، ما سند‌های شما را بررسی خواهیم کرد و در عرض ۳۰ دقیقه با شما تماس خواهیم گرفت.",
    priceOffer:
      "پیشنهاد قیمت شما: ارسال اکسپرس - ۲۰۰ یورو، ارسال استاندارد - ۱۵۰ یورو. لطفاً انتخاب کنید.",
    standardDeliveryChosen: "من ارسال استاندارد را انتخاب می کنم.",
    paymentInstructions:
      "از انتخاب شما متشکریم. لطفاً مبلغ ۱۵۰ یورو را به حساب بانکی زیر واریز کنید: [جزئیات بانکی]",
    orderConfirmation:
      "از قرار دادن سفارش شما متشکریم. لطفاً نام و آدرس کامل خود را برای تحویل ارسال کنید.",
    language: "زبان شما: ",
    messages: "پیام‌ها: ",
    documentSentViaEmail: "سند از طریق ایمیل ارسال شد.",
    uploadNextDocument: "لطفا سند بعدی را بارگذاری کنید.",
    error: "لطفا زبان خود را انتخاب کنید! بر روی /start کلیک کنید ",
    LanguageArray: [
      "🇩🇪 آلمانی",
      "🇬🇧 انگلیسی",
      "🇺🇦 اوکراینی",
      "🇷🇺 روسی",
      "🇹🇷 ترکی",
      "🇸🇦 عربی",
      "🇮🇷 فارسی",
      "🇫🇷 فرانسوی",
      "🇪🇸 اسپانیایی",
      "🇷🇴 رومانیایی",
      "🇮🇹 ایتالیایی",
    ],
  },
  fr: {
    greeting:
      "Veuillez sélectionner votre langue : Deutsch, English, Español...",
    languageSelected: "Deutsch",
    welcomeMessage:
      "Bonjour ! Comment pouvons-nous vous aider ? Avez-vous besoin d'une traduction ou d'une interprétation ?",
    translationNeeded: "J'ai besoin d'une traduction.",
    translationNeededYes:
      "Souhaitez-vous remplir le formulaire ou nous appeler ?",
    callUs: "Je voudrais vous appeler.",
    callUsYes:
      "Appuyez sur le bouton pour nous appeler. Ou composez le numéro : +49 30 2359 666 80",
    fillOutForm: "Je voudrais remplir le formulaire.",
    fillOutFormYes: "Appuyez sur le bouton pour remplir le formulaire.",
    interpretationNeeded: "J'ai besoin d'une interprétation.",
    interpretationNeededYes: "Veuillez nous envoyer vos documents.",
    selectFromOptions:
      "Veuillez choisir parmi les options fournies. (De la réponse du bot)",
    yes: "Oui",
    no: "Non",
    SessionUndefined:
      "La session n'est pas définie, veuillez appuyer sur /start",
    startOver: "Veuillez appuyer sur /start pour recommencer.",
    translateFrom: "De quelle langue avez-vous besoin de la traduction ?",
    translateTo: "Dans quelle langue avez-vous besoin de la traduction ?",
    certifiedNeeded: "La traduction doit-elle être certifiée ?",
    certifiedYes: "Oui, s'il vous plaît, traduction certifiée.",
    uploadDocuments: "Veuillez télécharger les documents à traduire.",
    documentsUploaded:
      "Document téléchargé avec succès. Voulez-vous télécharger d'autres documents ?",
    checkingDocuments:
      "Merci, nous vérifierons vos documents et vous contacterons dans les 30 minutes.",
    priceOffer:
      "Votre offre de prix : livraison express - 200 euros, livraison standard - 150 euros. Veuillez choisir.",
    standardDeliveryChosen: "Je choisis la livraison standard.",
    paymentInstructions:
      "Merci pour votre choix. Veuillez transférer le montant de 150 euros sur le compte bancaire suivant : [Détails bancaires]",
    orderConfirmation:
      "Merci d'avoir passé votre commande. Veuillez nous envoyer votre nom complet et votre adresse pour la livraison.",
    language: "Votre langue : ",
    messages: "Messages : ",
    documentSentViaEmail: "Documents envoyés par e-mail.",
    uploadNextDocument: "Veuillez télécharger le document suivant.",
    error: "Veuillez sélectionner votre langue ! Appuyez sur /start ",
    LanguageArray: [
      "🇩🇪 Allemand",
      "🇬🇧 Anglais",
      "🇺🇦 Ukrainien",
      "🇷🇺 Russe",
      "🇹🇷 Turc",
      "🇸🇦 Arabe",
      "🇮🇷 Persan",
      "🇫🇷 Français",
      "🇪🇸 Espagnol",
      "🇷🇴 Roumain",
      "🇮🇹 Italien",
    ],
  },
  es: {
    greeting: "Por favor, seleccione su idioma: Deutsch, English, Español...",
    languageSelected: "Deutsch",
    welcomeMessage:
      "¡Buen día! ¿Cómo podemos ayudarte? ¿Necesitas traducción o interpretación?",
    translationNeeded: "Necesito traducción.",
    translationNeededYes: "¿Te gustaría llenar el formulario o llamarnos?",
    callUs: "Me gustaría llamarte.",
    callUsYes:
      "Presiona el botón para llamarnos. O escribe el número: +49 30 2359 666 80",
    fillOutForm: "Me gustaría llenar el formulario.",
    fillOutFormYes: "Presiona el botón para llenar el formulario.",
    interpretationNeeded: "Necesito interpretación.",
    interpretationNeededYes: "Por favor, envíanos tus documentos.",
    selectFromOptions:
      "Por favor, elige de las opciones proporcionadas. (Respuesta del bot)",
    yes: "Sí",
    no: "No",
    SessionUndefined: "La sesión no está definida, por favor presiona /start",
    startOver: "Por favor, presiona /start para empezar de nuevo.",
    translateFrom: "¿Desde qué idioma necesitas la traducción?",
    translateTo: "¿A qué idioma necesitas la traducción?",
    certifiedNeeded: "¿La traducción necesita estar certificada?",
    certifiedYes: "Sí, por favor, traducción certificada.",
    uploadDocuments: "Por favor, carga los documentos para la traducción.",
    documentsUploaded:
      "Documento cargado exitosamente. ¿Quieres cargar más documentos?",
    checkingDocuments:
      "Gracias, revisaremos tus documentos y nos pondremos en contacto contigo en 30 minutos.",
    priceOffer:
      "Tu oferta de precio: entrega exprés - 200 euros, entrega estándar - 150 euros. Por favor, elige.",
    standardDeliveryChosen: "Elijo la entrega estándar.",
    paymentInstructions:
      "Gracias por tu elección. Por favor, transfiere la cantidad de 150 euros a la siguiente cuenta bancaria: [Detalles bancarios]",
    orderConfirmation:
      "Gracias por realizar tu pedido. Por favor, envíanos tu nombre completo y dirección para la entrega.",
    language: "Tu idioma: ",
    messages: "Mensajes: ",
    documentSentViaEmail: "Documentos enviados por correo electrónico.",
    uploadNextDocument: "Por favor, carga el siguiente documento.",
    error: "¡Por favor, selecciona tu idioma! Presiona /start ",
    LanguageArray: [
      "🇩🇪 Alemán",
      "🇬🇧 Inglés",
      "🇺🇦 Ucraniano",
      "🇷🇺 Ruso",
      "🇹🇷 Turco",
      "🇸🇦 Árabe",
      "🇮🇷 Persa",
      "🇫🇷 Francés",
      "🇪🇸 Español",
      "🇷🇴 Rumano",
      "🇮🇹 Italiano",
    ],
  },
  ro: {
    greeting: "Vă rugăm să selectați limba: Deutsch, English, Español...",
    languageSelected: "Deutsch",
    welcomeMessage:
      "Bună ziua! Cum vă putem ajuta? Aveți nevoie de traducere sau interpretare?",
    translationNeeded: "Am nevoie de traducere.",
    translationNeededYes: "Doriți să completați formularul sau să ne sunați?",
    callUs: "Aș dori să vă sun.",
    callUsYes:
      "Apăsați butonul pentru a ne suna. Sau introduceți numărul: +49 30 2359 666 80",
    fillOutForm: "Aș dori să completez formularul.",
    fillOutFormYes: "Apăsați butonul pentru a completa formularul.",
    interpretationNeeded: "Am nevoie de interpretare.",
    interpretationNeededYes: "Vă rugăm să ne trimiteți documentele.",
    selectFromOptions:
      "Vă rugăm să alegeți din opțiunile furnizate. (De la răspunsul botului)",
    yes: "Da",
    no: "Nu",
    SessionUndefined: "Sesiunea nu este definită, vă rugăm să apăsați /start",
    startOver: "Vă rugăm să apăsați /start pentru a începe din nou.",
    translateFrom: "Din ce limbă aveți nevoie de traducere?",
    translateTo: "În ce limbă aveți nevoie de traducere?",
    certifiedNeeded: "Traducerea trebuie să fie certificată?",
    certifiedYes: "Da, vă rog, traducere certificată.",
    uploadDocuments: "Vă rugăm să încărcați documentele pentru traducere.",
    documentsUploaded:
      "Document încărcat cu succes. Doriți să încărcați mai multe documente?",
    checkingDocuments:
      "Vă mulțumim, vom verifica documentele dvs. și vă vom contacta în 30 de minute.",
    priceOffer:
      "Oferta dvs. de preț: livrare expres - 200 euro, livrare standard - 150 euro. Vă rugăm să alegeți.",
    standardDeliveryChosen: "Aleg livrarea standard.",
    paymentInstructions:
      "Vă mulțumim pentru alegerea dvs. Vă rugăm să transferați suma de 150 de euro pe contul bancar următor: [Detalii bancare]",
    orderConfirmation:
      "Vă mulțumim pentru plasarea comenzii. Vă rugăm să ne trimiteți numele complet și adresa pentru livrare.",
    language: "Limba dvs.: ",
    messages: "Mesaje: ",
    documentSentViaEmail: "Documente trimise prin e-mail.",
    uploadNextDocument: "Vă rugăm să încărcați următorul document.",
    error: "Vă rugăm să selectați limba dvs.! Apăsați pe /start ",
    LanguageArray: [
      "🇩🇪 Germană",
      "🇬🇧 Engleză",
      "🇺🇦 Ucraineană",
      "🇷🇺 Rusă",
      "🇹🇷 Turcă",
      "🇸🇦 Arabă",
      "🇮🇷 Persană",
      "🇫🇷 Franceză",
      "🇪🇸 Spaniolă",
      "🇷🇴 Română",
      "🇮🇹 Italiană",
    ],
  },
  it: {
    greeting: "Si prega di selezionare la lingua: Deutsch, English, Español...",
    languageSelected: "Deutsch",
    welcomeMessage:
      "Buongiorno! Come possiamo aiutarti? Hai bisogno di traduzione o interpretazione?",
    translationNeeded: "Ho bisogno di traduzione.",
    translationNeededYes: "Desideri compilare il modulo o chiamarci?",
    callUs: "Vorrei chiamarti.",
    callUsYes:
      "Premi il pulsante per chiamarci. Oppure inserisci il numero: +49 30 2359 666 80",
    fillOutForm: "Vorrei compilare il modulo.",
    fillOutFormYes: "Premi il pulsante per compilare il modulo.",
    interpretationNeeded: "Ho bisogno di interpretazione.",
    interpretationNeededYes: "Per favore, inviaci i tuoi documenti.",
    selectFromOptions:
      "Si prega di scegliere dalle opzioni fornite. (Dalla risposta del bot)",
    yes: "Sì",
    no: "No",
    SessionUndefined: "La sessione non è definita, si prega di premere /start",
    startOver: "Si prega di premere /start per ricominciare.",
    translateFrom: "Da quale lingua hai bisogno della traduzione?",
    translateTo: "In quale lingua hai bisogno della traduzione?",
    certifiedNeeded: "La traduzione deve essere certificata?",
    certifiedYes: "Sì, per favore, traduzione certificata.",
    uploadDocuments: "Si prega di caricare i documenti da tradurre.",
    documentsUploaded:
      "Documento caricato con successo. Vuoi caricare altri documenti?",
    checkingDocuments:
      "Grazie, controlleremo i tuoi documenti e ti contatteremo entro 30 minuti.",
    priceOffer:
      "La tua offerta di prezzo: consegna express - 200 euro, consegna standard - 150 euro. Si prega di scegliere.",
    standardDeliveryChosen: "Scelgo la consegna standard.",
    paymentInstructions:
      "Grazie per la tua scelta. Si prega di trasferire l'importo di 150 euro sul seguente conto bancario: [Dettagli bancari]",
    orderConfirmation:
      "Grazie per aver effettuato l'ordine. Si prega di inviarci il tuo nome completo e indirizzo per la consegna.",
    language: "La tua lingua: ",
    messages: "Messaggi: ",
    documentSentViaEmail: "Documenti inviati via email.",
    uploadNextDocument: "Si prega di caricare il documento successivo.",
    error: "Si prega di selezionare la tua lingua! Premi /start ",
    LanguageArray: [
      "🇩🇪 Tedesco",
      "🇬🇧 Inglese",
      "🇺🇦 Ucraino",
      "🇷🇺 Russo",
      "🇹🇷 Turco",
      "🇸🇦 Arabo",
      "🇮🇷 Persiano",
      "🇫🇷 Francese",
      "🇪🇸 Spagnolo",
      "🇷🇴 Rumeno",
      "🇮🇹 Italiano",
    ],
  },
};

const languageArray = [
  "🇩🇪 German",
  "🇬🇧 English",
  "🇺🇦 Ukrainian",
  "🇷🇺 Russian",
  "🇹🇷 Turkish",
  "🇸🇦 Arabic",
  "🇮🇷 Persian",
  "🇫🇷 French",
  "🇪🇸 Spanish",
  "🇷🇴 Romanian",
  "🇮🇹 Italian",
];

const getAnswer = (language: string) => {
  const data = botMessages;
  switch (language) {
    case "🇩🇪 German":
      return data.de;
    case "🇬🇧 English":
      return data.en;
    case "🇺🇦 Ukrainian":
      return data.ua;
    case "🇷🇺 Russian":
      return data.ru;
    case "🇹🇷 Turkish":
      return data.tr;
    case "🇸🇦 Arabic":
      return data.ar;
    case "🇮🇷 Persian":
      return data.fa;
    case "🇫🇷 French":
      return data.fr;
    case "🇪🇸 Spanish":
      return data.es;
    case "🇷🇴 Romanian":
      return data.ro;
    case "🇮🇹 Italian":
      return data.it;
    default:
      console.log("Language not found:" + language);
      return data.en;
      break;
  }
};

const interpritationLanguageKeyboard = (lang: string) => {
  const indexOfLang = getAnswer(lang).LanguageArray.indexOf(lang);
  console.log("indexOfLang", indexOfLang);

  return Markup.inlineKeyboard(
    getAnswer(lang).LanguageArray.reduce(
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
};

const interpritationLanguageKeyboardTo = (lang: string) => {
  return Markup.inlineKeyboard(
    getAnswer(lang).LanguageArray.reduce(
      (accumulator: any[], currentValue: string, index: number) => {
        if (index % 2 === 0) {
          accumulator.push([
            Markup.button.callback(currentValue, `${currentValue}:toLang`),
          ]);
        } else {
          accumulator[accumulator.length - 1].push(
            Markup.button.callback(currentValue, `${currentValue}:toLang`)
          );
        }
        return accumulator;
      },
      []
    ),
    { columns: 2 } // Указываем количество колонок в клавиатуреww
  );
};

export {
  botMessages,
  getAnswer,
  languageArray,
  interpritationLanguageKeyboard,
  interpritationLanguageKeyboardTo,
};
