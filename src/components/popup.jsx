import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Popup(){
    var [pop,setPop]=React.useState(false);
    var style={
        cursor:"pointer",
        marginLeft:"10px",
        marginRight:"10px"
    }

    return(
        
           
        <div className="popUp">
            {/* onMouseOver={setPop(!pop)} onMouseLeave={setPop(!pop)} */}
            
            <div className="boy">
                
                <div className="circle left-eye">
                    <div className="c2"></div>
                </div>

                
                <div className="circle right-eye">
                    <div className="c2"></div>
                </div>

                <img  src="/images/cartoon.png" alt="" />
            </div>
            <div  className="socialMedia" >
                <a href="https://github.com/malishubham025/" style={{textDecoration:"none",color:"white"}}><GitHubIcon    className="icons"  style={style}/></a>
                <a href="https://www.instagram.com/malishubham025/" style={{textDecoration:"none",color:"white"}}><InstagramIcon  className="icons" style={style}/></a>
                <a href="https://www.linkedin.com/in/shubham-mali-5a0686228/" style={{textDecoration:"none",color:"white"}}><LinkedInIcon  className="icons" style={style}/></a>
            </div>
            
        </div>
        
    )
}
export default Popup;