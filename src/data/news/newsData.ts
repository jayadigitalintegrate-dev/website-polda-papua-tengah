import berita1 from "../../assets/berita/berita-1.jpg";
import berita2 from "../../assets/berita/berita-2.jpg";
import berita3 from "../../assets/berita/berita-3.jpg";
import berita4 from "../../assets/berita/berita-4.jpg";
import berita5 from "../../assets/berita/berita-5.jpg";
import berita6 from "../../assets/berita/berita-6.jpg";
import berita7 from "../../assets/berita/berita-7.jpg";


import type { News } from "../../types/news";
import { newsCategories } from "./categories";

export const newsData: News[] = [
  {
    id: 1,

    title: "Kapolda Papua Tengah Memimpin Apel Pagi Bersama Personel",

    slug: "kapolda-papua-tengah-memimpin-apel-pagi",

    excerpt:
      "Kapolda Papua Tengah memimpin apel pagi bersama seluruh personel sebagai bentuk penguatan disiplin, profesionalisme, dan pelayanan humanis kepada masyarakat.",

    content: `
Kapolda Papua Tengah memimpin apel pagi yang diikuti oleh seluruh personel.

Dalam arahannya beliau menekankan pentingnya menjaga integritas, profesionalisme, serta meningkatkan kualitas pelayanan kepada masyarakat sesuai semangat PRESISI.

Seluruh personel diharapkan menjadi teladan dalam menjalankan tugas kepolisian di wilayah Papua Tengah.
`,

    thumbnail: berita1,

    publishedAt: "2026-07-18",

    updatedAt: "2026-07-18",

    views: 1520,

    featured: true,

    published: true,

    breaking: false,

    pinned: true,

    type: "article",

    category: newsCategories[1],

    author: {
      id: 1,
      name: "Humas Polda Papua Tengah",
      photo: "/images/avatar/admin.png",
      position: "Administrator",
    },

    gallery: [
      {
        id: 1,
        image: "/images/news/gallery/gallery-1.jpg",
        caption:
          "Kapolda Papua Tengah memimpin apel pagi bersama seluruh personel.",
      },
      {
        id: 2,
        image: "/images/news/gallery/gallery-2.jpg",
        caption: "Suasana apel pagi di Lapangan Mapolda Papua Tengah.",
      },
      {
        id: 3,
        image: "/images/news/gallery/gallery-3.jpg",
        caption: "Kapolda memberikan arahan kepada seluruh personel.",
      },
      {
        id: 4,
        image: "/images/news/gallery/gallery-4.jpg",
        caption:
          "Personel mengikuti apel pagi dengan tertib dan disiplin.",
      },
      {
        id: 5,
        image: "/images/news/gallery/gallery-5.jpg",
        caption:
          "Dokumentasi kegiatan penguatan profesionalisme anggota Polri.",
      },
      {
        id: 6,
        image: "/images/news/gallery/gallery-6.jpg",
        caption: "Foto bersama setelah pelaksanaan apel pagi.",
      },
    ],

    videos: [],

    attachments: [],

    tags: ["Kapolda", "Apel", "Presisi"],

    seo: {
      metaTitle: "Kapolda Papua Tengah Memimpin Apel Pagi",

      metaDescription:
        "Kapolda Papua Tengah memimpin apel pagi bersama seluruh personel.",

      keywords: [
        "Kapolda",
        "Papua Tengah",
        "Apel",
        "PRESISI",
      ],
    },
  },

  {
    id: 2,

    title:
      "Kapolda Papua Tengah Melaksanakan Kunjungan Kerja ke Polres Nabire",

    slug: "kapolda-kunjungan-kerja-polres-nabire",

    excerpt:
      "Kapolda Papua Tengah melakukan kunjungan kerja ke Polres Nabire guna memastikan pelayanan publik berjalan optimal.",

    content: `
Kapolda Papua Tengah melakukan kunjungan kerja ke Polres Nabire.

Dalam kunjungan tersebut Kapolda meninjau pelayanan publik, ruang SPKT, pelayanan SKCK serta memberikan arahan kepada seluruh personel.

Kapolda meminta seluruh anggota terus meningkatkan pelayanan kepada masyarakat secara humanis dan profesional.
`,

    thumbnail: berita2,

    publishedAt: "2026-07-19",

    updatedAt: "2026-07-19",

    views: 1286,

    featured: false,

    published: true,

    breaking: false,

    pinned: false,

    type: "article",

    category: newsCategories[1],

    author: {
      id: 1,
      name: "Humas Polda Papua Tengah",
      photo: "/images/avatar/admin.png",
      position: "Administrator",
    },

    gallery: [],

    videos: [],

    attachments: [],

    tags: ["Kapolda", "Nabire"],

    seo: {
      metaTitle: "Kapolda Kunjungan Kerja ke Polres Nabire",

      metaDescription:
        "Kapolda Papua Tengah melaksanakan kunjungan kerja ke Polres Nabire.",

      keywords: [
        "Kapolda",
        "Nabire",
        "Papua Tengah",
      ],
    },
  },

  {
    id: 3,

    title:
      "Satlantas Polda Papua Tengah Menggelar Sosialisasi Keselamatan Berlalu Lintas",

    slug: "satlantas-sosialisasi-keselamatan-berlalu-lintas",

    excerpt:
      "Satlantas Polda Papua Tengah memberikan edukasi keselamatan berlalu lintas kepada masyarakat dan pelajar.",

    content: `
Satlantas Polda Papua Tengah menggelar sosialisasi keselamatan berlalu lintas kepada masyarakat.

Kegiatan ini bertujuan meningkatkan kesadaran masyarakat terhadap pentingnya tertib berlalu lintas demi menekan angka kecelakaan di wilayah Papua Tengah.
`,

    thumbnail: berita3,

    publishedAt: "2026-07-20",

    updatedAt: "2026-07-20",

    views: 964,

    featured: false,

    published: true,

    breaking: false,

    pinned: false,

    type: "article",

    category: newsCategories[2],

    author: {
      id: 1,
      name: "Humas Polda Papua Tengah",
      photo: "/images/avatar/admin.png",
      position: "Administrator",
    },

    gallery: [],

    videos: [],

    attachments: [],

    tags: [
      "Satlantas",
      "Lalu Lintas",
      "Edukasi",
    ],

    seo: {
      metaTitle:
        "Satlantas Polda Papua Tengah Sosialisasi Keselamatan",

      metaDescription:
        "Satlantas Polda Papua Tengah melaksanakan sosialisasi keselamatan berlalu lintas.",

      keywords: [
        "Satlantas",
        "Lalu Lintas",
        "Papua Tengah",
      ],
    },
  },


    {
    id: 4,

    title:
      "Objek Wisata Pantai Nabire Menjadi Destinasi Favorit Masyarakat Saat Libur Akhir Pekan",

    slug: "pantai-nabire-destinasi-favorit",

    excerpt:
      "Masyarakat memadati kawasan Pantai Nabire untuk menikmati liburan bersama keluarga dengan pengamanan dari personel kepolisian.",

    content: `
Personel Polda Papua Tengah melaksanakan patroli dan pengamanan di kawasan wisata Pantai Nabire.

Kegiatan ini dilakukan guna memberikan rasa aman kepada masyarakat yang sedang menikmati liburan bersama keluarga.

Kehadiran anggota Polri mendapat apresiasi dari masyarakat karena mampu menciptakan situasi yang aman dan kondusif.
`,

    thumbnail: berita4,

    publishedAt: "2026-07-21",

    updatedAt: "2026-07-21",

    views: 845,

    featured: false,

    published: true,

    breaking: false,

    pinned: false,

    type: "article",

    category: newsCategories[3],

    author: {
      id: 1,
      name: "Humas Polda Papua Tengah",
      photo: "/images/avatar/admin.png",
      position: "Administrator",
    },

    gallery: [],

    videos: [],

    attachments: [],

    tags: [
      "Wisata",
      "Pantai",
      "Nabire",
    ],

    seo: {
      metaTitle:
        "Pantai Nabire Menjadi Destinasi Favorit",

      metaDescription:
        "Pengamanan objek wisata Pantai Nabire oleh Polda Papua Tengah.",

      keywords: [
        "Pantai Nabire",
        "Wisata",
        "Papua Tengah",
      ],
    },
  },

  {
    id: 5,

    title:
      "Polda Papua Tengah Mengikuti Rapat Koordinasi Bersama Pemerintah Daerah",

    slug: "rapat-koordinasi-polda-pemda",

    excerpt:
      "Polda Papua Tengah menghadiri rapat koordinasi lintas instansi untuk memperkuat sinergi pelayanan kepada masyarakat.",

    content: `
Rapat koordinasi dilaksanakan bersama Pemerintah Daerah dan seluruh unsur Forkopimda.

Pembahasan difokuskan pada peningkatan keamanan, pelayanan publik serta pembangunan wilayah Papua Tengah.

Sinergitas antar instansi menjadi prioritas utama.
`,

    thumbnail: berita5,

    publishedAt: "2026-07-22",

    updatedAt: "2026-07-22",

    views: 1102,

    featured: false,

    published: true,

    breaking: false,

    pinned: false,

    type: "article",

    category: newsCategories[4],

    author: {
      id: 1,
      name: "Humas Polda Papua Tengah",
      photo: "/images/avatar/admin.png",
      position: "Administrator",
    },

    gallery: [],

    videos: [],

    attachments: [],

    tags: [
      "Forkopimda",
      "Rapat",
      "Pemda",
    ],

    seo: {
      metaTitle:
        "Rapat Koordinasi Bersama Pemerintah Daerah",

      metaDescription:
        "Sinergitas Polda Papua Tengah bersama Pemerintah Daerah.",

      keywords: [
        "Forkopimda",
        "Papua Tengah",
      ],
    },
  },

  {
    id: 6,

    title:
      "Polda Papua Tengah Melaksanakan Upacara Kenaikan Pangkat Personel",

    slug: "upacara-kenaikan-pangkat",

    excerpt:
      "Upacara kenaikan pangkat dilaksanakan sebagai bentuk penghargaan atas dedikasi personel dalam menjalankan tugas.",

    content: `
Kapolda Papua Tengah memimpin langsung upacara kenaikan pangkat personel.

Beliau berharap kenaikan pangkat menjadi motivasi untuk meningkatkan profesionalisme dan pelayanan kepada masyarakat.
`,

    thumbnail: berita6,

    publishedAt: "2026-07-23",

    updatedAt: "2026-07-23",

    views: 990,

    featured: false,

    published: true,

    breaking: false,

    pinned: false,

    type: "article",

    category: newsCategories[1],

    author: {
      id: 1,
      name: "Humas Polda Papua Tengah",
      photo: "/images/avatar/admin.png",
      position: "Administrator",
    },

    gallery: [],

    videos: [],

    attachments: [],

    tags: [
      "Upacara",
      "Pangkat",
    ],

    seo: {
      metaTitle:
        "Upacara Kenaikan Pangkat",

      metaDescription:
        "Upacara kenaikan pangkat personel Polda Papua Tengah.",

      keywords: [
        "Upacara",
        "Polri",
      ],
    },
  },

  
   {
  id: 7,

  title:
    "Personel Polda Papua Tengah Melaksanakan Patroli Dialogis Bersama Masyarakat",

  slug: "patroli-dialogis-masyarakat",

  excerpt:
    "Patroli dialogis dilakukan untuk mempererat hubungan Polri dengan masyarakat serta menjaga situasi kamtibmas tetap kondusif.",

  content: `
Patroli dialogis dilaksanakan di sejumlah titik keramaian.

Personel berdialog langsung dengan masyarakat untuk menerima masukan, memberikan imbauan kamtibmas serta meningkatkan kepercayaan publik terhadap Polri.
`,

  thumbnail: berita7,

  publishedAt: "2026-07-24",

  updatedAt: "2026-07-24",

  views: 1385,

  featured: false,

  published: true,

  breaking: false,

  pinned: false,

  type: "article",

  // ======== PERBAIKAN ADA DI SINI ========
  category: newsCategories[4],
  // ======================================

  author: {
    id: 1,
    name: "Humas Polda Papua Tengah",
    photo: "/images/avatar/admin.png",
    position: "Administrator",
  },

  gallery: [],

  videos: [],

  attachments: [],

  tags: [
    "Patroli",
    "Kamtibmas",
  ],

  seo: {
    metaTitle:
      "Patroli Dialogis Polda Papua Tengah",

    metaDescription:
      "Patroli dialogis bersama masyarakat oleh Polda Papua Tengah.",

    keywords: [
      "Patroli",
      "Kamtibmas",
      "Papua Tengah",
    ],
  },
},
];