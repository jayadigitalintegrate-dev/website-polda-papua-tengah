// src/data/officials.ts

import kapoldaPhoto from "../assets/officials/kapolda.png";
import wakapoldaPhoto from "../assets/officials/wakapolda.png";
import irwasdaPhoto from "../assets/officials/irwasda.png";

export interface Official {
  id: number;
  photo: string;

  name: string;
  rank: string;
  position: string;

  nrp: string;

  birthPlace: string;
  birthDate: string;

  religion: string;

  maritalStatus: string;

  spouse: string;

  children: number;

  motto: string;

  education: string[];

  assignments: string[];

  career: string[];

  awards: string[];
}

export const officials: Official[] = [
  {
    id: 1,
    photo: kapoldaPhoto,
    name: "Brigjen Pol. Jermias Rontini, S.I.K., M.Si.",
    rank: "Brigadir Jenderal Polisi",
    position: "Kapolda Papua Tengah",
    nrp: "-",
    birthPlace: "-",
    birthDate: "-",
    religion: "-",
    maritalStatus: "-",
    spouse: "-",
    children: 0,
    motto: "Integritas dan Tanggung Jawab untuk Melayani Masyarakat",
    education: [],
    assignments: [],
    career: [],
    awards: [],
  },

  {
    id: 2,
    photo: wakapoldaPhoto,
    name: "Nama Wakapolda",
    rank: "Kombes Pol.",
    position: "Wakapolda Papua Tengah",
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
  },

  {
    id: 3,
    photo: irwasdaPhoto,
    name: "Nama Irwasda",
    rank: "Kombes Pol.",
    position: "Irwasda",
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
  },
];