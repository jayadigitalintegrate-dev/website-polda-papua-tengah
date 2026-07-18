import "./RelatedNews.css";

import { NewsCard } from "..";

import type { News } from "../../../types/news";

interface RelatedNewsProps {
  news: News[];
}

export default function RelatedNews({
  news,
}: RelatedNewsProps) {
  if (news.length === 0) return null;

  return (
    <section className="related-news">

      <div className="related-news__header">

        <h2>Berita Terkait</h2>

        <p>
          Informasi lainnya yang mungkin ingin Anda baca.
        </p>

      </div>

      <div className="related-news__grid">

        {news.map((item) => (
          <NewsCard
            key={item.id}
            news={item}
          />
        ))}

      </div>

    </section>
  );
}