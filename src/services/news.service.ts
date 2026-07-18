import { newsData } from "../data/news/newsData";

/* ===========================================================
   ALL NEWS
=========================================================== */

export const getNews = () => newsData;

/* ===========================================================
   FEATURED
=========================================================== */

export const getFeaturedNews = () =>
  newsData.find((item) => item.featured);

/* ===========================================================
   LATEST
=========================================================== */

export const getLatestNews = () =>
  newsData.filter((item) => !item.featured);

/* ===========================================================
   DETAIL
=========================================================== */

export const getNewsBySlug = (
  slug: string
) =>
  newsData.find(
    (item) => item.slug === slug
  );

/* ===========================================================
   RELATED
=========================================================== */

export const getRelatedNews = (
  slug: string,
  limit = 3
) =>
  newsData
    .filter((item) => item.slug !== slug)
    .slice(0, limit);

/* ===========================================================
   POPULAR
=========================================================== */

export const getPopularNews = (
  limit = 5
) =>
  [...newsData]
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);

/* ===========================================================
   CATEGORIES
=========================================================== */

export const getCategories = () => {
  const categories = newsData.map(
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
            item.slug === category.slug
        )
    ),
  ];
};