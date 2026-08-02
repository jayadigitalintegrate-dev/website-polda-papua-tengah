import { useTranslation } from "react-i18next";

import "./ContactMap.css";


interface ContactMapProps {

  embed?: string;

  latitude?: number;

  longitude?: number;

  showMap?: boolean;

}


export default function ContactMap({

  embed,

  latitude,

  longitude,

  showMap = true,

}: ContactMapProps) {


  const { t } = useTranslation("contact");


  const mapUrl =
    embed ||
    (
      latitude !== undefined &&
      longitude !== undefined
        ? `https://www.google.com/maps?q=${latitude},${longitude}&output=embed`
        : ""
    );


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
            showMap && mapUrl ? (

              <iframe

                src={mapUrl}

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
