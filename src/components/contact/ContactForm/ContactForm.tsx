import { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [rating, setRating] = useState(5);

  return (
    <section className="contact-form">

      <div className="contact-form__header">

        <span className="contact-form__badge">
          Kritik • Saran • Apresiasi
        </span>

        <h2>
          Kritik & Saran Masyarakat
        </h2>

        <p>
          Masukan Anda sangat berarti bagi kami dalam meningkatkan kualitas
          pelayanan Polda Papua Tengah.
        </p>

      </div>

      <form className="contact-form__form">

        <div className="contact-form__group">

          <label>Nama Lengkap *</label>

          <input
            type="text"
            placeholder="Masukkan nama lengkap"
          />

        </div>

        <div className="contact-form__group">

          <label>Email *</label>

          <input
            type="email"
            placeholder="Masukkan email"
          />

        </div>

        <div className="contact-form__group">

          <label>Nomor HP *</label>

          <input
            type="text"
            placeholder="08xxxxxxxxxx"
          />

        </div>

        <div className="contact-form__group">

          <label>Jenis Kelamin</label>

          <select>

            <option>Laki-laki</option>

            <option>Perempuan</option>

          </select>

        </div>

        <div className="contact-form__group">

          <label>Kategori</label>

          <select>

            <option>Apresiasi</option>

            <option>Saran</option>

            <option>Kritik</option>

          </select>

        </div>

        <div className="contact-form__group">

          <label>Rating Pelayanan</label>

          <div className="contact-form__rating">

            {[1,2,3,4,5].map((item)=>(
              <button
                type="button"
                key={item}
                onClick={()=>setRating(item)}
                className={
                  item <= rating
                    ? "star active"
                    : "star"
                }
              >
                ★
              </button>
            ))}

          </div>

        </div>

        <div className="contact-form__group">

          <label>Pesan</label>

          <textarea
            rows={6}
            placeholder="Tuliskan kritik, saran atau apresiasi Anda..."
          />

        </div>

        <label className="contact-form__agreement">

          <input type="checkbox" />

          Saya menyetujui data saya digunakan untuk keperluan pelayanan masyarakat.

        </label>

        <button
          type="submit"
          className="contact-form__button"
        >
          Kirim Kritik & Saran
        </button>

      </form>

    </section>
  );
}