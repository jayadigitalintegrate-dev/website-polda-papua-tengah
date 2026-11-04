/* PK-WEB-COMPLAINT-SUCCESS-001 */
import { useEffect, useRef } from "react";
import "./Complaint.css";

interface ComplaintSuccessProps {
  ticket: string;
  onClose: () => void;
}

export default function ComplaintSuccess({
  ticket,
  onClose,
}: ComplaintSuccessProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!dialog.open) dialog.showModal();

    // Tidak menutup dialog saat cleanup React Strict Mode.
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="complaint-success-dialog"
      aria-labelledby="complaint-success-title"
      aria-describedby="complaint-success-description"
      onClose={onClose}
    >
      <div className="complaint-success-icon" aria-hidden="true">
        <span className="complaint-success-sparkle sparkle-one" />
        <span className="complaint-success-sparkle sparkle-two" />
        <span className="complaint-success-sparkle sparkle-three" />
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path
            d="m5 12 4 4L19 6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h2 id="complaint-success-title">
        Laporan Pengaduan Berhasil Dikirim!
      </h2>

      <div id="complaint-success-description">
        <p>
          Terima kasih telah menyampaikan pengaduan
          kepada Polda Papua Tengah.
        </p>
        <p>
          Laporan Anda telah diterima oleh sistem dan
          akan ditindaklanjuti sesuai prosedur yang berlaku.
        </p>
        <p className="complaint-success-ticket-label">
          Nomor Tiket Pengaduan
        </p>
        <p className="complaint-success-ticket">{ticket}</p>
        <p>
          Simpan nomor tiket ini untuk memeriksa
          perkembangan laporan Anda.
        </p>
        <p className="complaint-success-signature">
          Hormat Kami,
          <br />
          <strong>POLDA PAPUA TENGAH</strong>
        </p>
      </div>

      <button
        type="button"
        className="complaint-success-finish"
        onClick={() => dialogRef.current?.close()}
      >
        Selesai
      </button>
    </dialog>
  );
}
