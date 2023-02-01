import React from "react";

const About = () => {
  return (
    <div className={`about-layout display-margin`}>
      <img
        src="https://i.imgur.com/wsvosXs.png"
        height="auto"
        width="350"
        className={`rounded about-image`}
        alt=""
      />
      <div>
        <h1>About Us</h1>
        <p>
          Fresh Produce Guaranteed:
          <br />
          Shop on Our App and Have it Delivered to Your Home <br />
          <em>Safe and Secure Payment with Stripe.</em>
        </p>
      </div>
    </div>
  );
};

export default About;
