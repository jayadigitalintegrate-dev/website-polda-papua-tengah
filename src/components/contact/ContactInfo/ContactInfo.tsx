import { useTranslation } from "react-i18next";

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

  officeHours

}: ContactInfoProps) {


  const { t } = useTranslation("contact");


  return (

    <section className="contact-info">


      <div className="contact-info__container">


        <div className="contact-info__grid">


          <div className="contact-info__card">

            <span>
              ??
            </span>

            <h3>
              {t("address")}
            </h3>

            <p>
              {address}
            </p>

          </div>



          <div className="contact-info__card">

            <span>
              ??
            </span>

            <h3>
              {t("phone")}
            </h3>

            {
              phone.map((item, index) => (

                <p key={index}>
                  {item}
                </p>

              ))
            }

          </div>




          <div className="contact-info__card">

            <span>
              ??
            </span>

            <h3>
              {t("email")}
            </h3>

            {
              email.map((item, index) => (

                <p key={index}>
                  {item}
                </p>

              ))
            }

          </div>




          <div className="contact-info__card">
            <span>
              ?? Papua Tengah
            </span>

            <h3>
              {t("website")}
            </h3>

            <p>
              {website}
            </p>

          </div>




          <div className="contact-info__card">

            <span>
              ??
            </span>

            <h3>
              {t("officeHours")}
            </h3>

            <p>
              {officeHours}
            </p>

          </div>


        </div>


      </div>


    </section>

  );

}

