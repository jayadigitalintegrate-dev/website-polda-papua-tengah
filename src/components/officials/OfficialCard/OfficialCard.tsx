import "./OfficialCard.css";

import type { Official } from "../../../types/official";


interface OfficialCardProps {

  official: Official;

  onClick?: () => void;

}



const OfficialCard = ({
  official,
  onClick,
}: OfficialCardProps) => {


  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {

    event.stopPropagation();

    if (onClick) {
      onClick();
    }

  };

  /*
   * Posisi pejabat yang belum memiliki data CMS tidak boleh
   * menggunakan foto placeholder atau foto pejabat lain.
   *
   * Jika nama belum tersedia atau foto masih placeholder,
   * tampilkan frame kosong dengan informasi "Data Belum Terinput".
   */
  const hasOfficialData =
    Boolean(official.name_id?.trim()) &&
    Boolean(official.photo) &&
    !official.photo.includes("/placeholder/");


  return (

    <article className="official-card">


      <div className="official-card-image">

        {hasOfficialData ? (
          <img
            src={official.photo}
            alt={official.name_id}
            loading="lazy"
          />
        ) : (
          <div className="official-card-empty">
            <span>Data Belum Terinput</span>
          </div>
        )}

      </div>



      <div className="official-card-content">


        <h3>
          {official.name_id}
        </h3>



        <span className="official-rank">

          {official.rank}

        </span>



        <p className="official-position">

          {official.position_id}

        </p>



        <button

          type="button"

          className="official-detail-button"

          onClick={handleClick}

          aria-label={`Lihat profil ${official.name_id}`}

        >

          Lihat Profil

        </button>


      </div>


    </article>

  );

};



export default OfficialCard;
