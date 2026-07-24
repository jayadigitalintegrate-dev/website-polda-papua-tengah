import { polresData } from "./polresData";
import PolresCard from "./PolresCard";
import "./Polres.css";

export default function PolresList(){

    return(
        <section className="polres-section">

            <div className="polres-container">

                <div className="polres-header">
                    <h2>Daftar Polres</h2>
                    <p>
                        Satuan kewilayahan Polda Papua Tengah
                    </p>
                </div>

                <div className="polres-grid">

                    {
                        polresData.map((item)=>(
                            <PolresCard
                                key={item.id}
                                data={item}
                            />
                        ))
                    }

                </div>

            </div>

        </section>
    )
}
