import React from "react";
import  Mouse  from "./Mouse";
import Popup from "./popup";

function Name() {
  var style = {
    position: "relative",
    color: "white",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    alignItems: "center", // Add this line to center children horizontally
    width: "100%",
    // backgroundColor:"white"
  };
  
  
  React.useEffect(() => {
    const textArray = ["Student", "StΩuden$", "¢tu≈e%$", "S}ÄT^%", "•!@%^*‡", "@*%Ω", "Developer", "Deve^%$#", "^%#!@R", "S¥£T^‽", "‰tΩŠe%$", "©ªµ¶"];
    let currentIndex = 0;
  
    function changeText() {
      if (currentIndex === 0 || currentIndex === 6) {
        clearInterval(v);
        setTimeout(() => {
          v = setInterval(changeText, 100);
        }, 2000);
      }
      const h1Element = document.querySelector(".textContainer");
      h1Element.textContent = 'i am A ' + textArray[currentIndex];
      currentIndex = (currentIndex + 1) % textArray.length;
    }
  
    var v;
    setTimeout(() => {
      v = setInterval(changeText, 100);
    }, 300);
  
    var spans = document.querySelectorAll(".name span");
    var spans2 = document.querySelectorAll(".textContainer span");
    var spans3 = document.querySelectorAll(".work span");
  
    function revealLetters(index, spans) {
      if (index < spans.length) {
        spans[index].style.opacity = '1';
        setTimeout(() => {
          revealLetters(index + 1, spans);
        }, 100); // Adjust the delay as needed
      }
    }
  
    // Call the function for each set of letters with a delay
    setTimeout(() => {

      let name=document.querySelector(".name");
      name.style.opacity='1';
      name.style.transform = "translateX(0px)";
      let t=document.querySelector(".textContainer");
      t.style.opacity='1';
      t.style.transform = "translateX(0px)";
      let x=document.querySelector(".work");
      x.style.opacity='1';
      x.style.transform = "translateX(0px)";
      revealLetters(0, spans);
    }, 300);
  
    setTimeout(() => {

      revealLetters(0, spans2);
    }, 1000);
  
    setTimeout(() => {
      revealLetters(0, spans3);
    }, 500);
  
  }, []);
  
    // var [mouse,handelMouse]=React.useState(false);
    // Inside the changeMouse function


    
    
    return (
        <div style={style} >
              <div  style={{ margin:"0 auto 0 auto ",fontSize:"1.2rem" ,position:"relative"}}>
                    <div className="line">
                      <div></div>
                    </div>
                    <div style={{}}>
                    <span className="hi"></span>
                    <h1 className="name">  <span>Hi,</span> <span>My</span> <span>name is</span> <span style={{color:"#5918df"}}>Shubham Mali</span> </h1>
                    {/* <span className="textContainer"></span> */}
                    <span className="hi"></span>
                    <h1 className="textContainer "> <span>i</span> <span>am</span> <span>A</span> </h1>
                    <span className="hi"></span>
                    <p className="work" style={{fontFamily:"'Roboto Condensed', sans-serif",fontWeight:"200 !important",fontSize:"1.5rem",color:"grey"}}>  <span>See </span> <span>My</span> <span>Work...</span></p>
                    </div>
              </div>
            <div>
              <Popup/>
            </div>
            <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
              <Mouse/>
            </div>

        </div>
    );
}
export default Name;

