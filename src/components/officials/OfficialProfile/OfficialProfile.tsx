import "./OfficialProfile.css";

import type { Official } from "../../../types/official";


interface OfficialProfileProps {

  official: Official;

  onBack: () => void;

}


export default function OfficialProfile({
  official,
  onBack,
}: OfficialProfileProps) {


  return (

    <section className="official-profile">


      <button
        className="official-profile-back"
        onClick={onBack}
      >
        ?
      </button>



      <div className="official-profile-header">


        <img
          src={official.photo}
          alt={official.name_id}
          className="official-profile-photo"
        />



        <div className="official-profile-title">


          <h1>
            {official.name_id}
          </h1>


          <h3>
            {official.position_id}
          </h3>


          <p>
            Pangkat : {official.rank}
          </p>


        </div>


      </div>



      <div className="official-profile-content">


        <div className="official-info-card">

          <h3>Biodata</h3>

          <p>
            NRP : {official.nrp}
          </p>


          <p>
            Tempat / Tanggal Lahir :
            {" "}
            {official.birthPlace}
            {" / "}
            {official.birthDate}
          </p>


          <p>
            Agama : {official.religion}
          </p>


          <p>
            Status Perkawinan :
            {" "}
            {official.maritalStatus}
          </p>


          <p>
            Nama Pasangan :
            {" "}
            {official.spouse}
          </p>


          <p>
            Jumlah Anak :
            {" "}
            {official.children}
          </p>


          <p>
            Motto :
            {" "}
            {official.motto}
          </p>


        </div>




        <div className="official-info-card">

          <h3>Pendidikan</h3>

          {
            official.education.length === 0
            ?
            <p>-</p>
            :
            official.education.map((item,index)=>(
              <p key={index}>
                {item}
              </p>
            ))
          }

        </div>




        <div className="official-info-card">

          <h3>Riwayat Penugasan</h3>


          {
            official.assignments.map((item,index)=>(
              <p key={index}>
                {item}
              </p>
            ))
          }


        </div>




        <div className="official-info-card">

          <h3>Riwayat Jabatan</h3>


          {
            official.career.map((item,index)=>(
              <p key={index}>
                {item}
              </p>
            ))
          }


        </div>




        <div className="official-info-card">

          <h3>Penghargaan</h3>


          {
            official.awards.map((item,index)=>(
              <p key={index}>
                {item}
              </p>
            ))
          }


        </div>


      </div>


    </section>

  );

}

