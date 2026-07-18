import "./style.css";

import { Link } from "react-router-dom";

import type { News } from "../../../types/news";

interface FeaturedNewsProps {
  news: News;
}

export default function FeaturedNews({
  news,
}: FeaturedNewsProps) {
  return (
    <section className="featured-news">
      <div className="featured-news__image">
        <img
          src={news.thumbnail}
          alt={news.title}
        />
      </div>

      <div className="featured-news__content">
        <span className="featured-news__category">
          {news.category.name}
        </span>

        <h2>{news.title}</h2>

        <p>{news.excerpt}</p>

        <div className="featured-news__meta">
          <span>📅 {news.publishedAt}</span>

          <span>
            👁 {news.views.toLocaleString()} Views
          </span>
        </div>

        <Link
          to={`/berita/${news.slug}`}
          className="featured-news__button"
        >
          Baca Selengkapnya
        </Link>
      </div>
    </section>
  );
}