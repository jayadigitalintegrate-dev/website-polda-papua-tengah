import "./HeadlineNews.css";
import { Link } from "react-router-dom";

import FeaturedNews from "./FeaturedNews";
import NewsCard from "./NewsCard";

import { getNews } from "../../../services/news.service";

const news = getNews();

const featured = news.find((item) => item.featured) ?? news[0];
const latestNews = news.filter((item) => item.id !== featured.id);

function HeadlineNews() {
  return (
    <section className="headline-news">
      <div className="headline-container">

        {/* =======================================================
            SECTION TITLE
        ======================================================= */}
        <div className="headline-title">
          <span>BERITA TERKINI</span>

          <h2>Informasi Polda Papua Tengah</h2>

          <p>
            Berita, kegiatan, pelayanan publik, pengumuman,
            serta informasi terbaru dari Kepolisian Daerah
            Papua Tengah.
          </p>
        </div>

        {/* =======================================================
            FEATURED NEWS
        ======================================================= */}
        <div className="headline-featured">
          <FeaturedNews news={featured} />
        </div>

        {/* =======================================================
            LATEST HEADER
        ======================================================= */}
        <div className="latest-title">
          <div>
            <h3>Berita Terbaru</h3>

            <p className="latest-subtitle">
              Menampilkan {latestNews.length} berita terbaru
            </p>
          </div>

          <Link
            to="/news"
            className="latest-more"
          >
            Lihat Semua →
          </Link>
        </div>

        {/* =======================================================
            LATEST NEWS GRID
        ======================================================= */}
        <div className="latest-grid">
          {latestNews.map((item) => (
            <NewsCard
              key={item.id}
              news={item}
            />
          ))}
        </div>

        {/* =======================================================
            BUTTON
        ======================================================= */}
        <div className="headline-action">
          <Link
            to="/news"
            className="headline-button"
          >
            Jelajahi Semua Berita
          </Link>
        </div>

      </div>
    </section>
  );
}

export default HeadlineNews;