import "./PPID.css";

import { ppidService } from "../../services/ppidService";

export default function PPIDDocuments() {
  const documents = ppidService.getAllDocuments();

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
          {documents.map((doc) => (
            <div
              className="ppid-document-card"
              key={doc.id}
            >
              <div className="ppid-document-icon">
                {doc.fileType.toUpperCase()}
              </div>

              <div className="ppid-document-content">
                <h3>{doc.title}</h3>

                <span>
                  {doc.category} • {new Date(doc.publishedAt).getFullYear()}
                </span>
              </div>

              <button>
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

