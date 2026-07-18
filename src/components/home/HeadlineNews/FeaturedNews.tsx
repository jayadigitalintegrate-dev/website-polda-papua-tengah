import { Link } from "react-router-dom";
import type { NewsItem } from "../../../types/news";

type FeaturedNewsProps = {
  news: NewsItem;
};

function FeaturedNews({ news }: FeaturedNewsProps) {
  return (
    <article className="featured-news">
      <Link
        to={`/news/${news.slug}`}
        className="featured-image"
      >
        <img
          src={news.thumbnail}
          alt={news.title}
        />

        <div className="featured-overlay">
          <div className="featured-content">

            <span className="featured-category">
              {news.category.name}
            </span>

            <h3>{news.title}</h3>

            <p>{news.excerpt}</p>

            <div className="featured-footer">

              <div className="featured-meta">
                <small>{news.author.name}</small>
                <small>•</small>
                <small>{news.publishedAt}</small>
              </div>

              <span className="featured-button">
                Baca Selengkapnya →
              </span>

            </div>

          </div>
        </div>
      </Link>
    </article>
  );
}

export default FeaturedNews;