export interface ServiceItem {
  id: number;
  slug: string;

  title: string;
  description: string;
  content: string;

  category: string;
  icon: string;

  requirements: string[];
  procedures: string[];

  url: string;

  sortOrder: number;

  active: boolean;
  external: boolean;
}

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    slug: "spkt-online",
    title: "SPKT Online",
    description: "Pelayanan laporan kepolisian secara elektronik.",
    content:
      "SPKT Online merupakan layanan untuk membantu masyarakat dalam memperoleh pelayanan kepolisian secara cepat, transparan, dan profesional.",
    category: "Pelayanan",
    icon: "ðŸ›¡ï¸",
    requirements: [
      "KTP atau identitas diri.",
      "Menjelaskan kronologi kejadian.",
      "Dokumen pendukung (jika ada).",
    ],
    procedures: [
      "Registrasi.",
      "Verifikasi identitas.",
      "Petugas menerima laporan.",
      "Laporan diproses.",
      "Pemohon menerima bukti laporan.",
    ],
    url: "#",
    sortOrder: 1,
    active: true,
    external: false,
  },
  {
    id: 2,
    slug: "skck-online",
    title: "SKCK Online",
    description: "Pengajuan Surat Keterangan Catatan Kepolisian.",
    content: "Pelayanan pembuatan dan perpanjangan SKCK.",
    category: "Administrasi",
    icon: "ðŸ“„",
    requirements: [
      "KTP",
      "KK",
      "Pas Foto",
    ],
    procedures: [
      "Registrasi.",
      "Unggah dokumen.",
      "Verifikasi.",
      "SKCK diterbitkan.",
    ],
    url: "#",
    sortOrder: 2,
    active: true,
    external: false,
  },
  {
    id: 3,
    slug: "sim-nasional-presisi",
    title: "SIM Nasional Presisi",
    description: "Pelayanan pembuatan dan perpanjangan SIM.",
    content: "Pelayanan SIM Nasional Presisi.",
    category: "Lalu Lintas",
    icon: "ðŸš“",
    requirements: [
      "KTP",
      "Surat Kesehatan",
      "Tes Psikologi",
    ],
    procedures: [
      "Registrasi.",
      "Verifikasi.",
      "Pembayaran.",
      "Penerbitan SIM.",
    ],
    url: "#",
    sortOrder: 3,
    active: true,
    external: false,
  },
  {
    id: 4,
    slug: "dumas-presisi",
    title: "Dumas Presisi",
    description: "Pengaduan masyarakat secara digital.",
    content: "Layanan pengaduan masyarakat berbasis digital.",
    category: "Pengaduan",
    icon: "ðŸ“¢",
    requirements: [
      "Identitas",
      "Bukti pendukung",
    ],
    procedures: [
      "Isi formulir.",
      "Unggah bukti.",
      "Kirim laporan.",
      "Monitoring status.",
    ],
    url: "#",
    sortOrder: 4,
    active: true,
    external: false,
  },
  {
    id: 5,
    slug: "call-center-110",
    title: "Call Center 110",
    description: "Layanan darurat Kepolisian Republik Indonesia.",
    content: "Layanan panggilan darurat 24 jam.",
    category: "Darurat",
    icon: "â˜Žï¸",
    requirements: [],
    procedures: [
      "Hubungi 110.",
      "Sampaikan lokasi.",
      "Ikuti arahan petugas.",
    ],
    url: "tel:110",
    sortOrder: 5,
    active: true,
    external: false,
  },
  {
    id: 6,
    slug: "perizinan-keramaian",
    title: "Perizinan Keramaian",
    description: "Pengajuan izin kegiatan masyarakat.",
    content: "Pelayanan izin keramaian.",
    category: "Perizinan",
    icon: "ðŸ“‘",
    requirements: [
      "Proposal kegiatan",
      "KTP Penanggung Jawab",
    ],
    procedures: [
      "Ajukan permohonan.",
      "Verifikasi.",
      "Persetujuan.",
    ],
    url: "#",
    sortOrder: 6,
    active: true,
    external: false,
  },
  {
    id: 7,
    slug: "laporan-kehilangan",
    title: "Laporan Kehilangan",
    description: "Pembuatan surat kehilangan barang.",
    content: "Pelayanan surat kehilangan.",
    category: "Pelayanan",
    icon: "ðŸ“‹",
    requirements: [
      "KTP",
      "Data barang yang hilang",
    ],
    procedures: [
      "Registrasi.",
      "Verifikasi.",
      "Penerbitan surat.",
    ],
    url: "#",
    sortOrder: 7,
    active: true,
    external: false,
  },
];
