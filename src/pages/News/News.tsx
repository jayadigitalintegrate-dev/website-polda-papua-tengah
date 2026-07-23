import "./News.css";

import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  Breadcrumb,
  PageHeader,
  Container,
} from "../../components/common";

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
  const [currentPage, setCurrentPage] = useState(1);

  const NEWS_PER_PAGE = 6;

  const filteredNews = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return latest.filter((item) => {
      const matchSearch =
        keyword === "" ||
        item.title.toLowerCase().includes(keyword) ||
        item.excerpt.toLowerCase().includes(keyword);

      const matchCategory =
        selectedCategory === "all" ||
        item.category.slug === selectedCategory;

      return matchSearch && matchCategory;
    });
  }, [latest, search, selectedCategory]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredNews.length / NEWS_PER_PAGE)
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedCategory]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedNews = useMemo(() => {
    const start = (currentPage - 1) * NEWS_PER_PAGE;

    return filteredNews.slice(
      start,
      start + NEWS_PER_PAGE
    );
  }, [filteredNews, currentPage]);

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

        {featured && (
          <FeaturedNews news={featured} />
        )}

        <section className="news-page">

          <div className="news-header">

            <div className="news-header__title">

              <span className="news-header__line" />

              <div>
                <h2>Berita Terbaru</h2>

                <p>
                  Menampilkan{" "}
                  <strong>{filteredNews.length}</strong>{" "}
                  berita terbaru Polda Papua Tengah.
                </p>

              </div>

            </div>

            <Link
              to="/berita"
              className="news-archive-button"
            >
              Lihat Semua →
            </Link>

          </div>

          <div className="news-layout">

            <div className="news-content">

              <NewsGrid news={paginatedNews} />

              <NewsPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />

            </div>

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

        <NewsVideo />

      </Container>
    </>
  );
}