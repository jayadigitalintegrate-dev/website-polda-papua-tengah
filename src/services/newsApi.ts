import { API_CONFIG } from "../config/api";

import type {
  News,
  NewsAuthor,
  NewsCategory,
} from "../types/news";

/* ==========================================================
   CMS API
========================================================== */

const API_URL = `${API_CONFIG.baseUrl}/news`;

/* ==========================================================
   TYPE DARI CMS
========================================================== */

interface CmsNews {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  image: string | null;
  image_url?: string | null;
  document?: string | null;
  document_name?: string | null;
  document_url?: string | null;
  category: string;
  published_at: string | null;
  created_at: string;
}

/* ==========================================================
   HELPER
========================================================== */

function getImageUrl(
  image: string | null,
  imageUrl?: string | null
): string {
  if (imageUrl) {
    return imageUrl;
  }

  if (!image) {
    return "";
  }

  return `${API_CONFIG.baseUrl.replace(/\/api\/?$/, "")}/storage/${image}`;
}

function getDocumentUrl(
  documentUrl?: string | null,
  document?: string | null
): string | undefined {
  if (documentUrl) {
    return documentUrl;
  }

  if (!document) {
    return undefined;
  }

  return `${API_CONFIG.baseUrl.replace(/\/api\/?$/, "")}/storage/${document}`;
}

function getCategory(slug: string): NewsCategory {
  const name = slug
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");

  return {
    id: 0,
    name,
    slug,
  };
}

function getAuthor(): NewsAuthor {
  return {
    id: 0,
    name: "Humas Polda Papua Tengah",
    position: "Bidang Humas",
  };
}

/* ==========================================================
   MAPPING CMS ? NEWS REACT
========================================================== */

function mapCmsNews(item: CmsNews): News {
  const publishedDate =
    item.published_at ?? item.created_at;

  const documentUrl = getDocumentUrl(
    item.document_url,
    item.document
  );

  return {
    id: item.id,

    title: item.title,

    slug: item.slug,

    excerpt: item.excerpt ?? "",

    content: item.content,

    thumbnail: getImageUrl(
      item.image,
      item.image_url
    ),

    publishedAt: publishedDate,

    updatedAt: publishedDate,

    status: "published",

    published: true,

    featured: false,

    breaking: false,

    pinned: false,

    allowComment: true,

    showAuthor: true,

    showDate: true,

    views: 0,

    type: "article",

    category: getCategory(item.category),

    author: getAuthor(),

    gallery: [],

    videos: [],

    attachments: documentUrl
      ? [
          {
            id: item.id,
            name:
              item.document_name ??
              "Dokumen",
            file: documentUrl,
            size: "",
          },
        ]
      : [],

    tags: [],

    seo: {
      metaTitle: item.title,

      metaDescription:
        item.excerpt ?? "",
    },
  };
}

/* ==========================================================
   FETCH NEWS
========================================================== */

/* ==========================================================
   FETCH NEWS
========================================================== */

/* ==========================================================
   FETCH NEWS
========================================================== */

export async function fetchNews(): Promise<News[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(
      `Gagal mengambil berita dari CMS. HTTP ${response.status}`
    );
  }

  const result = await response.json();

  const cmsNews: CmsNews[] = Array.isArray(
    result?.value
  )
    ? result.value
    : Array.isArray(result)
      ? result
      : [];

  const mappedNews = cmsNews.map(mapCmsNews);

  return mappedNews;
}

/* ==========================================================
   FETCH SINGLE NEWS
========================================================== */

export async function fetchNewsBySlug(
  slug: string
): Promise<News | null> {
  const news = await fetchNews();

  return (
    news.find(
      (item) => item.slug === slug
    ) ?? null
  );
}


