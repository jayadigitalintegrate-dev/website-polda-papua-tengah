import { useState } from "react";

import "./PPID.css";

import { ppidService } from "../../services/ppidService";

export default function PPIDFAQ() {
  const faqData = ppidService.getFaq();

  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="ppid-section ppid-alt">
      <div className="ppid-container">
        <div className="ppid-title">
          <span className="ppid-label dark">
            FAQ
          </span>

          <h2>
            Pertanyaan Umum PPID
          </h2>
        </div>

        <div className="ppid-faq">
          {faqData.map((item, index) => (
            <div
              className="ppid-faq-item"
              key={item.question}
            >
              <button
                className="ppid-faq-question"
                onClick={() =>
                  setActive(active === index ? null : index)
                }
              >
                <span>{item.question}</span>

                <strong>
                  {active === index ? "-" : "+"}
                </strong>
              </button>

              {active === index && (
                <div className="ppid-faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
