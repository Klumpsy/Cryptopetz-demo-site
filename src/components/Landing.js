import React, { useEffect, useState} from "react";

const Landing = ({petzArray}) => { 

    return (
    
        
            <div className = {`landing-body ${petzArray.background}`}>
                <div className="landing-page-wrapper">
                    <div className = "landing-pet">
                        <img src={petzArray.img}/>
                        <span className ="landing-text-balloon">
                            <h1 className="landing-title">Hi there!</h1>
                            <p className ="landing-text">Welcome to the Cryptopetz project! CryptoPetz The Game - is a tournament-style online role-playing
                                game (RPG) where you can collect and enhance your own CryptoPet.<br/><br/>
                                Form your own team and battle others. Every CryptoPetz has a number of attribute slots,
                                ability slots and special attack slots that can be used by their respective tokens purchased through
                                the store (coming soon).</p>
                        </span>
                    </div>
                    <div className = 'shadow-box'></div>
                </div>
            </div>
    );
}
export default Landing; 