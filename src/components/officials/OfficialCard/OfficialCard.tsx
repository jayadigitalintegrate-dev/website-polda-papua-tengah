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


  return (

    <article className="official-card">


      <div className="official-card-image">

        <img
          src={official.photo}
          alt={official.name_id}
          loading="lazy"
        />

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
