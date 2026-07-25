import "./ContactMap.css";


interface ContactMapProps {

  embed:string;

}


export default function ContactMap({

  embed

}:ContactMapProps){


  return (

    <section className="contact-map">


      <div className="contact-map__container">


        <div className="contact-map__header">

          <h2>
            Lokasi Kantor
          </h2>

          <p>
            Temukan lokasi Polda Papua Tengah melalui peta berikut.
          </p>

        </div>



        <div className="contact-map__wrapper">


          {
            embed ? (

              <iframe

                src={embed}

                title="Lokasi Polda Papua Tengah"

                loading="lazy"

                allowFullScreen

              />

            ) : (

              <div className="contact-map__empty">

                Lokasi peta belum tersedia.

              </div>

            )

          }


        </div>


      </div>


    </section>

  );

}