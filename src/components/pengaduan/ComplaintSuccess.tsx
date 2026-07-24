import "./Complaint.css";


interface ComplaintSuccessProps {

  onClose?: () => void;

}



export default function ComplaintSuccess({
  onClose
}: ComplaintSuccessProps) {


  return (

    <div className="complaint-success">


      <h2>
        Terimakasih Atas Informasi Anda
      </h2>


      <p>
        Kami akan segera mendistribusikan
        laporan anda pada Satker Terkait.
      </p>


      <p>
        Silahkan simpan nomor tiket laporan
        untuk melakukan pengecekan kembali.
      </p>


      <strong>
        Salam Presisi
      </strong>


      {
        onClose && (

          <button
            onClick={onClose}
          >
            Buat Laporan Baru
          </button>

        )
      }


    </div>

  );

}