import "./Complaint.css";


interface NotificationProps {

  nama:string;
  alamat:string;
  email:string;
  ticket:string;

}



export default function ComplaintNotification({

  nama,
  alamat,
  email,
  ticket

}:NotificationProps){


return (

<div className="complaint-notification">


<h3>
Notifikasi Pelapor
</h3>


<p>
Kepada:
<strong>
{" "}
{nama}
</strong>
</p>


<p>
Alamat:
<br/>
{alamat}
</p>


<p>
Email:
<br/>
{email}
</p>


<p>
Nomor Tiket Laporan:
<br/>

<strong>
{ticket}
</strong>

</p>


<p>

Laporan anda segera akan kami distribusikan
kepada Satker terkait.

</p>


<p>

Silahkan lakukan pengecekan kembali dalam
7 hari kedepan dengan menyebutkan nomor
tiket layanan anda.

</p>


<strong>
Salam Presisi
</strong>


</div>

);


}