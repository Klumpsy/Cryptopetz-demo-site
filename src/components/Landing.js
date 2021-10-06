import React, { useEffect, useState} from "react";

import planet1 from '../images/landing/planet-ardano.png'; 
import background from "../images/landing/background.png"; 
import astronaut from "../images/landing/astronaut.png"; 

const Landing = () => { 
    const [offset, setOffset] = useState(); 

    const handleScroll = () => setOffset(window.pageYOffset); 

    window.addEventListener('scroll', handleScroll); 


    return (
        <>
            <div className ="landing-body-one">
                <div className="landing-page-wrapper">
                    <div classname = "zoom-images">
                        <img src={astronaut} alt="" id="astronaut-landing" style={{top: `${20 + offset * 0.02 + "%"}`}}/>
                        <img src={planet1} alt="" id="planet1-landing" style={{width: (35 + offset * 0.4) + "%"}}/>
                    </div>
                </div>
            </div>
            <div className ="landing-body-two">
                <div className="landing-page-wrapper">
                    
                </div>
            </div>
        </>
    );
}
export default Landing; 

//https://www.youtube.com/watch?v=mb8x1Zsj-oE