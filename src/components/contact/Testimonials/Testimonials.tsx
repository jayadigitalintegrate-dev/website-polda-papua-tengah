import "./Testimonials.css";

import TestimonialSlider from "./TestimonialSlider";

export default function Testimonials() {

  return (

    <section className="testimonials">

      <div className="testimonials__header">

        <h2>
          Apa Kata Masyarakat
        </h2>

        <p>
          Kritik, saran, dan apresiasi masyarakat terhadap pelayanan Polda Papua Tengah.
        </p>

      </div>

      <TestimonialSlider />

    </section>

  );

}