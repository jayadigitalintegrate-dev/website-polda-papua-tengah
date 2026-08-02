import {
  newsApi,
} from "../api/news";

import type { News } from "../types/news";

export const newsRepository = {
  async getAll(): Promise<News[]> {
    const news = await newsApi.getAll();

    return [...news].sort(
      (a, b) =>
        (a.sortOrder ?? 0) -
        (b.sortOrder ?? 0)
    );
  },

  async getPublished(): Promise<News[]> {
    return this.getAll();
  },

  async getFeatured(): Promise<News[]> {
    return newsApi.getFeatured();
  },

  async getBySlug(
    slug: string
  ): Promise<News | undefined> {
    return newsApi.getBySlug(slug);
  },

  async getLatest(
    limit = 6
  ): Promise<News[]> {
    return newsApi.getLatest(limit);
  },
};