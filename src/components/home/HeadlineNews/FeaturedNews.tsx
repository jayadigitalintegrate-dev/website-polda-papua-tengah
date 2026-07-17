import type { NewsItem } from "../../../types/news";
import { Link } from "react-router-dom";

type FeaturedNewsProps = {
  news: NewsItem;
};

function FeaturedNews({ news }: FeaturedNewsProps) {
  return (
    <article className="featured-news">
      <div className="featured-image">
        <img
          src={news.thumbnail}
          alt={news.title}
        />

        <div className="featured-overlay">
          <span className="featured-category">
            {news.category.name}
          </span>

          <h3>{news.title}</h3>

          <p>{news.excerpt}</p>

          <div className="featured-footer">
            <small>{news.publishedAt}</small>

            <Link
              to={`/news/${news.slug}`}
              className="featured-button"
            >
              Baca Selengkapnya
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default FeaturedNews;