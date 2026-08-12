import { useEffect, useState } from "react";
import PolresCard from "./PolresCard";
import { fetchPolres, type CmsPolres } from "../../services/polresApi";
import { polresData } from "./polresData";
import "./Polres.css";

function getLocalPolres(): CmsPolres[] {
    return polresData.map((item, index) => ({
        id: index + 1,

        name_id: item.nama,
        name_en: null,

        chief_name: item.kapolres,
        chief_rank: "Kapolres",
        chief_nrp: null,

        chief_photo: null,
        chief_photo_url: item.gambar,

        jurisdiction: item.wilayah,
        address: item.alamat,

        phone: null,
        email: null,
        website: null,
        description: null,

        sort_order: index + 1,
        status: "active",

        created_at: "",
        updated_at: "",
    }));
}

export default function PolresList() {
    const [polres, setPolres] = useState<CmsPolres[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;

        async function loadPolres() {
            try {
                setLoading(true);

                const data = await fetchPolres();

                if (!mounted) return;

                if (data.length > 0) {
                    // CMS menjadi sumber utama.
                    setPolres(data);
                } else {
                    // CMS tersedia tetapi belum memiliki data.
                    setPolres(getLocalPolres());
                }
            } catch (err) {
                if (!mounted) return;

                // GitHub Pages tidak dapat mengakses CMS localhost.
                // Gunakan data lokal sebagai fallback.
                console.warn(
                    "CMS Polres tidak dapat diakses. Menggunakan data lokal.",
                    err
                );

                setPolres(getLocalPolres());
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

                {!loading && polres.length === 0 && (
                    <div className="polres-state">
                        Belum ada data Jajaran Polres yang tersedia.
                    </div>
                )}

                {!loading && polres.length > 0 && (
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