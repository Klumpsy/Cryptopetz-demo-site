import React, { useEffect, useState} from "react";

import planet1 from '../images/landing/planet-ardano.png';  
import astronaut from "../images/landing/empty-ship.png"; 
import cloud from "..//images/landing/cloud.png";
import meadow from "..//images/landing/meadow.png";

import flyingPet from "..//images/landing/flying-bird.png";

const Landing = ({petzArray}) => { 
    const [offset, setOffset] = useState(); 

    const handleScroll = () => setOffset(window.pageYOffset); 

    window.addEventListener('scroll', handleScroll); 


    return (
        <div className ="landing-container">
            <div className ="landing-body-one">
                <div className="landing-page-wrapper">
                    <div className = "zoom-images">
                        <img src={astronaut} alt="" id="astronaut-landing" style={{top:`${0 + offset * 0.01 + "%"}`}}/>
                        <img src={planet1} alt="" id="planet1-landing" style={{width: (25 + offset * 0.2) + "%"}}/>
                    </div>
                </div>
            </div>
            <div className ="landing-body-two">
                <div className="landing-page-wrapper">
                    <div>
                        <img id="cloud1" src={cloud} style={{left: `${-20 + offset * 0.02 + "%"}`}}/>   
                        <img id="cloud1" src={cloud} style={{left: `${-15 + offset * -0.02 + "%"}`}}/>
                        <img id="cloud1" src={cloud} style={{left: `${-10 + offset * 0.02 + "%"}`}}/>
                        <img id="cloud1" src={cloud} style={{left: `${0 + offset * -0.02 + "%"}`}}/>
                        <img id="cloud2" src={cloud} style={{left: `${10 + offset * 0.02 + "%"}`}}/>
                        <img id="cloud2" src={cloud} style={{left: `${15 + offset * -0.02 + "%"}`}}/>
                        <img id="cloud3" src={cloud} style={{left: `${20 + offset * -0.02 + "%"}`}}/>
                        <img id="cloud2" src={cloud} style={{left: `${25 + offset * 0.02 + "%"}`}}/>
                        <img id="cloud4" src={cloud} style={{left: `${30 + offset * -0.02 + "%"}`}}/>
                        <img id="cloud2" src={cloud} style={{left: `${35 + offset * 0.02 + "%"}`}}/>
                        <img id="cloud5" src={cloud} style={{left: `${40 + offset * -0.02 + "%"}`}}/>
                        <img id="cloud2" src={cloud} style={{left: `${45 + offset * 0.02 + "%"}`}}/>
                        <img id="cloud6" src={cloud} style={{left: `${50 + offset * -0.02 + "%"}`}}/>
                        <img id="cloud2" src={cloud} style={{left: `${55 + offset * -0.02 + "%"}`}}/>
                        <img id="cloud7" src={cloud} style={{left: `${60 + offset * 0.02 + "%"}`}}/>
                        <img id="cloud2" src={cloud} style={{left: `${65 + offset * -0.02 + "%"}`}}/>
                        <img id="cloud8" src={cloud} style={{left: `${70 + offset * 0.02 + "%"}`}}/>
                        <img id="cloud2" src={cloud} style={{left: `${75 + offset * -0.02 + "%"}`}}/>
                        <img id="cloud9" src={cloud} style={{left: `${80 + offset * -0.02 + "%"}`}}/>
                        <img id="cloud2" src={cloud} style={{left: `${85 + offset * 0.02 + "%"}`}}/>
                        <img id="cloud10" src={cloud} style={{left: `${90 + offset * -0.02 + "%"}`}}/>
                        <img id="cloud2" src={cloud} style={{left: `${95 + offset * 0.02 + "%"}`}}/>
                        <img id="cloud11" src={cloud} style={{left: `${100 + offset * -0.02 + "%"}`}}/>
                        <img id="cloud2" src={cloud} style={{left: `${110 + offset * 0.02 + "%"}`}}/>
                        <img id="cloud2" src={cloud} style={{left: `${95 + offset * 0.02 + "%"}`}}/>
                        <img id="cloud11" src={cloud} style={{left: `${120 + offset * -0.04 + "%"}`}}/>
                        <img id="cloud2" src={cloud} style={{left: `${90 + offset * 0.04 + "%"}`}}/>
                        <img id="flying-pet-one" src={flyingPet} style={{right: `${20 + offset * 0.008 + "%"}`}}/>
                        <img id="flying-pet-two" src={flyingPet} style={{right: `${10 + offset * 0.035 + "%"}`}}/>
                        <img id="flying-pet-three" src={flyingPet} style={{right: `${41 + offset * 0.025 + "%"}`}}/>
                        <img id="cloud12" src={cloud} style={{left: `${60 + offset * -0.02 + "%"}`}}/>
                        <img id="cloud13" src={cloud} style={{left: `${-10 + offset * 0.02 + "%"}`}}/>
                    </div>
                </div>
            </div>
            <div className ="landing-body-three">
                <div className="landing-page-wrapper">
                    <img id="meadow-ground" src={meadow}/>
                    <img id="meadow-pet-one" src={petzArray}/>
                </div>
            </div>
        </div>
    );
}
export default Landing; 

//https://www.youtube.com/watch?v=mb8x1Zsj-oE