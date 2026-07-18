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
  NewsGrid,
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

  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const filteredNews = useMemo(() => {
    return latest.filter((item) => {
      const keyword = search.toLowerCase();

      const matchSearch =
        !search.trim() ||
        item.title.toLowerCase().includes(keyword) ||
        item.excerpt.toLowerCase().includes(keyword);

      const matchCategory =
        selectedCategory === "all" ||
        item.category.slug === selectedCategory;

      return matchSearch && matchCategory;
    });
  }, [latest, search, selectedCategory]);

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
              <NewsGrid news={filteredNews} />

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

              <CategoryWidget
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />

              <ArchiveWidget />

              <TagWidget />
            </aside>
          </div>
        </section>
      </Container>
    </>
  );
}