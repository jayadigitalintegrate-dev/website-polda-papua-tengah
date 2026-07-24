import "./Download.css";


interface DownloadSearchProps {

  keyword:string;

  setKeyword:
  (value:string)=>void;

  category:string;

  setCategory:
  (value:string)=>void;

}



export default function DownloadSearch({

  keyword,

  setKeyword,

  category,

  setCategory

}:DownloadSearchProps){


  return (

    <section className="download-search">


      <div className="download-container">


        <h2>
          Cari Dokumen
        </h2>


        <div className="download-filter">


          <input

            type="text"

            placeholder="Cari nama dokumen..."

            value={keyword}

            onChange={
              (e)=>
              setKeyword(
                e.target.value
              )
            }

          />



          <select

            value={category}

            onChange={
              (e)=>
              setCategory(
                e.target.value
              )
            }

          >

            <option value="">
              Semua Kategori
            </option>


            <option>
              Peraturan Kepolisian
            </option>


            <option>
              Maklumat Kapolda
            </option>


            <option>
              Pengumuman Resmi
            </option>


            <option>
              Formulir Pelayanan
            </option>


            <option>
              PPID
            </option>


          </select>


        </div>


      </div>


    </section>

  );

}