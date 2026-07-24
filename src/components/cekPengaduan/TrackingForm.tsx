import {
  useState
} from "react";

import "./Tracking.css";


interface TrackingFormProps {

  onSearch: (
    ticket:string
  ) => void;

}


export default function TrackingForm({

  onSearch

}:TrackingFormProps){


  const [ticket,setTicket] =
    useState("");



  function handleSubmit(
    e:React.FormEvent
  ){

    e.preventDefault();


    if(ticket.trim()){

      onSearch(
        ticket
      );

    }

  }



  return (

    <section className="tracking-form">


      <h2>
        Cek Status Pengaduan
      </h2>


      <p>
        Masukkan nomor tiket laporan
        untuk melihat perkembangan
        pengaduan Anda.
      </p>



      <form
        onSubmit={handleSubmit}
      >


        <input

          type="text"

          placeholder="Contoh: PPT-20260724-000001"

          value={ticket}

          onChange={
            (e)=>
            setTicket(
              e.target.value
            )
          }

          required

        />


        <button
          type="submit"
        >
          Cari Laporan
        </button>


      </form>


    </section>

  );

}