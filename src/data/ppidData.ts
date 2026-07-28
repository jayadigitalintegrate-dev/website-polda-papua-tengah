import type { PPIDDocument } from "../types/ppid";

export const ppidDocuments: PPIDDocument[] = [
  {
    id: 1,
    slug: "daftar-informasi-publik",
    title: "Daftar Informasi Publik",
    description: "Daftar informasi publik Polda Papua Tengah.",
    category: "Informasi Berkala",
    fileUrl: "#",
    fileType: "pdf",
    publishedAt: "2026-01-01",
    featured: true,
    sortOrder: 1,
    status: "published",
  },
  {
    id: 2,
    slug: "standar-operasional-pelayanan-informasi",
    title: "Standar Operasional Pelayanan Informasi",
    description: "Standar operasional pelayanan informasi publik.",
    category: "SOP",
    fileUrl: "#",
    fileType: "pdf",
    publishedAt: "2026-01-01",
    featured: true,
    sortOrder: 2,
    status: "published",
  },
  {
    id: 3,
    slug: "formulir-permohonan-informasi",
    title: "Formulir Permohonan Informasi Publik",
    description: "Formulir permohonan informasi publik.",
    category: "Formulir",
    fileUrl: "#",
    fileType: "pdf",
    publishedAt: "2026-01-01",
    featured: false,
    sortOrder: 3,
    status: "published",
  },
  {
    id: 4,
    slug: "formulir-keberatan-informasi",
    title: "Formulir Keberatan Informasi Publik",
    description: "Formulir keberatan informasi publik.",
    category: "Formulir",
    fileUrl: "#",
    fileType: "pdf",
    publishedAt: "2026-01-01",
    featured: false,
    sortOrder: 4,
    status: "published",
  },
];

export interface PPIDFaqItem {
  question: string;
  answer: string;
}

export const ppidFaq: PPIDFaqItem[] = [
  {
    question: "Apa itu PPID Polda Papua Tengah?",
    answer:
      "PPID Polda Papua Tengah adalah layanan pengelola informasi publik yang bertugas menyediakan informasi kepolisian kepada masyarakat sesuai ketentuan keterbukaan informasi publik.",
  },
  {
    question: "Bagaimana cara mengajukan permohonan informasi?",
    answer:
      "Masyarakat dapat mengajukan permohonan informasi melalui layanan PPID secara langsung maupun melalui portal online yang tersedia.",
  },
  {
    question: "Berapa lama proses permohonan informasi?",
    answer:
      "Permohonan informasi akan diproses sesuai ketentuan pelayanan informasi publik yang berlaku.",
  },
  {
    question: "Apakah semua informasi dapat diberikan?",
    answer:
      "Tidak semua informasi dapat diberikan. Informasi tertentu dapat dikecualikan sesuai peraturan perundang-undangan.",
  },
];

export interface PPIDTimelineStep {
  number: string;
  title: string;
  description: string;
}

export const ppidTimeline: PPIDTimelineStep[] = [
  {
    number: "01",
    title: "Mengajukan Permohonan",
    description:
      "Pemohon mengisi formulir permohonan informasi dengan data diri dan informasi yang dibutuhkan.",
  },
  {
    number: "02",
    title: "Verifikasi Data",
    description:
      "Petugas PPID melakukan pemeriksaan kelengkapan identitas dan permohonan informasi.",
  },
  {
    number: "03",
    title: "Proses Informasi",
    description:
      "PPID melakukan koordinasi dengan Satker terkait untuk menyiapkan informasi yang dimohon.",
  },
  {
    number: "04",
    title: "Pemberian Jawaban",
    description:
      "Pemohon menerima informasi atau pemberitahuan sesuai ketentuan pelayanan informasi publik.",
  },
];

export interface PPIDInfoType {
  title: string;
  description: string;
}

export const ppidInfoTypes: PPIDInfoType[] = [
  {
    title: "Informasi Berkala",
    description:
      "Informasi yang wajib disediakan dan diumumkan secara rutin oleh badan publik kepada masyarakat.",
  },
  {
    title: "Informasi Setiap Saat",
    description:
      "Informasi yang wajib tersedia setiap saat dan dapat diberikan berdasarkan permohonan informasi publik.",
  },
  {
    title: "Informasi Serta Merta",
    description:
      "Informasi yang berkaitan dengan kepentingan umum dan harus segera diumumkan kepada masyarakat.",
  },
  {
    title: "Informasi Dikecualikan",
    description:
      "Informasi tertentu yang tidak dapat diberikan karena memiliki batasan sesuai ketentuan peraturan.",
  },
];

export interface PPIDRightsData {
  rights: string[];
  obligations: string[];
}

export const ppidRights: PPIDRightsData = {
  rights: [
    "Memperoleh informasi publik sesuai dengan ketentuan peraturan yang berlaku.",
    "Melihat, mengetahui, dan memperoleh salinan informasi publik.",
    "Mengajukan permohonan informasi beserta alasan permintaan.",
    "Mendapatkan pelayanan informasi yang cepat, mudah, dan transparan.",
    "Mengajukan keberatan apabila pelayanan informasi tidak sesuai ketentuan.",
  ],
  obligations: [
    "Menggunakan informasi publik secara bertanggung jawab.",
    "Tidak menyalahgunakan informasi yang diperoleh.",
    "Mencantumkan sumber informasi apabila digunakan untuk publikasi.",
    "Mematuhi peraturan perundang-undangan yang berlaku.",
  ],
};

export interface PPIDContactData {
  organization: string;
  email: string;
  serviceHours: string;
}

export const ppidContact: PPIDContactData = {
  organization: "Bidang Humas Polda Papua Tengah",
  email: "ppid@poldapapuatengah.go.id",
  serviceHours: "Senin - Jumat 08.00 - 15.00",
};
