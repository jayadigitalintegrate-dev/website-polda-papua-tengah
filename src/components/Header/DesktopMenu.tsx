import "./Header.css";

import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import HeaderAction from "./HeaderAction/HeaderAction";

function DesktopMenu() {
  return (
    <div className="header-container">

      <Logo />

      <Navigation />

      <HeaderAction />

    </div>
  );
}

export default DesktopMenu;