import "./PPID.css";

export default function PPIDRights() {
  return (
    <section className="ppid-section ppid-alt">

      <div className="ppid-container">

        <div className="ppid-grid two">

          {/* HAK PEMOHON */}
          <div className="ppid-card">

            <span className="ppid-label dark">
              HAK PEMOHON
            </span>

            <h2>
              Hak Pemohon Informasi Publik
            </h2>

            <ul className="ppid-list">

              <li>
                Memperoleh informasi publik sesuai
                dengan ketentuan peraturan yang berlaku.
              </li>

              <li>
                Melihat, mengetahui, dan memperoleh
                salinan informasi publik.
              </li>

              <li>
                Mengajukan permohonan informasi
                beserta alasan permintaan.
              </li>

              <li>
                Mendapatkan pelayanan informasi
                yang cepat, mudah, dan transparan.
              </li>

              <li>
                Mengajukan keberatan apabila pelayanan
                informasi tidak sesuai ketentuan.
              </li>

            </ul>

          </div>


          {/* KEWAJIBAN */}
          <div className="ppid-card">

            <span className="ppid-label dark">
              KEWAJIBAN
            </span>

            <h2>
              Kewajiban Pengguna Informasi
            </h2>

            <ul className="ppid-list">

              <li>
                Menggunakan informasi publik secara
                bertanggung jawab.
              </li>

              <li>
                Tidak menyalahgunakan informasi
                yang diperoleh.
              </li>

              <li>
                Mencantumkan sumber informasi apabila
                digunakan untuk publikasi.
              </li>

              <li>
                Mematuhi peraturan perundang-undangan
                yang berlaku.
              </li>

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}