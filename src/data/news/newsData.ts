import type { News } from "../../types/news";
import { newsCategories } from "./categories";

export const newsData: News[] = [
  {
    id: 1,
    title: "Kapolda Papua Tengah Memimpin Apel Pagi Bersama Personel",
    slug: "kapolda-papua-tengah-memimpin-apel-pagi",
    excerpt:
      "Kapolda Papua Tengah memimpin apel pagi dan memberikan arahan kepada seluruh personel mengenai peningkatan pelayanan kepada masyarakat.",
    content: `
      Kapolda Papua Tengah memimpin apel pagi yang diikuti oleh seluruh personel.
      Dalam arahannya beliau menekankan pentingnya profesionalisme, integritas,
      serta pelayanan humanis kepada masyarakat.
    `,
    thumbnail: "/images/news/news-1.jpg",
    publishedAt: "2026-07-18",
    updatedAt: "2026-07-18",
    views: 1520,
    featured: true,

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
    tags: ["Kapolda", "Apel", "Presisi"],
  },
];