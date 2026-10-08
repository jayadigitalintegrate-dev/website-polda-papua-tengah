import { API_CONFIG } from "../config/api";
import {
  galleryCategoriesFallback,
  galleryData,
} from "../data/galleryData";
import type {
  GalleryCategory,
  GalleryData,
  GalleryItem,
  GalleryKind,
} from "../types/gallery";

import { resolveHomepageMediaUrl } from "../services/homepageSnapshot";

/* ==========================================================
   CMS API
========================================================== */

const API_URL = API_CONFIG.baseUrl
  ? `${API_CONFIG.baseUrl}/galleries`
  : "";

/* ==========================================================
   TYPE DARI CMS (GET /api/galleries)
========================================================== */

interface CmsGalleryCategory {
  id: number;
  name: string;
  slug: string;
  sort_order?: number;
}

interface CmsGalleryItem {
  id: number;
  title: string;
  slug: string;
  description: string | null;
  image: string | null;
  image_url?: string | null;
  gallery_category_id: number;
  category?: CmsGalleryCategory | null;
  taken_at: string | null;
  featured?: boolean | number;
  sort_order?: number;
  status?: string;
  created_at?: string | null;
  is_collection?: boolean;
  type?: string;
  content?: string | null;
  date?: string | null;
  images?: CmsGalleryImage[];
}

interface CmsGalleryImage {
  id: number;
  image: string | null;
  image_url?: string | null;
  sort_order?: number;
}

interface CmsGalleryResponse {
  categories: CmsGalleryCategory[];
  data: CmsGalleryItem[];
}

/* ==========================================================
   HELPERS
========================================================== */

function getImageUrl(item: {
  image: string | null;
  image_url?: string | null;
}): string {
  if (item.image_url) {
    return resolveHomepageMediaUrl(item.image_url) ?? "";
  }

  if (!item.image) {
    return "";
  }

  return `${API_CONFIG.baseUrl.replace(
    /\/api\/?$/,
    ""
  )}/storage/${item.image}`;
}

function formatDate(value?: string | null): string {
  if (!value) {
    return "";
  }

  // taken_at berupa "YYYY-MM-DD"; tambahkan jam agar tidak bergeser zona waktu.
  const date = new Date(
    /^\d{4}-\d{2}-\d{2}$/.test(value)
      ? `${value}T00:00:00`
      : value
  );

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function mapCmsGallery(
  item: CmsGalleryItem,
  categoriesById: Map<number, GalleryCategory>
): GalleryItem {
  const category =
    categoriesById.get(item.gallery_category_id) ??
    (item.category
      ? {
          id: item.category.id,
          name: item.category.name,
          slug: item.category.slug,
        }
      : undefined);

  return {
    id: item.id,
    slug: item.slug,
    image: getImageUrl(item),
    title: item.title,
    description: item.description ?? "",
    category: category?.name ?? "",
    categoryId: item.gallery_category_id,
    categorySlug: category?.slug ?? "",
    date: formatDate(item.taken_at ?? item.created_at),
    featured: Boolean(item.featured),
    sortOrder: Number(item.sort_order ?? 0),
    status: "published",
    kind: toKind(item),
    isCollection: Boolean(item.is_collection),
    content: item.content ?? "",
    images: (item.images ?? [])
      .map((photo) => ({
        id: photo.id,
        image: getImageUrl(photo),
        sortOrder: Number(photo.sort_order ?? 0),
      }))
      .filter((photo) => photo.image !== ""),
  };
}

function toKind(item: CmsGalleryItem): GalleryKind {
  if (item.type === "media_center" || item.type === "documentation") {
    return item.type;
  }

  return item.is_collection ? "documentation" : "single";
}

function mapGalleryResponse(
  result: CmsGalleryResponse,
  source: "cms" | "snapshot"
): GalleryData {
  if (
    !Array.isArray(result?.categories) ||
    !Array.isArray(result?.data)
  ) {
    throw new Error("Format response Galeri tidak valid.");
  }

  const categories: GalleryCategory[] =
    result.categories.map((category) => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
    }));

  const categoriesById = new Map(
    categories.map((category) => [
      category.id,
      category,
    ])
  );

  return {
    categories,
    items: result.data.map((item) =>
      mapCmsGallery(item, categoriesById)
    ),
    source,
  };
}

async function loadGallerySnapshot(): Promise<GalleryData> {
  const response = await fetch(
    import.meta.env.BASE_URL + "data/galleries.json",
    {
      cache: "no-cache",
      signal: AbortSignal.timeout(API_CONFIG.timeout),
    }
  );

  if (!response.ok) {
    throw new Error(
      "Gagal mengambil snapshot Galeri. HTTP " +
        response.status
    );
  }

  const result =
    (await response.json()) as CmsGalleryResponse;

  return mapGalleryResponse(
    result,
    "snapshot"
  );
}

function getFallbackGallery(): GalleryData {
  return {
    categories: galleryCategoriesFallback,
    items: galleryData,
    source: "fallback",
  };
}

/* ==========================================================
   FETCH GALLERY
========================================================== */

/*
 * Satu request untuk kategori + seluruh item; pemanggilan bersamaan
 * berbagi Promise yang sama. Bukan cache — referensi dibersihkan
 * setelah request selesai/gagal.
 */
let inFlightGallery: Promise<GalleryData> | null = null;

export function fetchGallery(): Promise<GalleryData> {
  if (!inFlightGallery) {
    inFlightGallery = loadGallery().finally(() => {
      inFlightGallery = null;
    });
  }

  return inFlightGallery;
}

async function loadGallery(): Promise<GalleryData> {
  if (!API_URL) {
    try {
      return await loadGallerySnapshot();
    } catch (error) {
      console.warn(
        "Snapshot Galeri tidak tersedia. Menggunakan Galeri lokal.",
        error
      );

      return getFallbackGallery();
    }
  }

  try {
    const response = await fetch(API_URL, {
      signal: AbortSignal.timeout(
        API_CONFIG.timeout
      ),
    });

    if (!response.ok) {
      throw new Error(
        `Gagal mengambil Galeri dari CMS. HTTP ${response.status}`
      );
    }

    const result =
      (await response.json()) as CmsGalleryResponse;

    return mapGalleryResponse(
      result,
      "cms"
    );
  } catch (error) {
    console.warn(
      "CMS Galeri tidak dapat diakses. Mencoba snapshot Galeri.",
      error
    );

    try {
      return await loadGallerySnapshot();
    } catch (snapshotError) {
      console.warn(
        "Snapshot Galeri tidak tersedia. Menggunakan Galeri lokal.",
        snapshotError
      );

      return getFallbackGallery();
    }
  }
}
