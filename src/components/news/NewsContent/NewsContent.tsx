import "./NewsContent.css";

import type { News } from "../../../types/news";

interface NewsContentProps {
  news: News;
}

export default function NewsContent({
  news,
}: NewsContentProps) {
  return (
    <article className="news-content">
      <img
        src={news.thumbnail}
        alt={news.title}
        className="news-content__image"
      />

      <div className="news-content__meta">
        <span>{news.publishedAt}</span>

        <span>•</span>

        <span>{news.author.name}</span>

        <span>•</span>

        <span>👁 {news.views.toLocaleString()} Views</span>
      </div>

      <h1 className="news-content__title">
        {news.title}
      </h1>

      <div className="news-content__category">
        {news.category.name}
      </div>

      <div className="news-content__body">
        <p>{news.content}</p>

        <p>
          Polda Papua Tengah terus berkomitmen memberikan
          pelayanan terbaik kepada masyarakat melalui
          peningkatan profesionalisme personel serta
          pelaksanaan tugas kepolisian yang Presisi.
        </p>

        <p>
          Kegiatan ini merupakan bagian dari upaya menjaga
          situasi keamanan dan ketertiban masyarakat agar
          tetap aman, nyaman, dan kondusif di seluruh wilayah
          hukum Polda Papua Tengah.
        </p>
      </div>
    </article>
  );
}