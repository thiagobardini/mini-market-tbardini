import React from "react";
import tbLogo from "../Assets/tbLogo.png";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer style={{ width: "100%", textAlign: "center", marginTop: "30px", backgroundColor: "var(--neutral-1)", display: "flex", justifyContent: "center", alignItems: "center" }}>
      
        <a href='https://www.tbardini.com/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: "none", position: "relative" }}>
          <img src={tbLogo} alt='Logo' style={{ width: "18px" }} />
        </a>
        <a href='https://www.tbardini.com/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: "none" }}>
          <p style={{ color: "#fbf8f9", fontWeight: 200, margin: 0, padding:"10px 0" }}>ARDINI © {date}</p>
        </a>
      
    </footer>
  );
};

export default Footer;
