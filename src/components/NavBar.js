import React, { useState } from 'react';


const NavBar = ({petzArray}) => { 

    return (
        <div className = "nav-bar">
            <a href="/Landing"><img src={petzArray.img} alt="CryptoPet"/></a>
            <div className = "nav-links">
                <a Link to="/GameInfo">Game Info</a>
                <a Link to="/Metrics">Metrics</a>
                <a Link to="/Updates">Updates</a>
                <a Link to="/Team">Team</a>
                <a Link to="/Petz">Petz</a>
            </div>
            <div className = "socials">
                <a><i className="socials-twitter fa fab fa-twitter fa-3x"></i></a>
                <a><i className="socials-discord fab fa fa-discord fa-3x"></i></a>
            </div>
        </div>
    )
}

export default NavBar; 