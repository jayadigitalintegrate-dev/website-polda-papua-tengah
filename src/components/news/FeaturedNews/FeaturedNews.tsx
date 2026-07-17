import "./FeaturedNews.css";

import type { NewsItem } from "../../../types/news";

interface FeaturedNewsProps {
  news: NewsItem;
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

        <span className="featured-news__badge">
          {news.category.name}
        </span>

      </div>

      <div className="featured-news__content">

        <span className="featured-news__date">
          {news.publishedAt}
        </span>

        <h2>
          {news.title}
        </h2>

        <p>
          {news.excerpt}
        </p>

        <div className="featured-news__footer">

          <span className="featured-news__views">
            👁 {news.views.toLocaleString()} Views
          </span>

          <button className="featured-news__button">
            Baca Selengkapnya
          </button>

        </div>

      </div>

    </section>
  );
}