import "./Download.css";


interface DownloadCardProps {

  title:string;

  category:string;

  date:string;

  file:string;

}



export default function DownloadCard({

  title,

  category,

  date,

  file

}:DownloadCardProps){


  return (

    <article className="download-card">


      <div className="download-icon">

        📄

      </div>


      <div className="download-content">


        <h3>
          {title}
        </h3>


        <p>
          Kategori:
          <strong>
            {" "}
            {category}
          </strong>
        </p>


        <p>
          Tanggal:
          {" "}
          {date}
        </p>



        <a

          href={file}

          className="download-button"

          target="_blank"

          rel="noopener noreferrer"

        >

          Download

        </a>


      </div>


    </article>

  );

}