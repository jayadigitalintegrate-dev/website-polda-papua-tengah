import { newsRepository } from "../repositories/newsRepository";

export const newsService = {
  async getNews() {
    return newsRepository.getPublished();
  },

  async getFeaturedNews() {
    return newsRepository.getFeatured();
  },

  async getLatestNews(limit = 6) {
    const news = await newsRepository.getPublished();

    return [...news]
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() -
          new Date(a.publishedAt).getTime()
      )
      .slice(0, limit);
  },

  async getNewsBySlug(slug: string) {
    return newsRepository.getBySlug(slug);
  },

  async getRelatedNews(
    slug: string,
    limit = 3
  ) {
    const current =
      await newsRepository.getBySlug(slug);

    if (!current) {
      return [];
    }

    const news =
      await newsRepository.getPublished();

    return news
      .filter(
        (item) =>
          item.slug !== slug &&
          item.category.slug ===
            current.category.slug
      )
      .slice(0, limit);
  },

  async getPopularNews(limit = 5) {
    const news =
      await newsRepository.getPublished();

    return [...news]
      .sort(
        (a, b) =>
          b.views - a.views
      )
      .slice(0, limit);
  },

  async getCategories() {
    const news =
      await newsRepository.getPublished();

    const categories =
      news.map(
        (item) => item.category
      );

    return [
      {
        id: 0,
        name: "Semua",
        slug: "all",
      },

      ...categories.filter(
        (category, index, self) =>
          index ===
          self.findIndex(
            (item) =>
              item.slug ===
              category.slug
          )
      ),
    ];
  },
};
export const getNews = () =>
  newsService.getNews();

export const getFeaturedNews = () =>
  newsService.getFeaturedNews();

export const getLatestNews = (limit = 6) =>
  newsService.getLatestNews(limit);

export const getNewsBySlug = (slug: string) =>
  newsService.getNewsBySlug(slug);

export const getRelatedNews = (slug: string, limit = 3) =>
  newsService.getRelatedNews(slug, limit);

export const getPopularNews = (limit = 5) =>
  newsService.getPopularNews(limit);

export const getCategories = () =>
  newsService.getCategories();
