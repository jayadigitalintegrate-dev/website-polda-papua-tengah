import "./ArticleToolbar.css";

import type { NewsItem } from "../../../types/news";

interface ArticleToolbarProps {
  news: NewsItem;
}

export default function ArticleToolbar({
  news,
}: ArticleToolbarProps) {

  const readingTime = Math.max(
    1,
    Math.ceil(news.content.split(" ").length / 200)
  );

  const url = window.location.href;

  const title = news.title;

  const shareWhatsApp = () =>
    window.open(
      `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
      "_blank"
    );

  const shareFacebook = () =>
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank"
    );

  const shareTwitter = () =>
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      "_blank"
    );

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    alert("Link berhasil disalin.");
  };

  return (
    <section className="article-toolbar">

      <div className="article-toolbar__info">

        <span>👤 {news.author.name}</span>

        <span>📅 {news.publishedAt}</span>

        <span>👁 {news.views.toLocaleString()} Views</span>

        <span>⏱ {readingTime} Menit Dibaca</span>

      </div>

      <div className="article-toolbar__share">

        <span>Bagikan :</span>

        <button
          className="wa"
          onClick={shareWhatsApp}
        >
          WhatsApp
        </button>

        <button
          className="fb"
          onClick={shareFacebook}
        >
          Facebook
        </button>

        <button
          className="x"
          onClick={shareTwitter}
        >
          X
        </button>

        <button
          className="copy"
          onClick={copyLink}
        >
          Salin Link
        </button>

      </div>

    </section>
  );
}