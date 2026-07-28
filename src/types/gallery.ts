export interface GalleryItem {
  id: number;
  slug: string;
  image: string;
  title: string;
  description: string;
  category: string;
  date: string;
  featured: boolean;
  sortOrder: number;
  status: "published" | "draft";
}
