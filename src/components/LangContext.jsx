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
  },
  en: {
    til: "ENG",
    main: "MAIN",
    about: "ABOUT",
    gameFeatures: "GAME FEATURES",
    systemRequirements: "System requirements",
    quotes: "quotes",
    gameName: "survive at all cost",
    gameDescription: "Experience new social battle royale game",
    buyGame: "Buy now on Steam",
    story: "The story",
    whatGame: "what is sos?",
    gameName2: "social battle royale game",
    smallText1:
      "Each round, you and 15 other contestants compete to escape a deadly island filled with monsters. The trick is: three people can survive. Will you run solo or form friendships with others to escape?",
    smallText2:
      "Making the right decisions could be the difference between life and death.",
  },
};

export const LangContext = React.createContext(
  languages.en // default value
);
