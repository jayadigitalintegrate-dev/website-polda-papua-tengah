import "./PPID.css";

export default function PPIDAbout() {
  return (
    <section className="ppid-section">

      <div className="ppid-container">

        <div className="ppid-grid">

          <div className="ppid-about">

            <span className="ppid-label dark">
              TENTANG PPID
            </span>

            <h2>
              Pelayanan Informasi Publik
              Polda Papua Tengah
            </h2>

            <p>
              Pejabat Pengelola Informasi dan Dokumentasi
              (PPID) Polda Papua Tengah merupakan unit yang
              bertanggung jawab dalam menyediakan,
              mengelola, dan memberikan pelayanan informasi
              publik kepada masyarakat.
            </p>

            <p>
              Pelayanan PPID dilaksanakan secara terbuka,
              profesional, dan akuntabel sebagai bentuk
              komitmen Polri dalam mewujudkan pelayanan
              publik yang transparan sesuai prinsip
              Polri Presisi.
            </p>

          </div>


          <div className="ppid-card">

            <h3>
              Dasar Hukum
            </h3>

            <ul>

              <li>
                Undang-Undang Nomor 14 Tahun 2008
                tentang Keterbukaan Informasi Publik.
              </li>

              <li>
                Peraturan Komisi Informasi tentang
                Standar Layanan Informasi Publik.
              </li>

              <li>
                Peraturan internal Kepolisian Negara
                Republik Indonesia terkait pelayanan
                informasi publik.
              </li>

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}