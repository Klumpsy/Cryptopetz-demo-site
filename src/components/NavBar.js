import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {BsDiscord} from "react-icons/bs"; 
import ardanoBird from "../images/petzImages/bird.png"

const NavBar = ({petzArray, width, mode, changeMode}) => { 

    //MobileMenu checker
    const [openMobile, setOpenMobile] = useState(false)

    return (
        <>
        {width < 1200 ?
            <div className = "nav-bar light-mode nav-mobile">
            <Link to="/Cryptopetz-demo-site"><img src={ardanoBird} alt="CryptoPet"/></Link>
            <div className = {openMobile ? "mobile-menu mobile-menu-open" : "mobile-menu mobile-menu-close" }>
                <Link to="/StoryTime">Story Time</Link>
                <Link to="/GameInfo">Game Info</Link>
                <Link to="/Metrics">Metrics</Link>
                <Link to="/Updates">Updates</Link>
                <Link to="/Team">Team</Link>
                <Link to="/Collection">Collection</Link>
                <Link to="/StakePool">Stake Pool</Link>
            </div>
            <div className = "socials">
                <a href="https://twitter.com/CryptoPetz_CNFT" target = "_blank"><i className="socials-twitter fa fab fa-twitter fa-2x"></i></a>
                <a href="https://discord.com/invite/dM3ug9AQYG" target ="_blank"><i className="socials-discord fa fas fa-unlink fa-2x"></i></a>
            </div>
            <button onClick = {()=>setOpenMobile(!openMobile)} className="hamburger-button"><i className="fa fas fa-bars fa-2x"></i></button>
        </div>
        :
        <div className = {mode ? "nav-bar light-mode" : "nav-bar dark-mode"}>
            <Link to="/Cryptopetz-demo-site"><img src={ardanoBird} alt="CryptoPet"/></Link>
            <div className = {mode ? "nav-links-light":"nav-links-dark"}>
                <Link to="/StoryTime">Story Time</Link>
                <Link to="/GameInfo">Game Info</Link>
                <Link to="/Metrics">Metrics</Link>
                <Link to="/Updates">Updates</Link>
                <Link to="/Team">Team</Link>
                <Link to ="/Collection">Collection</Link>
                <Link to="/StakePool">Stake Pool</Link>
            </div>
            <div className = {mode ? "socials-light" : "socials-dark"}>
                <div>
                    <label className="switch">
                    <input type="checkbox" onChange= {() => changeMode()} />
                    <span className="slider round"></span>
                    </label>
                </div>
                <a href="https://twitter.com/CryptoPetz_CNFT" target = "_blank"><i className="socials-twitter fa fab fa-twitter fa-2x"></i></a>
                <a href="https://discord.com/invite/dM3ug9AQYG" target ="_blank"><i className="socials-discord">{BsDiscord}</i></a>
            </div>
        </div>
        }
        </>
    );
};

export default NavBar; 