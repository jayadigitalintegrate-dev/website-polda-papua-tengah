import {
  useState
} from "react";

import "./Complaint.css";

import ComplaintTicket from "./ComplaintTicket";
import ComplaintSuccess from "./ComplaintSuccess";
import ComplaintNotification from "./ComplaintNotification";

export default function ComplaintForm() {


  const [submitted, setSubmitted] = useState(false);

  const [ticket, setTicket] = useState("");


  const [form, setForm] = useState({

    nama: "",
    ktp: "",
    hp: "",
    email: "",
    alamat: "",
    jenis: "",
    isi: ""

  });



  function generateTicket(){

    const date = new Date();

    const tahun = date.getFullYear();

    const bulan = String(
      date.getMonth() + 1
    ).padStart(2,"0");

    const hari = String(
      date.getDate()
    ).padStart(2,"0");


    const random = Math.floor(
      Math.random() * 999999
    )
    .toString()
    .padStart(6,"0");


    return `PPT-${tahun}${bulan}${hari}-${random}`;

  }



  function handleChange(
    e:
    React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ){

    setForm({

      ...form,

      [e.target.name]:
      e.target.value

    });

  }



  function handleSubmit(
    e: React.FormEvent
  ){

    e.preventDefault();


    const nomorTiket =
      generateTicket();



    const laporan = {

      tiket:
      nomorTiket,

      tanggal:
      new Date().toISOString(),

      status:
      "Laporan Diterima",

      ...form

    };



    localStorage.setItem(

      "pengaduan-terakhir",

      JSON.stringify(laporan)

    );



    setTicket(
      nomorTiket
    );


    setSubmitted(true);


  }



 if(submitted){

  return (

    <>

      <ComplaintSuccess />


      <ComplaintTicket
        ticket={ticket}
      />


      <ComplaintNotification

        nama={form.nama}

        alamat={form.alamat}

        email={form.email}

        ticket={ticket}

      />


    </>

  );

}


  return (

    <section className="complaint-section">


      <div className="complaint-container">


        <h2>
          Form Pengaduan Masyarakat
        </h2>


        <p>
          Isi data dengan benar agar laporan
          dapat diproses oleh petugas.
        </p>



        <form

          className="complaint-form"

          onSubmit={
            handleSubmit
          }

        >


          <input

            name="nama"

            placeholder="Nama Lengkap"

            value={form.nama}

            onChange={handleChange}

            required

          />



          <input

            name="ktp"

            placeholder="Nomor KTP"

            value={form.ktp}

            onChange={handleChange}

            required

          />



          <input

            name="hp"

            placeholder="Nomor HP"

            value={form.hp}

            onChange={handleChange}

            required

          />



          <input

            name="email"

            type="email"

            placeholder="Email"

            value={form.email}

            onChange={handleChange}

            required

          />



          <textarea

            name="alamat"

            placeholder="Alamat"

            value={form.alamat}

            onChange={handleChange}

            required

          />



          <select

            name="jenis"

            value={form.jenis}

            onChange={handleChange}

            required

          >

            <option value="">
              Pilih Jenis Aduan
            </option>

            <option>
              Laporan Kamtibmas
            </option>

            <option>
              Informasi Layanan
            </option>

            <option>
              Pengaduan Masyarakat
            </option>

            <option>
              Layanan PPID
            </option>

          </select>



          <textarea

            name="isi"

            placeholder="Tuliskan informasi atau laporan Anda"

            value={form.isi}

            onChange={handleChange}

            required

          />



          <button

            type="submit"

            className="complaint-button"

          >

            Kirim Laporan

          </button>



        </form>


      </div>


    </section>

  );

}