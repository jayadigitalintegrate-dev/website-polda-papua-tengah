/* ==========================================================
   CATEGORY
========================================================== */

export interface NewsCategory {
  id: number;
  name: string;
  slug: string;
  color?: string;
}

/* ==========================================================
   AUTHOR
========================================================== */

export interface NewsAuthor {
  id: number;
  name: string;
  photo?: string;
  position?: string;
}

/* ==========================================================
   GALLERY
========================================================== */

export interface NewsGallery {
  id: number;
  image: string;
  caption: string;
}

/* ==========================================================
   ATTACHMENT
========================================================== */

export interface NewsAttachment {
  id: number;
  name: string;
  file: string;
  size: string;
}

/* ==========================================================
   VIDEO
========================================================== */

export interface NewsVideo {
  id: number;

  title: string;

  provider:
    | "youtube"
    | "mp4";

  youtubeId?: string;

  url?: string;

  thumbnail?: string;

  duration?: string;
}

/* ==========================================================
   SEO
========================================================== */

export interface NewsSEO {
  metaTitle?: string;

  metaDescription?: string;

  keywords?: string[];
}

/* ==========================================================
   NEWS
========================================================== */

export interface News {

  id: number;

  title: string;

  slug: string;

  excerpt: string;

  content: string;

  thumbnail: string;


  /* ==========================
     PUBLISH CONTROL
  ========================== */

  publishedAt: string;

  updatedAt?: string;

  status?:
    | "draft"
    | "published"
    | "archived";

  published?: boolean;

  sortOrder?: number;


  /* ==========================
     DISPLAY CONTROL
  ========================== */

  featured: boolean;

  breaking?: boolean;

  pinned?: boolean;

  allowComment?: boolean;

  showAuthor?: boolean;

  showDate?: boolean;


  /* ==========================
     ANALYTIC
  ========================== */

  views: number;


  /* ==========================
     CONTENT TYPE
  ========================== */

  type:
    | "article"
    | "video"
    | "hybrid";


  /* ==========================
     RELATION
  ========================== */

  category: NewsCategory;

  author: NewsAuthor;

  lastModifiedBy?: NewsAuthor;


  /* ==========================
     MEDIA
  ========================== */

  gallery?: NewsGallery[];

  videos?: NewsVideo[];

  attachments?: NewsAttachment[];


  /* ==========================
     META
  ========================== */

  tags?: string[];

  seo?: NewsSEO;
}
