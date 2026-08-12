import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
    fetchPolres,
    type CmsPolres,
} from "../../services/polresApi";
import "../../components/polres/Polres.css";

export default function DetailPolres() {
    const { slug } = useParams();

    const [polres, setPolres] = useState<CmsPolres | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let mounted = true;

        async function loadPolres() {
            try {
                setLoading(true);
                setError(null);

                const data = await fetchPolres();

                const found = data.find(
                    (item) => String(item.id) === slug
                );

                if (mounted) {
                    setPolres(found ?? null);
                }
            } catch (err) {
                if (mounted) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Gagal mengambil data Polres."
                    );
                }
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
    }, [slug]);

    if (loading) {
        return (
            <section className="polres-section">
                <div className="polres-container">
                    <div className="polres-state">
                        Memuat profil Polres...
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="polres-section">
                <div className="polres-container">
                    <div className="polres-state polres-error">
                        {error}
                    </div>

                    <Link
                        to="/polres"
                        className="polres-button"
                    >
                        Kembali ke Daftar Polres
                    </Link>
                </div>
            </section>
        );
    }

    if (!polres) {
        return (
            <section className="polres-section">
                <div className="polres-container">
                    <div className="polres-state">
                        Data Polres tidak ditemukan.
                    </div>

                    <Link
                        to="/polres"
                        className="polres-button"
                    >
                        Kembali ke Daftar Polres
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="polres-section">
            <div className="polres-container">

                <div className="polres-detail">

                    {polres.chief_photo_url ? (
                        <img
                            src={polres.chief_photo_url}
                            alt={polres.name_id}
                        />
                    ) : (
                        <div className="polres-card-placeholder">
                            <span>Polres Papua Tengah</span>
                        </div>
                    )}

                    <div className="polres-detail-content">

                        <h1>{polres.name_id}</h1>

                        {polres.jurisdiction && (
                            <p>
                                <strong>Wilayah:</strong>{" "}
                                {polres.jurisdiction}
                            </p>
                        )}

                        {polres.address && (
                            <p>
                                <strong>Alamat:</strong>{" "}
                                {polres.address}
                            </p>
                        )}

                        {polres.chief_name && (
                            <p>
                                <strong>
                                    {polres.chief_rank ?? "Kapolres"}:
                                </strong>{" "}
                                {polres.chief_name}
                            </p>
                        )}

                        {polres.chief_nrp && (
                            <p>
                                <strong>NRP:</strong>{" "}
                                {polres.chief_nrp}
                            </p>
                        )}

                        {polres.phone && (
                            <p>
                                <strong>Telepon:</strong>{" "}
                                {polres.phone}
                            </p>
                        )}

                        {polres.email && (
                            <p>
                                <strong>Email:</strong>{" "}
                                {polres.email}
                            </p>
                        )}

                        {polres.website && (
                            <p>
                                <strong>Website:</strong>{" "}
                                {polres.website}
                            </p>
                        )}

                        {polres.description && (
                            <p>
                                {polres.description}
                            </p>
                        )}

                        <Link
                            to="/polres"
                            className="polres-button"
                        >
                            Kembali ke Daftar Polres
                        </Link>

                    </div>

                </div>

            </div>
        </section>
    );
}