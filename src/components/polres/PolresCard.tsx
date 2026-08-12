import { Link } from "react-router-dom";
import type { CmsPolres } from "../../services/polresApi";
import "./Polres.css";

interface Props {
    data: CmsPolres;
}

export default function PolresCard({ data }: Props) {
    return (
        <div className="polres-card">

            {data.chief_photo_url ? (
                <img
                    src={data.chief_photo_url}
                    alt={data.name_id}
                />
            ) : (
                <div className="polres-card-placeholder">
                    <span>Polres Papua Tengah</span>
                </div>
            )}

            <div className="polres-content">

                <h3>{data.name_id}</h3>

                {data.jurisdiction && (
                    <p>{data.jurisdiction}</p>
                )}

                {data.address && (
                    <span>{data.address}</span>
                )}

                {data.chief_name && (
                    <div className="polres-chief">
                        <strong>
                            {data.chief_rank ?? "Kapolres"}
                        </strong>

                        <span>
                            {data.chief_name}
                        </span>
                    </div>
                )}

                <Link
                    to={`/polres/${data.id}`}
                    className="polres-button"
                >
                    Lihat Profil
                </Link>

            </div>

        </div>
    );
}
