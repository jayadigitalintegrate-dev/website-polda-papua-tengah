import type { News } from "../../../types/news";
import { Link } from "react-router-dom";

interface NewsCardProps {
    news: News;
}

function NewsCard({ news }: NewsCardProps) {
  return (
    <article className="news-card">
      <Link
        to={`/news/${news.slug}`}
        className="news-card__link"
      >
        <div className="news-thumb">
          <img
            src={news.thumbnail}
            alt={news.title}
          />

          <span className="news-category">
            {news.category.name}
          </span>
        </div>

        <div className="news-info">
          <div className="news-meta">
            <small>{news.publishedAt}</small>
          </div>

          <h4>{news.title}</h4>

          <p className="news-excerpt">
            {news.excerpt}
          </p>

          <div className="news-footer">
            <span className="news-readmore">
              Baca Selengkapnya →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default NewsCard;