import "./NewsCard.css";

import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import type { News } from "../../../types/news";

interface NewsCardProps {
  news: News;
}

export default function NewsCard({ news }: NewsCardProps) {
  if (!news) return null;

  return (
    <article className="news-card">

      <div className="news-card__image">
        <img
          src={news.thumbnail}
          alt={news.title}
        />

        <div className="news-card__badges">

          {news.breaking && (
            <span className="badge badge-breaking">
              BREAKING
            </span>
          )}

          {news.type === "video" && (
            <span className="badge badge-video">
              <Icon icon="mdi:play-circle" />
              VIDEO
            </span>
          )}

          {news.pinned && (
            <span className="badge badge-pinned">
              PINNED
            </span>
          )}

          <span className="badge badge-category">
            {news.category?.name ?? "Tanpa Kategori"}
          </span>

        </div>
      </div>

      <div className="news-card__body">

        <div className="news-card__meta">

          <span>
            <Icon icon="mdi:calendar-month-outline" />
            {news.publishedAt}
          </span>

          <span>
            <Icon icon="mdi:eye-outline" />
            {news.views.toLocaleString()}
          </span>

        </div>

        <h3 className="news-card__title">
          {news.title}
        </h3>

        <p className="news-card__excerpt">
          {news.excerpt}
        </p>

        <div className="news-card__footer">

          <span className="news-card__author">
            <Icon icon="mdi:account-circle-outline" />
            {news.author?.name ?? "Administrator"}
          </span>

          <Link
            to={`/berita/${news.slug}`}
            className="news-card__button"
          >
            Baca →
          </Link>

        </div>

      </div>

    </article>
  );
}