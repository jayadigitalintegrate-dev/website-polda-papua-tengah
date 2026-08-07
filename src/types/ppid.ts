export type PPIDCategory =
  | "Informasi Berkala"
  | "Informasi Serta Merta"
  | "Informasi Setiap Saat"
  | "Regulasi"
  | "SOP"
  | "Formulir"
  | string;

export interface PPIDDocument {
  id: number;
  slug: string;
  title: string;
  description: string;
  summary?: string;
  content?: string;

  category: PPIDCategory;

  fileUrl: string;
  fileType: "pdf" | "doc" | "docx" | "xls" | "xlsx" | "zip" | string;

  documentNumber?: string;
  documentName?: string;

  publishedAt: string;

  featured: boolean;
  sortOrder: number;
  status: "published" | "draft";

  viewCount?: number;
}