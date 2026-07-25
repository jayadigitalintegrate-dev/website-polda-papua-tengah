import "./ContactHero.css";

interface ContactHeroProps {
  title: string;
  description: string;
}

export default function ContactHero({
  title,
  description,
}: ContactHeroProps) {

  return (
    <section className="contact-hero">

      <div className="contact-hero__container">

        <h1>
          {title}
        </h1>

        <p>
          {description}
        </p>

      </div>

    </section>
  );
}