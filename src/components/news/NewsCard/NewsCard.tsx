import "./NewsCard.css";

import { Link } from "react-router-dom";

import type { News } from "../../../types/news";

interface NewsCardProps {
  news: News;
}

export default function NewsCard({
  news,
}: NewsCardProps) {
  return (
    <article className="news-card">
      <div className="news-card__image">
        <img
          src={news.thumbnail}
          alt={news.title}
        />

        <span className="news-card__badge">
          {news.category.name}
        </span>
      </div>

      <div className="news-card__body">
        <span className="news-card__date">
          📅 {news.publishedAt}
        </span>

        <h3 className="news-card__title">
          {news.title}
        </h3>

        <p className="news-card__excerpt">
          {news.excerpt}
        </p>

        <div className="news-card__footer">
          <span className="news-card__views">
            👁 {news.views.toLocaleString()} Views
          </span>

          <Link
            to={`/berita/${news.slug}`}
            className="news-card__button"
          >
            Baca Selengkapnya →
          </Link>
        </div>
      </div>
    </article>
  );
}