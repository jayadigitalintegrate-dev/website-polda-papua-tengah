import "./Pengaduan.css";

import ComplaintHero from "../../components/pengaduan/ComplaintHero";
import ComplaintForm from "../../components/pengaduan/ComplaintForm";


export default function Pengaduan() {

  return (

    <main className="pengaduan-page">

      <ComplaintHero />

      <ComplaintForm />

    </main>

  );

}