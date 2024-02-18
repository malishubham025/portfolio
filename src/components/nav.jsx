import React from "react";

function Nav() {
  var [position, changeposition] = React.useState(0);
  var [opac, changeopac] = React.useState(0);

  function handledot(event) {
    var name = event.target.name;
    var link = event.target;

    // Calculate the center of the link
    var linkCenter = link.offsetLeft + link.offsetWidth / 2;
    
    changeposition(linkCenter);
    changeopac(1);
  }

  function opacChange() {
    changeposition(0);
    changeopac(0);
  }

  return (
    <div className="main-nav">
      <div className="logo">
        <div className="nav-name">
          <p>Portfolio </p>
        </div>
      </div>
      <div className="options">
        <a onMouseOver={handledot} onMouseOut={opacChange} name="one" href="/">
          Start
        </a>
        <a onMouseOver={handledot} onMouseOut={opacChange} name="two" href="#about">
          About
        </a>
        <a onMouseOver={handledot} onMouseOut={opacChange} name="three" href="#work">
          Work
        </a>
        <a onMouseOver={handledot} onMouseOut={opacChange} name="four" href="#contact">
          Contact
        </a>
        <div className="nav-line">
          <div className="dot" style={{ left: position, opacity: opac }}></div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
