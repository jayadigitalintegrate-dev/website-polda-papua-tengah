import { newsData } from "../data/news/newsData";
import type { News } from "../types/news";

export const newsApi = {

  async getAll(): Promise<News[]> {
    return Promise.resolve(newsData);
  },


  async getBySlug(
    slug: string
  ): Promise<News | undefined> {
    return Promise.resolve(
      newsData.find(
        (item) => item.slug === slug
      )
    );
  },


  async getFeatured(): Promise<News[]> {
    return Promise.resolve(
      newsData.filter(
        (item) => item.featured
      )
    );
  },


  async getLatest(
    limit = 6
  ): Promise<News[]> {

    return Promise.resolve(
      [...newsData]
        .sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
        )
        .slice(0, limit)
    );
  },


  async getRelated(
    categoryId: number,
    excludeId: number
  ): Promise<News[]> {

    return Promise.resolve(
      newsData.filter(
        (item) =>
          item.category.id === categoryId &&
          item.id !== excludeId
      )
    );
  },

};
