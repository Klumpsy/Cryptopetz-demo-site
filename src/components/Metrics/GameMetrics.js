import React from 'react'
import { useState, useEffect } from 'react';
import {AiOutlineCloseCircle} from "react-icons/ai";

import menuImage from "../../images/mapImages/mainScreen.jpg"

import arenaTargetBackground from "../../images/mapImages/arena.jpg"
import homeTargetBackground from "../../images/mapImages/home.jpg"
import labTargetBackground from "../../images/mapImages/lab.jpg"
import shipTargetBackground from "../../images/mapImages/ship.jpg"
import playgroundTargetBackground from "../../images/mapImages/playground.jpg"
import marketTargetBackground from "../../images/mapImages/market.jpg"
import eventsTargetBackground from "../../images/mapImages/events.jpg"
import explorerTargetBackground from "../../images/mapImages/explorer.jpg"

import {buildings} from "../buildings/buildingData"

import BackButton from '../buttons/BackButton';

const imageBackgroundArray = [
    arenaTargetBackground, homeTargetBackground, 
    labTargetBackground, shipTargetBackground,
    playgroundTargetBackground, marketTargetBackground,
    eventsTargetBackground, explorerTargetBackground
]

const GameMetrics = () => {
    const [arenaBackground, setArenaBackground] = useState(menuImage);
    const [buildingModalActive, setbuildingModalActive] = useState(false); 
    const [activeBuilding, setActivebuilding] = useState(null); 

useEffect(() => {
    //preloading image
    imageBackgroundArray.map((background) => {
        const img = new Image();
        img.src = background;
    });
}, []);

//Show information on selected building
function showBuildingInfo(building) { 
    setActivebuilding(building);
    setbuildingModalActive(!buildingModalActive); 
    }

//Change background on buttonclick 
function setBackGroundOnClick(building) { 
    if(buildingModalActive) { 
        backgroundManager(building); 
    } else { 
        setArenaBackground(menuImage)
    }
}
//Close selected building modal and reset background to "none" selected
function handleCloseBuildingModal() { 
    setbuildingModalActive(false); 
    setArenaBackground(menuImage);
}

//Switch function for displaying the right background image on click 
function backgroundManager(building) { 
    switch(building) { 
        case "Arena": setArenaBackground(arenaTargetBackground)
        break
        case "Home": setArenaBackground(homeTargetBackground)
        break
        case "Lab": setArenaBackground(labTargetBackground)
        break
        case "Ship": setArenaBackground(shipTargetBackground)
        break
        case "Playground": setArenaBackground(playgroundTargetBackground)
        break
        case "Market": setArenaBackground(marketTargetBackground)
        break
        case "Explorer": setArenaBackground(explorerTargetBackground)
        break
        case "Events": setArenaBackground(eventsTargetBackground)
        break
        default: setArenaBackground(menuImage)
    }
}

    return (
        <div className = "game-info-background" style = {{backgroundImage: `url("${arenaBackground}")`}}>
            <div className= {buildingModalActive ? "building-modal building-modal-active" : "building-modal-hidden"}>
                <h1>{activeBuilding ? activeBuilding.name : ""}</h1>
                <AiOutlineCloseCircle
                className="modal-building-close"
                onClick = {() => handleCloseBuildingModal()}
                size={30}/>
            </div>
            <BackButton target="AllMetrics"/>
            <div className = "building-card-container">
                {buildings.map((building, index) => (
                    <div
                    className = "building-card"
                    onMouseEnter = {() => backgroundManager(building.name)}
                    onMouseLeave = {() => setBackGroundOnClick(building.name)}
                    onClick = {() => showBuildingInfo(building)}
                    >
                    <h2>{building.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GameMetrics
