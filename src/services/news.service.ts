import type { NewsItem } from "../types/news";

import berita1 from "../assets/berita/berita-1.jpg";
import berita2 from "../assets/berita/berita-2.jpg";
import berita3 from "../assets/berita/berita-3.jpg";
import berita4 from "../assets/berita/berita-4.jpg";
import berita5 from "../assets/berita/berita-5.jpg";
import berita6 from "../assets/berita/berita-6.jpg";
import berita7 from "../assets/berita/berita-7.jpg";

const news: NewsItem[] = [
  {
    id: 1,
    title: "Kapolda Papua Tengah Pimpin Apel Gelar Pasukan",
    slug: "kapolda-pimpin-apel",

    excerpt:
      "Kapolda Papua Tengah memimpin apel gelar pasukan dalam rangka pengamanan wilayah.",

    content:
      "Kapolda Papua Tengah memimpin apel gelar pasukan sebagai bentuk kesiapan personel dalam menjaga keamanan dan ketertiban masyarakat di wilayah hukum Polda Papua Tengah.",

    thumbnail: berita1,

    category: {
      id: 1,
      name: "Berita Utama",
      slug: "berita-utama",
    },

    author: {
      id: 1,
      name: "Humas Polda Papua Tengah",
    },

    publishedAt: "17 Juli 2026",

    featured: true,

    views: 1234,
  },

  {
    id: 2,
    title: "Ditlantas Gelar Operasi Keselamatan Berkendara",
    slug: "operasi-keselamatan-berkendara",

    excerpt:
      "Operasi keselamatan dilakukan untuk meningkatkan disiplin berlalu lintas masyarakat.",

    content:
      "Direktorat Lalu Lintas melaksanakan operasi keselamatan dengan pendekatan edukatif kepada masyarakat pengguna jalan.",

    thumbnail: berita2,

    category: {
      id: 2,
      name: "Lalu Lintas",
      slug: "lalu-lintas",
    },

    author: {
      id: 1,
      name: "Humas Polda Papua Tengah",
    },

    publishedAt: "16 Juli 2026",

    featured: false,

    views: 986,
  },

  {
    id: 3,
    title: "Bakti Sosial Polri Peduli Masyarakat",
    slug: "bakti-sosial-polri",

    excerpt:
      "Polda Papua Tengah menyalurkan bantuan sosial kepada masyarakat yang membutuhkan.",

    content:
      "Kegiatan bakti sosial merupakan bentuk kepedulian Polri terhadap masyarakat serta mempererat hubungan antara Polri dan warga.",

    thumbnail: berita3,

    category: {
      id: 3,
      name: "Sosial",
      slug: "sosial",
    },

    author: {
      id: 1,
      name: "Humas Polda Papua Tengah",
    },

    publishedAt: "15 Juli 2026",

    featured: false,

    views: 845,
  },

  {
    id: 4,
    title: "Pengamanan Ibadah Berjalan Aman dan Lancar",
    slug: "pengamanan-ibadah",

    excerpt:
      "Personel Polda Papua Tengah melaksanakan pengamanan kegiatan ibadah di berbagai lokasi.",

    content:
      "Pengamanan dilakukan untuk memberikan rasa aman kepada masyarakat dalam menjalankan ibadah.",

    thumbnail: berita4,

    category: {
      id: 1,
      name: "Berita Utama",
      slug: "berita-utama",
    },

    author: {
      id: 1,
      name: "Humas Polda Papua Tengah",
    },

    publishedAt: "14 Juli 2026",

    featured: false,

    views: 721,
  },

  {
    id: 5,
    title: "Pelayanan SIM Keliling Hadir di Nabire",
    slug: "sim-keliling-nabire",

    excerpt:
      "Pelayanan SIM Keliling kembali hadir untuk memudahkan masyarakat memperpanjang SIM.",

    content:
      "Program SIM Keliling memberikan kemudahan akses pelayanan kepada masyarakat di berbagai wilayah.",

    thumbnail: berita5,

    category: {
      id: 4,
      name: "Pelayanan",
      slug: "pelayanan",
    },

    author: {
      id: 1,
      name: "Humas Polda Papua Tengah",
    },

    publishedAt: "13 Juli 2026",

    featured: false,

    views: 654,
  },

  {
    id: 6,
    title: "Tim Patroli Tingkatkan Keamanan Malam Hari",
    slug: "patroli-malam",

    excerpt:
      "Patroli rutin terus ditingkatkan untuk menjaga situasi kamtibmas tetap kondusif.",

    content:
      "Patroli dilakukan pada titik-titik rawan guna mencegah gangguan keamanan dan ketertiban masyarakat.",

    thumbnail: berita6,

    category: {
      id: 1,
      name: "Berita Utama",
      slug: "berita-utama",
    },

    author: {
      id: 1,
      name: "Humas Polda Papua Tengah",
    },

    publishedAt: "12 Juli 2026",

    featured: false,

    views: 602,
  },

  {
    id: 7,
    title: "Peningkatan Pelayanan Publik Berbasis Digital",
    slug: "pelayanan-publik-digital",

    excerpt:
      "Transformasi digital terus dilakukan untuk meningkatkan kualitas pelayanan kepada masyarakat.",

    content:
      "Polda Papua Tengah terus mengembangkan pelayanan berbasis digital sebagai bagian dari transformasi menuju Polri Presisi.",

    thumbnail: berita7,

    category: {
      id: 4,
      name: "Pelayanan",
      slug: "pelayanan",
    },

    author: {
      id: 1,
      name: "Humas Polda Papua Tengah",
    },

    publishedAt: "11 Juli 2026",

    featured: false,

    views: 587,
  },
];

/* ===========================================================
   NEWS
=========================================================== */

export const getNews = () => news;

/* ===========================================================
   FEATURED
=========================================================== */

export const getFeaturedNews = () =>
  news.find((item) => item.featured);

/* ===========================================================
   LATEST
=========================================================== */

export const getLatestNews = () =>
  news.filter((item) => !item.featured);

/* ===========================================================
   DETAIL
=========================================================== */

export const getNewsBySlug = (slug: string) =>
  news.find((item) => item.slug === slug);

/* ===========================================================
   RELATED NEWS
=========================================================== */

export const getRelatedNews = (
  slug: string,
  limit = 3
) =>
  news
    .filter((item) => item.slug !== slug)
    .slice(0, limit);

/* ===========================================================
   POPULAR NEWS
=========================================================== */

export const getPopularNews = (
  limit = 5
) =>
  [...news]
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);

/* ===========================================================
   CATEGORIES
=========================================================== */

export const getCategories = () =>
  [...new Set(news.map((item) => item.category.name))];

/* ===========================================================
   NEWS BY CATEGORY
=========================================================== */

export const getNewsByCategory = (
  categorySlug: string
) =>
  news.filter(
    (item) => item.category.slug === categorySlug
  );