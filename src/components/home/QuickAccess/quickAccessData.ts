export interface QuickAccessItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  url: string;

  badge?: string;

  featured?: boolean;
}

export const quickAccessData: QuickAccessItem[] = [
  {
    id: 1,
    title: "SPKT Online",
    description: "Pelayanan Terpadu Kepolisian",
    icon: "lucide:shield",
    url: "/layanan/spkt",
    badge: "24 JAM",
    featured: true,
  },

  {
    id: 2,
    title: "SKCK Online",
    description: "Permohonan Surat Keterangan Catatan Kepolisian",
    icon: "lucide:file-badge",
    url: "/layanan/skck",
    badge: "ONLINE",
  },

  {
    id: 3,
    title: "SIM Online",
    description: "Perpanjangan dan Informasi SIM",
    icon: "lucide:id-card",
    url: "/layanan/sim",
    badge: "ONLINE",
  },

  {
    id: 4,
    title: "Call Center 110",
    description: "Layanan Darurat Kepolisian",
    icon: "lucide:phone-call",
    url: "/layanan/110",
    badge: "DARURAT",
    featured: true,
  },

  {
    id: 5,
    title: "Pengaduan",
    description: "Sampaikan Pengaduan Masyarakat",
    icon: "lucide:megaphone",
    url: "/pengaduan",
    badge: "BARU",
  },

  {
    id: 6,
    title: "Daftar Polres",
    description:
      "Lihat seluruh Polres di wilayah hukum Polda Papua Tengah",
    icon: "lucide:map-pinned",
    url: "/polres",
    badge: "INFO",
  },

  {
    id: 7,
    title: "Berita",
    description:
      "Berita dan Informasi Terkini Polda Papua Tengah",
    icon: "lucide:newspaper",
    url: "/berita",
    badge: "UPDATE",
  },

  {
    id: 8,
    title: "Informasi Publik",
    description:
      "Keterbukaan Informasi Publik dan PPID",
    icon: "lucide:badge-info",
    url: "/informasi-publik",
    badge: "PPID",
  },
];