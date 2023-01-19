import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = ({ cart }) => {
  const activeLink = ({ isActive }) => (isActive ? "active" : "");

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
              style={{ width: "100px" }}
            />
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
