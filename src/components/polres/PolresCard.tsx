import { Link } from "react-router-dom";
import type { CmsPolres } from "../../services/polresApi";
import "./Polres.css";

interface Props {
    data: CmsPolres;
}

export default function PolresCard({ data }: Props) {
    return (
        <article className="polres-card">
            <div className="polres-card-media">
                {data.chief_photo_url ? (
                    <img
                        src={data.chief_photo_url}
                        alt={`Kapolres ${data.name_id}`}
                    />
                ) : (
                    <div className="polres-card-placeholder">
                        <span>Polda Papua Tengah</span>
                    </div>
                )}

                <span className="polres-card-badge">
                    POLRES
                </span>
            </div>

            <div className="polres-content">
                <div className="polres-location">
                    {data.jurisdiction || "Papua Tengah"}
                </div>

                <h3>{data.name_id}</h3>

                {data.chief_name && (
                    <div className="polres-chief">
                        <span className="polres-chief-label">
                            {data.chief_rank || "Kapolres"}
                        </span>

                        <strong>{data.chief_name}</strong>
                    </div>
                )}

                {data.address && (
                    <div className="polres-address">
                        <span className="polres-address-label">
                            Alamat
                        </span>

                        <span>{data.address}</span>
                    </div>
                )}

                <Link
                    to={`/polres/${data.id}`}
                    className="polres-button"
                >
                    <span>Lihat Profil</span>
                    <span aria-hidden="true">→</span>
                </Link>
            </div>
        </article>
    );
}
