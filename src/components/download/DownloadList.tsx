import DownloadCard from "./DownloadCard";

import "./Download.css";


interface DocumentItem {

  title:string;

  category:string;

  date:string;

  file:string;

}



interface DownloadListProps {

  keyword:string;

  category:string;

}



const documents:DocumentItem[] = [

  {
    title:
    "Maklumat Kapolda Papua Tengah",

    category:
    "Maklumat Kapolda",

    date:
    "24 Juli 2026",

    file:"#"
  },


  {
    title:
    "Formulir Permohonan Informasi PPID",

    category:
    "PPID",

    date:
    "24 Juli 2026",

    file:"#"
  },


  {
    title:
    "Peraturan Kepolisian Negara Republik Indonesia",

    category:
    "Peraturan Kepolisian",

    date:
    "24 Juli 2026",

    file:"#"
  }

];



export default function DownloadList({

  keyword,

  category

}:DownloadListProps){


  const filteredDocuments =
  documents.filter((item)=>{


    const matchKeyword =
    item.title
    .toLowerCase()
    .includes(
      keyword.toLowerCase()
    );


    const matchCategory =
    category === ""
    ||
    item.category === category;



    return matchKeyword && matchCategory;


  });



  return (

    <section className="download-list">


      <div className="download-container">


        <div className="download-grid">


          {
            filteredDocuments.map(
              (item,index)=>(

                <DownloadCard

                  key={index}

                  title={item.title}

                  category={item.category}

                  date={item.date}

                  file={item.file}

                />

              )

            )
          }


        </div>


      </div>


    </section>

  );

}