import { newsData } from "../data/news/newsData";
import type { News } from "../types/news";

export const newsApi = {
  async getAll(): Promise<News[]> {
    return Promise.resolve(newsData);
  },

  async getBySlug(slug: string): Promise<News | undefined> {
    return Promise.resolve(
      newsData.find((item) => item.slug === slug)
    );
  },
};