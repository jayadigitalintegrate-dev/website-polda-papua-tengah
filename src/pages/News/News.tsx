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
import SearchWidget from "../../components/news/SearchWidget";
import PopularWidget from "../../components/news/PopularWidget/PopularWidget";
import CategoryWidget from "../../components/news/CategoryWidget";
import ArchiveWidget from "../../components/news/ArchiveWidget/ArchiveWidget";
import TagWidget from "../../components/news/TagWidget/TagWidget";
import NewsPagination from "../../components/news/NewsPagination";

import type { News as NewsType } from "../../types/news";
import { fetchNews } from "../../services/newsApi";

export default function News() {
  const [news, setNews] = useState<NewsType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const NEWS_PER_PAGE = 6;

  useEffect(() => {
    let mounted = true;

    async function loadNews() {
      try {
        setLoading(true);
        setError("");

        const data = await fetchNews();

        if (mounted) {
          setNews(data);
        }
      } catch (err) {
        console.error("Gagal mengambil berita CMS:", err);

        if (mounted) {
          setError(
            "Berita dari CMS belum dapat dimuat. Pastikan server CMS Laravel sedang berjalan."
          );
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadNews();

    return () => {
      mounted = false;
    };
  }, []);

  const featured = news[0];

  const filteredNews = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return news.filter((item) => {
      const matchSearch =
        keyword === "" ||
        item.title.toLowerCase().includes(keyword) ||
        item.excerpt.toLowerCase().includes(keyword);

      const matchCategory =
        selectedCategory === "all" ||
        item.category.slug === selectedCategory;

      return matchSearch && matchCategory;
    });
  }, [news, search, selectedCategory]);

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

        {loading && (
          <div className="py-10 text-center">
            <p className="text-gray-600">
              Memuat berita terbaru...
            </p>
          </div>
        )}

        {!loading && error && (
          <div className="my-8 rounded-lg border border-red-300 bg-red-50 px-5 py-4 text-red-700">
            {error}
          </div>
        )}

        {!loading && !error && featured && (
          <FeaturedNews news={featured} />
        )}

        {!loading && !error && (
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
                Lihat Semua ?
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
        )}

        {/* <NewsVideo /> */}

      </Container>
    </>
  );
}

