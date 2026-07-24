import "./PPID.css";

export default function PPIDDocuments() {

  const documents = [
    {
      title: "Daftar Informasi Publik",
      type: "Dokumen PPID",
      year: "2026"
    },
    {
      title: "Standar Operasional Pelayanan Informasi",
      type: "Dokumen PPID",
      year: "2026"
    },
    {
      title: "Formulir Permohonan Informasi Publik",
      type: "Formulir",
      year: "2026"
    },
    {
      title: "Formulir Keberatan Informasi Publik",
      type: "Formulir",
      year: "2026"
    }
  ];


  return (
    <section className="ppid-section">

      <div className="ppid-container">


        <div className="ppid-title">

          <span className="ppid-label dark">
            DOKUMEN PPID
          </span>

          <h2>
            Informasi dan Dokumen Publik
          </h2>

          <p>
            Masyarakat dapat mengakses dokumen publik
            yang tersedia melalui layanan PPID Polda
            Papua Tengah.
          </p>

        </div>


        <div className="ppid-document-grid">


          {
            documents.map((doc) => (

              <div
                className="ppid-document-card"
                key={doc.title}
              >

                <div className="ppid-document-icon">
                  PDF
                </div>


                <div className="ppid-document-content">

                  <h3>
                    {doc.title}
                  </h3>

                  <span>
                    {doc.type} • {doc.year}
                  </span>

                </div>


                <button>
                  Download
                </button>


              </div>

            ))
          }


        </div>


      </div>

    </section>
  );
}