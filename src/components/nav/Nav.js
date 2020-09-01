import React, { useEffect, useState } from "react";
import "../../styles/Nav.css";

const Nav = () => {
  const [show, handleshow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
          handleshow(true)
      } else {
          handleshow(false)
      }

      return () => window.removeEventListener("scroll");
    });
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
      />
      <img
        className="nav__avatar"
        src="https://image.flaticon.com/icons/svg/1752/1752772.svg"
        alt=""
      />
    </div>
  );
};

export default Nav;
