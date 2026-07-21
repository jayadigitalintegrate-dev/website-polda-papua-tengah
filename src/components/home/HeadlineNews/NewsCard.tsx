import type { News } from "../../../types/news";
import { Link } from "react-router-dom";
import "./NewsCard.css";
interface NewsCardProps {
  news: News;
}

function NewsCard({ news }: NewsCardProps) {
  return (
    <article className="home-news-card">

      <Link
        to={`/berita/${news.slug}`}
        className="home-news-card__link"
      >

        <div className="home-news-card__thumb">
          <img
            src={news.thumbnail}
            alt={news.title}
          />

          <span className="home-news-card__category">
            {news.category.name}
          </span>
        </div>

        <div className="home-news-card__info">

          <div className="home-news-card__meta">
            <small>{news.publishedAt}</small>
          </div>

          <h4>{news.title}</h4>

          <p className="home-news-card__excerpt">
            {news.excerpt}
          </p>

          <div className="home-news-card__footer">
            <span className="home-news-card__readmore">
              Baca Selengkapnya &gt;
            </span>
          </div>

        </div>

      </Link>

    </article>
  );
}

export default NewsCard;
