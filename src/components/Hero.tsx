import "../styles/Hero.css";
import heroImage from "../assets/hero/hero-polda-papua-tengah.png";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url(${heroImage})`,
      }}
    >
      <div className="hero-content">
        <h1>Website Resmi Polda Papua Tengah</h1>

        <p>Melayani, Melindungi, dan Mengayomi Masyarakat</p>

        <button>Selengkapnya</button>
      </div>
    </section>
  );
}

export default Hero;