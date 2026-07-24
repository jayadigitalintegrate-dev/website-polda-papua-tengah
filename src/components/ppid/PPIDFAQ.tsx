import {
  useState
} from "react";

import "./PPID.css";


export default function PPIDFAQ() {

  const faqData = [
    {
      question:
        "Apa itu PPID Polda Papua Tengah?",
      answer:
        "PPID Polda Papua Tengah adalah layanan pengelola informasi publik yang bertugas menyediakan informasi kepolisian kepada masyarakat sesuai ketentuan keterbukaan informasi publik."
    },
    {
      question:
        "Bagaimana cara mengajukan permohonan informasi?",
      answer:
        "Masyarakat dapat mengajukan permohonan informasi melalui layanan PPID secara langsung maupun melalui portal online yang tersedia."
    },
    {
      question:
        "Berapa lama proses permohonan informasi?",
      answer:
        "Permohonan informasi akan diproses sesuai ketentuan pelayanan informasi publik yang berlaku."
    },
    {
      question:
        "Apakah semua informasi dapat diberikan?",
      answer:
        "Tidak semua informasi dapat diberikan. Informasi tertentu dapat dikecualikan sesuai peraturan perundang-undangan."
    }
  ];


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


          {
            faqData.map((item, index) => (

              <div
                className="ppid-faq-item"
                key={item.question}
              >


                <button
                  className="ppid-faq-question"
                  onClick={() =>
                    setActive(
                      active === index
                        ? null
                        : index
                    )
                  }
                >

                  <span>
                    {item.question}
                  </span>


                  <strong>
                    {active === index ? "-" : "+"}
                  </strong>

                </button>


                {
                  active === index && (

                    <div className="ppid-faq-answer">

                      <p>
                        {item.answer}
                      </p>

                    </div>

                  )
                }


              </div>

            ))
          }


        </div>


      </div>


    </section>

  );
}