import "./style.css";

import NewsCard from "../NewsCard/NewsCard";

import type { News } from "../../../types/news";

interface NewsGridProps {
  news: News[];
}

export default function NewsGrid({
  news,
}: NewsGridProps) {
  if (news.length === 0) {
    return (
      <div className="news-grid-empty">
        <h3>Berita tidak ditemukan</h3>

        <p>
          Tidak ada berita yang sesuai dengan
          pencarian atau kategori yang dipilih.
        </p>
      </div>
    );
  }

  return (
    <section className="news-grid">
      {news.map((item) => (
        <NewsCard
          key={item.id}
          news={item}
        />
      ))}
    </section>
  );
}