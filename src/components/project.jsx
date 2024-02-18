import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
function Project(props) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    const videoContainers = document.querySelectorAll(".video-container");

    videoContainers.forEach((videoContainer) => {
      const backgroundVideo = videoContainer.querySelector(".background-video");
      const content = videoContainer.querySelector(".content");

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
    <div className="video-container" data-aos="fade-right">
      <div className="display"></div>
      <video className="background-video" loop muted style={{ width: "410px", height: "230px" }}>
        <source src={props.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <p>{props.name}</p>
        <div className="content-line"></div>
      </div>
    </div>
  );
}

export default Project;
