import { Link } from "react-router-dom";

import "./CekPengaduan.css";
import "../../components/cekPengaduan/Tracking.css";

const linkStyle = {
  color: "#0b3d6d",
  textDecoration: "underline",
};


export default function CekPengaduan(){

  return (

    <main className="cek-pengaduan-page">


      <section className="cek-hero">

        <div className="cek-container">


          <span>
            LAYANAN PENGADUAN
          </span>


          <h1>
            Cek Status Laporan Anda
          </h1>


          <p>
            Pelacakan status laporan secara daring
            belum tersedia saat ini.
          </p>


        </div>

      </section>



      <section className="tracking-result">

        <div className="tracking-card">

          <h2>
            Layanan Belum Tersedia
          </h2>

          <div className="tracking-item">

            <p>
              Mohon maaf, layanan pelacakan status
              pengaduan secara daring belum dapat
              digunakan. Kami belum dapat menampilkan
              perkembangan laporan Anda melalui
              halaman ini.
            </p>

          </div>

          <div className="tracking-item">

            <p>
              Untuk mengetahui perkembangan laporan,
              silakan menghubungi Polda Papua Tengah
              melalui{" "}
              <Link
                to="/kontak"
                style={linkStyle}
              >
                kontak resmi
              </Link>
              {" "}dengan menyebutkan nomor tiket
              laporan Anda.
            </p>

          </div>

          <div className="tracking-item">

            <p>
              Belum menyampaikan laporan? Silakan
              mengisi{" "}
              <Link
                to="/pengaduan"
                style={linkStyle}
              >
                formulir pengaduan
              </Link>
              .
            </p>

          </div>

        </div>

      </section>


    </main>

  );

}
