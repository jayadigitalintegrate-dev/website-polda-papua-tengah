import "./Hero.css";
import heroImage from "../../assets/hero/hero-polda-papua-tengah.png";

function Hero() {
  return (
    <section className="hero">
      <img
        src={heroImage}
        alt="Hero Polda Papua Tengah"
        className="hero-image"
      />

      <button className="hero-btn">
        Selengkapnya
      </button>
    </section>
  );
}

export default Hero;