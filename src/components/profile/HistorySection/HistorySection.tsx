import "./HistorySection.css";

const histories = [
  {
    year: "2022",
    title: "Pembentukan Provinsi Papua Tengah",
    description:
      "Provinsi Papua Tengah resmi dibentuk sebagai bagian dari Daerah Otonomi Baru (DOB).",
  },
  {
    year: "2023",
    title: "Pembentukan Polda Papua Tengah",
    description:
      "Kepolisian Daerah Papua Tengah resmi dibentuk untuk meningkatkan pelayanan kepada masyarakat.",
  },
  {
    year: "2024",
    title: "Penguatan Pelayanan Publik",
    description:
      "Polda Papua Tengah mulai memperkuat pelayanan publik berbasis digital dan transparansi.",
  },
  {
    year: "2025",
    title: "Transformasi Presisi",
    description:
      "Melanjutkan transformasi Polri Presisi menuju pelayanan yang modern, profesional, dan terpercaya.",
  },
];

export default function HistorySection() {
  return (
    <section className="history-section">
      <div className="history-container">

        <span className="history-label">
          SEJARAH
        </span>

        <h2 className="history-title">
          Perjalanan Polda Papua Tengah
        </h2>

        <p className="history-subtitle">
          Tonggak sejarah perkembangan Kepolisian Daerah Papua Tengah
          dari awal pembentukan hingga transformasi pelayanan.
        </p>

        <div className="history-timeline">

          {histories.map((item, index) => (
            <div
              key={index}
              className="history-item"
            >

              <div className="history-year">
                {item.year}
              </div>

              <div className="history-dot"></div>

              <div className="history-content">

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}