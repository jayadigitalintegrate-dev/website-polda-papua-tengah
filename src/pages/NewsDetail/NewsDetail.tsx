import "./NewsDetail.css";

import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

import SEO from "../../components/common/SEO";

import {
  Breadcrumb,
  Container,
} from "../../components/common";

import {
  NewsHero,
  ArticleToolbar,
  NewsLayout,
  NewsSidebar,
  NewsContent,
  NewsGallery,
  NewsVideo,
  RelatedNews,
} from "../../components/news";

import type { News } from "../../types/news";
import { getNewsBySlug } from "../../services/news.service";

export default function NewsDetail() {
  const { slug } = useParams();

  const [news, setNews] = useState<News | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    let mounted = true;

    setLoading(true);

    getNewsBySlug(slug)
      .then((data) => {
        if (mounted) {
          setNews(data ?? null);
        }
      })
      .catch((error) => {
        console.error(
          "Gagal mengambil detail berita:",
          error
        );

        if (mounted) {
          setNews(null);
        }
      })
      .finally(() => {
        if (mounted) {
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [slug]);

  if (!slug) {
    return <Navigate to="/berita" replace />;
  }

  if (loading) {
    return (
      <Container>
        <div className="py-10 text-center">
          Memuat berita...
        </div>
      </Container>
    );
  }

  if (!news) {
    return <Navigate to="/berita" replace />;
  }

  return (
    <>
      <SEO
        title={
          news.seo?.metaTitle ||
          news.title
        }
        description={
          news.seo?.metaDescription ||
          news.excerpt
        }
        keywords={
          news.seo?.keywords || []
        }
      />

      <Breadcrumb
        items={[
          {
            label: "Beranda",
            href: "/",
          },
          {
            label: "Berita",
            href: "/berita",
          },
          {
            label: news.title,
          },
        ]}
      />

      <Container>
        <NewsHero news={news} />

        <ArticleToolbar news={news} />

        <section className="news-detail">
          <NewsLayout
            sidebar={<NewsSidebar />}
          >
            <NewsContent news={news} />

            {news.gallery &&
              news.gallery.length > 0 && (
                <NewsGallery
                  gallery={news.gallery}
                />
              )}

            <NewsVideo />

            <RelatedNews
              slug={news.slug}
            />
          </NewsLayout>
        </section>
      </Container>
    </>
  );
}
