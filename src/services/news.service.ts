import { newsRepository } from "../repositories/newsRepository";


export const getNews = () =>
  newsRepository.getPublished();


export const getFeaturedNews = () =>
  newsRepository
    .getFeatured();


export const getLatestNews = (
  limit = 6
) =>
  newsRepository
    .getPublished()
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime()
    )
    .slice(0, limit);


export const getNewsBySlug = (
  slug: string
) =>
  newsRepository.getBySlug(slug);


export const getRelatedNews = (
  slug: string,
  limit = 3
) => {

  const current =
    newsRepository.getBySlug(slug);

  if (!current) {
    return [];
  }

  return newsRepository
    .getPublished()
    .filter(
      (item) =>
        item.slug !== slug &&
        item.category.id === current.category.id
    )
    .slice(0, limit);
};


export const getPopularNews = (
  limit = 5
) =>
  [...newsRepository.getPublished()]
    .sort(
      (a, b) =>
        b.views - a.views
    )
    .slice(0, limit);


export const getCategories = () => {

  const categories =
    newsRepository
      .getPublished()
      .map(
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
