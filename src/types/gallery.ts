export type GalleryKind = "single" | "documentation" | "media_center";

export interface GalleryItem {
  id: number;
  slug: string;
  image: string;
  title: string;
  description: string;
  category: string;
  categoryId: number;
  categorySlug: string;
  date: string;
  featured: boolean;
  sortOrder: number;
  status: "published" | "draft";
  /** single = foto tunggal; documentation = Galeri Dokumentasi; media_center = konten editorial. */
  kind: GalleryKind;
  /** true untuk item berisi 1–5 foto child (Galeri Dokumentasi & Media Center). */
  isCollection: boolean;
  /** Isi berita/editorial (hanya Media Center); teks biasa. */
  content: string;
  /** Foto child koleksi; kosong untuk item foto tunggal. */
  images: GalleryPhoto[];
}

export interface GalleryPhoto {
  id: number;
  image: string;
  sortOrder: number;
}

export interface GalleryCategory {
  id: number;
  name: string;
  slug: string;
}

export interface GalleryData {
  categories: GalleryCategory[];
  items: GalleryItem[];
  source: "cms" | "snapshot" | "fallback";
}
