import "./News.css";

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  Breadcrumb,
  PageHeader,
  Container,
} from "../../components/common";

import {
  FeaturedNews,
  NewsCard,
  SearchWidget,
  PopularWidget,
  CategoryWidget,
  ArchiveWidget,
  TagWidget,
  NewsPagination,
} from "../../components/news";

import {
  getFeaturedNews,
  getLatestNews,
} from "../../services/news.service";

export default function News() {
  const featured = getFeaturedNews();

  const latest = getLatestNews();

  const [search, setSearch] = useState("");

  const filteredNews = useMemo(() => {
    if (!search.trim()) {
      return latest;
    }

    return latest.filter((item) =>
      item.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [latest, search]);

  return (
    <>
      <Breadcrumb
        items={[
          {
            label: "Beranda",
            href: "/",
          },
          {
            label: "Berita",
          },
        ]}
      />

      <PageHeader
        eyebrow="BERITA"
        title="Portal Berita Polda Papua Tengah"
        description="Informasi terbaru mengenai kegiatan, pelayanan publik, pengumuman serta berbagai aktivitas Kepolisian Daerah Papua Tengah."
      />

      <Container>

        {/* ======================================================
            FEATURED NEWS
        ====================================================== */}

        {featured && (
          <FeaturedNews news={featured} />
        )}

        {/* ======================================================
            NEWS SECTION
        ====================================================== */}

        <section className="news-page">

          {/* ======================================================
              HEADER
          ====================================================== */}

          <div className="news-header">

            <div>

              <h2>Berita Terbaru</h2>

              <p>
                Menampilkan {filteredNews.length} berita
                Polda Papua Tengah.
              </p>

            </div>

            <Link
              to="/berita"
              className="news-archive-button"
            >
              Lihat Arsip Berita
            </Link>

          </div>

          {/* ======================================================
              CONTENT
          ====================================================== */}

          <div className="news-layout">

            {/* ======================================================
                LEFT CONTENT
            ====================================================== */}

            <div className="news-content">

              <div className="news-grid">

                {filteredNews.length > 0 ? (

                  filteredNews.map((item) => (

                    <NewsCard
                      key={item.id}
                      news={item}
                    />

                  ))

                ) : (

                  <div
                    style={{
                      gridColumn: "1 / -1",
                      textAlign: "center",
                      padding: "60px 20px",
                    }}
                  >
                    <h3>
                      Berita tidak ditemukan
                    </h3>

                    <p>
                      Tidak ada berita yang sesuai
                      dengan pencarian "
                      {search}
                      ".
                    </p>
                  </div>

                )}

              </div>

              <NewsPagination
                currentPage={1}
                totalPages={5}
              />

            </div>

            {/* ======================================================
                SIDEBAR
            ====================================================== */}

            <aside className="news-sidebar">

              <SearchWidget
                value={search}
                onChange={setSearch}
              />

              <PopularWidget />

              <CategoryWidget />

              <ArchiveWidget />

              <TagWidget />

            </aside>

          </div>

        </section>

      </Container>
    </>
  );
}