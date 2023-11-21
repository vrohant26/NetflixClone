import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";
import avatar from "../../images/avatar.png";
// import search from "../../images/search.png";

function Navbar() {
  const [show, setShow] = useState(false);

  const [isInputVisible, setInputVisible] = useState(false);

  const toggleInput = () => {
    setInputVisible(!isInputVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
  }, []);

  // console.log(show);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_content">
        <div className="left">
          <div className="logo">
            <img src={logo} alt="logo" width={100} />
          </div>
          <div className="menu-items">
            <ul>
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>New & Popular</li>
              <li>My List</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="custom-search-container">
            <div
              className={`search-icon ${isInputVisible && "left"}`}
              onClick={toggleInput}
            >
              <i className="fa fa-search"></i>
            </div>
            {isInputVisible && (
              <input
                type="text"
                id="custom-search"
                placeholder="Search..."
                className="visible-input"
              />
            )}
          </div>
          <p>children</p>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
