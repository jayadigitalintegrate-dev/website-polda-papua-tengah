import {
  useState
} from "react";


import "./Download.css";


import DownloadHero from "../../components/download/DownloadHero";

import DownloadSearch from "../../components/download/DownloadSearch";

import DownloadList from "../../components/download/DownloadList";



export default function Download(){


  const [

    keyword,

    setKeyword

  ] = useState("");



  const [

    category,

    setCategory

  ] = useState("");




  return (

    <main className="download-page">


      <DownloadHero />



      <DownloadSearch

        keyword={keyword}

        setKeyword={setKeyword}

        category={category}

        setCategory={setCategory}

      />



      <DownloadList

        keyword={keyword}

        category={category}

      />


    </main>

  );

}