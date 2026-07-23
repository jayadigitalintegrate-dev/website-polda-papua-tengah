import idHeader from "./locales/id/header.json";
import enHeader from "./locales/en/header.json";

export const resources = {
  id: {
    header: idHeader,
  },
  en: {
    header: enHeader,
  },
} as const;

export type AppLanguage = keyof typeof resources;