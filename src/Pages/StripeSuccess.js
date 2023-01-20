import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const StripeSuccess = ({ setCart }) => {
  useEffect(() => {
    localStorage.clear();
    setCart([]);
  }, []);

  return (
    <div class="home-layout">
      <img
        src="https://i.imgur.com/VCJEqSC.png"
        width="100%"
        //   style={{ opacity: "0.7" }}
        height="auto"
        className="rounded home-image"
        alt=""
      />
      <div>
        <h1>Successful Purchase!</h1>
        <p>Fresh produce on the way. Thanks for shopping with us.</p>
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

export default StripeSuccess;
