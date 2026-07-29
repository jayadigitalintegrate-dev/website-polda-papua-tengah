// src/data/officials.ts

import kapoldaPhoto from "../assets/officials/kapolda.webp";
import wakapoldaPhoto from "../assets/officials/wakapolda.webp";
import irwasdaPhoto from "../assets/officials/irwasda.webp";
import karoOpsPhoto from "../assets/officials/karo-ops.webp";
import placeholderPhoto from "../assets/officials/placeholder/placeholder.webp";

import type { Official } from "../types/official";

const defaultData = {
  nrp: "-",
  birthPlace: "-",
  birthDate: "-",
  religion: "-",
  maritalStatus: "-",
  spouse: "-",
  children: 0,
  motto: "-",
  education: [],
  assignments: [],
  career: [],
  awards: [],
  status: "active" as const,
};

export const officials: Official[] = [

  {
    id: 1,
    photo: kapoldaPhoto,
    name_id: "Irjen Pol.Brigjen. Pol. Jeremias Rontini, S.I.K., M.Si.",
    name_en: "Inspector General Police Petrus Patrige Rudolf Renwarin",
    rank: "Inspektur Jenderal Polisi",
    position_id: "Kapolda Papua Tengah",
    position_en: "Chief of Papua Tengah Regional Police",
    ...defaultData,
    order: 1,
  },

  {
    id: 2,
    photo: wakapoldaPhoto,
    name_id: "Kombes. Pol. Dr. Gustav Robby Urbinas, S.H., S.I.K., M.Pd., M.H.",
    name_en: "Deputy Chief of Papua Tengah Regional Police",
    rank: "Brigadir Jenderal Polisi",
    position_id: "Wakapolda Papua Tengah",
    position_en: "Deputy Chief of Papua Tengah Regional Police",
    ...defaultData,
    order: 2,
  },

  {
    id: 3,
    photo: irwasdaPhoto,
    name_id: "Kombes. Pol. Wahyu Kuncoro, S.I.K., M.H.",
    name_en: "Inspectorate Supervisor",
    rank: "Komisaris Besar Polisi",
    position_id: "Irwasda Polda Papua Tengah",
    position_en: "Inspectorate Supervisor",
    ...defaultData,
    order: 3,
  },

  {
    id: 4,
    photo: karoOpsPhoto,
    name_id: "Kombes Pol. Adnan Ratmoro, S.I.K.",
    name_en: "Police Commissioner Adnan Ratmoro",
    rank: "Komisaris Besar Polisi",
    position_id: "Karo Ops Polda Papua Tengah",
    position_en: "Head of Operations Bureau",
    ...defaultData,
    order: 4,
  },


  {
    id: 7,
    photo: placeholderPhoto,
    name_id: "Nama Karo Log",
    name_en: "Head of Logistics Bureau",
    rank: "Komisaris Besar Polisi",
    position_id: "Karo Log Polda Papua Tengah",
    position_en: "Head of Logistics Bureau",
    ...defaultData,
    order: 7,
  },

  {
    id: 5,
    photo: placeholderPhoto,
    name_id: "Nama Karorena",
    name_en: "Head of Planning Bureau",
    rank: "Komisaris Besar Polisi",
    position_id: "Karorena Polda Papua Tengah",
    position_en: "Head of Planning Bureau",
    ...defaultData,
    order: 5,
  },

  {
    id: 6,
    photo: placeholderPhoto,
    name_id: "Nama Karo SDM",
    name_en: "Head of Human Resources Bureau",
    rank: "Komisaris Besar Polisi",
    position_id: "Karo SDM Polda Papua Tengah",
    position_en: "Head of Human Resources Bureau",
    ...defaultData,
    order: 6,
  },


  {
    id: 8,
    photo: placeholderPhoto,
    name_id: "Nama Dirreskrimum",
    name_en: "Director of General Criminal Investigation",
    rank: "Komisaris Besar Polisi",
    position_id: "Dirreskrimum Polda Papua Tengah",
    position_en: "Director of General Criminal Investigation",
    ...defaultData,
    order: 8,
  },

  {
    id: 9,
    photo: placeholderPhoto,
    name_id: "Nama Dirreskrimsus",
    name_en: "Director of Special Criminal Investigation",
    rank: "Komisaris Besar Polisi",
    position_id: "Dirreskrimsus Polda Papua Tengah",
    position_en: "Director of Special Criminal Investigation",
    ...defaultData,
    order: 9,
  },

  {
    id: 10,
    photo: placeholderPhoto,
    name_id: "Nama Dirresnarkoba",
    name_en: "Director of Narcotics Investigation",
    rank: "Komisaris Besar Polisi",
    position_id: "Dirresnarkoba Polda Papua Tengah",
    position_en: "Director of Narcotics Investigation",
    ...defaultData,
    order: 10,
  },

  {
    id: 11,
    photo: placeholderPhoto,
    name_id: "Nama Dirlantas",
    name_en: "Director of Traffic",
    rank: "Komisaris Besar Polisi",
    position_id: "Dirlantas Polda Papua Tengah",
    position_en: "Director of Traffic",
    ...defaultData,
    order: 11,
  },

  {
    id: 12,
    photo: placeholderPhoto,
    name_id: "Nama Dirbinmas",
    name_en: "Director of Community Guidance",
    rank: "Komisaris Besar Polisi",
    position_id: "Dirbinmas Polda Papua Tengah",
    position_en: "Director of Community Guidance",
    ...defaultData,
    order: 12,
  },

  {
    id: 13,
    photo: placeholderPhoto,
    name_id: "Nama Dirsamapta",
    name_en: "Director of Samapta",
    rank: "Komisaris Besar Polisi",
    position_id: "Dirsmapta Polda Papua Tengah",
    position_en: "Director of Samapta",
    ...defaultData,
    order: 13,
  },

  {
    id: 14,
    photo: placeholderPhoto,
    name_id: "Nama Dirpamobvit",
    name_en: "Director of Vital Object Security",
    rank: "Komisaris Besar Polisi",
    position_id: "Dirpamobvit Polda Papua Tengah",
    position_en: "Director of Vital Object Security",
    ...defaultData,
    order: 14,
  },

  {
    id: 15,
    photo: placeholderPhoto,
    name_id: "Nama Dirpolairud",
    name_en: "Director of Water and Air Police",
    rank: "Komisaris Besar Polisi",
    position_id: "Dirpolairud Polda Papua Tengah",
    position_en: "Director of Water and Air Police",
    ...defaultData,
    order: 15,
  },

];



