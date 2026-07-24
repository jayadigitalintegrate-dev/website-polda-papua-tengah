import { Link } from "react-router-dom";
import type { Polres } from "./polresData";
import "./Polres.css";

interface Props {
    data: Polres;
}

export default function PolresCard({ data }: Props) {

    return (
        <div className="polres-card">

            <img
                src={data.gambar}
                alt={data.nama}
            />

            <div className="polres-content">

                <h3>{data.nama}</h3>

                <p>{data.wilayah}</p>

                <span>
                    {data.alamat}
                </span>

                <Link
                    to={`/polres/${data.id}`}
                    className="polres-button"
                >
                    Lihat Profil
                </Link>


            </div>

        </div>
    )
}
