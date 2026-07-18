import "./style.css";

import NewsGrid from "../NewsGrid";

import { getRelatedNews } from "../../../services/news.service";

interface RelatedNewsProps {
  slug: string;
}

export default function RelatedNews({
  slug,
}: RelatedNewsProps) {
  const relatedNews = getRelatedNews(slug);

  return (
    <section className="related-news">
      <h2>Berita Terkait</h2>

      <NewsGrid news={relatedNews} />
    </section>
  );
}