export interface MediaItem {
  id: number;
  title: string;
  image: string;
  date: string;
  category: string;
}

export const mediaData: MediaItem[] = [
  {
    id: 1,
    title: "Kapolda Papua Tengah Memimpin Apel Pagi",
    image: "/images/media/media-1.jpg",
    date: "20 Juli 2026",
    category: "Apel",
  },
  {
    id: 2,
    title: "Patroli Dialogis Bersama Masyarakat",
    image: "/images/media/media-2.jpg",
    date: "19 Juli 2026",
    category: "Patroli",
  },
  {
    id: 3,
    title: "Pelayanan SIM Keliling",
    image: "/images/media/media-3.jpg",
    date: "18 Juli 2026",
    category: "Pelayanan",
  },
  {
    id: 4,
    title: "Pengamanan Ibadah Minggu",
    image: "/images/media/media-4.jpg",
    date: "17 Juli 2026",
    category: "Pengamanan",
  },
  {
    id: 5,
    title: "Bhakti Sosial Polda Papua Tengah",
    image: "/images/media/media-5.jpg",
    date: "16 Juli 2026",
    category: "Baksos",
  },
  {
    id: 6,
    title: "Rapat Koordinasi Internal",
    image: "/images/media/media-6.jpg",
    date: "15 Juli 2026",
    category: "Internal",
  },
];