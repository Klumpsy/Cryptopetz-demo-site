import React, { useState } from 'react'
import bird from '../images/Legendary_ADA_Bird.png' 
import cat from '../images/cat.png' 
import bull from '../images/bull.png' 
import racoon from '../images/racoon.png' 
import dragon from '../images/dragon.png' 
import bear from '../images/bear.png' 

const NavBar = () => { 

    const petzArray = [bird, cat, bull, racoon, dragon, bear]

    return (
        <div className = "nav-bar">
            <a href="/"><img src={petzArray[Math.floor(Math.random() * petzArray.length)]} alt="CryptoPet"/></a>
            <div className = "nav-links">
                <a>Home</a>
                <a>Game Info</a>
                <a>Metrics</a>
                <a>Updates</a>
                <a>Team</a>
                <a>Petz</a>
            </div>
            <div className = "socials">
                <a><i className="socials-twitter fa fab fa-twitter fa-3x"></i></a>
                <a><i className="socials-discord fa fab fa-discord fa-3x"></i></a>
            </div>
        </div>
    )
}

export default NavBar; 