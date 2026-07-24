import "./Complaint.css";


interface ComplaintTicketProps {

  ticket: string;

}


export default function ComplaintTicket({
  ticket
}: ComplaintTicketProps) {


  return (

    <section className="complaint-ticket">


      <div className="complaint-ticket-card">


        <span>
          NOMOR TIKET LAPORAN
        </span>


        <h2>
          {ticket}
        </h2>


        <p>
          Laporan Anda telah kami terima.
          Kami akan segera mendistribusikan
          laporan kepada Satker terkait.
        </p>


        <div className="complaint-status">

          Status:
          <strong>
            Laporan Diterima
          </strong>

        </div>


      </div>


    </section>

  );

}