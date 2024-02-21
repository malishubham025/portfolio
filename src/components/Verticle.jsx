import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
function Vertical(props) {
  useEffect(() => {
    const videoContainers = document.querySelectorAll(".verticle-video-container");
    AOS.init({ duration: 1000 });
    videoContainers.forEach((videoContainer) => {
      const backgroundVideo = videoContainer.querySelector(".verticle-background-video");
      const content = videoContainer.querySelector(".verticle-content");

      videoContainer.addEventListener("mouseenter", function () {
        backgroundVideo.play();
        content.style.transform = "translateX(100px)";
        content.style.opacity = "0";
      });

      videoContainer.addEventListener("mouseleave", function () {
        backgroundVideo.pause();
        content.style.opacity = "1";
        content.style.transform = "translateX(0)";
      });
    });
  }, []); 

  return (
    <div data-aos="fade-right">
    <div className="verticle-video-container"  >
      <div className="display"></div>
      <video className="verticle-background-video" loop muted style={{ width: "252px", height: "432px" }}>
        <source src={props.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="verticle-content">
        <p>{props.name}</p>
        <div className="verticle-content-line"></div>
      </div>
    </div>
    <a href={props.link} style={{zIndex:"30 !important"}}><button className="project-button">
          {/* <span className="expand">h</span> */}
          <span>Complete Project</span></button>
        </a>
    </div>
  );
}

export default Vertical;
