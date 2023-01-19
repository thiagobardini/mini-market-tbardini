import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const activeLink = ({ isActive }) => (isActive ? "active" : "");
  return (
    <nav className="navbar">
      <div
        className="container"
        style={{ display: "flex", width: "100%", alignItems: "center" }}
      >
        <div style={{ flexGrow: 1 }}>
          <Link to="/" className="nav-brand">
            SuperM
          </Link>
        </div>
        <div>
          <ul>
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
                className={`nav-item nav-cart btn btn-accent ${activeLink}`}
              >
                Cart (0)
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
