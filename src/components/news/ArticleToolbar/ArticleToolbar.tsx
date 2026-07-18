import "./ArticleToolbar.css";

import type { News } from "../../../types/news";

interface ArticleToolbarProps {
  news: News;
}

export default function ArticleToolbar({
  news,
}: ArticleToolbarProps) {
  const shareUrl = window.location.href;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert("Link berhasil disalin.");
    } catch {
      alert("Gagal menyalin link.");
    }
  };

  return (
    <div className="article-toolbar">
      <div className="article-toolbar__left">
        <span>👁 {news.views.toLocaleString()} Views</span>

        {news.updatedAt && (
          <span>
            • Diperbarui {news.updatedAt}
          </span>
        )}
      </div>

      <div className="article-toolbar__right">
        <button onClick={copyLink}>
          🔗 Salin Link
        </button>
      </div>
    </div>
  );
}