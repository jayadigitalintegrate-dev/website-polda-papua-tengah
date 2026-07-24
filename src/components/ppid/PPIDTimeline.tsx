import "./PPID.css";

export default function PPIDTimeline() {

  const steps = [
    {
      number: "01",
      title: "Mengajukan Permohonan",
      description:
        "Pemohon mengisi formulir permohonan informasi dengan data diri dan informasi yang dibutuhkan."
    },
    {
      number: "02",
      title: "Verifikasi Data",
      description:
        "Petugas PPID melakukan pemeriksaan kelengkapan identitas dan permohonan informasi."
    },
    {
      number: "03",
      title: "Proses Informasi",
      description:
        "PPID melakukan koordinasi dengan Satker terkait untuk menyiapkan informasi yang dimohon."
    },
    {
      number: "04",
      title: "Pemberian Jawaban",
      description:
        "Pemohon menerima informasi atau pemberitahuan sesuai ketentuan pelayanan informasi publik."
    }
  ];


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

          {
            steps.map((step) => (

              <div
                className="ppid-step"
                key={step.number}
              >

                <div className="ppid-step-number">
                  {step.number}
                </div>


                <div className="ppid-step-content">

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.description}
                  </p>

                </div>

              </div>

            ))
          }

        </div>


      </div>

    </section>
  );
}