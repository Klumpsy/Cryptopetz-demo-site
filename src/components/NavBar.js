import React, { useState } from 'react';

const NavBar = ({petzArray}) => { 

    return (
        <div className = "nav-bar">
            <a href="/Landing"><img src={petzArray.img} alt="CryptoPet"/></a>
            <div className = "nav-links">
                <a href="/GameInfo">Game Info</a>
                <a href="/Metrics">Metrics</a>
                <a href="/Updates">Updates</a>
                <a href="/Team">Team</a>
                <a href="/Petz">Petz</a>
            </div>
            <div className = "socials">
                <a><i className="socials-twitter fa fab fa-twitter fa-3x"></i></a>
                <a><i className="socials-discord fab fa fa-discord fa-3x"></i></a>
            </div>
        </div>
    )
}

export default NavBar; 