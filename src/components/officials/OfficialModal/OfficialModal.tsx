import "./OfficialModal.css";
import type { Official } from "../../../types/official";

interface OfficialModalProps {
  official: Official | null;
  onClose: () => void;
}

const OfficialModal = ({
  official,
  onClose,
}: OfficialModalProps) => {

  if (!official) return null;

  return (
    <div className="official-modal-overlay">

      <div className="official-modal">

        <button
          className="official-modal-close"
          onClick={onClose}
        >
          Ã—
        </button>


        <div className="official-modal-header">

          <img
            src={official.photo}
            alt={official.name_id}
          />

          <div>
            <h2>{official.name_id}</h2>

            <span>
              {official.rank}
            </span>

            <p>
              {official.position_id}
            </p>
          </div>

        </div>


        <div className="official-info-grid">

          <div>
            <label>NRP</label>
            <p>{official.nrp}</p>
          </div>

          <div>
            <label>Tempat Lahir</label>
            <p>{official.birthPlace}</p>
          </div>

          <div>
            <label>Tanggal Lahir</label>
            <p>{official.birthDate}</p>
          </div>

          <div>
            <label>Agama</label>
            <p>{official.religion}</p>
          </div>

          <div>
            <label>Status</label>
            <p>{official.maritalStatus}</p>
          </div>

          <div>
            <label>Anak</label>
            <p>{official.children}</p>
          </div>

        </div>


        <section>
          <h3>Motto</h3>
          <p>
            {official.motto || "-"}
          </p>
        </section>


        <section>
          <h3>Pendidikan</h3>

          <ul>
            {
              official.education.length
              ?
              official.education.map((item,index)=>(
                <li key={index}>{item}</li>
              ))
              :
              <li>-</li>
            }
          </ul>

        </section>


        <section>
          <h3>Riwayat Penugasan</h3>

          <ul>
            {
              official.assignments.length
              ?
              official.assignments.map((item,index)=>(
                <li key={index}>{item}</li>
              ))
              :
              <li>-</li>
            }
          </ul>

        </section>


        <section>
          <h3>Riwayat Jabatan</h3>

          <ul>
            {
              official.career.length
              ?
              official.career.map((item,index)=>(
                <li key={index}>{item}</li>
              ))
              :
              <li>-</li>
            }
          </ul>

        </section>


        <section>
          <h3>Penghargaan</h3>

          <ul>
            {
              official.awards.length
              ?
              official.awards.map((item,index)=>(
                <li key={index}>{item}</li>
              ))
              :
              <li>-</li>
            }
          </ul>

        </section>


        <button
          className="official-modal-button"
          onClick={onClose}
        >
          Tutup
        </button>


      </div>

    </div>
  );
};


export default OfficialModal;
