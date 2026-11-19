import "./ArticleToolbar.css";

import { Icon } from "@iconify/react";

import type { News } from "../../../types/news";

interface ArticleToolbarProps {
  news: News;
  views: number;
  likes: number;
  liked: boolean;
  likeEnabled: boolean;
  likePending: boolean;
  onLike: () => void;
}

export default function ArticleToolbar({
  news, views, likes, liked, likeEnabled, likePending, onLike,
}: ArticleToolbarProps) {
  const shareUrl = window.location.href;

  const encodedUrl = encodeURIComponent(shareUrl);

  const encodedTitle = encodeURIComponent(news.title);

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

        <span>
          <Icon icon="mdi:eye-outline" />
          {likeEnabled ? views.toLocaleString("id-ID") : "—"} Views
        </span>

        <button
          type="button"
          className={`article-toolbar__like ${liked ? "article-toolbar__like--active" : ""}`}
          disabled={!likeEnabled || likePending}
          aria-pressed={liked}
          title={likeEnabled ? "Sukai atau batalkan suka berita ini" : "Like belum tersedia tanpa koneksi CMS"}
          onClick={onLike}
        >
          <Icon icon={liked ? "mdi:heart" : "mdi:heart-outline"} />
          {likeEnabled ? likes.toLocaleString("id-ID") : "—"} Like
        </button>

        <span>
          <Icon icon="mdi:calendar-month-outline" />
          {news.publishedAt}
        </span>

        {news.updatedAt && (
          <span>
            <Icon icon="mdi:update" />
            Update {news.updatedAt}
          </span>
        )}

      </div>

      <div className="article-toolbar__share">

        <a
          href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noreferrer"
          className="wa"
        >
          <Icon icon="mdi:whatsapp" />
          WhatsApp
        </a>

        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noreferrer"
          className="fb"
        >
          <Icon icon="mdi:facebook" />
          Facebook
        </a>

        <a
          href={`https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noreferrer"
          className="telegram"
        >
          <Icon icon="mdi:telegram" />
          Telegram
        </a>

        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noreferrer"
          className="x"
        >
          <Icon icon="mdi:twitter" />
          X
        </a>

        <button
          onClick={copyLink}
          className="copy"
        >
          <Icon icon="mdi:link-variant" />
          Copy
        </button>

        <button
          onClick={() => window.print()}
          className="print"
        >
          <Icon icon="mdi:printer-outline" />
          Print
        </button>

      </div>

    </div>
  );
}

