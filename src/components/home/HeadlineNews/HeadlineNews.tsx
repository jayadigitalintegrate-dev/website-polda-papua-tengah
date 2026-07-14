import "./HeadlineNews.css";

import FeaturedNews from "./FeaturedNews";
import NewsCard from "./NewsCard";

import { newsData } from "../../../data/news";

function HeadlineNews() {
  const featured = newsData[0];
  const latestNews = newsData.slice(1, 5);

  return (
    <section className="headline-news">
      <div className="headline-container">
        <div className="headline-title">
          <span>BERITA TERKINI</span>

          <h2>Berita Utama</h2>

          <p>
            Informasi terbaru mengenai kegiatan
            Polda Papua Tengah.
          </p>
        </div>

        <div className="headline-grid">
          <FeaturedNews news={featured} />

          <div className="news-list">
            {latestNews.map((news) => (
              <NewsCard
                key={news.id}
                news={news}
              />
            ))}
          </div>
        </div>

        <div className="headline-action">
          <button className="headline-button">
            Lihat Semua Berita →
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeadlineNews;