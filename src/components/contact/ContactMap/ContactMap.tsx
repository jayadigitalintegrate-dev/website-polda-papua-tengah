import { useTranslation } from "react-i18next";

import "./ContactMap.css";


interface ContactMapProps {

  embed: string;

}


export default function ContactMap({

  embed

}: ContactMapProps) {


  const { t } = useTranslation("contact");


  return (

    <section className="contact-map">


      <div className="contact-map__container">


        <div className="contact-map__header">


          <h2>
            {t("location")}
          </h2>


          <p>
            {t("mapDescription")}
          </p>


        </div>



        <div className="contact-map__wrapper">


          {
            embed ? (

              <iframe

                src={embed}

                title={t("location")}

                loading="lazy"

                allowFullScreen

              />

            ) : (

              <div className="contact-map__empty">

                {t("mapEmpty")}

              </div>

            )

          }


        </div>


      </div>


    </section>

  );

}