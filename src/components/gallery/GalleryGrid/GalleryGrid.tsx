import "./GalleryGrid.css";

import GalleryCard from "../GalleryCard";


interface GalleryItem {

  id: number;

  image: string;

  title: string;

  category: string;

  date: string;

}


interface GalleryGridProps {

  data: GalleryItem[];

}



export default function GalleryGrid({

  data,

}: GalleryGridProps) {


  return (

    <section className="gallery-grid">


      {

        data.map((item) => (

          <GalleryCard

            key={item.id}

            image={item.image}

            title={item.title}

            category={item.category}

            date={item.date}

          />

        ))

      }


    </section>

  );

}