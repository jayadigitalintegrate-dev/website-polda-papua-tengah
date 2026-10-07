import type { GalleryCategory, GalleryItem } from "../types/gallery";

import gallery1 from "../assets/berita/berita-1.webp";
import gallery2 from "../assets/berita/berita-2.webp";
import gallery3 from "../assets/berita/berita-4.webp";
import gallery4 from "../assets/berita/berita-5.webp";
import gallery5 from "../assets/berita/berita-6.webp";
import gallery6 from "../assets/berita/berita-6.webp";

/*
 * Data lokal ini HANYA dipakai sebagai fallback ketika API Galeri CMS
 * tidak tersedia/gagal. ID kategori mengikuti GalleryCategorySeeder CMS.
 */
export const galleryCategoriesFallback: GalleryCategory[] = [
  { id: 1, name: "Kegiatan Pimpinan", slug: "kegiatan-pimpinan" },
  { id: 2, name: "Pelayanan Publik", slug: "pelayanan-publik" },
  { id: 3, name: "Operasional", slug: "operasional" },
  { id: 4, name: "Sosial", slug: "sosial" },
  { id: 5, name: "Event", slug: "event" },
];

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    slug: "kapolda-papua-tengah-memimpin-apel-bersama",
    image: gallery1,
    title: "Kapolda Papua Tengah Memimpin Apel Bersama",
    description:
      "Dokumentasi kegiatan apel bersama yang dipimpin oleh Kapolda Papua Tengah.",
    category: "Kegiatan Pimpinan",
    categoryId: 1,
    categorySlug: "kegiatan-pimpinan",
    date: "22 Juli 2026",
    featured: true,
    sortOrder: 1,
    status: "published",
    kind: "single",
    isCollection: false,
    content: "",
    images: [],
  },

  {
    id: 2,
    slug: "pelayanan-publik-kepolisian",
    image: gallery2,
    title: "Pelayanan Publik Kepolisian",
    description:
      "Pelaksanaan pelayanan publik kepada masyarakat di lingkungan Polda Papua Tengah.",
    category: "Pelayanan Publik",
    categoryId: 2,
    categorySlug: "pelayanan-publik",
    date: "20 Juli 2026",
    featured: true,
    sortOrder: 2,
    status: "published",
    kind: "single",
    isCollection: false,
    content: "",
    images: [],
  },

  {
    id: 3,
    slug: "kegiatan-operasional-kepolisian",
    image: gallery3,
    title: "Kegiatan Operasional Kepolisian",
    description:
      "Dokumentasi kegiatan operasional kepolisian dalam menjaga keamanan dan ketertiban.",
    category: "Operasional",
    categoryId: 3,
    categorySlug: "operasional",
    date: "18 Juli 2026",
    featured: false,
    sortOrder: 3,
    status: "published",
    kind: "single",
    isCollection: false,
    content: "",
    images: [],
  },

  {
    id: 4,
    slug: "kegiatan-sosial-kepolisian",
    image: gallery4,
    title: "Kegiatan Sosial Kepolisian",
    description:
      "Kegiatan sosial yang dilaksanakan oleh Polda Papua Tengah bersama masyarakat.",
    category: "Sosial",
    categoryId: 4,
    categorySlug: "sosial",
    date: "15 Juli 2026",
    featured: false,
    sortOrder: 4,
    status: "published",
    kind: "single",
    isCollection: false,
    content: "",
    images: [],
  },

  {
    id: 5,
    slug: "event-polda-papua-tengah",
    image: gallery5,
    title: "Event Polda Papua Tengah",
    description:
      "Dokumentasi kegiatan dan event resmi yang diselenggarakan oleh Polda Papua Tengah.",
    category: "Event",
    categoryId: 5,
    categorySlug: "event",
    date: "10 Juli 2026",
    featured: false,
    sortOrder: 5,
    status: "published",
    kind: "single",
    isCollection: false,
    content: "",
    images: [],
  },

  {
    id: 6,
    slug: "dokumentasi-kegiatan",
    image: gallery6,
    title: "Dokumentasi Kegiatan",
    description:
      "Dokumentasi berbagai kegiatan Polda Papua Tengah.",
    category: "Kegiatan Pimpinan",
    categoryId: 1,
    categorySlug: "kegiatan-pimpinan",
    date: "5 Juli 2026",
    featured: false,
    sortOrder: 6,
    status: "published",
    kind: "single",
    isCollection: false,
    content: "",
    images: [],
  },
];



