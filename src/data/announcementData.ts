import type { Announcement } from "../types/announcement";

export const announcementData: Announcement[] = [
  {
    id: 1,
    slug: "pelayanan-libur-nasional",
    title: "Informasi Pelayanan Hari Libur Nasional",
    description:
      "Informasi perubahan jadwal pelayanan kepolisian selama hari libur nasional.",
    priority: "high",
    type: "banner",
    publishStart: "2026-01-01",
    publishEnd: "2026-12-31",
    featured: true,
    status: "published",
  },

  {
    id: 2,
    slug: "himbauan-keamanan-masyarakat",
    title: "Himbauan Keamanan dan Ketertiban Masyarakat",
    description:
      "Mari bersama menjaga keamanan dan ketertiban lingkungan.",
    priority: "medium",
    type: "popup",
    publishStart: "2026-01-01",
    publishEnd: "2026-12-31",
    featured: true,
    status: "published",
  },

  {
    id: 3,
    slug: "informasi-ppid",
    title: "Layanan Informasi Publik PPID",
    description:
      "Masyarakat dapat mengakses layanan informasi publik melalui PPID Polda Papua Tengah.",
    priority: "low",
    type: "info",
    publishStart: "2026-01-01",
    publishEnd: "2026-12-31",
    featured: false,
    status: "published",
  },
];
