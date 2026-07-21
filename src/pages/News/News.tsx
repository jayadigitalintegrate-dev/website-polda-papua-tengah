import "./News.css";

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  Breadcrumb,
  PageHeader,
  Container,
} from "../../components/common";

/* 1. NewsVideo sukses ditambahkan ke daftar import */
import FeaturedNews from "../../components/news/FeaturedNews/FeaturedNews";
import NewsGrid from "../../components/news/NewsGrid";
import NewsVideo from "../../components/news/NewsVideo";
import SearchWidget from "../../components/news/SearchWidget";
import PopularWidget from "../../components/news/PopularWidget/PopularWidget";
import CategoryWidget from "../../components/news/CategoryWidget";
import ArchiveWidget from "../../components/news/ArchiveWidget/ArchiveWidget";
import TagWidget from "../../components/news/TagWidget/TagWidget";
import NewsPagination from "../../components/news/NewsPagination";

import {
  getFeaturedNews,
  getLatestNews,
} from "../../services/news.service";

export default function News() {
  const featured = getFeaturedNews();
  const latest = getLatestNews();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

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
            <div className="news-header__title">
              <span className="news-header__line"></span>
              <div>
                <h2>Berita Terbaru</h2>
                <p>
                  Menampilkan <strong>{filteredNews.length}</strong> berita terbaru Polda Papua Tengah.
                </p>
              </div>
            </div>
            <Link to="/berita" className="news-archive-button">
              Lihat Semua →
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
              <NewsPagination currentPage={1} totalPages={5} />
            </div>

            {/* ======================================================
                SIDEBAR
            ====================================================== */}
            <aside className="news-sidebar">
              <SearchWidget value={search} onChange={setSearch} />
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

        {/* 2. NewsVideo ditambahkan tepat sebelum penutup Container */}
        <NewsVideo />
      </Container>
    </>
  );
}