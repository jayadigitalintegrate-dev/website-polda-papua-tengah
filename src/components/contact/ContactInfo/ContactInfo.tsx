import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

import "./ContactInfo.css";

interface ContactInfoProps {
  address: string;
  phone: string[];
  email: string[];
  website: string;
  officeHours: string;
}

export default function ContactInfo({
  address,
  phone,
  email,
  website,
  officeHours,
}: ContactInfoProps) {

  const { t } = useTranslation("contact");

  return (

    <section className="contact-info">

      <div className="contact-info__container">

        <div className="contact-info__grid">

          <div className="contact-info__card">

            <Icon
              icon="mdi:map-marker-radius"
              className="contact-info__icon"
            />

            <h3>{t("address")}</h3>

            <p>{address}</p>

          </div>

          <div className="contact-info__card">

            <Icon
              icon="mdi:phone-in-talk"
              className="contact-info__icon"
            />

            <h3>{t("phone")}</h3>

            {phone.map((item,index)=>(

              <p key={index}>

                <a
                  href={`tel:${item.replace(/\s/g,"")}`}
                  className="contact-info__link">

                  {item}

                </a>

              </p>

            ))}

          </div>

          <div className="contact-info__card">

            <Icon
              icon="mdi:email-fast"
              className="contact-info__icon"
            />

            <h3>{t("email")}</h3>

            {email.map((item,index)=>(

              <p key={index}>

                <a
                  href={`mailto:${item}`}
                  className="contact-info__link">

                  {item}

                </a>

              </p>

            ))}

          </div>

          <div className="contact-info__card">

            <Icon
              icon="mdi:web"
              className="contact-info__icon"
            />

            <h3>{t("website")}</h3>

            <p>

              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info__link">

                {website}

              </a>

            </p>

          </div>

          <div className="contact-info__card">

            <Icon
              icon="mdi:clock-time-four"
              className="contact-info__icon"
            />

            <h3>{t("officeHours")}</h3>

            <p>{officeHours}</p>

          </div>

        </div>

      </div>

    </section>

  );

}
