import "./PopularWidget.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import type { News } from "../../../types/news";
import { fetchNews } from "../../../services/newsApi";

export default function PopularWidget() {
  const [popularNews, setPopularNews] = useState<News[]>([]);

  useEffect(() => {
    let mounted = true;

    fetchNews()
      .then((data) => {
        if (!mounted) {
          return;
        }

        const popular = [...data]
          .sort((a, b) => b.views - a.views)
          .slice(0, 5);

        setPopularNews(popular);
      })
      .catch((error) => {
        console.error("Gagal mengambil berita populer:", error);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="popular-widget">
      <h3>Berita Populer</h3>

      <ul>
        {popularNews.map((item, index) => (
          <li key={item.id}>
            <span className="popular-widget__number">
              {index + 1}
            </span>

            <Link
              to={`/berita/${item.slug}`}
              className="popular-widget__title"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
