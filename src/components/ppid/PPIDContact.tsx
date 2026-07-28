import "./PPID.css";

import { ppidService } from "../../services/ppidService";

export default function PPIDContact() {

  const contact = ppidService.getContact();

  return (
    <section className="ppid-section">

      <div className="ppid-container">

        <h2>
          Kontak PPID
        </h2>

        <p>
          {contact.organization}
          <br />
          Email: {contact.email}
          <br />
          {contact.serviceHours}
        </p>

      </div>

    </section>
  );
}
