import React, { useState } from "react";

function Footer() {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleGetInTouch = () => {
    window.location.href = "mailto:malishubham025@gmail.com";
  };

  const handleMouseEnter = () => {
    setPopupVisible(true);
  };

  const handleMouseLeave = () => {
    setPopupVisible(false);
  };

  return (
    <div className="fo">
      <div className="inner_fo" id="contact">
        <h1 style={{ fontWeight: "100", fontSize: "2.3rem" }}>Find Me on</h1>
        <div className="links">
          <a href="https://www.linkedin.com/in/shubham-mali-5a0686228/" style={{ color: "white", textDecoration: "none" }}>
            <p>LinkedIN</p>
          </a>
          <a href="https://github.com/malishubham025/" style={{ color: "white", textDecoration: "none" }}>
            <p>GitHub</p>
          </a>
          <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ color: "white", textDecoration: "none" }}>
            Gmail
          </p>
          {popupVisible && (
            <div className="popup">
              {/* Your pop-up content here */}
              <p>malishubham025@gmail.com</p>
            </div>
          )}
        </div>
        <button onClick={handleGetInTouch}><span>Get In Touch</span></button>
      </div>
    </div>
  );
}

export default Footer;
