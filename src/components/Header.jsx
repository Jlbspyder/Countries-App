import React from "react";
import { BsMoon, BsMoonFill } from "react-icons/bs";

const Header = ({ mode, lightMode }) => {
  return (
    <header className={lightMode ? "header" : "header darkmode"}>
      <div className="container">
        <div className="heading">
          <h3 className="header-title">Where in the world?</h3>
          <div className="toggle-mode" onClick={mode}>
            {lightMode ? <BsMoon /> : <BsMoonFill />}
            Dark Mode
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
