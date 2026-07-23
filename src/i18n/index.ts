import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { resources } from "./resources";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,

    lng: "id",

    fallbackLng: "id",

    supportedLngs: ["id", "en"],

    interpolation: {
      escapeValue: false,
    },

    defaultNS: "header",

    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
