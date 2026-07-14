import type { NewsItem } from "../../../data/news";

type FeaturedNewsProps = {
  news: NewsItem;
};

function FeaturedNews({ news }: FeaturedNewsProps) {
  return (
    <div className="featured-news">

      <div className="featured-image">
        <img
          src={news.image || "https://placehold.co/900x500"}
          alt={news.title}
        />
      </div>

      <div className="featured-content">

        <span className="featured-category">
          {news.category}
        </span>

        <h3>{news.title}</h3>

        <p>{news.excerpt}</p>

        <small>{news.date}</small>

      </div>

    </div>
  );
}

export default FeaturedNews;