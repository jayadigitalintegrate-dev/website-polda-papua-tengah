export interface SearchItem {
  id: number;
  title: string;
  category: string;
  url: string;
}

export const searchData: SearchItem[] = [
  {
    id: 1,
    title: "Beranda",
    category: "Halaman",
    url: "/",
  },
  {
    id: 2,
    title: "Profil Polda Papua Tengah",
    category: "Profil",
    url: "/profil",
  },
  {
    id: 3,
    title: "Pejabat Utama",
    category: "Pejabat",
    url: "/officials",
  },
  {
    id: 4,
    title: "Berita",
    category: "Berita",
    url: "/berita",
  },
  {
    id: 5,
    title: "Layanan Kepolisian",
    category: "Layanan",
    url: "/layanan",
  },
  {
    id: 6,
    title: "Kontak",
    category: "Kontak",
    url: "/kontak",
  }
];