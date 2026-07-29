import { newsRepository } from "../repositories/newsRepository";

/* ===========================================================
   ALL NEWS
=========================================================== */

export const getNews = () =>
  newsRepository.getAll();

/* ===========================================================
   FEATURED
=========================================================== */

export const getFeaturedNews = () =>
  newsRepository
    .getAll()
    .find((item) => item.featured);

/* ===========================================================
   LATEST
=========================================================== */

export const getLatestNews = () =>
  newsRepository
    .getAll()
    .filter((item) => !item.featured);

/* ===========================================================
   DETAIL
=========================================================== */

export const getNewsBySlug = (
  slug: string
) =>
  newsRepository.getBySlug(slug);

/* ===========================================================
   RELATED
=========================================================== */

export const getRelatedNews = (
  slug: string,
  limit = 3
) =>
  newsRepository
    .getAll()
    .filter((item) => item.slug !== slug)
    .slice(0, limit);

/* ===========================================================
   POPULAR
=========================================================== */

export const getPopularNews = (
  limit = 5
) =>
  [...newsRepository.getAll()]
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);

/* ===========================================================
   CATEGORIES
=========================================================== */

export const getCategories = () => {
  const categories = newsRepository
    .getAll()
    .map((item) => item.category);

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
            item.slug === category.slug
        )
    ),
  ];
};