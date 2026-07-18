import "./NewsDetail.css";

import { Navigate, useParams } from "react-router-dom";

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
  RelatedNews,
} from "../../components/news";

import { getNewsBySlug } from "../../services/news.service";

export default function NewsDetail() {
  const { slug } = useParams();

  if (!slug) {
    return <Navigate to="/berita" replace />;
  }

  const news = getNewsBySlug(slug);

  if (!news) {
    return <Navigate to="/berita" replace />;
  }

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
          <NewsLayout sidebar={<NewsSidebar />}>
            <NewsContent news={news} />

            <RelatedNews slug={news.slug} />
          </NewsLayout>
        </section>
      </Container>
    </>
  );
}