import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({petzArray, width, mode, changeMode}) => { 

    //MobileMenu checker
    const [openMobile, setOpenMobile] = useState(false)

    return (
        <>
        {width < 1200 ?
            <div className = "nav-bar light-mode nav-mobile">
            <li><Link to="/Cryptopetz-demo-site"><img src={petzArray.img} alt="CryptoPet"/></Link></li>
            <div className = {openMobile ? "mobile-menu mobile-menu-open" : "mobile-menu mobile-menu-close" }>
                <a><Link to="/StoryTime">Story Time</Link></a>
                <a><Link to="/GameInfo">Game Info</Link></a>
                <a><Link to="/Metrics">Metrics</Link></a>
                <a><Link to="/Updates">Updates</Link></a>
                <a><Link to="/Team">Team</Link></a>
                <a><Link to="/Petz">Petz</Link></a>
                <a><Link to="/StakePool">Stake Pool</Link></a>
            </div>
            <div className = "socials">
                <a href="https://twitter.com/CryptoPetz_CNFT" target = "_blank"><i className="socials-twitter fa fab fa-twitter fa-2x"></i></a>
                <a href="https://discord.com/invite/dM3ug9AQYG" target ="_blank"><i className="socials-discord fa fas fa-unlink fa-2x"></i></a>
            </div>
            <button onClick = {()=>setOpenMobile(!openMobile)} className="hamburger-button"><i className="fa fas fa-bars fa-2x"></i></button>
        </div>
        :
        <div className = {mode ? "nav-bar light-mode" : "nav-bar dark-mode"}>
            <a><Link to="/Cryptopetz-demo-site"><img src={petzArray.img} alt="CryptoPet"/></Link></a>
            <div className = {mode ? "nav-links-light":"nav-links-dark"}>
                <a><Link to="/StoryTime">Story Time</Link></a>
                <a><Link to="/GameInfo">Game Info</Link></a>
                <a><Link to="/Metrics">Metrics</Link></a>
                <a><Link to="/Updates">Updates</Link></a>
                <a><Link to="/Team">Team</Link></a>
                <a href="https://cryptopetz.info/" target ="_blank">Petz</a>
                <a><Link to="/StakePool">Stake Pool</Link></a>
            </div>
            <div className = {mode ? "socials-light" : "socials-dark"}>
                <div>
                    <label className="switch">
                    <input type="checkbox" onChange= {() => changeMode()} />
                    <span className="slider round"></span>
                    </label>
                </div>
                <a href="https://twitter.com/CryptoPetz_CNFT" target = "_blank"><i className="socials-twitter fa fab fa-twitter fa-2x"></i></a>
                <a href="https://discord.com/invite/dM3ug9AQYG" target ="_blank"><i className="socials-discord fa fas fa-unlink fa-2x"></i></a>
            </div>
        </div>
        }
        </>
    )
}

export default NavBar; 