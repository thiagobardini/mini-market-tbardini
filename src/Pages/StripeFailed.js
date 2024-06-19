import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

const StripeFailed = ({ setCart }) => {
  useEffect(() => {
    localStorage.clear();
    setCart([]);
  }, []);

  return (
    <Container className='home-layout' maxWidth='lg' sx={{ textAlign: "center", padding: "2rem" }}>
      <img src='https://i.imgur.com/MULcw2C.png' style={{ maxWidth: "300px" }} height='auto' className='rounded home-image' alt='' />
      <div>
        <h1>We're sorry, but your purchase failed!</h1>
        <p>Please check your payment information and try again or contact our customer service for assistance</p>
        <Link to='/' className='btn btn-accent' style={{ display: "flex", justifyContent: "center" }}>
          Home
        </Link>
      </div>
    </Container>
  );
};

export default StripeFailed;
