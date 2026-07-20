import "./NewsMeta.css";

import { Icon } from "@iconify/react";

import type { News } from "../../../types/news";

interface NewsMetaProps {
  news: News;
}

export default function NewsMeta({
  news,
}: NewsMetaProps) {

  const readingTime = Math.max(
    1,
    Math.ceil(
      news.content
        .replace(/<[^>]*>/g, "")
        .split(/\s+/).length / 200
    )
  );

  return (

    <div className="news-meta">

      <div className="news-meta__item">

        <Icon icon="mdi:account-circle-outline" />

        <div>

          <small>Penulis</small>

          <strong>{news.author.name}</strong>

        </div>

      </div>

      <div className="news-meta__item">

        <Icon icon="mdi:calendar-month-outline" />

        <div>

          <small>Dipublikasikan</small>

          <strong>{news.publishedAt}</strong>

        </div>

      </div>

      <div className="news-meta__item">

        <Icon icon="mdi:update" />

        <div>

          <small>Diperbarui</small>

          <strong>
            {news.updatedAt ?? news.publishedAt}
          </strong>

        </div>

      </div>

      <div className="news-meta__item">

        <Icon icon="mdi:eye-outline" />

        <div>

          <small>Dibaca</small>

          <strong>
            {news.views.toLocaleString()} Views
          </strong>

        </div>

      </div>

      <div className="news-meta__item">

        <Icon icon="mdi:clock-outline" />

        <div>

          <small>Estimasi</small>

          <strong>
            {readingTime} menit membaca
          </strong>

        </div>

      </div>

    </div>

  );
}