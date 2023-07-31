import React from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

const HamburgerMenu = ({ isOpen, setOpen, quantityCart }) => {
  return (
    <div id="hamburgerMenu" className={`page ${isOpen ? "full-page" : ""}`}>
      <div id="hamburger-icon">
        <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
      </div>
      {isOpen && (
        <div className="mobile-wrapper">
          <div>
            <Link to="/">
              <img
                src={"https://i.imgur.com/qHvvhHA.png"}
                alt="Background image"
                style={{ width: "142px" }}
              />
            </Link>
          </div>
          <div className="menu-list-mobile">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="about">About us</Link>
              </li>
              <li>
                <Link to="products">Products</Link>
              </li>
              <li>
                <Link to="cart" className={`nav-cart btn btn-default`}>
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
