import React from "react";
import { Turn as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import miniMarketLogo from "../Assets/mini-market-logo.png";
import { useMenuContext } from "../Context/MenuContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const HamburgerMenu = ({ quantityCart, isDarkMode, handleThemeClick }) => {
  const { isOpen, toggleHamburger } = useMenuContext();

  const handleThemeClickModified = (event) => {
    event.stopPropagation();
    handleThemeClick();
  };

  const handleLinkClick = () => {
    if (isOpen) {
      toggleHamburger();
    }
  };

  return (
    <div className={isOpen ? "full-page" : "hamburger-menu-display"} style={{ backgroundColor: "#07080d", zIndex: 99999 }}>
      <div
        className='hamburger-position'
        style={{
          backgroundColor: !isOpen && "#07080d",
          display: "flex",
          justifyContent: "right",
          margin: "30px",
          position: "relative",
        }}
      >
        <Hamburger toggled={isOpen} toggle={toggleHamburger} color='white' direction='left' />
      </div>
      {isOpen && (
        <div className='mobile-wrapper'>
          <div>
            <Link to='/' onClick={handleLinkClick}>
              <img src={miniMarketLogo} alt='Background image' style={{ width: "142px" }} />
            </Link>
          </div>
          <div className='menu-list-mobile'>
            <ul>
              <li>
                <Link to='/' onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link to='about' onClick={handleLinkClick}>
                  About us
                </Link>
              </li>
              <li>
                <Link to='products' onClick={handleLinkClick}>
                  Products
                </Link>
              </li>
              <li style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
                <div className='toggle-container' onClick={handleThemeClickModified}>
                  <div className={`dialog-button ${isDarkMode ? "" : "disabled"}`}>
                    {isDarkMode ? (
                      <FontAwesomeIcon icon={faMoon} color='var(--accent-5)' style={{ fontSize: "14px" }} />
                    ) : (
                      <FontAwesomeIcon icon={faSun} color='#f39c12' style={{ fontSize: "14px" }} />
                    )}
                  </div>
                </div>
              </li>

              <li>
                <Link to='cart' onClick={handleLinkClick} className={`nav-cart btn btn-default`} style={{ width: "100px" }}>
                  Cart ({quantityCart})
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
