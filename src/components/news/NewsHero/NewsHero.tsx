import "./NewsHero.css";

import type { News } from "../../../types/news";

interface NewsHeroProps {
  news: News;
}

export default function NewsHero({
  news,
}: NewsHeroProps) {
  return (
    <section className="news-hero">
      <img
        src={news.thumbnail}
        alt={news.title}
        className="news-hero__image"
      />

      <div className="news-hero__overlay">
        <span className="news-hero__category">
          {news.category.name}
        </span>

        <h1 className="news-hero__title">
          {news.title}
        </h1>

        <div className="news-hero__meta">
          <span>📅 {news.publishedAt}</span>

          <span>•</span>

          <span>👤 {news.author.name}</span>

          <span>•</span>

          <span>👁 {news.views.toLocaleString()} Views</span>
        </div>
      </div>
    </section>
  );
}