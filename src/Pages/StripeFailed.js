import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const StripeFailed = ({ setCart }) => {
  useEffect(() => {
    localStorage.clear();
    setCart([]);
  }, []);

  return (
    <div class="home-layout">
      <img
        src="https://i.imgur.com/MULcw2C.png"
        style={{ maxWidth: "300px" }}
        height="auto"
        className="rounded home-image"
        alt=""
      />
      <div>
        <h1>We're sorry, but your purchase failed!</h1>
        <p>
          Please check your payment information and try again or contact our
          customer service for assistance
        </p>
        <Link
          to="/"
          className="btn btn-accent"
          style={{ display: "flex", justifyContent: "center" }}
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default StripeFailed;
