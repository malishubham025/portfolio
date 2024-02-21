import React from "react";
import Project from "./project";
import Vertical from "./Verticle";
import AOS from "aos";
import "aos/dist/aos.css";
import Info from "./info";
function Lorem(){
    React.useEffect(()=>{
        AOS.init({ duration: 1000 });
    },[])
    return (
        <div className="main-projects">
        <div className="projects" id="work">
            <div style={{width:"100%"}}>
            <h1 className="pHeader" data-aos="fade-right">My Projects </h1>
            <h1 className="pHeader-two" data-aos="fade-in">WEB</h1>
            <h1 className="pHeader-three" >REACT</h1>
            </div>
            <div style={{display:"flex", width:"70%",padding:"20px" ,justifyContent:"flex-start"}}>
                <Project name="Sorting Visualizer" src="/videos/sorting-visulizer.mp4"></Project>
            </div>
            <div  style={{display:"flex", width:"100%",padding:"20px" ,justifyContent:"space-around" }}>
            <div className="box" >
            <Vertical name="To do List " src="/videos/to_do_list.mp4" ></Vertical>
            </div>
                <div style={{marginTop:"50px"}}>
                <Project name="Resume Builder" src="/videos/Resume_builder.mp4" ></Project>
                </div>
            </div>
            <div style={{display:"flex", width:"100%",padding:"20px",marginTop:"170px" ,justifyContent:"space-around" ,position:"relative"}}>
            <h1 className="ai-ml" data-aos="fade-in">AI ML</h1>
                <Info name="Scene Caption Generation" 
                    heading="Scene Caption Generation"
                    info={[
                        "This is the Deep learning  based project for scene caption generation. \n",
                        "Technologies Used are  - \n ",
                        "Deep Learning,python",
                        "And Resnet 50 + Attention + GRU Apporach is followed."
                    ]}
                    ></Info>
                <div style={{marginTop:"50px"}}>
                <Info name="Floating Waste Collector" 
                    heading="Floating Waste Collector"
                    info={[
                        "This is the haar cascade based floating waste collector \n",
                        "Technologies Used are  - \n ",
                        "Arduino, Raspberry pi,computer vision"
                    ]}
                

                ></Info>
                </div>
            </div>
            <div style={{display:"flex", width:"100%",padding:"20px",marginTop:"70px" ,justifyContent:"space-around"}} >
                <Project name="2048 AI" src="/videos/AI 2048.mp4"></Project>
                
            </div>
        </div>
        </div>
    )
}
export default Lorem;