import "./NewsDetail.css";

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
              )
            }


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
