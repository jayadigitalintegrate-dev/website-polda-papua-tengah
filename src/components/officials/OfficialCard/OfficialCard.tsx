import "./OfficialCard.css";
import type { Official } from "../../../data/officials";

interface OfficialCardProps {
  official: Official;
  onClick?: () => void;
}

const OfficialCard = ({ official, onClick }: OfficialCardProps) => {
  return (
    <article className="official-card" onClick={onClick}>
      <div className="official-card-image">
        <img
          src={official.photo}
          alt={official.name}
          loading="lazy"
        />
      </div>

      <div className="official-card-content">
        <h3>{official.name}</h3>

        <span className="official-rank">
          {official.rank}
        </span>

        <p className="official-position">
          {official.position}
        </p>

        <button
          type="button"
          className="official-detail-button"
        >
          Lihat Profil
        </button>
      </div>
    </article>
  );
};

export default OfficialCard;