import news1 from "../assets/news/news1.jpg";
import news2 from "../assets/news/news2.jpg";
import news3 from "../assets/news/news3.jpg";
import news4 from "../assets/news/news4.jpg";
import news5 from "../assets/news/news5.jpg";

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  slug: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Kapolda Papua Tengah Pimpin Apel Gelar Pasukan",
    excerpt:
      "Kapolda Papua Tengah memimpin apel gelar pasukan dalam rangka meningkatkan kesiapsiagaan personel.",
    category: "Kegiatan Kapolda",
    date: "14 Juli 2026",
    image: news1,
    slug: "kapolda-pimpin-apel-gelar-pasukan",
  },
  {
    id: 2,
    title: "Pelayanan SIM Tetap Berjalan Normal",
    excerpt: "Pelayanan SIM berjalan normal sesuai jadwal operasional.",
    category: "Pelayanan",
    date: "13 Juli 2026",
    image: news2,
    slug: "pelayanan-sim-normal",
  },
  {
    id: 3,
    title: "Operasi Patuh Dimulai",
    excerpt: "Operasi Patuh digelar selama dua pekan.",
    category: "Operasi",
    date: "12 Juli 2026",
    image: news3,
    slug: "operasi-patuh-dimulai",
  },
  {
    id: 4,
    title: "Pengamanan Kegiatan Masyarakat",
    excerpt: "Personel disiagakan untuk pengamanan kegiatan masyarakat.",
    category: "Kamtibmas",
    date: "11 Juli 2026",
    image: news4,
    slug: "pengamanan-kegiatan",
  },
  {
    id: 5,
    title: "Bakti Sosial Polri",
    excerpt: "Bakti sosial dilaksanakan di wilayah Papua Tengah.",
    category: "Sosial",
    date: "10 Juli 2026",
    image: news5,
    slug: "bakti-sosial-polri",
  },
];