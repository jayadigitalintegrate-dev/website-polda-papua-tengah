import "./NewsHero.css";

import { Icon } from "@iconify/react";
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

        <div className="news-hero__badges">

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

        <h1 className="news-hero__title">
          {news.title}
        </h1>

        <p className="news-hero__excerpt">
          {news.excerpt}
        </p>

        <div className="news-hero__meta">

          <span>
            <Icon icon="mdi:calendar-month-outline" />
            {news.publishedAt}
          </span>

          <span>
            <Icon icon="mdi:account-circle-outline" />
            {news.author.name}
          </span>

          <span>
            <Icon icon="mdi:eye-outline" />
            {news.views.toLocaleString()} Views
          </span>

        </div>

      </div>

    </section>
  );
}