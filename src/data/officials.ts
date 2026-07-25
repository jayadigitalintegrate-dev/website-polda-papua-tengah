// src/data/officials.ts

import kapoldaPhoto from "../assets/officials/kapolda.png";
import wakapoldaPhoto from "../assets/officials/wakapolda.png";
import irwasdaPhoto from "../assets/officials/irwasda.png";
import karoOpsPhoto from "../assets/officials/karo-ops.png";

import type { Official } from "../types/official";


export const officials: Official[] = [

  {
    id: 1,

    photo: kapoldaPhoto,

    name_id: "Brigjen Pol. Jermias Rontini, S.I.K., M.Si.",
    name_en: "Brigadier General Police Jermias Rontini",

    rank: "Brigadir Jenderal Polisi",

    position_id: "Kapolda Papua Tengah",
    position_en: "Chief of Papua Tengah Regional Police",

    nrp: "-",

    birthPlace: "-",
    birthDate: "-",

    religion: "-",

    maritalStatus: "-",

    spouse: "-",

    children: 0,

    motto:
      "Integritas dan Tanggung Jawab untuk Melayani Masyarakat",

    education: [],

    assignments: [],

    career: [],

    awards: [],

    order: 1,

    status: "active",
  },


  {
    id: 2,

    photo: wakapoldaPhoto,

    name_id: "Nama Wakapolda",
    name_en: "Deputy Chief of Papua Tengah Regional Police",

    rank: "Kombes Pol.",

    position_id: "Wakapolda Papua Tengah",
    position_en: "Deputy Chief of Papua Tengah Regional Police",

    nrp: "-",

    birthPlace: "-",
    birthDate: "-",

    religion: "-",

    maritalStatus: "-",

    spouse: "-",

    children: 0,

    motto: "",

    education: [],

    assignments: [],

    career: [],

    awards: [],

    order: 2,

    status: "active",
  },


  {
    id: 3,

    photo: irwasdaPhoto,

    name_id: "Nama Irwasda",
    name_en: "Inspectorate Supervisor",

    rank: "Kombes Pol.",

    position_id: "Irwasda Polda Papua Tengah",
    position_en: "Inspectorate Supervisor",

    nrp: "-",

    birthPlace: "-",
    birthDate: "-",

    religion: "-",

    maritalStatus: "-",

    spouse: "-",

    children: 0,

    motto: "",

    education: [],

    assignments: [],

    career: [],

    awards: [],

    order: 3,

    status: "active",
  },


  {
    id: 4,

    photo: karoOpsPhoto,

    name_id: "Kombes Pol. Adnan Ratmoro, S.I.K.",
    name_en: "Police Commissioner Adnan Ratmoro",

    rank: "Kombes Polisi",

    position_id: "Karo Ops Polda Papua Tengah",
    position_en: "Head of Operations Bureau",

    nrp: "-",

    birthPlace: "-",
    birthDate: "-",

    religion: "-",

    maritalStatus: "-",

    spouse: "-",

    children: 0,

    motto:
      "Profesional, Modern, dan Presisi dalam Pelaksanaan Tugas",

    education: [],

    assignments: [],

    career: [
      "Karo Ops Polda Papua Tengah"
    ],

    awards: [],

    order: 4,

    status: "active",
  },

];
