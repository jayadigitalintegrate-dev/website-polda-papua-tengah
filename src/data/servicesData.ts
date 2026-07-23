export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  category: string;
  icon: string;
  url: string;
  active: boolean;
  external: boolean;
}

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "SPKT Online",
    description: "Pelayanan laporan kepolisian secara elektronik.",
    category: "Pelayanan",
    icon: "🛡️",
    url: "#",
    active: true,
    external: false,
  },
  {
    id: 2,
    title: "SKCK Online",
    description: "Pengajuan Surat Keterangan Catatan Kepolisian.",
    category: "Administrasi",
    icon: "📄",
    url: "#",
    active: true,
    external: false,
  },
  {
    id: 3,
    title: "SIM Nasional Presisi",
    description: "Pelayanan pembuatan dan perpanjangan SIM.",
    category: "Lalu Lintas",
    icon: "🚓",
    url: "#",
    active: true,
    external: false,
  },
  {
    id: 4,
    title: "Dumas Presisi",
    description: "Pengaduan masyarakat secara digital.",
    category: "Pengaduan",
    icon: "📢",
    url: "#",
    active: true,
    external: false,
  },
  {
    id: 5,
    title: "Call Center 110",
    description: "Layanan darurat Kepolisian Republik Indonesia.",
    category: "Darurat",
    icon: "☎️",
    url: "tel:110",
    active: true,
    external: false,
  },
  {
    id: 6,
    title: "Perizinan Keramaian",
    description: "Pengajuan izin kegiatan masyarakat.",
    category: "Perizinan",
    icon: "📑",
    url: "#",
    active: true,
    external: false,
  },
  {
    id: 7,
    title: "Laporan Kehilangan",
    description: "Pembuatan surat kehilangan barang.",
    category: "Pelayanan",
    icon: "📝",
    url: "#",
    active: true,
    external: false,
  },
  {
    id: 8,
    title: "Informasi Publik",
    description: "Permohonan informasi publik Polda Papua Tengah.",
    category: "Informasi",
    icon: "ℹ️",
    url: "#",
    active: true,
    external: false,
  },
];