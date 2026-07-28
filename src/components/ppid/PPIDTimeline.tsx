import "./PPID.css";

import { ppidService } from "../../services/ppidService";

export default function PPIDTimeline() {
  const steps = ppidService.getTimeline();

  return (
    <section className="ppid-section ppid-alt">
      <div className="ppid-container">
        <div className="ppid-title">
          <span className="ppid-label dark">
            ALUR PELAYANAN
          </span>

          <h2>
            Cara Mengajukan Permohonan Informasi
          </h2>

          <p>
            Proses pelayanan informasi publik PPID Polda
            Papua Tengah dilaksanakan secara transparan
            dan mudah diakses masyarakat.
          </p>
        </div>

        <div className="ppid-timeline">
          {steps.map((step) => (
            <div
              className="ppid-step"
              key={step.number}
            >
              <div className="ppid-step-number">
                {step.number}
              </div>

              <div className="ppid-step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
