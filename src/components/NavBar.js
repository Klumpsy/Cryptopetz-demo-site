import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({petzArray}) => { 

    return (
        <div className = "nav-bar">
            <li><Link to="/"><img src={petzArray.img} alt="CryptoPet"/></Link></li>
            <div className = "nav-links">
                <a><Link to="/StoryTime">Story Time</Link></a>
                <a><Link to="/GameInfo">Game Info</Link></a>
                <a><Link to="/Metrics">Metrics</Link></a>
                <a><Link to="/Updates">Updates</Link></a>
                <a><Link to="/Team">Team</Link></a>
                <a><Link to="/Petz">Petz</Link></a>
                <a><Link to="/StakePool">Stake Pool</Link></a>
            </div>
            <div className = "socials">
                <a href="https://twitter.com/CryptoPetz_CNFT" target = "_blank"><i className="socials-twitter fa fab fa-twitter fa-3x"></i></a>
                <a><i className="socials-discord fab fa fa-discord fa-3x"></i></a>
            </div>
        </div>
    )
}

export default NavBar; 