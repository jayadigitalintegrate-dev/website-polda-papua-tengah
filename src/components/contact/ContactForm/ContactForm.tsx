import "./ContactForm.css";

export default function ContactForm() {

  return (

    <section className="contact-form">

      <div className="contact-form__header">

        <h2>
          Kirim Pesan
        </h2>

        <p>
          Silakan isi formulir berikut untuk menghubungi Polda Papua Tengah.
        </p>

      </div>


      <form className="contact-form__form">


        <div className="contact-form__group">

          <label>
            Nama Lengkap
          </label>

          <input
            type="text"
            placeholder="Masukkan nama"
          />

        </div>



        <div className="contact-form__group">

          <label>
            Email
          </label>

          <input
            type="email"
            placeholder="Masukkan email"
          />

        </div>



        <div className="contact-form__group">

          <label>
            Nomor Telepon
          </label>

          <input
            type="text"
            placeholder="Masukkan nomor telepon"
          />

        </div>



        <div className="contact-form__group">

          <label>
            Subjek
          </label>

          <input
            type="text"
            placeholder="Subjek pesan"
          />

        </div>



        <div className="contact-form__group">

          <label>
            Pesan
          </label>

          <textarea
            rows={5}
            placeholder="Tulis pesan Anda"
          />

        </div>



        <button
          type="submit"
          className="contact-form__button"
        >
          Kirim Pesan
        </button>


      </form>


    </section>

  );

}