import type { BaseEntity } from "./common";

export interface News extends BaseEntity {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  category: string;
  published: boolean;
}