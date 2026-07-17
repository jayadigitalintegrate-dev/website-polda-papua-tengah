import "./News.css";

import {
  Breadcrumb,
  PageHeader,
  Container,
} from "../../components/common";

import {
  FeaturedNews,
  NewsCard,
} from "../../components/news";

import {
  getFeaturedNews,
  getLatestNews,
} from "../../services/news.service";

export default function News() {
  const featured = getFeaturedNews();
  const latest = getLatestNews();

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Beranda", href: "/" },
          { label: "Berita" },
        ]}
      />

      <PageHeader
        eyebrow="BERITA"
        title="Berita"
        description="Informasi terbaru seputar kegiatan dan pelayanan Polda Papua Tengah."
      />

      <Container>
        {/* Featured News */}
        {featured && (
          <FeaturedNews news={featured} />
        )}

        {/* News Grid */}
        <section className="news-page">
          <div className="news-grid">
            {latest.map((item) => (
              <NewsCard
                key={item.id}
                news={item}
              />
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}