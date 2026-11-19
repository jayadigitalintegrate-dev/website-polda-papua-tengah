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
import {
  isNewsEngagementConfigured,
  recordNewsView,
  updateNewsLike,
} from "../../services/newsEngagement";
import type { NewsEngagement } from "../../services/newsEngagement";

export default function NewsDetail() {
  const { slug } = useParams();

  const [news, setNews] = useState<News | null>(null);
  const [loading, setLoading] = useState(true);
  const [engagement, setEngagement] = useState<NewsEngagement | null>(null);
  const [likePending, setLikePending] = useState(false);

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

  useEffect(() => {
    if (!slug || !news || news.slug !== slug || !isNewsEngagementConfigured()) {
      setEngagement(null);
      return;
    }

    let active = true;
    setEngagement(null);

    void recordNewsView(slug)
      .then((stats) => {
        if (!active) return;
        setEngagement(stats);
        setNews((current) => current?.slug === slug
          ? { ...current, views: stats.views, likes: stats.likes }
          : current);
      })
      .catch((error) => {
        console.warn("Statistik berita tidak tersedia:", error);
        if (active) setEngagement(null);
      });

    return () => { active = false; };
  }, [slug, news?.id]);

  async function handleLike() {
    if (!news || !engagement || likePending) return;

    setLikePending(true);
    try {
      const stats = await updateNewsLike(news.slug, !engagement.liked);
      setEngagement(stats);
      setNews((current) => current?.slug === news.slug
        ? { ...current, views: stats.views, likes: stats.likes }
        : current);
    } catch (error) {
      console.warn("Gagal menyimpan Like berita:", error);
    } finally {
      setLikePending(false);
    }
  }

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

        <ArticleToolbar
          news={news}
          views={engagement?.views ?? news.views}
          likes={engagement?.likes ?? news.likes ?? 0}
          liked={engagement?.liked ?? false}
          likeEnabled={engagement !== null}
          likePending={likePending}
          onLike={handleLike}
        />

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
