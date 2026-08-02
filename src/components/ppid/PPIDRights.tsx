import "./PPID.css";

import { ppidService } from "../../services/ppidService";

export default function PPIDRights() {
  const rightsData = ppidService.getRights();

  return (
    <section className="ppid-section ppid-alt">

      <div className="ppid-container">

        <div className="ppid-grid two">

          <div className="ppid-card">

            <span className="ppid-label dark">
              HAK PEMOHON
            </span>

            <h2>
              Hak Pemohon Informasi Publik
            </h2>

            <ul className="ppid-list">

              {rightsData.rights.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}

            </ul>

          </div>


          <div className="ppid-card">

            <span className="ppid-label dark">
              KEWAJIBAN
            </span>

            <h2>
              Kewajiban Pengguna Informasi
            </h2>

            <ul className="ppid-list">

              {rightsData.obligations.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}

