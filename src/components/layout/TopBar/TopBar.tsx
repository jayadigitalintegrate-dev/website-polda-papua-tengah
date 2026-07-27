import "./TopBar.css";
import { useMemo } from "react";

const TopBar = () => {
  const today = useMemo(() => {
    return new Intl.DateTimeFormat("id-ID", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date());
  }, []);

  return (
    <div className="topbar">

      <div className="topbar-container">

        {/* LEFT */}

        <div className="topbar-left">

          <span className="topbar-item">
            ðŸ“… {today}
          </span>

          <span className="divider">|</span>

          <span className="topbar-item">
            ðŸ“ Papua Tengah
          </span>

          <span className="divider">|</span>

          <span className="topbar-item emergency">
            â˜Ž Call Center 110
          </span>

        </div>

        {/* RIGHT */}

        <div className="topbar-right">

          <button
            className="lang-btn active"
            type="button"
          >
            ID
          </button>

          <span className="divider">|</span>

          <button
            className="lang-btn"
            type="button"
          >
            EN
          </button>

        </div>

      </div>

    </div>
  );
};

export default TopBar;
