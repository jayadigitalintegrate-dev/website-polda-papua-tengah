import "./SambutanKapolda.css";

import kapoldaImage from "../../assets/kapolda/kapolda.png";

function SambutanKapolda() {
  return (
    <section className="sambutan-page">

      <div className="sambutan-container">

        <div className="sambutan-image">
          <img
            src={kapoldaImage}
            alt="Kapolda Papua Tengah"
          />
        </div>

        <div className="sambutan-content">

          <span className="sambutan-label">
            SAMBUTAN KAPOLDA
          </span>

          <h1>
            Sambutan Kapolda Papua Tengah
          </h1>

          <p>
            Selamat datang di Website Resmi Kepolisian Daerah Papua Tengah.
            Website ini kami hadirkan sebagai media informasi, transparansi,
            komunikasi, serta pelayanan publik kepada seluruh masyarakat.
          </p>

          <p>
            Kehadiran website ini merupakan wujud komitmen Polda Papua Tengah
            dalam memberikan pelayanan yang profesional, modern, transparan,
            dan terpercaya sesuai semangat transformasi Polri Presisi.
          </p>

          <p>
            Kami berharap masyarakat dapat memanfaatkan website ini untuk
            memperoleh informasi yang akurat, mengakses berbagai layanan
            kepolisian, serta menjalin komunikasi yang baik dengan Kepolisian
            Daerah Papua Tengah.
          </p>

          <p>
            Kritik, saran, dan masukan yang membangun sangat kami harapkan
            demi meningkatkan kualitas pelayanan kepada masyarakat.
          </p>

          <div className="kapolda-sign">

            <strong>
              Brigjen. Pol. Jeremias Rontini, S.I.K., M.Si.
            </strong>

            <span>
              Kepala Kepolisian Daerah Papua Tengah
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default SambutanKapolda;