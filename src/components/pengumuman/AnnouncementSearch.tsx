import "./Announcement.css";

interface AnnouncementSearchProps {

  keyword:string;

  setKeyword:(value:string)=>void;

  category:string;

  setCategory:(value:string)=>void;

}

export default function AnnouncementSearch({

  keyword,

  setKeyword,

  category,

  setCategory

}:AnnouncementSearchProps){

  return (

    <section className="announcement-search">

      <div className="announcement-container">

        <h2>
          Cari Pengumuman
        </h2>

        <div className="announcement-filter">

          <input

            type="text"

            placeholder="Cari pengumuman..."

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
              Pelayanan Publik
            </option>

            <option>
              PPID
            </option>

            <option>
              Humas
            </option>

            <option>
              Lalu Lintas
            </option>

            <option>
              Pengumuman Resmi
            </option>

          </select>

        </div>

      </div>

    </section>

  );

}