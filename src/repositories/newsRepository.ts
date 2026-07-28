import { newsData } from "../data/news/newsData";
import type { News } from "../types/news";

export const newsRepository = {
  getAll(): News[] {
    return [...newsData].sort(
      (a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0)
    );
  },

  getPublished(): News[] {
    return this.getAll().filter(
      (item) =>
        item.status === "published" ||
        item.published === true
    );
  },

  getFeatured(): News[] {
    return this.getPublished().filter(
      (item) => item.featured
    );
  },

  getBySlug(slug: string): News | undefined {
    return this.getPublished().find(
      (item) => item.slug === slug
    );
  },

  getLatest(limit = 6): News[] {
    return this.getPublished().slice(0, limit);
  },
};