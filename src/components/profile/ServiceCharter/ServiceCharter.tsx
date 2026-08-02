import "./ServiceCharter.css";
import presisiLogo from "../../../assets/logo/presisi-polri.png";

export default function ServiceCharter() {
  return (
    <section className="service-charter">

      <div className="service-container">

        <span className="service-label">
          MAKLUMAT PELAYANAN
        </span>

        <h2 className="service-title">
          Komitmen Pelayanan Polda Papua Tengah
        </h2>

        <div className="charter-card">

          <div className="charter-logo">
            <img
              src={presisiLogo}
              alt="Transformasi Menuju Polri Presisi"
            />
          </div>

          <p className="charter-text">
            Dengan ini kami menyatakan sanggup menyelenggarakan
            pelayanan sesuai standar pelayanan yang telah
            ditetapkan serta akan melakukan perbaikan secara
            terus menerus apabila tidak memenuhi standar
            pelayanan yang berlaku.
          </p>

          <div className="charter-divider"></div>

          <div className="charter-values">

            <div>✓ Profesional</div>
            <div>✓ Modern</div>

            <div>✓ Terintegritas</div>
            <div>✓ Transparan</div>

            <div>✓ Akuntabel</div>
            <div>✓ Humanis</div>

            <div>✓ Responsif</div>
            <div>✓ Presisi</div>

          </div>

          <button
            type="button"
            className="download-btn"
          >
            Download Maklumat Pelayanan
          </button>

        </div>

      </div>

    </section>
  );
}