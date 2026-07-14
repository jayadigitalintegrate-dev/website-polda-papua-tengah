import type { NewsItem } from "../../../data/news";

type NewsCardProps = {
  news: NewsItem;
};

function NewsCard({ news }: NewsCardProps) {
  return (
    <div className="news-card">
      <div className="news-thumb">
        <img
          src={news.image}
          alt={news.title}
        />
      </div>

      <div className="news-info">
        <span>{news.category}</span>

        <h4>{news.title}</h4>

        <small>{news.date}</small>
      </div>
    </div>
  );
}

export default NewsCard;