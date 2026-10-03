import "./NewsVideo.css";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Icon } from "@iconify/react";

import { newsRepository } from "../../../repositories/newsRepository";
import type { News } from "../../../types/news";

export default function NewsVideo() {
  const { t } = useTranslation("home");

  const [videoNews, setVideoNews] = useState<News[]>([]);
  const [activeVideoId, setActiveVideoId] = useState<number | null>(null);

  useEffect(() => {
    let mounted = true;

    newsRepository.getPublished().then((news) => {
      if (!mounted) return;

      const videos = news.filter(
        (item) =>
          item.category.slug === "video" &&
          item.type === "video" &&
          Boolean(
            item.videos?.some(
              (video) =>
                video.provider === "youtube" &&
                Boolean(video.youtubeId)
            )
          )
      );

      setVideoNews(videos);

      if (videos.length > 0) {
        setActiveVideoId(videos[0].id);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  const activeVideo = videoNews.find(
    (item) => item.id === activeVideoId
  );

  const youtubeVideo = activeVideo?.videos?.find(
    (video) =>
      video.provider === "youtube" &&
      Boolean(video.youtubeId)
  );

  if (!activeVideo || !youtubeVideo?.youtubeId) {
    return (
      <section className="news-video">
        <div className="news-video__header">
          <div>
            <h2>{t("newsVideo.title")}</h2>

            <p>{t("newsVideo.subtitle")}</p>
          </div>
        </div>

        <div className="news-video__empty">
          {t("newsVideo.empty", {
            defaultValue: "Belum ada berita video.",
          })}
        </div>
      </section>
    );
  }

  return (
    <section className="news-video">
      <div className="news-video__header">
        <div>
          <h2>{t("newsVideo.title")}</h2>

          <p>{t("newsVideo.subtitle")}</p>
        </div>
      </div>

      <div className="news-video__layout">
        <div className="news-video__player">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeVideo.youtubeId}`}
            title={activeVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          <div className="news-video__info">
            <h3>{activeVideo.title}</h3>

            <span>
              <Icon icon="mdi:calendar-month-outline" />

              {new Date(
                activeVideo.publishedAt
              ).toLocaleDateString("id-ID", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        </div>

        <div className="news-video__list">
          {videoNews.map((video) => {
            const active = activeVideo.id === video.id;

            return (
              <button
                key={video.id}
                type="button"
                onClick={() => setActiveVideoId(video.id)}
                className={`news-video__item ${
                  active ? "active" : ""
                }`}
              >
                <div className="news-video__icon">
                  <Icon icon="mdi:play-circle" />
                </div>

                <div>
                  <h4>{video.title}</h4>

                  <small>
                    {new Date(
                      video.publishedAt
                    ).toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </small>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}