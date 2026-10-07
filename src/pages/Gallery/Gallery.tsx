import { useEffect, useState } from "react";

import "./Gallery.css";

import GalleryHero from "../../components/gallery/GalleryHero";
import GalleryFilter from "../../components/gallery/GalleryFilter";
import GalleryGrid from "../../components/gallery/GalleryGrid";
import GalleryPagination from "../../components/gallery/GalleryPagination";
import GalleryLightbox from "../../components/gallery/GalleryLightbox";

import { galleryService } from "../../services/galleryService";
import type {
  GalleryCategory,
  GalleryItem,
} from "../../types/gallery";

export default function Gallery() {
  const [categories, setCategories] =
    useState<GalleryCategory[]>([]);

  const [items, setItems] =
    useState<GalleryItem[]>([]);

  const [loading, setLoading] = useState(true);

  // null = Semua
  const [selectedCategoryId, setSelectedCategoryId] =
    useState<number | null>(null);

  const [selectedGallery, setSelectedGallery] =
    useState<GalleryItem | null>(null);

  // Posisi foto aktif di dalam koleksi Galeri Dokumentasi.
  const [photoIndex, setPhotoIndex] = useState(0);

  const openGallery = (item: GalleryItem) => {
    setPhotoIndex(0);
    setSelectedGallery(item);
  };

  useEffect(() => {
    let mounted = true;

    galleryService.getGallery().then((gallery) => {
      if (!mounted) return;

      setCategories(gallery.categories);
      setItems(gallery.items);
      setLoading(false);
    });

    return () => {
      mounted = false;
    };
  }, []);

  const filteredGallery =
    galleryService.filterByCategory(
      items,
      selectedCategoryId
    );

  const collectionPhotos =
    selectedGallery?.isCollection
      ? selectedGallery.images
      : [];

  const showPhoto = (step: number) => {
    if (collectionPhotos.length === 0) return;

    setPhotoIndex(
      (current) =>
        (current + step + collectionPhotos.length) %
        collectionPhotos.length
    );
  };

  return (
    <main className="gallery-page">
      <GalleryHero />

      <GalleryFilter
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        onSelectCategory={setSelectedCategoryId}
      />

      {loading ? (
        <p className="gallery-empty">Memuat Galeri...</p>
      ) : filteredGallery.length === 0 ? (
        <p className="gallery-empty">
          Belum ada foto pada kategori ini.
        </p>
      ) : (
        <GalleryGrid
          data={filteredGallery}
          onSelect={openGallery}
        />
      )}

      <GalleryPagination />

      {selectedGallery &&
        (collectionPhotos.length > 0 ? (
          // Koleksi: lightbox menelusuri seluruh foto child koleksi.
          <GalleryLightbox
            item={{
              ...selectedGallery,
              image:
                collectionPhotos[photoIndex]?.image ??
                selectedGallery.image,
            }}
            currentIndex={photoIndex}
            totalItems={collectionPhotos.length}
            onClose={() => setSelectedGallery(null)}
            onPrev={() => showPhoto(-1)}
            onNext={() => showPhoto(1)}
          />
        ) : (
          <GalleryLightbox
            item={selectedGallery}
            currentIndex={filteredGallery.findIndex(
              (item) => item.id === selectedGallery.id
            )}
            totalItems={filteredGallery.length}
            onClose={() => setSelectedGallery(null)}
            onPrev={() => {}}
            onNext={() => {}}
          />
        ))}
    </main>
  );
}
