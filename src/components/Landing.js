import React, { useEffect, useState} from "react";

import planet1 from '../images/landing/planet-ardano.png';  
import astronaut from "../images/landing/empty-ship.png"; 
import cloud from "..//images/landing/cloud.png";

const Landing = () => { 
    const [offset, setOffset] = useState(); 

    const handleScroll = () => setOffset(window.pageYOffset); 

    window.addEventListener('scroll', handleScroll); 


    return (
        <>
            <div className ="landing-body-one">
                <div className="landing-page-wrapper">
                    <div classname = "zoom-images">
                        <img src={astronaut} alt="" id="astronaut-landing" style={{top:`${0 + offset * 0.01 + "%"}`}}/>
                        <img src={planet1} alt="" id="planet1-landing" style={{width: (25 + offset * 0.2) + "%"}}/>
                    </div>
                </div>
            </div>
            <div className ="landing-body-two">
                <div className="landing-page-wrapper">
                    <div>
                        <img id="cloud1" src={cloud}/>
                        <img id="cloud2" src={cloud}/>
                        <img id="cloud3" src={cloud}/>
                        <img id="cloud4" src={cloud}/>
                        <img id="cloud5" src={cloud}/>
                        <img id="cloud6" src={cloud}/>
                        <img id="cloud7" src={cloud}/>
                        <img id="cloud8" src={cloud}/>
                        <img id="cloud9" src={cloud}/>
                        <img id="cloud10" src={cloud}/>
                        <img id="cloud11" src={cloud}/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Landing; 

//https://www.youtube.com/watch?v=mb8x1Zsj-oE