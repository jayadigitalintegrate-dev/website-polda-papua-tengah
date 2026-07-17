export interface NewsCategory {
  id: number;
  name: string;
  slug: string;
}

export interface NewsAuthor {
  id: number;
  name: string;
  avatar?: string;
}

export interface NewsItem {
  id: number;

  title: string;

  slug: string;

  excerpt: string;

  content: string;

  thumbnail: string;

  category: NewsCategory;

  author: NewsAuthor;

  publishedAt: string;

  featured: boolean;

  views: number;
}