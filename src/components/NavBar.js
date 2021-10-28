import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {BsDiscord, BsTwitter} from "react-icons/bs"; 
import {AiOutlineMenu} from "react-icons/ai";
import ardanoBird from "../images/petzImages/bird.png"


const NavBar = ({width, mode, changeMode}) => { 

    //MobileMenu checker
    const [openMobile, setOpenMobile] = useState(false)

    return (
        <>
        {width < 1200 ?
            <div className = "nav-bar light-mode nav-mobile">
            <Link to="/Cryptopetz-demo-site"><img src={ardanoBird} alt="CryptoPet"/></Link>
            <div className = {openMobile ? "mobile-menu mobile-menu-open" : "mobile-menu mobile-menu-close" }>
                <Link to="/StoryTime">Story</Link>
                <Link to="/AllMetrics">Metrics</Link>
                <Link to="/Updates">Updates</Link>
                <Link to="/Team">Team</Link>
                <Link to="/Collection">Collection</Link>
                <Link to="/StakePool">Stake Pool</Link>
                <Link to="/Sales">Sales</Link>
            </div>
            <div className = {mode ? "socials-light" : "socials-dark"}>
                <Link to= {{pathname: "https://twitter.com/CryptoPetz_CNFT"}} target = "_blank">
                    <BsTwitter className="socials-twitter" size={24}/>
                </Link>
                <Link to= {{pathname: "https://discord.com/invite/dM3ug9AQYG"}} target ="_blank">
                    <BsDiscord className="socials-discord" size={24}/>
                </Link>
            </div>
            <button onClick = {()=>setOpenMobile(!openMobile)} className="hamburger-button"><AiOutlineMenu/></button>
        </div>
        :
        <div className = {mode ? "nav-bar light-mode" : "nav-bar dark-mode"}>
            <Link to="/Cryptopetz-demo-site"><img src={ardanoBird} alt="CryptoPet"/></Link>
            <div className = {mode ? "nav-links-light":"nav-links-dark"}>
                <Link to="/StoryTime">Story</Link>
                <Link to="/AllMetrics">Metrics</Link>
                <Link to="/Updates">Updates</Link>
                <Link to="/Team">Team</Link>
                <Link to ="/Collection">Collection</Link>
                <Link to="/StakePool">Stake Pool</Link>
                <Link to="/Sales">Sales</Link>
            </div>
            <div className = {mode ? "socials-light" : "socials-dark"}>
                <div>
                    <label className="switch">
                    <input type="checkbox" onChange= {() => changeMode()} />
                    <span className="slider round"></span>
                    </label>
                </div>
                <Link to= {{pathname: "https://twitter.com/CryptoPetz_CNFT"}} target = "_blank">
                    <BsTwitter className="socials-twitter" size={32}/>
                </Link>
                <Link to= {{pathname: "https://discord.com/invite/dM3ug9AQYG"}} target ="_blank">
                    <BsDiscord className="socials-discord" size={32}/>
                </Link>
            </div>
        </div>
        }
        </>
    );
};

export default NavBar; 