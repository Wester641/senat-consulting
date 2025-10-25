import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en/translation.json";
import ru from "./locales/ru/translation.json";
import kg from "./locales/kg/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      kg: { translation: kg },
    },
    fallbackLng: "ru",
    lng: "ru",
    interpolation: { escapeValue: false },

    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      // default: 'i18nextLng'
    },
  });

export default i18n;
