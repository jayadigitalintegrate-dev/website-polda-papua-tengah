import { useEffect, useState } from "react";
import "./PPID.css";

import { ppidService } from "../../services/ppidService";
import type { PPIDDocument } from "../../types/ppid";

export default function PPIDDocuments() {
  const [documents, setDocuments] = useState<PPIDDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    async function loadDocuments() {
      try {
        setLoading(true);
        setError("");

        const data = await ppidService.getAllDocuments();

        if (mounted) {
          setDocuments(data);
        }
      } catch (err) {
        console.error("Gagal memuat dokumen PPID:", err);

        if (mounted) {
          setError(
            "Dokumen PPID belum dapat dimuat. Silakan coba beberapa saat lagi."
          );
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadDocuments();

    return () => {
      mounted = false;
    };
  }, []);

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

        {loading && (
          <div className="ppid-document-grid">
            <p>Memuat dokumen PPID...</p>
          </div>
        )}

        {!loading && error && (
          <div className="ppid-document-grid">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && documents.length === 0 && (
          <div className="ppid-document-grid">
            <p>
              Belum ada dokumen PPID yang dipublikasikan.
            </p>
          </div>
        )}

        {!loading && !error && documents.length > 0 && (
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
                    {doc.category} •{" "}
                    {new Date(doc.publishedAt).getFullYear()}
                  </span>
                </div>

                <a
                  href={doc.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ppid-document-download"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}