import "./style.css";

import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import type { News } from "../../../types/news";

interface FeaturedNewsProps {
  news: News;
}

function FeaturedNews({
  news,
}: FeaturedNewsProps) {
  return (
    <section className="featured-news">

      {/* IMAGE */}

      <div className="featured-news__image">

        <img
          src={news.thumbnail}
          alt={news.title}
        />

        <div className="featured-news__overlay">

          <div className="featured-news__badges">

            {news.breaking && (
              <span className="badge badge-breaking">
                BREAKING NEWS
              </span>
            )}

            {news.type === "video" && (
              <span className="badge badge-video">
                <Icon icon="mdi:play-circle" />
                VIDEO
              </span>
            )}

            <span className="badge badge-category">
              {news.category.name}
            </span>

          </div>

        </div>

      </div>

      {/* CONTENT */}

      <div className="featured-news__content">

        <div className="featured-news__meta">

          <span>
            <Icon icon="mdi:calendar-month-outline" />
            {news.publishedAt}
          </span>

          <span>
            <Icon icon="mdi:eye-outline" />
            {news.views.toLocaleString()} Views
          </span>

          <span>
            <Icon icon="mdi:account-circle-outline" />
            {news.author.name}
          </span>

        </div>

        <h2 className="featured-news__title">
          {news.title}
        </h2>

        <p className="featured-news__excerpt">
          {news.excerpt}
        </p>

        <div className="featured-news__footer">

          <Link
            to={`/berita/${news.slug}`}
            className="featured-news__button"
          >
            Baca Selengkapnya
          </Link>

        </div>

      </div>

    </section>
  );
}

export default FeaturedNews;