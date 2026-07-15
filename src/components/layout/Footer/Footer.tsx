import "./Footer.css";



import {

  FaInstagram,

  FaFacebookF,

  FaTiktok,

  FaYoutube,

  FaMapMarkerAlt,

  FaEnvelope,

  FaPhoneAlt,

} from "react-icons/fa";



function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">



        <h2>POLDA PAPUA TENGAH</h2>



        <p className="footer-tagline">

          Integritas dan Tanggung Jawab untuk Melayani Masyarakat

        </p>



        <div className="footer-contact">



          <div className="contact-item">

            <FaMapMarkerAlt />

            <span>Jl. Pepera, Nabire, Papua Tengah</span>

          </div>



          <div className="contact-item">

            <FaEnvelope />

            <span>humas@poldapapuatengah.go.id</span>

          </div>



          <div className="contact-item">

            <FaPhoneAlt />

            <span>Call Center : 110</span>

          </div>



        </div>



        <h3 className="footer-social-title">

          Ikuti Media Sosial Kami

        </h3>



        <div className="footer-social">



          <a

            href="https://www.instagram.com/humaspoldapapuatengah/?hl=en"

            target="_blank"

            rel="noopener noreferrer"

            aria-label="Instagram Polda Papua Tengah"

          >

            <FaInstagram />

            <span>Instagram</span>

          </a>



          <a

            href="https://www.facebook.com/profile.php?id=61572750314250&locale=lt_LT"

            target="_blank"

            rel="noopener noreferrer"

            aria-label="Facebook Polda Papua Tengah"

          >

            <FaFacebookF />

            <span>Facebook</span>

          </a>



          <a

            href="https://www.tiktok.com/@humaspoldapapuatengah"

            target="_blank"

            rel="noopener noreferrer"

            aria-label="TikTok Polda Papua Tengah"

          >

            <FaTiktok />

            <span>TikTok</span>

          </a>



          <a

            href="https://www.youtube.com/@humaspoldaPapuaTengah"

            target="_blank"

            rel="noopener noreferrer"

            aria-label="YouTube Polda Papua Tengah"

          >

            <FaYoutube />

            <span>YouTube</span>

          </a>



        </div>



        <div className="footer-copy">

          © 2026 Kepolisian Daerah Papua Tengah. All Rights Reserved.

        </div>



      </div>

    </footer>

  );

}



export default Footer;