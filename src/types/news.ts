export interface NewsCategory {
  id: number;
  name: string;
  slug: string;
}

export interface NewsAuthor {
  id: number;
  name: string;

  /**
   * Optional
   * Nanti akan diisi dari CMS
   */
  photo?: string;
  position?: string;
}

export interface NewsAttachment {
  id: number;
  name: string;
  file: string;
  size: string;
}

export interface NewsGallery {
  id: number;
  image: string;
  caption: string;
}

export interface NewsVideo {
  id: number;
  title: string;
  youtubeId: string;
}

export interface News {
  id: number;

  title: string;

  slug: string;

  excerpt: string;

  content: string;

  thumbnail: string;

  publishedAt: string;

  updatedAt?: string;

  views: number;

  featured: boolean;

  category: NewsCategory;

  author: NewsAuthor;

  /**
   * Optional
   * Tidak semua berita memiliki galeri
   */
  gallery?: NewsGallery[];

  /**
   * Optional
   * Tidak semua berita memiliki video
   */
  videos?: NewsVideo[];

  /**
   * Optional
   * Tidak semua berita memiliki lampiran
   */
  attachments?: NewsAttachment[];

  /**
   * Optional
   * Tidak semua berita memiliki tag
   */
  tags?: string[];
}