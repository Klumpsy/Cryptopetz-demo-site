import React from 'react'
import { useState } from 'react';

import menuImage from "../images/mapImages/MainMenu.png"
import arenaTargetBackground from "../images/mapImages/arena.png"

import {buildings} from "./buildings/buildingData"

function GameMetrics() {

    const [arenaBackground, setArenaBackground] = useState(menuImage);
    const [buildingModalActive, setbuildingModalActive] = useState(false); 
    const [activebuilding, setActivebuilding] = useState(); 

    function showBuildingInfo(building) { 
        setActivebuilding(building);
        setbuildingModalActive(!buildingModalActive); 
    }

    return (
        <div className = "game-info-background" 
             style = {{backgroundImage: `url("${arenaBackground}")`}}>
                 <div className= {buildingModalActive ? "building-modal building-modal-active" : "building-modal-hidden"}>
                     <h1>{activebuilding.name}</h1>
                 </div>
                 <div className = "building-card-container">
                 {buildings.map(building => (
                    
                        <div 
                        className = "building-card"
                        onMouseEnter = {() => setArenaBackground(arenaTargetBackground)}
                        onMouseLeave = {() => setArenaBackground(menuImage)}
                        onClick = {() => showBuildingInfo(building)}>
    
                            <h2>{building.name}</h2>
                        </div>
                    ))}  
                </div>
        </div>
    )
}

export default GameMetrics
