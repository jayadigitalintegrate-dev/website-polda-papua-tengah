import "./GalleryFilter.css";

import type { GalleryCategory } from "../../../types/gallery";


interface GalleryFilterProps {

  categories: GalleryCategory[];

  /** null = Semua */
  selectedCategoryId: number | null;

  onSelectCategory:
  (categoryId: number | null) => void;

}


export default function GalleryFilter({

  categories,

  selectedCategoryId,

  onSelectCategory,

}: GalleryFilterProps){

  const options = [
    { id: null, name: "Semua" },
    ...categories,
  ];


  return (

    <section className="gallery-filter">

      {

        options.map((item)=>(

          <button

            key={item.id ?? "semua"}

            onClick={()=>
              onSelectCategory(item.id)
            }

            className={

              selectedCategoryId === item.id

              ?

              "gallery-filter__button active"

              :

              "gallery-filter__button"

            }

          >

            {item.name}

          </button>

        ))

      }


    </section>

  );

}
