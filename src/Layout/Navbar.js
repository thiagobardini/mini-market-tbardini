import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Button from "../Components/Button";

const Navbar = ({ cart }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const activeLink = ({ isActive }) => (isActive ? "active" : "");

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    prefersDark && setIsDarkMode(true);
  }, []);

  useEffect(() => {
    console.log(isDarkMode);
    isDarkMode
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [isDarkMode]);

  const handleThemeClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  const quantityCart = cart.reduce((accumulate, curValue) => {
    return accumulate + curValue.quantity;
  }, 0);

  return (
    <nav className="navbar">
      <div
        className="container"
        style={{ display: "flex", width: "100%", alignItems: "center" }}
      >
        <div style={{ flexGrow: 1 }}>
          <Link to="/" className="nav-brand">
            <img
              src={"https://i.imgur.com/qHvvhHA.png"}
              alt="Background image"
              style={{ width: "120px" }}
            />
          </Link>
        </div>

        <div>
          <ul className="nav-wrapper">
            <li className="nav-item">
              <div className="toggle-container" onClick={handleThemeClick}>
                <div
                  className={`dialog-button ${isDarkMode ? "" : "disabled"}`}
                >
                  {isDarkMode ? "Dark" : "Light"}
                </div>
              </div>
            </li>
            <li className="nav-item">
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="about" className={activeLink}>
                About us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="products" className={activeLink}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="cart"
                className={`nav-item nav-cart btn btn-default ${activeLink}`}
              >
                Cart ({quantityCart})
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
