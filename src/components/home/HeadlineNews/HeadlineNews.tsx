import "./HeadlineNews.css";

import { Link } from "react-router-dom";

import FeaturedNews from "./FeaturedNews";
import NewsCard from "./NewsCard";

import { getNews } from "../../../services/news.service";

const news = getNews();

const featured =
  news.find((item) => item.featured) ?? news[0];

const latestNews = news.filter(
  (item) => item.id !== featured.id
);

function HeadlineNews() {
  return (
    <section className="headline-news">
      <div className="headline-container">

        {/* =======================================================
            TITLE
        ======================================================= */}

        <div className="headline-title">

          <span>BERITA TERKINI</span>

          <h2>Informasi Polda Papua Tengah</h2>

          <p>
            Berita, kegiatan, pelayanan publik,
            pengumuman, serta informasi terbaru
            dari Kepolisian Daerah Papua Tengah.
          </p>

        </div>

        {/* =======================================================
            FEATURED NEWS
        ======================================================= */}

        <FeaturedNews news={featured} />

        {/* =======================================================
            LATEST NEWS
        ======================================================= */}

        <section className="latest-section">

          <div className="latest-title">

            <div>

              <h3>Berita Terbaru</h3>

              <p className="latest-subtitle">
                Menampilkan {latestNews.length} berita terbaru
              </p>

            </div>

            <Link
              to="/berita"
              className="latest-more"
            >
              Lihat Semua →
            </Link>

          </div>

          <div className="latest-grid">

            {latestNews.map((item) => (

              <NewsCard
                key={item.id}
                news={item}
              />

            ))}

          </div>

        </section>

        {/* =======================================================
            BUTTON
        ======================================================= */}

        <div className="headline-action">

          <Link
            to="/berita"
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