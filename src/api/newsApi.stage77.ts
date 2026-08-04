import { newsData } from "../data/news/newsData";
import type { News } from "../types/news";
import { API_CONFIG } from "../config/api";
export function getAllNews(): News[] {
  return [...newsData];

  if (!API_CONFIG.useMock) {
  console.warn("API mode belum diimplementasikan.");
}
}



export function getPublishedNews(): News[] {
  return getAllNews().filter(
    (item) =>
      item.status === "published" ||
      item.published === true
  );
}

export function getFeaturedNews(): News[] {
  return getPublishedNews().filter(
    (item) => item.featured
  );
}

export function getNewsBySlug(
  slug: string
): News | undefined {
  return getPublishedNews().find(
    (item) => item.slug === slug
  );
}
