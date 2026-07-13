export interface QuickAccessItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  url: string;
  featured?: boolean;
}

export const quickAccessData: QuickAccessItem[] = [
  {
    id: 1,
    title: "SPKT Online",
    description: "Pelayanan Terpadu Kepolisian",
    icon: "lucide:shield",
    url: "/layanan/spkt",
    featured: true,
  },
  {
    id: 2,
    title: "SKCK Online",
    description: "Permohonan Surat Keterangan Catatan Kepolisian",
    icon: "lucide:file-badge",
    url: "/layanan/skck",
  },
  {
    id: 3,
    title: "SIM Online",
    description: "Perpanjangan dan Informasi SIM",
    icon: "lucide:id-card",
    url: "/layanan/sim",
  },
  {
    id: 4,
    title: "Call Center 110",
    description: "Layanan Darurat Kepolisian",
    icon: "lucide:phone-call",
    url: "/layanan/110",
    featured: true,
  },
  {
    id: 5,
    title: "Pengaduan",
    description: "Sampaikan Pengaduan Masyarakat",
    icon: "lucide:megaphone",
    url: "/pengaduan",
  },
 {
  id: 6,
  title: "Daftar Polres Wilayah Hukum Polda Papua Tengah",
  description: "Lihat seluruh Polres di wilayah hukum Polda Papua Tengah",
  icon: "lucide:map-pinned",
  url: "/polres",
},
{
  id: 7,
  title: "Berita",
  description: "Berita dan Informasi Terkini Polda Papua Tengah",
  icon: "lucide:newspaper",
  url: "/berita",
},

{
  id: 8,
  title: "Informasi Publik",
  description: "Keterbukaan Informasi Publik dan PPID",
  icon: "lucide:badge-info",
  url: "/informasi-publik",
},
];