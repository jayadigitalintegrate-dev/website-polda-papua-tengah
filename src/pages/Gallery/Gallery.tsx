import { useState } from "react";

import "./Gallery.css";

import GalleryHero from "../../components/gallery/GalleryHero";
import GalleryFilter from "../../components/gallery/GalleryFilter";
import GalleryGrid from "../../components/gallery/GalleryGrid";
import GalleryPagination from "../../components/gallery/GalleryPagination";
import GalleryLightbox from "../../components/gallery/GalleryLightbox";

import { galleryData } from "../../data/galleryData";
import type { GalleryItem } from "../../data/galleryData";


export default function Gallery() {


  const [selectedCategory, setSelectedCategory] =
    useState("Semua");


  const [selectedGallery, setSelectedGallery] =
    useState<GalleryItem | null>(null);



  const filteredGallery =

    selectedCategory === "Semua"

      ? galleryData

      : galleryData.filter(
          (item) =>
            item.category === selectedCategory
        );



  return (

    <main className="gallery-page">


      <GalleryHero />



      <GalleryFilter

        selectedCategory={selectedCategory}

        onSelectCategory={
          setSelectedCategory
        }

      />



      <GalleryGrid

        data={filteredGallery}

        onSelect={
          setSelectedGallery
        }

      />



      <GalleryPagination />



      {
        selectedGallery && (

          <GalleryLightbox

            item={selectedGallery}

            onClose={() =>
              setSelectedGallery(null)
            }

          />

        )
      }



    </main>

  );

}