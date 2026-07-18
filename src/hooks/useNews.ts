import {
  getFeaturedNews,
  getLatestNews,
} from "../services/news.service";

export function useNews() {
  return {
    news: getLatestNews(),
    featured: getFeaturedNews(),
  };
}