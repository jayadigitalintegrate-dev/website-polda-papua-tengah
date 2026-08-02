import type { Announcement } from "../types/announcement";

export const announcementData: Announcement[] = [
  {
    id: 1,
    slug: "pelayanan-libur-nasional",
    title: "Informasi Pelayanan Hari Libur Nasional",
    description:
      "Informasi perubahan jadwal pelayanan kepolisian selama hari libur nasional.",
    content:
      "Selama hari libur nasional, beberapa layanan kepolisian akan mengalami penyesuaian jam operasional. Masyarakat diimbau untuk memperhatikan jadwal pelayanan terbaru dan memanfaatkan layanan daring apabila tersedia.",
    image: "",
    attachment: "",
    priority: "high",
    type: "banner",
    publishStart: "2026-01-01",
    publishEnd: "2026-12-31",
    featured: true,
    status: "published",
    sortOrder: 1,
    createdAt: "2026-01-01",
    updatedAt: "2026-01-01",
  },

  {
    id: 2,
    slug: "himbauan-keamanan-masyarakat",
    title: "Himbauan Keamanan dan Ketertiban Masyarakat",
    description:
      "Mari bersama menjaga keamanan dan ketertiban lingkungan.",
    content:
      "Polda Papua Tengah mengajak seluruh masyarakat untuk meningkatkan kepedulian terhadap keamanan lingkungan, segera melaporkan kejadian mencurigakan, serta menjaga ketertiban bersama demi terciptanya situasi yang aman dan kondusif.",
    image: "",
    attachment: "",
    priority: "medium",
    type: "popup",
    publishStart: "2026-01-01",
    publishEnd: "2026-12-31",
    featured: true,
    status: "published",
    sortOrder: 2,
    createdAt: "2026-01-01",
    updatedAt: "2026-01-01",
  },

  {
    id: 3,
    slug: "informasi-ppid",
    title: "Layanan Informasi Publik PPID",
    description:
      "Masyarakat dapat mengakses layanan informasi publik melalui PPID Polda Papua Tengah.",
    content:
      "Layanan PPID disediakan untuk memenuhi kebutuhan informasi publik sesuai dengan ketentuan peraturan perundang-undangan. Permohonan informasi dapat diajukan melalui mekanisme yang telah ditetapkan.",
    image: "",
    attachment: "",
    priority: "low",
    type: "info",
    publishStart: "2026-01-01",
    publishEnd: "2026-12-31",
    featured: false,
    status: "published",
    sortOrder: 3,
    createdAt: "2026-01-01",
    updatedAt: "2026-01-01",
  },
];

