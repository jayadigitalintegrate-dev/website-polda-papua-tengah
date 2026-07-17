import type { NewsItem } from "../../../types/news";

type NewsCardProps = {
  news: NewsItem;
};

function NewsCard({ news }: NewsCardProps) {
  return (
    <div className="news-card">
      <div className="news-thumb">
        <img
          src={news.thumbnail}
          alt={news.title}
        />
      </div>

      <div className="news-info">
        <span>{news.category.name}</span>

        <h4>{news.title}</h4>

        <small>{news.publishedAt}</small>
      </div>
    </div>
  );
}

export default NewsCard;