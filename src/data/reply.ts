import { Markup } from "../components/bot_and_session";

const botMessages = {
  de: {
    welcomeMessage:
      "Guten Tag! Womit können wir Ihnen helfen? Benötigen Sie einen Übersetzer oder die Übersetzung von Dokumenten?",
    translationNeeded: "Ich benötige einen Übersetzer 🗣️",
    interpretationNeeded: "Ich benötige die Übersetzung von Dokumenten. 📄",
    translationNeededYes:
      "Möchten Sie ein Formular ausfüllen oder uns anrufen?",
    callUs: "Ich möchte Sie anrufen. 📞",
    callUsYes:
      "Drücken Sie die Taste, um uns anzurufen. Oder wählen Sie die Nummer: +49 30 2359 666 80",
    yes: "Ja ✅",
    no: "Nein ❌",
    notarization: "Benötigen Sie eine notarielle Beglaubigung der Übersetzung?",
    fillOutForm: "Ich möchte ein Formular ausfüllen.",
    fillOutFormYes: "Drücken Sie die Taste, um das Formular auszufüllen.",
    interpretationNeededYes: "Bitte senden Sie uns Ihre Dokumente.",
    selectFromOptions:
      "Bitte wählen Sie aus den angegebenen Optionen aus. (Antwort vom Bot)",
    SessionUndefined: "Sitzung nicht definiert, bitte klicken Sie auf /start",
    startOver: "Bitte klicken Sie auf /start, um von vorne zu beginnen.",
    translateFrom: "Von welcher Sprache benötigen Sie die Übersetzung?",
    translateTo: "In welche Sprache benötigen Sie die Übersetzung?",
    certifiedNeeded: "Benötigen Sie eine zertifizierte Übersetzung?",
    certifiedYes: "Ja, bitte eine zertifizierte Übersetzung.",
    uploadDocuments: "Bitte laden Sie die Dokumente zur Übersetzung hoch.",
    documentsUploaded:
      "Dokument erfolgreich hochgeladen. Möchten Sie weitere Dokumente hochladen?",
    checkingDocuments:
      "Vielen Dank, wir werden Ihre Dokumente überprüfen und uns innerhalb von 30 Minuten bei Ihnen melden.",
    language: "Ihre Sprache: ",
    messages: "Nachrichten: ",
    correctQuestion: "Ist alles richtig?",
    sendEmail: "Bitte senden Sie uns Ihre E-Mail-Adresse.",
    emailSaved: "Ihre E-Mail-Adresse wurde erfolgreich gespeichert.",
    editEmail: "E-Mail-Adresse bearbeiten",
    eMailnotValid: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    continue: "Weiter",
    uploadNextDocument: "Bitte laden Sie das nächste Dokument hoch.",
    error: "❗️ Fehler ❗️ um neu zu starten, klicken Sie auf /start ",
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
    welcomeMessage:
      "Good day! How can we help you? Do you need a translator or translation of documents?",
    translationNeeded: "I need to order a translator 🗣️",
    interpretationNeeded: "I need translation of documents. 📄",
    translationNeededYes: "Would you like to fill out a form or call us?",
    callUs: "I would like to call you. 📞",
    callUsYes:
      "Press the button to call us. Or dial the number: +49 30 2359 666 80",
    yes: "Yes ✅",
    no: "No ❌",
    notarization: "Do you need notarization of the translation?",
    fillOutForm: "I want to fill out a form.",
    fillOutFormYes: "Press the button to fill out the form.",
    interpretationNeededYes: "Please send us your documents.",
    selectFromOptions:
      "Please select from the options provided. (Response from the bot)",
    SessionUndefined: "Session undefined, please click /start",
    startOver: "Please click /start to start over.",
    translateFrom: "From which language do you need translation?",
    translateTo: "To which language do you need translation?",
    certifiedNeeded: "Do you need a certified translation?",
    certifiedYes: "Yes, please a certified translation.",
    uploadDocuments: "Please upload documents for translation.",
    documentsUploaded:
      "Document successfully uploaded. Do you want to upload more documents?",
    checkingDocuments:
      "Thank you, we will check your documents and contact you within 30 minutes.",
    language: "Your language: ",
    messages: "Messages: ",
    correctQuestion: "Is everything correct?",
    sendEmail: "Please send us your email address.",
    emailSaved: "Your email address has been successfully saved.",
    editEmail: "Edit email address",
    eMailnotValid: "Please enter a valid email address.",
    continue: "Continue",
    uploadNextDocument: "Please upload the next document.",
    error: "❗️ Error ❗️ to restart, click on /start ",
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
    welcomeMessage:
      "Добрий день! Чим ми можемо вам допомогти? Вам потрібен перекладач або переклад документів?",
    translationNeeded: "Мені потрібно замовити перекладача 🗣️",
    interpretationNeeded: "Мені потрібен переклад документів. 📄",
    translationNeededYes:
      "Чи бажаєте ви заповнити форму або зателефонувати нам?",
    callUs: "Я б хотів вам зателефонувати. 📞",
    callUsYes:
      "Натисніть кнопку, щоб зателефонувати нам. Або наберіть номер: +49 30 2359 666 80",
    yes: "Так ✅",
    no: "Ні ❌",
    notarization: "Чи потрібно нотаріальне засвідчення перекладу?",
    fillOutForm: "Я хочу заповнити форму.",
    fillOutFormYes: "Натисніть кнопку, щоб заповнити форму.",
    interpretationNeededYes: "Будь ласка, надішліть нам ваші документи.",
    selectFromOptions:
      "Будь ласка, оберіть з наданих варіантів. (Відповідь від бота)",
    SessionUndefined: "Сесія не визначена, будь ласка, натисніть /start",
    startOver: "Будь ласка, натисніть /start, щоб почати спочатку.",
    translateFrom: "З якої мови вам потрібен переклад?",
    translateTo: "На яку мову вам потрібен переклад?",
    certifiedNeeded: "Чи потрібен сертифікований переклад?",
    certifiedYes: "Так, будь ласка, сертифікований переклад.",
    uploadDocuments: "Будь ласка, завантажте документи для перекладу.",
    documentsUploaded:
      "Документ успішно завантажено. Хочете завантажити ще документи?",
    checkingDocuments:
      "Дякуємо, ми перевіримо ваші документи і зв'яжемося з вами протягом 30 хвилин.",
    language: "Ваша мова: ",
    messages: "Повідомлення: ",
    correctQuestion: "Все правильно?",
    sendEmail: "Будь ласка, надішліть нам вашу адресу електронної пошти.",
    emailSaved: "Ваша адреса електронної пошти успішно збережена.",
    editEmail: "Редагувати адресу електронної пошти",
    eMailnotValid: "Будь ласка, введіть дійсну адресу електронної пошти.",
    continue: "Продовжити",
    uploadNextDocument: "Будь ласка, завантажте наступний документ.",
    error: "❗️ Помилка ❗️ для перезапуску натисніть /start ",
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
    welcomeMessage:
      "Добрый день! Чем мы можем вам помочь? Вам нужен переводчик или перевод документов?",
    translationNeeded: "Мне нужно заказать переводчика 🗣️",
    interpretationNeeded: "Мне нужен перевод документов. 📄",
    translationNeededYes: "Хотели бы вы заполнить форму или позвонить нам?",
    callUs: "Я бы хотел позвонить вам. 📞",
    callUsYes:
      "Нажмите кнопку, чтобы позвонить нам. Или наберите номер: +49 30 2359 666 80",
    yes: "Да ✅",
    no: "Нет ❌",
    notarization: "Нужна ли нотариальная заверка перевода?",
    fillOutForm: "Я хочу заполнить форму.",
    fillOutFormYes: "Нажмите кнопку, чтобы заполнить форму.",
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
    language: "Ваш язык: ",
    messages: "Сообщения: ",
    correctQuestion: "Все верно?",
    sendEmail: "Пожалуйста, отправьте нам ваш адрес электронной почты.",
    emailSaved: "Ваш адрес электронной почты успешно сохранен.",
    editEmail: "Изменить адрес электронной почты",
    eMailnotValid:
      "Пожалуйста, введите действительный адрес электронной почты.",
    continue: "Продолжить",
    uploadNextDocument: "Пожалуйста, загрузите следующий документ.",
    error: "❗️ Ошибка ❗️ для перезапуска нажмите на /start ",
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
    welcomeMessage:
      "Merhaba! Nasıl yardımcı olabilirim? Bir çevirmen mi yoksa belgelerin çevirisi mi gerekiyor?",
    translationNeeded: "Bir tercüman siparişi vermem gerekiyor 🗣️",
    interpretationNeeded: "Belgelerin çevirisine ihtiyacım var. 📄",
    translationNeededYes:
      "Bir form doldurmak mı yoksa bizi aramak mı istersiniz?",
    callUs: "Sizi aramak istiyorum. 📞",
    callUsYes:
      "Bizi aramak için düğmeye basın. Veya numarayı çevirin: +49 30 2359 666 80",
    yes: "Evet ✅",
    no: "Hayır ❌",
    notarization: "Çevirinin noter onayı gerekiyor mu?",
    fillOutForm: "Bir form doldurmak istiyorum.",
    fillOutFormYes: "Formu doldurmak için düğmeye basın.",
    interpretationNeededYes: "Lütfen belgelerinizi bize gönderin.",
    selectFromOptions:
      "Lütfen sağlanan seçeneklerden birini seçin. (Botun cevabı)",
    SessionUndefined: "Oturum tanımlanamadı, lütfen /start düğmesine basın",
    startOver: "Başlamak için lütfen /start düğmesine basın.",
    translateFrom: "Hangi dilden çeviriye ihtiyacınız var?",
    translateTo: "Hangi dile çeviriye ihtiyacınız var?",
    certifiedNeeded: "Sertifikalı bir çeviriye ihtiyacınız var mı?",
    certifiedYes: "Evet, lütfen sertifikalı bir çeviri yapın.",
    uploadDocuments: "Lütfen çeviri için belgeleri yükleyin.",
    documentsUploaded:
      "Belge başarıyla yüklendi. Başka belgeler yüklemek ister misiniz?",
    checkingDocuments:
      "Teşekkür ederim, belgelerinizi kontrol edeceğiz ve 30 dakika içinde sizinle iletişime geçeceğiz.",
    language: "Sizin diliniz: ",
    messages: "Mesajlar: ",
    correctQuestion: "Her şey doğru mu?",
    sendEmail: "Lütfen bize e-posta adresinizi gönderin.",
    emailSaved: "E-posta adresiniz başarıyla kaydedildi.",
    editEmail: "E-posta adresini düzenle",
    eMailnotValid: "Lütfen geçerli bir e-posta adresi girin.",
    continue: "Devam",
    uploadNextDocument: "Lütfen bir sonraki belgeyi yükleyin.",
    error: "❗️ Hata ❗️ yeniden başlatmak için /start düğmesine basın ",
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
    welcomeMessage:
      "مرحبًا! كيف يمكننا مساعدتك؟ هل تحتاج إلى مترجم أم ترجمة للوثائق؟",
    translationNeeded: "أحتاج لطلب مترجم 🗣️",
    interpretationNeeded: "أحتاج ترجمة للوثائق. 📄",
    translationNeededYes: "هل ترغب في ملء نموذج أو الاتصال بنا؟",
    callUs: "أرغب في الاتصال بكم. 📞",
    callUsYes:
      "اضغط على الزر للاتصال بنا. أو اتصل على الرقم: +49 30 2359 666 80",
    yes: "نعم ✅",
    no: "لا ❌",
    notarization: "هل تحتاج إلى توثيق الوثائق؟",
    fillOutForm: "أريد ملء نموذج.",
    fillOutFormYes: "اضغط على الزر لملء النموذج.",
    interpretationNeededYes: "يرجى إرسال الوثائق إلينا.",
    selectFromOptions: "يرجى اختيار من الخيارات المقدمة. (رد من الروبوت)",
    SessionUndefined: "الجلسة غير معرفة، يرجى النقر /start",
    startOver: "الرجاء النقر على /start للبدء من جديد.",
    translateFrom: "من أي لغة تحتاج إلى الترجمة؟",
    translateTo: "إلى أي لغة تحتاج إلى الترجمة؟",
    certifiedNeeded: "هل تحتاج إلى ترجمة معتمدة؟",
    certifiedYes: "نعم، يرجى توفير ترجمة معتمدة.",
    uploadDocuments: "يرجى تحميل الوثائق للترجمة.",
    documentsUploaded:
      "تم تحميل المستند بنجاح. هل ترغب في تحميل المزيد من الوثائق؟",
    checkingDocuments:
      "شكرًا لك، سوف نقوم بالتحقق من الوثائق الخاصة بك والاتصال بك في غضون 30 دقيقة.",
    language: "لغتك: ",
    messages: "الرسائل: ",
    correctQuestion: "هل كل شيء صحيح؟",
    sendEmail: "يرجى إرسال عنوان بريدك الإلكتروني.",
    emailSaved: "تم حفظ عنوان بريدك الإلكتروني بنجاح.",
    editEmail: "تحرير عنوان البريد الإلكتروني",
    eMailnotValid: "يرجى إدخال عنوان بريد إلكتروني صالح.",
    continue: "متابعة",
    uploadNextDocument: "يرجى تحميل المستند التالي.",
    error: "❗️ خطأ ❗️ لإعادة البدء، انقر على /start ",
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
    welcomeMessage:
      "سلام! چطور می‌توانم به شما کمک کنم؟ آیا به یک مترجم یا ترجمه اسناد نیاز دارید؟",
    translationNeeded: "من باید یک مترجم سفارش دهم 🗣️",
    interpretationNeeded: "من به ترجمه اسناد نیاز دارم. 📄",
    translationNeededYes: "آیا می‌خواهید یک فرم پر کنید یا با ما تماس بگیرید؟",
    callUs: "من می‌خواهم به شما زنگ بزنم. 📞",
    callUsYes:
      "برای ما زنگ بزنید یا شماره را شماره گیری کنید: +49 30 2359 666 80",
    yes: "بله ✅",
    no: "نه ❌",
    notarization: "آیا به تصدیق ترجمه نیاز دارید؟",
    fillOutForm: "می‌خواهم یک فرم پر کنم.",
    fillOutFormYes: "برای پر کردن فرم دکمه را فشار دهید.",
    interpretationNeededYes: "لطفاً اسناد خود را به ما ارسال کنید.",
    selectFromOptions:
      "لطفاً از گزینه‌های ارائه شده انتخاب کنید. (پاسخ از روبات)",
    SessionUndefined: "جلسه تعریف نشده است، لطفاً روی /start کلیک کنید",
    startOver: "لطفاً برای شروع مجدد روی /start کلیک کنید.",
    translateFrom: "از چه زبانی نیاز به ترجمه دارید؟",
    translateTo: "به چه زبانی نیاز به ترجمه دارید؟",
    certifiedNeeded: "آیا نیاز به یک ترجمه تایید شده دارید؟",
    certifiedYes: "بله، لطفاً ترجمه تایید شده ارائه دهید.",
    uploadDocuments: "لطفاً اسناد را برای ترجمه بارگذاری کنید.",
    documentsUploaded:
      "سند با موفقیت بارگذاری شد. آیا می‌خواهید سند دیگری بارگذاری کنید؟",
    checkingDocuments:
      "متشکرم، ما اسناد شما را بررسی خواهیم کرد و در عرض 30 دقیقه با شما تماس خواهیم گرفت.",
    language: "زبان شما: ",
    messages: "پیام‌ها: ",
    correctQuestion: "آیا همه چیز درست است؟",
    sendEmail: "لطفاً آدرس ایمیل خود را برای ما ارسال کنید.",
    emailSaved: "آدرس ایمیل شما با موفقیت ذخیره شد.",
    editEmail: "ویرایش آدرس ایمیل",
    eMailnotValid: "لطفاً یک آدرس ایمیل معتبر وارد کنید.",
    continue: "ادامه",
    uploadNextDocument: "لطفاً سند بعدی را بارگذاری کنید.",
    error: "❗️ خطا ❗️ برای شروع مجدد، بر روی /start کلیک کنید ",
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
    welcomeMessage:
      "Bonjour! Comment pouvons-nous vous aider? Avez-vous besoin d'un traducteur ou de la traduction de documents?",
    translationNeeded: "J'ai besoin de commander un traducteur 🗣️",
    interpretationNeeded: "J'ai besoin de la traduction de documents. 📄",
    translationNeededYes: "Voulez-vous remplir un formulaire ou nous appeler?",
    callUs: "Je voudrais vous appeler. 📞",
    callUsYes:
      "Appuyez sur le bouton pour nous appeler. Ou composez le numéro: +49 30 2359 666 80",
    yes: "Oui ✅",
    no: "Non ❌",
    notarization:
      "Avez-vous besoin d'une certification notariale pour la traduction?",
    fillOutForm: "Je veux remplir un formulaire.",
    fillOutFormYes: "Appuyez sur le bouton pour remplir le formulaire.",
    interpretationNeededYes: "Veuillez nous envoyer vos documents.",
    selectFromOptions:
      "Veuillez choisir parmi les options fournies. (Réponse du bot)",
    SessionUndefined:
      "La session n'est pas définie, veuillez appuyer sur /start",
    startOver: "Veuillez appuyer sur /start pour recommencer.",
    translateFrom: "De quelle langue avez-vous besoin de traduire?",
    translateTo: "Dans quelle langue avez-vous besoin de traduire?",
    certifiedNeeded: "Avez-vous besoin d'une traduction certifiée?",
    certifiedYes: "Oui, s'il vous plaît, une traduction certifiée.",
    uploadDocuments: "Veuillez télécharger les documents à traduire.",
    documentsUploaded:
      "Document téléchargé avec succès. Voulez-vous télécharger d'autres documents?",
    checkingDocuments:
      "Merci, nous vérifierons vos documents et vous contacterons dans les 30 minutes.",
    language: "Votre langue: ",
    messages: "Messages: ",
    correctQuestion: "Tout est correct?",
    sendEmail: "Veuillez nous envoyer votre adresse e-mail.",
    emailSaved: "Votre adresse e-mail a été enregistrée avec succès.",
    editEmail: "Modifier l'adresse e-mail",
    eMailnotValid: "Veuillez saisir une adresse e-mail valide.",
    continue: "Continuer",
    uploadNextDocument: "Veuillez télécharger le document suivant.",
    error: "❗️ Erreur ❗️ pour redémarrer, appuyez sur /start ",
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
    welcomeMessage:
      "¡Hola! ¿Cómo podemos ayudarte? ¿Necesitas un traductor o la traducción de documentos?",
    translationNeeded: "Necesito ordenar un traductor 🗣️",
    interpretationNeeded: "Necesito la traducción de documentos. 📄",
    translationNeededYes: "¿Quieres completar un formulario o llamarnos?",
    callUs: "Quiero llamarte. 📞",
    callUsYes:
      "Presiona el botón para llamarnos. O marque el número: +49 30 2359 666 80",
    yes: "Sí ✅",
    no: "No ❌",
    notarization: "¿Necesitas una notarización para la traducción?",
    fillOutForm: "Quiero completar un formulario.",
    fillOutFormYes: "Presiona el botón para completar el formulario.",
    interpretationNeededYes: "Por favor, envíenos sus documentos.",
    selectFromOptions:
      "Por favor, elija entre las opciones proporcionadas. (Respuesta del bot)",
    SessionUndefined: "La sesión no está definida, por favor, presiona /start",
    startOver: "Por favor, presiona /start para empezar de nuevo.",
    translateFrom: "¿De qué idioma necesitas la traducción?",
    translateTo: "¿A qué idioma necesitas la traducción?",
    certifiedNeeded: "¿Necesitas una traducción certificada?",
    certifiedYes: "Sí, por favor, una traducción certificada.",
    uploadDocuments: "Por favor, sube los documentos para la traducción.",
    documentsUploaded:
      "Documento subido exitosamente. ¿Quieres subir más documentos?",
    checkingDocuments:
      "Gracias, revisaremos tus documentos y nos pondremos en contacto contigo en 30 minutos.",
    language: "Tu idioma: ",
    messages: "Mensajes: ",
    correctQuestion: "¿Está todo correcto?",
    sendEmail: "Por favor, envíanos tu dirección de correo electrónico.",
    emailSaved:
      "Tu dirección de correo electrónico ha sido guardada exitosamente.",
    editEmail: "Editar dirección de correo electrónico",
    eMailnotValid:
      "Por favor, introduce una dirección de correo electrónico válida.",
    continue: "Continuar",
    uploadNextDocument: "Por favor, sube el siguiente documento.",
    error: "❗️ Error ❗️ para reiniciar, presiona /start ",
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
    welcomeMessage:
      "Salut! Cum vă putem ajuta? Aveți nevoie de un traducător sau de traducerea documentelor?",
    translationNeeded: "Am nevoie să comand un traducător 🗣️",
    interpretationNeeded: "Am nevoie de traducerea documentelor. 📄",
    translationNeededYes: "Doriți să completați un formular sau să ne sunați?",
    callUs: "Vreau să vă sun. 📞",
    callUsYes:
      "Apăsați butonul pentru a ne suna. Sau sunați la numărul: +49 30 2359 666 80",
    yes: "Da ✅",
    no: "Nu ❌",
    notarization: "Aveți nevoie de legalizare pentru traducere?",
    fillOutForm: "Vreau să completez un formular.",
    fillOutFormYes: "Apăsați butonul pentru a completa formularul.",
    interpretationNeededYes: "Vă rugăm să ne trimiteți documentele.",
    selectFromOptions:
      "Vă rugăm să alegeți din opțiunile furnizate. (Răspunsul de la bot)",
    SessionUndefined: "Sesiunea nu este definită, vă rugăm să apăsați /start",
    startOver: "Vă rugăm să apăsați /start pentru a începe din nou.",
    translateFrom: "Din ce limbă aveți nevoie de traducere?",
    translateTo: "În ce limbă aveți nevoie de traducere?",
    certifiedNeeded: "Aveți nevoie de o traducere certificată?",
    certifiedYes: "Da, vă rog, o traducere certificată.",
    uploadDocuments: "Vă rugăm să încărcați documentele pentru traducere.",
    documentsUploaded:
      "Documentul a fost încărcat cu succes. Doriți să încărcați mai multe documente?",
    checkingDocuments:
      "Vă mulțumim, vom verifica documentele dvs. și vă vom contacta în 30 de minute.",
    language: "Limba ta: ",
    messages: "Mesaje: ",
    correctQuestion: "Este totul corect?",
    sendEmail: "Vă rugăm să ne trimiteți adresa dvs. de e-mail.",
    emailSaved: "Adresa dvs. de e-mail a fost salvată cu succes.",
    editEmail: "Editați adresa de e-mail",
    eMailnotValid: "Vă rugăm să introduceți o adresă de e-mail validă.",
    continue: "Continua",
    uploadNextDocument: "Vă rugăm să încărcați următorul document.",
    error: "❗️ Eroare ❗️ pentru a reseta, apăsați pe /start ",
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
    welcomeMessage:
      "Ciao! Come possiamo aiutarti? Hai bisogno di un traduttore o della traduzione di documenti?",
    translationNeeded: "Ho bisogno di ordinare un traduttore 🗣️",
    interpretationNeeded: "Ho bisogno della traduzione di documenti. 📄",
    translationNeededYes: "Vuoi compilare un modulo o chiamarci?",
    callUs: "Voglio chiamarti. 📞",
    callUsYes:
      "Premi il pulsante per chiamarci. Oppure comporre il numero: +49 30 2359 666 80",
    yes: "Sì ✅",
    no: "No ❌",
    notarization: "Hai bisogno di una legalizzazione per la traduzione?",
    fillOutForm: "Voglio compilare un modulo.",
    fillOutFormYes: "Premi il pulsante per compilare il modulo.",
    interpretationNeededYes: "Per favore, inviaci i tuoi documenti.",
    selectFromOptions:
      "Si prega di selezionare dalle opzioni fornite. (Risposta del bot)",
    SessionUndefined: "La sessione non è definita, si prega di premere /start",
    startOver: "Si prega di premere /start per ricominciare.",
    translateFrom: "Da quale lingua hai bisogno di tradurre?",
    translateTo: "In quale lingua hai bisogno di tradurre?",
    certifiedNeeded: "Hai bisogno di una traduzione certificata?",
    certifiedYes: "Sì, per favore, una traduzione certificata.",
    uploadDocuments: "Si prega di caricare i documenti per la traduzione.",
    documentsUploaded:
      "Documento caricato con successo. Vuoi caricare altri documenti?",
    checkingDocuments:
      "Grazie, verificheremo i tuoi documenti e ti contatteremo entro 30 minuti.",
    language: "La tua lingua: ",
    messages: "Messaggi: ",
    correctQuestion: "È tutto corretto?",
    sendEmail: "Si prega di inviarci il tuo indirizzo email.",
    emailSaved: "Il tuo indirizzo email è stato salvato con successo.",
    editEmail: "Modifica l'indirizzo email",
    eMailnotValid: "Si prega di inserire un indirizzo email valido.",
    continue: "Continua",
    uploadNextDocument: "Si prega di caricare il documento successivo.",
    error: "❗️ Errore ❗️ per ripartire, premere /start ",
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

getAnswer("🇬🇧 English").welcomeMessage;

const interpritationLanguageKeyboard = (
  lang: string,
  aditionalOption: string
) => {
  return Markup.inlineKeyboard(
    getAnswer(lang).LanguageArray.reduce(
      (accumulator: any[], currentValue: string, index: number) => {
        if (index % 2 === 0) {
          accumulator.push([
            Markup.button.callback(
              currentValue,
              `${
                getAnswer("🇬🇧 English").LanguageArray[index]
              }:${aditionalOption}`
            ),
          ]);
        } else {
          accumulator[accumulator.length - 1].push(
            Markup.button.callback(
              currentValue,
              `${
                getAnswer("🇬🇧 English").LanguageArray[index]
              }:${aditionalOption}`
            )
          );
        }
        return accumulator;
      },
      []
    ),
    { columns: 2 } // Указываем количество колонок в клавиатуреww
  );
};

const startOver = (lang: string) => {
  return Markup.button.callback(
    "🔄" + getAnswer(lang).startOver + "🔄",
    "startOver"
  );
};

export {
  botMessages,
  getAnswer,
  languageArray,
  interpritationLanguageKeyboard,
  startOver,
};
