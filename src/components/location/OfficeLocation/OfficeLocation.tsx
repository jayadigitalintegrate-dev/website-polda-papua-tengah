import { officeLocation } from "../../../data/officeLocation";

import "./OfficeLocation.css";


export default function OfficeLocation() {

  if (!officeLocation.showMap) {
    return null;
  }


  const mapUrl =
    `https://www.google.com/maps?q=${officeLocation.latitude},${officeLocation.longitude}&output=embed`;


  return (

    <section className="office-location">


      <div className="office-location__header">

        <h2>
          {officeLocation.title}
        </h2>


        <p>
          {officeLocation.description}
        </p>

      </div>



      <div className="office-location__map">

        <iframe
          src={mapUrl}
          title="Lokasi Kantor Polda Papua Tengah"
          loading="lazy"
          allowFullScreen
        />

      </div>



      <div className="office-location__address">

        <strong>
          Alamat:
        </strong>


        <span>
          {officeLocation.address}
        </span>

      </div>


    </section>

  );

}
