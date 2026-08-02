import type { News } from "../types/news";
import { fetchNews, fetchNewsBySlug } from "../services/newsApi";

export const newsApi = {

  async getAll(): Promise<News[]> {
    return fetchNews();
  },

  async getBySlug(
    slug: string
  ): Promise<News | undefined> {

    const news = await fetchNewsBySlug(slug);

    return news ?? undefined;
  },

  async getFeatured(): Promise<News[]> {

    const news = await fetchNews();

    return news.filter(
      (item) => item.featured
    );
  },

  async getLatest(
    limit = 6
  ): Promise<News[]> {

    const news = await fetchNews();

    return [...news]
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() -
          new Date(a.publishedAt).getTime()
      )
      .slice(0, limit);
  },

  async getRelated(
    categoryId: number,
    excludeId: number
  ): Promise<News[]> {

    const news = await fetchNews();

    return news.filter(
      (item) =>
        item.category.id === categoryId &&
        item.id !== excludeId
    );
  },

};
