import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-layout">
      <img
        src="https://i.imgur.com/j974h5I.png"
        width="350"
        height="auto"
        className="rounded home-image"
        alt=""
      />
      <div className="display-margin">
        <h1>Convenient Grocery Shopping</h1>
        <p>
          Convenient Shopping at Your Fingertips: Order from{" "}
          <em>Mini Market's App</em> and Have it Delivered to Your Doorstep.
        </p>
        <Link
          to="/products"
          className="btn btn-accent"
          style={{ display: "flex", justifyContent: "center" }}
        >
          Start shopping
        </Link>
      </div>
    </div>
  );
};

export default Home;
