import React, { useState } from "react";
import {PopTwo,PopThree} from "./PopUPSkills";

function About() {
 
  // React.useEffect(()=>{
  //   var line=document.querySelector(".ff-line");
  //   var h=window.innerHeight/5*4;
  //   if(line.getBoundingClientRect().top<h){
  //     line.style.height="100%"
  //     // box.classList.add("about-show-element");
  // }
  // },[]);
  // let x= setInterval(f,10);
  
  const [webDevPopupVisible, setWebDevPopupVisible] = useState(false);
  const [problemSolvingPopupVisible, setProblemSolvingPopupVisible] = useState(false);

  return (
    <div className="footer">
      <div className="Light"></div>
      <div class="lines">
        <div class="f-line"></div>
        <div class="f-line"></div>
        <div class="f-line"></div>
      </div>

      <div className="info" id="about">
        <div style={{ position: "relative", padding: "20px" }}>
          <div  className="ff-line">
            <div className="Dot"></div>
          </div>
          <h1 data-aos="fade-right" style={{ fontSize: "3rem", margin: "0" }}>
            
            I am Shubham Mali</h1>
          <h3 data-aos="fade-right" style={{ fontSize: "2rem", fontWeight: "500" }}>Student At VIT PUNE </h3>
          <div data-aos="fade-right" className="skills">
            <h1>Skills</h1>

            <div data-aos="fade-right" className="development">
              <h3
                onMouseOver={() => setWebDevPopupVisible(true)}
                onMouseOut={() => setWebDevPopupVisible(false)}
                style={{cursor:"pointer", fontSize: "1.4rem", fontWeight: "100", textDecoration: "underline" }}
              >
                Web development →
              </h3>
              
              {webDevPopupVisible && <PopTwo />}
            </div>

            <div data-aos="fade-right" className="coding">
              <h3
                onMouseOver={() => setProblemSolvingPopupVisible(true)}
                onMouseOut={() => setProblemSolvingPopupVisible(false)}
                style={{cursor:"pointer", fontSize: "1.4rem", fontWeight: "100", textDecoration: "underline" }}
              >
                Problem Solving →
              </h3>
              {problemSolvingPopupVisible && <PopThree />}
            </div>
          </div>
          <div className="button" >
            <button >Download My Resume</button>
            <a href="https://github.com/malishubham025/"><button>See My ALL Projects</button></a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
