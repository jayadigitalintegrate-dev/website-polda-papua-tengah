export interface Official {
  id: number;

  nama: string;
  pangkat: string;
  jabatan: string;

  foto: string;

  nrp: string;

  tempatLahir: string;
  tanggalLahir: string;

  agama: string;

  statusPerkawinan: string;

  namaPasangan: string;

  jumlahAnak: number;

  motto: string;

  pendidikan: string[];

  riwayatPendidikan: string[];

  riwayatPenugasan: string[];

  riwayatJabatan: string[];

  penghargaan: string[];

  email?: string;

  telepon?: string;

  urutan: number;

  aktif: boolean;
}

export const officials: Official[] = [
  {
    id: 1,

    nama: "Irjen Pol. Nama Kapolda",

    pangkat: "Inspektur Jenderal Polisi",

    jabatan: "Kapolda Papua Tengah",

    foto: "/images/officials/kapolda.jpg",

    nrp: "-",

    tempatLahir: "-",

    tanggalLahir: "-",

    agama: "-",

    statusPerkawinan: "-",

    namaPasangan: "-",

    jumlahAnak: 0,

    motto: "Integritas dan Tanggung Jawab untuk Melayani Masyarakat.",

    pendidikan: [
      "Akpol"
    ],

    riwayatPendidikan: [
      "Akpol",
      "PTIK",
      "Sespim",
      "Sespimti",
      "Lemhannas"
    ],

    riwayatPenugasan: [
      "Polda Papua",
      "Polres Jayapura",
      "Mabes Polri"
    ],

    riwayatJabatan: [
      "Kapolres",
      "Dir Reskrimum",
      "Wakapolda",
      "Kapolda Papua Tengah"
    ],

    penghargaan: [
      "Satyalancana",
      "Bintang Bhayangkara"
    ],

    email: "",

    telepon: "",

    urutan: 1,

    aktif: true
  }
];