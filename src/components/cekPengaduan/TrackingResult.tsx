import "./Tracking.css";


interface TrackingResultProps {

  ticket:string;

}



export default function TrackingResult({

  ticket

}:TrackingResultProps){


  return (

    <section className="tracking-result">


      <div className="tracking-card">


        <h2>
          Detail Laporan
        </h2>


        <div className="tracking-item">

          <span>
            Nomor Tiket
          </span>

          <strong>
            {ticket}
          </strong>

        </div>



        <div className="tracking-item">

          <span>
            Status
          </span>

          <strong className="status">

            Laporan Diterima

          </strong>

        </div>



        <div className="tracking-item">

          <span>
            Keterangan
          </span>

          <p>
            Laporan Anda telah diterima
            dan akan segera didistribusikan
            kepada Satker terkait.
          </p>

        </div>



      </div>


    </section>

  );

}