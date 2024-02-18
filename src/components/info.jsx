import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
function Info(props) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    const videoContainers = document.querySelectorAll(".info-container");

    videoContainers.forEach((videoContainer) => {
      const backgroundVideo = videoContainer.querySelector(".i");
      const content = videoContainer.querySelector(".content");

      videoContainer.addEventListener("mouseenter", function () {
        backgroundVideo.style.opacity="1";

        content.style.transform = "translateX(100px)";
        content.style.opacity = "0";
      });

      videoContainer.addEventListener("mouseleave", function () {
        backgroundVideo.style.opacity="0";
        content.style.opacity = "1";
        content.style.transform = "translateX(0)";
      });
    });
  }, []);

  return (
    <div className="info-container" data-aos="fade-right">
      <div className="display"></div>
      <div className="i">
      <h1 style={{color:"white"}}>{props.heading}</h1>
      <p style={{color:"white"}}>{props.info}</p>
      </div>
      <div className="content">
        <p>{props.name}</p>
        <div className="content-line"></div>
      </div>
    </div>
  );
}

export default Info;
