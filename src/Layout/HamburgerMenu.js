import React from "react";
import { Turn as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import miniMarketLogo from "../Assets/mini-market-logo.png";
import { useMenuContext } from "../Context/MenuContext";

const HamburgerMenu = ({ quantityCart, isDarkMode, handleThemeClick }) => {
  const { isOpen, toggleHamburger } = useMenuContext();

  const handleThemeClickModified = (event) => {
    event.stopPropagation();
    handleThemeClick();
  };

  return (
    <div className={isOpen && "full-page"} style={{ backgroundColor: "#07080d" , zIndex: 99999 }}>
      <div
      className="hamburger-position"
        style={{
          // backgroundColor: !isOpen && "#07080d",
          // display: "flex",
          // justifyContent: "right",
          // margin:  "30px",
          // position: "relative",
        }}
      >
        <Hamburger toggled={isOpen} toggle={toggleHamburger} color='white' direction='left' />
      </div>
      {isOpen && (
        <div className='mobile-wrapper'>
          <div>
            <Link to='/'>
              <img src={miniMarketLogo} alt='Background image' style={{ width: "142px" }} />
            </Link>
          </div>
          <div className='menu-list-mobile'>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='about'>About us</Link>
              </li>
              <li>
                <Link to='products'>Products</Link>
              </li>
              <li style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
                <div className='toggle-container' onClick={handleThemeClickModified}>
                  <div className={`dialog-button ${isDarkMode ? "" : "disabled"}`}>{isDarkMode ? "Dark" : "Light"}</div>
                </div>
              </li>

              <li>
                <Link to='cart' className={`nav-cart btn btn-default`} style={{ width: "100px" }}>
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
