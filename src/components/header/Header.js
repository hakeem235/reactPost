import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <h1 className="logo">AhmedHakeem</h1>
      <div className="footer">
        <ul className="footerList">
          <li>
            <a href="https://www.linkedin.com/in/ahmed-hakeem-b5804273/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/hakeem235">GitHub</a>
          </li>
        </ul>
      </div>
      </div>
    </>
  );
};

export default Header;
