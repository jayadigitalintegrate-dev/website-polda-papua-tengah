import "./HeadlineNews.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import FeaturedNews from "./FeaturedNews";
import NewsCard from "./NewsCard";
import type { News } from "../../../types/news";
import { fetchNews } from "../../../services/newsApi";
function HeadlineNews() {
  const { t } = useTranslation("home");
  const [news, setNews] = useState<News[]>([]);
  useEffect(() => {
    let mounted = true;
    fetchNews()
      .then((data) => {
        if (mounted) {
          setNews(data);
        }
      })
      .catch((error) => {
        console.error("Gagal mengambil headline berita:", error);
      });
    return () => {
      mounted = false;
    };
  }, []);
  const featured =
    news.find((item) => item.featured) ?? news[0];
  const latestNews = featured
    ? news.filter((item) => item.id !== featured.id).slice(0, 6)
    : [];
  if (!featured) {
    return null;
  }
  return (
    <section className="headline-news">
      <div className="headline-container">
        <div className="headline-title">
          <span>
            {t("headlineNews.eyebrow")}
          </span>
          <h2>
            {t("headlineNews.title")}
          </h2>
          <p>
            {t("headlineNews.subtitle")}
          </p>
        </div>
        <FeaturedNews news={featured} />
        <section className="latest-section">
          <div className="latest-title">
            <div>
              <h3>
                {t("headlineNews.latestTitle")}
              </h3>
              <p className="latest-subtitle">
                {t("headlineNews.latestCount", {
                  count: latestNews.length,
                })}
              </p>
            </div>
            <Link
              to="/berita"
              className="latest-more"
            >
              {t("headlineNews.viewAll")} &gt;
            </Link>
          </div>
          <div className="latest-grid">
            {latestNews.map((item) => (
              <NewsCard
                key={item.id}
                news={item}
              />
            ))}
          </div>
        </section>
        <div className="headline-action">
          <Link
            to="/berita"
            className="headline-button"
          >
            {t("headlineNews.explore")}
          </Link>
        </div>
      </div>
    </section>
  );
}
export default HeadlineNews;
