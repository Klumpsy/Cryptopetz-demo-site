import cloud from "..//images/cloud.png";
import {useState} from "react";

import UpdateComponentSix from "./updates/UpdateSix";
import UpdateComponentFive from "./updates/UpdateFive";
import UpdateComponentFour from "./updates/UpdateFour";
import UpdateComponentThree from "./updates/UpdateThree";
import UpdateComponentTwo from "./updates/UpdateTwo";
import UpdateComponentOne from "./updates/UpdateOne";

const Updates = ({ allPetzArray }) => { 

    const [offset, setOffset] = useState(); 

    const handleScroll = () => setOffset(window.pageYOffset); 

    window.addEventListener('scroll', handleScroll); 

    return (
        <div className = "updates-background">
             <div>
                <img alt="cloud "id="cloud-updates" src={cloud} style={{left: `${0 + offset * 0.02 + "%"}`}}/>
            </div>
            <div className = "update-page-wrapper"> 
                <UpdateComponentSix allPetzArray = {allPetzArray}/>
                <UpdateComponentFive allPetzArray = {allPetzArray}/>
                <UpdateComponentFour allPetzArray = {allPetzArray}/>
                <UpdateComponentThree allPetzArray = {allPetzArray}/>
                <UpdateComponentTwo allPetzArray = {allPetzArray}/>
                <UpdateComponentOne allPetzArray = {allPetzArray}/>
            </div>
        </div>
    )
}

export default Updates