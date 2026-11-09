import { useEffect, useRef } from "react";
import "./CallCenterDialog.css";

export default function CallCenterDialog({ onClose }: { onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousFocus = document.activeElement;
    const dialog = dialogRef.current;
    dialog?.showModal();
    closeRef.current?.focus();
    return () => {
      dialog?.close();
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus();
    };
  }, []);

  return (
    <dialog ref={dialogRef} className="call-center-dialog" aria-modal="true"
      aria-labelledby="call-center-title" aria-describedby="call-center-message"
      onCancel={(event) => { event.preventDefault(); onClose(); }}>
      <h2 id="call-center-title">Informasi Call Center 110</h2>
      <div id="call-center-message">
        <p>Saat ini, panggilan langsung ke Call Center 110 belum tersedia melalui website desktop.</p>
        <p>Silakan menggunakan telepon seluler (HP) pribadi Anda untuk menghubungi layanan Kepolisian di nomor 110.</p>
      </div>
      <button ref={closeRef} type="button" onClick={onClose}>Tutup</button>
    </dialog>
  );
}
