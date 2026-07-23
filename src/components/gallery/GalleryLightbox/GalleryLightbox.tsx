import { useEffect, useRef, useState } from "react";
import "./GalleryLightbox.css";
import type { GalleryItem } from "../../../data/galleryData";

interface GalleryLightboxProps {
  item: GalleryItem;
  currentIndex: number;
  totalItems: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function GalleryLightbox({
  item,
  currentIndex,
  totalItems,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement !== null);
    };

    document.addEventListener(
      "fullscreenchange",
      handleFullscreenChange
    );

    return () => {
      document.removeEventListener(
        "fullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  const toggleFullscreen = async () => {
    if (!contentRef.current) return;

    if (!document.fullscreenElement) {
      await contentRef.current.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowLeft":
          onPrev();
          break;

        case "ArrowRight":
          onNext();
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="gallery-lightbox"
      onClick={onClose}
    >
      <div
        ref={contentRef}
        className="gallery-lightbox__content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Toolbar */}
        <div className="gallery-lightbox__toolbar">
          <span className="gallery-lightbox__counter">
            {currentIndex + 1} / {totalItems}
          </span>

          <button
            type="button"
            className="gallery-lightbox__fullscreen"
            onClick={toggleFullscreen}
            aria-label="Fullscreen"
          >
            {isFullscreen ? "🡼" : "⛶"}
          </button>

          <button
            type="button"
            className="gallery-lightbox__close"
            onClick={onClose}
            aria-label="Tutup"
          >
            ×
          </button>
        </div>

        {/* Tombol Previous */}
        <button
          type="button"
          className="gallery-lightbox__nav gallery-lightbox__nav--prev"
          onClick={onPrev}
          aria-label="Foto sebelumnya"
        >
          ‹
        </button>

        {/* Gambar */}
        <img
          src={item.image}
          alt={item.title}
        />

        {/* Tombol Next */}
        <button
          type="button"
          className="gallery-lightbox__nav gallery-lightbox__nav--next"
          onClick={onNext}
          aria-label="Foto berikutnya"
        >
          ›
        </button>

        {/* Informasi */}
        <div className="gallery-lightbox__info">
          <h2>{item.title}</h2>

          <span>{item.category}</span>

          <p>{item.date}</p>
        </div>
      </div>
    </div>
  );
}