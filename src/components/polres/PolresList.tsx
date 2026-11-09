import { useEffect, useState } from "react";
import PolresCard from "./PolresCard";
import { fetchPolres, type CmsPolres } from "../../services/polresApi";
import "./Polres.css";

export default function PolresList() {
    const [polres, setPolres] = useState<CmsPolres[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        let mounted = true;

        async function loadPolres() {
            try {
                setLoading(true);
                setError(false);

                const data = await fetchPolres();

                if (!mounted) return;

                setPolres(data);
            } catch {
                if (!mounted) return;
                setPolres([]);
                setError(true);
            } finally {
                if (mounted) {
                    setLoading(false);
                }
            }
        }

        loadPolres();

        return () => {
            mounted = false;
        };
    }, []);

    return (
        <section className="polres-section">
            <div className="polres-container">

                <div className="polres-header">
                    <h2>Jajaran Polres Papua Tengah</h2>

                    <p>
                        Satuan kewilayahan Polda Papua Tengah
                    </p>
                </div>

                {loading && (
                    <div className="polres-state">
                        Memuat data Jajaran Polres...
                    </div>
                )}

                {!loading && error && (
                    <div className="polres-state polres-error">
                        Data Polres belum dapat dimuat. Silakan coba lagi nanti.
                    </div>
                )}

                {!loading && !error && polres.length === 0 && (
                    <div className="polres-state">
                        Belum ada data Jajaran Polres yang tersedia.
                    </div>
                )}

                {!loading && !error && polres.length > 0 && (
                    <div className="polres-grid">
                        {polres.map((item) => (
                            <PolresCard
                                key={item.id}
                                data={item}
                            />
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}
