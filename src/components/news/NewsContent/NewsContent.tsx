import "./NewsContent.css";

import { Icon } from "@iconify/react";

import type { News } from "../../../types/news";

interface NewsContentProps {
  news: News;
}

export default function NewsContent({
  news,
}: NewsContentProps) {
  return (
    <article className="news-content">

      {/* ===========================================
          HEADER
      ============================================ */}

      <div className="news-content__header">

        <span className="news-content__category">
          {news.category.name}
        </span>

        <h1 className="news-content__title">
          {news.title}
        </h1>

        <div className="news-content__meta">

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

      {/* ===========================================
          FEATURE IMAGE
      ============================================ */}

      <img
        src={news.thumbnail}
        alt={news.title}
        className="news-content__image"
      />

      {/* ===========================================
          ARTICLE
      ============================================ */}

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

      {/* ===========================================
          QUOTE
      ============================================ */}

      <blockquote className="news-content__quote">

        "Polri Presisi hadir untuk memberikan rasa aman,
        pelayanan terbaik, dan kepercayaan masyarakat."

      </blockquote>

      {/* ===========================================
          GALLERY
      ============================================ */}

      {news.gallery && news.gallery.length > 0 && (

        <section className="news-gallery">

          <h3>Galeri Foto</h3>

          <div className="news-gallery__grid">

            {news.gallery.map((photo) => (

              <figure key={photo.id}>

                <img
                  src={photo.image}
                  alt={photo.caption}
                />

                <figcaption>
                  {photo.caption}
                </figcaption>

              </figure>

            ))}

          </div>

        </section>

      )}

      {/* ===========================================
          VIDEO
      ============================================ */}

      {news.videos && news.videos.length > 0 && (

        <section className="news-video">

          <h3>Video</h3>

          {news.videos.map((video) => (

            <div
              key={video.id}
              className="news-video__item"
            >

              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                allowFullScreen
              />

            </div>

          ))}

        </section>

      )}

      {/* ===========================================
          ATTACHMENT
      ============================================ */}

      {news.attachments &&
        news.attachments.length > 0 && (

        <section className="news-attachment">

          <h3>Lampiran</h3>

          {news.attachments.map((file) => (

            <a
              key={file.id}
              href={file.file}
              target="_blank"
              rel="noreferrer"
              className="news-attachment__item"
            >

              <Icon icon="mdi:file-download-outline" />

              <span>{file.name}</span>

              <small>{file.size}</small>

            </a>

          ))}

        </section>

      )}

      {/* ===========================================
          TAG
      ============================================ */}

      {news.tags && news.tags.length > 0 && (

        <div className="news-tags">

          {news.tags.map((tag) => (

            <span
              key={tag}
              className="news-tag"
            >
              #{tag}
            </span>

          ))}

        </div>

      )}

    </article>
  );
}