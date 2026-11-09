import type { Service, ServiceGroup } from "../types/service";

export const serviceGroups: { id: ServiceGroup; title: string; description: string }[] = [
  {
    "id": "spkt",
    "title": "SPKT",
    "description": "Pelayanan laporan kepolisian, termasuk laporan kehilangan melalui SPKT Online."
  },
  {
    "id": "intel",
    "title": "INTEL / INTELKAM",
    "description": "Informasi layanan SKCK dan perizinan kegiatan masyarakat."
  },
  {
    "id": "lantas",
    "title": "LANTAS",
    "description": "Layanan administrasi pengemudi dan kendaraan bermotor."
  },
  {
    "id": "siber",
    "title": "SIBER",
    "description": "Informasi keamanan siber dan rencana layanan aduan siber."
  },
  {
    "id": "humas",
    "title": "HUMAS",
    "description": "Berita dan himbauan kepolisian untuk masyarakat."
  },
  {
    "id": "ops",
    "title": "OPS",
    "description": "Rencana informasi pelaksanaan operasi kepolisian."
  },
  {
    "id": "public",
    "title": "Layanan Publik Lainnya",
    "description": "Profil jajaran Polres dan informasi Call Center 110."
  }
];

export const servicesData: Service[] = [
  {
    id: 1,
    group: "spkt",
    slug: "spkt-online",
    title: "SPKT Online",
    description: "Rencana pelayanan laporan kepolisian, termasuk laporan kehilangan barang.",
    content:
      "SPKT Online direncanakan mencakup laporan kepolisian dan laporan kehilangan barang.",
    category: "Pelayanan",
    icon: "mdi:shield-check",
    color: "blue",
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
    url: "",
    sortOrder: 1,
    active: false,
    external: false,
  },

  {
    id: 2,
    group: "intel",
    slug: "skck-online",
    title: "SKCK Online",
    description: "Pengajuan Surat Keterangan Catatan Kepolisian.",
    content: "Pelayanan pembuatan dan perpanjangan SKCK.",
    category: "Administrasi",
    icon: "mdi:file-document-check",
    color: "purple",
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
    url: "",
    sortOrder: 2,
    active: false,
    external: false,
  },

  {
    id: 3,
    group: "lantas",
    slug: "sim-nasional-presisi",
    title: "SIM Nasional",
    description: "Pelayanan pembuatan dan perpanjangan SIM.",
    content: "Pelayanan SIM Nasional.",
    category: "Lalu Lintas",
    icon: "mdi:card-account-details",
    color: "green",
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
    url: "",
    sortOrder: 3,
    active: false,
    external: false,
  },

  {
  id: 4,
    group: "public",
  slug: "jajaran-polres",
  title: "Jajaran Polres",
  description: "Informasi dan profil jajaran Kepolisian Resor di wilayah Polda Papua Tengah.",
  content: "Informasi mengenai jajaran Polres di wilayah hukum Polda Papua Tengah.",
  category: "Informasi Kepolisian",
  icon: "mdi:police-station",
  color: "orange",
  requirements: [],
  procedures: [],
  url: "/polres",
  sortOrder: 4,
  active: true,
  external: false,
},

  {
    id: 5,
    group: "public",
    slug: "call-center-110",
    title: "Call Center 110",
    description: "Layanan darurat Kepolisian Republik Indonesia.",
    content: "Layanan panggilan darurat 24 jam.",
    category: "Darurat",
    icon: "mdi:phone-in-talk",
    color: "red",
    requirements: [],
    procedures: [
      "Hubungi 110.",
      "Sampaikan lokasi.",
      "Ikuti arahan petugas.",
    ],
    url: "",
    action: "call-center",
    sortOrder: 5,
    active: true,
    external: false,
  },

  {
    id: 6,
    group: "intel",
    slug: "perizinan-keramaian",
    title: "Perizinan Keramaian",
    description: "Pengajuan izin kegiatan masyarakat.",
    content: "Pelayanan izin keramaian.",
    category: "Perizinan",
    icon: "mdi:clipboard-check",
    color: "cyan",
    requirements: [
      "Proposal kegiatan",
      "KTP Penanggung Jawab",
    ],
    procedures: [
      "Ajukan permohonan.",
      "Verifikasi.",
      "Persetujuan.",
    ],
    url: "",
    sortOrder: 6,
    active: false,
    external: false,
  },

  {
    id: 7,
    group: "ops",
    slug: "informasi-pelaksanaan-operasi",
    title: "Informasi Pelaksanaan Operasi",
    description: "Rencana informasi pelaksanaan operasi kepolisian.",
    content: "Informasi pelaksanaan operasi kepolisian akan tersedia setelah layanan resmi siap.",
    category: "Operasi Kepolisian",
    icon: "mdi:shield-check",
    color: "gold",
    requirements: [],
    procedures: [],
    url: "",
    sortOrder: 7,
    active: false,
    external: false,
  },

  {
    id: 8,
    group: "siber",
    slug: "cyber-polda-papua-tengah",
    title: "Cyber Polda Papua Tengah",
    description: "Rencana layanan keamanan siber, termasuk Aduan Siber.",
    content: "Cyber Polda Papua Tengah direncanakan mencakup informasi keamanan siber dan Aduan Siber.",
    category: "Keamanan Siber",
    icon: "mdi:shield-lock",
    color: "blue",
    requirements: [],
    procedures: [],
    url: "",
    sortOrder: 8,
    active: false,
    external: true,
  },

  {
    id: 9, group: "lantas", slug: "stnk-bpkb", title: "STNK/BPKB",
    description: "Rencana layanan administrasi STNK dan BPKB.",
    content: "Layanan STNK/BPKB belum tersedia melalui gateway ini.",
    category: "Lalu Lintas", icon: "mdi:file-document", color: "green",
    requirements: [], procedures: [], url: "", sortOrder: 9, active: false, external: false,
  },
  {
    id: 10, group: "lantas", slug: "samsat", title: "Samsat",
    description: "Rencana akses layanan Samsat.",
    content: "Layanan Samsat belum tersedia melalui gateway ini.",
    category: "Lalu Lintas", icon: "mdi:car", color: "green",
    requirements: [], procedures: [], url: "", sortOrder: 10, active: false, external: false,
  },
  {
    id: 11, group: "humas", slug: "berita-dan-himbauan", title: "Berita dan Himbauan",
    description: "Baca berita dan himbauan pada website Polda Papua Tengah.",
    content: "Informasi publik melalui halaman Berita yang sudah tersedia.",
    category: "Informasi Publik", icon: "mdi:newspaper", color: "blue",
    requirements: [], procedures: [], url: "/berita", sortOrder: 11, active: true, external: false,
  },
];
