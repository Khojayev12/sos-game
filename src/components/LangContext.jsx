import React from "react";
export const languages = {
  uz: {
    til: "UZB",
    main: "ASOSIY",
    about: "HAQIDA",
    gameFeatures: "O'YIN XUSUSIYATLARI",
    systemRequirements: "TIZIM ZARURIYATI",
    quotes: "iqtiboslar",
    gameName: "har qanday holatda ham tirik qol",
    gameDescription: "Yangi ijtimoiy battle royale o'yinini sinab ko'ring",
    buyGame: "Steamdan sotib ol",
    story: "Hikoya",
    whatGame: "sos nima?",
    gameName2: "ijtimoiy battle royale o'yin",
    smallText1:
      "Har bir turda siz va boshqa 15 ishtirokchi a'zolikdan qochish uchun raqobatlashasiz yirtqich hayvonlar bilan to'lgan halokatli orol. Hiyla: uchta odamlar omon qolishi mumkin. Yakkaxon yugurasizmi yoki do'stlik rishtalarini yaratasizmi? qochish uchun boshqalar bilanmi?",
    smallText2:
      "To'g'ri qarorlar qabul qilish o'rtasidagi farq bo'lishi mumkin hayot va o'lim.",
    whatSpecial: "Nimasi shunchalik muhim?",
    features: "xususiyatlari",
    fea12:
      "Sizda yodgorlikni topish, qazib olish uchun signal berish va ushlash uchun 30 daqiqa vaqtingiz bor qutqaruv chopperidagi uchta nuqtadan biri.",
    fea21: "Ittifoqchilar va dushmanlar orttir",
    fea31: "Muxlislarni hayron qoldir",
    canrun: "Bu o'yinni kompyuterim ko'taradimi?",
    os: "Operatsion tizim",
    osDes: "faqat Windows 10 64-bit (Hozircha OSX uchun yo'q)",
    cpu: "Protsessor",
    cpu2: "Intel Core 2 Duo @ 2.4 GHZ yoki \n AMD Athlon X2 @ 2.8 GHZ",
    memory: "Operativ Xotira",
    memory2: "8 GB RAM",
    storage: "Xotira",
    storage2: "8 GB bo'sh joy",
    graphics: "Grafika",
    graphics2:
      "NVIDIA GeForce GTX 660 2GB yoki AMD Radeon HD 7850 2GB DirectX11",
    whatthink: "Odamlar nima deb o'ylaydi?",
    presquotes: "Izoh berish erkinligi",
    quoteDes:
      "Bizning maqsadimiz sizni qoniqtiradigan mahsulot va xizmatni yaratish va undan har kuni foydalanishdir. Shuning uchun biz har kuni yaxshiroq qilish va foydalanuvchilarimiz aytganlarini tinglash uchun doimo xizmatlarimiz ustida ishlayapmiz.",
    testimo: "Ko'proq izohlar o'qish",
    q1: "”Yilning eng muhim o'yinlarimdan biri.”",
  },
  en: {
    til: "ENG",
    main: "MAIN",
    about: "ABOUT",
    gameFeatures: "GAME FEATURES",
    systemRequirements: "System requirements",
    quotes: "quotes",
    gameName: "survive at all costs",
    gameDescription: "Experience new social battle royale game",
    buyGame: "Buy now on Steam",
    story: "The story",
    whatGame: "what is sos?",
    gameName2: "social battle royale game",
    smallText1:
      "Each round, you and 15 other contestants compete to escape a deadly island filled with monsters. The trick is: three people can survive. Will you run solo or form friendships with others to escape?",
    smallText2:
      "Making the right decisions could be the difference between life and death.",
    whatSpecial: "what's so special?",
    features: "features",
    fea12:
      "You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue chopper.",
    fea21: "CREATE ALLIES AND ENEMIES",
    fea31: "IMPRESS THE AUDIENCE",
    canrun: "Can My Computer Run this game?",
    os: "OS",
    osDes: "Windows 7 64-bit only (No OSX support at this time)",
    cpu: "Proccessor",
    cpu2: "Intel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2 @ 2.8 GHZ",
    memory: "memory",
    memory2: "8 GB RAM",
    storage: "Storage",
    storage2: "8 GB available space",
    graphics: "graphics",
    graphics2:
      "NVIDIA GeForce GTX 660 2GB or AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5) ",
    whatthink: "What do people think?",
    presquotes: "Press Quotes",
    quoteDes:
      "Our goal is to create a product and service that you’re satisfied with and use it every day. This is why we’re constantly working on our services to make it better every day and really listen to what our users has to say.",
    testimo: "Read more testimonals",
    q1: "“One of my gaming highlights of the year.”",
  },
};

export const LangContext = React.createContext(
  languages.en // default value
);
