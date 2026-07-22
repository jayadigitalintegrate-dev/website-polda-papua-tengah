import "./GalleryFilter.css";


interface GalleryFilterProps {

  selectedCategory:string;

  onSelectCategory:
  (category:string)=>void;

}


const categories = [

  "Semua",

  "Kegiatan Pimpinan",

  "Pelayanan Publik",

  "Operasional",

  "Sosial",

  "Event",

];


export default function GalleryFilter({

  selectedCategory,

  onSelectCategory,

}:GalleryFilterProps){


  return (

    <section className="gallery-filter">

      {

        categories.map((item)=>(

          <button

            key={item}

            onClick={()=>
              onSelectCategory(item)
            }

            className={

              selectedCategory === item

              ?

              "gallery-filter__button active"

              :

              "gallery-filter__button"

            }

          >

            {item}

          </button>

        ))

      }


    </section>

  );

}