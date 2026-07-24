import { Link, useParams } from "react-router-dom";
import { polresData } from "../../components/polres/polresData";
import "../../components/polres/Polres.css";

function DetailPolres() {

  const { slug } = useParams();

  const polres = polresData.find(
    (item) => item.id === slug
  );


  if (!polres) {
    return (
      <section className="polres-section">
        <div className="polres-container">
          <h2>Data Polres tidak ditemukan</h2>

          <Link
            to="/polres"
            className="polres-button"
          >
            Kembali ke Daftar Polres
          </Link>

        </div>
      </section>
    );
  }


  return (
    <section className="polres-section">

      <div className="polres-container">

        <div className="polres-detail">

          <img
            src={polres.gambar}
            alt={polres.nama}
          />


          <div className="polres-detail-content">

            <h1>
              {polres.nama}
            </h1>


            <p>
              <strong>Wilayah:</strong>{" "}
              {polres.wilayah}
            </p>


            <p>
              <strong>Alamat:</strong>{" "}
              {polres.alamat}
            </p>


            <p>
              <strong>Kapolres:</strong>{" "}
              {polres.kapolres}
            </p>


            <p>
              Polres {polres.nama.replace("Polres ","")}
              merupakan bagian dari jajaran
              wilayah hukum Polda Papua Tengah.
            </p>


            <Link
              to="/polres"
              className="polres-button"
            >
              Kembali ke Daftar Polres
            </Link>


          </div>

        </div>

      </div>

    </section>
  );
}

export default DetailPolres;