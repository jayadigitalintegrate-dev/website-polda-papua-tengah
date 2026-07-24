import "./PPID.css";

export default function PPIDInfoTypes() {

  const informationTypes = [
    {
      title: "Informasi Berkala",
      description:
        "Informasi yang wajib disediakan dan diumumkan secara rutin oleh badan publik kepada masyarakat."
    },
    {
      title: "Informasi Setiap Saat",
      description:
        "Informasi yang wajib tersedia setiap saat dan dapat diberikan berdasarkan permohonan informasi publik."
    },
    {
      title: "Informasi Serta Merta",
      description:
        "Informasi yang berkaitan dengan kepentingan umum dan harus segera diumumkan kepada masyarakat."
    },
    {
      title: "Informasi Dikecualikan",
      description:
        "Informasi tertentu yang tidak dapat diberikan karena memiliki batasan sesuai ketentuan peraturan."
    }
  ];

  return (
    <section className="ppid-section">

      <div className="ppid-container">

        <div className="ppid-title">

          <span className="ppid-label dark">
            JENIS INFORMASI
          </span>

          <h2>
            Klasifikasi Informasi Publik
          </h2>

          <p>
            PPID Polda Papua Tengah menyediakan berbagai
            jenis informasi publik sesuai dengan ketentuan
            keterbukaan informasi.
          </p>

        </div>


        <div className="ppid-info-grid">

          {
            informationTypes.map((item) => (

              <div
                className="ppid-info-card"
                key={item.title}
              >

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

            ))
          }

        </div>

      </div>

    </section>
  );
}