import idHeader from "./locales/id/header.json";
import enHeader from "./locales/en/header.json";

import idFooter from "./locales/id/footer.json";
import enFooter from "./locales/en/footer.json";

import idContact from "./locales/id/contact.json";
import enContact from "./locales/en/contact.json";

import idHome from "./locales/id/home.json";
import enHome from "./locales/en/home.json";


export const resources = {

  id: {

    header: idHeader,

    footer: idFooter,

    contact: idContact,

    home: idHome,

  },


  en: {

    header: enHeader,

    footer: enFooter,

    contact: enContact,

    home: enHome,

  },


} as const;


export type AppLanguage = keyof typeof resources;

