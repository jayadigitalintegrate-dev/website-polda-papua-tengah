export type AnnouncementPriority =
  | "high"
  | "medium"
  | "low";

export type AnnouncementType =
  | "banner"
  | "popup"
  | "info";

export interface Announcement {
  id: number;

  slug: string;

  title: string;

  description: string;

  content: string;

  image?: string;

  attachment?: string;

  priority: AnnouncementPriority;

  type: AnnouncementType;

  publishStart: string;

  publishEnd: string;

  featured: boolean;

 status:
  | "published"
  | "draft"
  | "expired"
  | "archived";

  sortOrder: number;

  createdAt: string;

  updatedAt: string;
}


