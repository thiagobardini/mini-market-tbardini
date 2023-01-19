import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div class="home-layout">
      <img
        src="https://i.imgur.com/j974h5I.png"
        width="350"
        height="auto"
        class="rounded home-image"
        alt=""
      />
      <div>
        <h1>Convenient Grocery Shopping</h1>
        <p>
          Convenient Grocery Shopping at Your Fingertips: Order from{" "}
          <em>Mini Market's App</em> and Have it Delivered to Your Doorstep"
        </p>
        <Link
          to="/products"
          class="btn btn-default"
          style={{ display: "flex", justifyContent: "center" }}
        >
          Start shopping
        </Link>
      </div>
    </div>
  );
};

export default Home;
