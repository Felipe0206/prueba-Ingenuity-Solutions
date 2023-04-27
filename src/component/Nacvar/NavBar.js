import React, { useState, useEffect } from "react";
import "./NavBar.css";
import Logo from '../../asets/newman-club/logo.svg'
import Facebook from'../../asets/newman-club/facebook-round-svgrepo-com.svg'
import Instagram from'../../asets/newman-club/instagram-svgrepo-com.svg'

function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setShowMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`navbar ${showMenu ? "show-menu" : ""}`}>
      <div className="navbar-brand">
        <a href="#"><img src={Logo}></img></a>
      </div>
      {!isMobile ? (
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#">HOME</a>
          </li>
          <li className="nav-item">
            <a href="#">THE CREW</a>
          </li>
          <li className="nav-item">
            <a href="#">EVENTS</a>
          </li>
          <li className="nav-item">
            <a href="#">WHAT'S NEW</a>
          </li>
          <li className="nav-item">
            <a href="#">VIRTUAL OFFICE</a>
          </li>
          <li className="nav-item">
            <a href="#">CONTACT</a>
          </li>
          <li className="nav-item" id="nav-item-1">
            <a href="#">MARIA REINA PARISH</a>
          </li>

          <li className="nav-item">
            <a href="#"><img src={Facebook}></img></a>
          </li>
          <li className="nav-item">
            <a href="#"><img src={Instagram}></img></a>
          </li>
        </ul>
      ) : (
        <div className='menu-icon'  onClick={handleMenuClick}>
          <div class="menu-icon">
            <span class="line line-1"></span>
            <span class="line line-2"></span>
            <span class="line line-3"></span>
          </div>
        </div>
      )}
      {isMobile && showMenu && (
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#">HOME</a>
          </li>
          <li className="nav-item">
            <a href="#">THE CREW</a>
          </li>
          <li className="nav-item">
            <a href="#">EVENTS</a>
          </li>
          <li className="nav-item">
            <a href="#">WHAT'S NEW</a>
          </li>
          <li className="nav-item">
            <a href="#">VIRTUAL OFFICE</a>
          </li>
          <li className="nav-item">
            <a href="#">CONTACT</a>
          </li>
          <li className="nav-item" id="nav-item-1">
            <a href="#">MARIA REINA PARISH</a>
          </li>

          <li className="nav-item">
            <a href="#"><img src={Facebook}></img></a>
          </li>
          <li className="nav-item">
            <a href="#"><img src={Instagram}></img></a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;