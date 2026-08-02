export type PPIDCategory =
  | "Informasi Berkala"
  | "Informasi Serta Merta"
  | "Informasi Setiap Saat"
  | "Regulasi"
  | "SOP"
  | "Formulir";

export interface PPIDDocument {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: PPIDCategory;
  fileUrl: string;
  fileType: "pdf" | "doc" | "docx" | "xls" | "xlsx" | "zip";
  publishedAt: string;
  featured: boolean;
  sortOrder: number;
  status: "published" | "draft";
}

