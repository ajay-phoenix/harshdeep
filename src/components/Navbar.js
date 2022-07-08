import React, { useState } from "react";
import "./navbar.css";
import { FaSearch, FaHeart, FaOpencart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";



const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">


        {/* 1st part menu part  */}
        <div className="menu-link">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">services</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </div>

        {/* 2nd part nav icon */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <FaSearch />
            </li>
            <li>
              <FaHeart />
            </li>
            <li>
              <FaOpencart />
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
