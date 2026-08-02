import { useEffect, useState } from "react";

import NewsGrid from "../NewsGrid";
import { getRelatedNews } from "../../../services/news.service";

import type { News } from "../../../types/news";

interface RelatedNewsProps {
  slug: string;
}

export default function RelatedNews({
  slug,
}: RelatedNewsProps) {
  const [relatedNews, setRelatedNews] = useState<News[]>([]);

  useEffect(() => {
    let mounted = true;

    getRelatedNews(slug)
      .then((data) => {
        if (mounted) {
          setRelatedNews(data);
        }
      })
      .catch((error) => {
        console.error(
          "Gagal mengambil berita terkait:",
          error
        );
      });

    return () => {
      mounted = false;
    };
  }, [slug]);

  if (relatedNews.length === 0) {
    return null;
  }

  return (
    <section className="related-news">
      <h2>Berita Terkait</h2>

      <NewsGrid news={relatedNews} />
    </section>
  );
}
