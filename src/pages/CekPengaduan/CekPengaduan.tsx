import {
  useState
} from "react";

import "./CekPengaduan.css";

import TrackingForm from "../../components/cekPengaduan/TrackingForm";
import TrackingResult from "../../components/cekPengaduan/TrackingResult";


export default function CekPengaduan(){

  const [
    ticket,
    setTicket
  ] = useState("");


  return (

    <main className="cek-pengaduan-page">


      <section className="cek-hero">

        <div className="cek-container">


          <span>
            LAYANAN PENGADUAN
          </span>


          <h1>
            Cek Status Laporan Anda
          </h1>


          <p>
            Masukkan nomor tiket laporan
            untuk mengetahui perkembangan
            penanganan pengaduan.
          </p>


        </div>

      </section>



      <TrackingForm

        onSearch={
          setTicket
        }

      />



      {
        ticket && (

          <TrackingResult

            ticket={ticket}

          />

        )

      }


    </main>

  );

}