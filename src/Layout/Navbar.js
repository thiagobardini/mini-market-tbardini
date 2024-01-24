import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import miniMarketLogo from "../Assets/mini-market-logo.png";
import { useMenuContext } from "../Context/MenuContext";

const Navbar = ({ cart }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { isOpen, toggleHamburger } = useMenuContext();

  const activeLink = ({ isActive }) => (isActive ? "active" : "");

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    prefersDark && setIsDarkMode(true);
  }, []);

  useEffect(() => {
    isDarkMode ? document.body.classList.add("dark") : document.body.classList.remove("dark");
  }, [isDarkMode]);

  const handleThemeClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  const quantityCart = cart.reduce((accumulate, curValue) => {
    return accumulate + curValue.quantity;
  }, 0);

  return (
    <>
      <nav className='navbar'>
        <div className='container' style={{ maxWidth: "900px", margin: "0 auto", display: "flex", width: "100%", alignItems: "center" }}>
          <div className='img-grow'>
            <Link to='/' className='nav-brand' style={{ display: "flex" }}>
              <img src={miniMarketLogo} alt='Background image' style={{ width: "120px" }} />
            </Link>
          </div>

          <div className='nav-display'>
            <ul className='nav-wrapper'>
              <li className='nav-item'>
                <div className='toggle-container' onClick={handleThemeClick}>
                  <div className={`dialog-button ${isDarkMode ? "" : "disabled"}`}>{isDarkMode ? "Dark" : "Light"}</div>
                </div>
              </li>
              <li className='nav-item'>
                <NavLink to='/' className={activeLink}>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='about' className={activeLink}>
                  About us
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='products' className={activeLink}>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to='cart' className={`nav-item nav-cart btn btn-default ${activeLink}`}>
                  Cart ({quantityCart})
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className='hamburger-display'>
          {!isOpen && (
            <Link to='cart' className={`nav-cart-style`} style={{ width: "80px", marginRight: "10px", marginTop: "20px" }}>
              {quantityCart === 0 ? null : `Cart ( ${quantityCart} )`}
            </Link>
          )}
          <div onClick={toggleHamburger}>
            <HamburgerMenu isOpen={isOpen} toggleHamburger={toggleHamburger} quantityCart={quantityCart} handleThemeClick={handleThemeClick} isDarkMode={isDarkMode} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
