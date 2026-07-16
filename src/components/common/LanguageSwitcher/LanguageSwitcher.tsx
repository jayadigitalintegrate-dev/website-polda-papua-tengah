import { useState } from "react";

import "./LanguageSwitcher.css";

export default function LanguageSwitcher() {

    const [lang, setLang] = useState("ID");

    return (

        <button
            className="language-switcher"
            onClick={() =>
                setLang(lang === "ID" ? "EN" : "ID")
            }
        >
            {lang}
        </button>

    );

}