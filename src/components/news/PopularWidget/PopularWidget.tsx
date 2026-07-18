import "./PopularWidget.css";

import { Link } from "react-router-dom";

import { getPopularNews } from "../../../services/news.service";

export default function PopularWidget() {
  const popularNews = getPopularNews();

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