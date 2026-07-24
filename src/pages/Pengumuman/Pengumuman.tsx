import { useState } from "react";

import "./Pengumuman.css";

import AnnouncementHero from "../../components/pengumuman/AnnouncementHero";
import AnnouncementSearch from "../../components/pengumuman/AnnouncementSearch";
import AnnouncementList from "../../components/pengumuman/AnnouncementList";

export default function Pengumuman(){

  const [keyword,setKeyword] = useState("");

  const [category,setCategory] = useState("");

  return(

    <main className="pengumuman-page">

      <AnnouncementHero />

      <AnnouncementSearch

        keyword={keyword}

        setKeyword={setKeyword}

        category={category}

        setCategory={setCategory}

      />

      <AnnouncementList

        keyword={keyword}

        category={category}

      />

    </main>

  );

}