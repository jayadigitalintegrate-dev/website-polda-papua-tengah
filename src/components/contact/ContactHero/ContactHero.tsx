import "./ContactHero.css";

import { useTranslation } from "react-i18next";


export default function ContactHero() {


  const { t } = useTranslation("contact");


  return (

    <section className="contact-hero">


      <div className="contact-hero__container">


        <h1>
          {t("heroTitle")}
        </h1>


        <p>
          {t("heroDescription")}
        </p>


      </div>


    </section>

  );

}