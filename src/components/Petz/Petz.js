import { useState } from "react";

import { EpochOneLegendary, 
         EpochOneUltraRare, 
         EpochOneExtremelyRare, 
         EpochOneEpic, 
         EpochOneRare,
         EpochOneScarce,
         EpochOneUncommon,
         EpochOneCommon,
         EpochOneVeryCommon } from "../PetzData/epochOnePetz";

import PetzCards from "./PetzCards";

import {AiOutlineCloseCircle} from 'react-icons/ai';

const Petz = ({mode}) => { 

    const [activePet, setActivePet] = useState(""); 
    const [petModalActive, setPetModalActive] = useState(false); 

    function showPetInfo(pet) { 
        setActivePet(pet);
        setPetModalActive(true); 
    }

    return (
        <div className = "petz-page-wrapper">
            <div className = {mode? "all-petz-container light-mode" : "all-petz-container dark-mode"}>
                <div className= {petModalActive ? "pet-modal pet-modal-active" : "pet-modal-hidden"}>
                <div className = "pet-modal-top-layer">
                    <img src={activePet.image}/>
                    <h1>{activePet ? activePet.name : ""}</h1>
                </div>
                    <AiOutlineCloseCircle
                    className="modal-building-close"
                    onClick = {() => setPetModalActive(false)}
                    size={30}/>
                </div>
                
                <h1 style={mode?{color: "black"}:{color:"white"}}>Epoch 1</h1>
                
                <div className = "petz-cards-container">
                    <h2 className = "legendary">Legendary</h2>
                    <PetzCards
                    cards = {EpochOneLegendary}
                    showPetInfo = {showPetInfo}
                    />
                    <h2 className = "ultrarare">Ultra Rare</h2>
                    <PetzCards cards = {EpochOneUltraRare}
                    showPetInfo = {showPetInfo}
                    />
                    <h2 className = "extremelyrare">Extremely Rare</h2>
                    <PetzCards
                    cards = {EpochOneExtremelyRare}
                    showPetInfo = {showPetInfo}
                    />
                    <h2 className = "epic">Epic</h2>
                    <PetzCards cards = {EpochOneEpic}
                    showPetInfo = {showPetInfo}
                    />
                    <h2 className = "rare">Rare</h2>
                    <PetzCards cards = {EpochOneRare}
                    showPetInfo = {showPetInfo}
                    />
                    <h2 className = "scarce">Scarce</h2>
                    <PetzCards cards = {EpochOneScarce}
                    showPetInfo = {showPetInfo}
                    />
                    <h2 className = "uncommon">Uncommon</h2>
                    <PetzCards cards = {EpochOneUncommon}
                    showPetInfo = {showPetInfo}
                    />
                    <h2 className = "common">Common</h2>
                    <PetzCards cards = {EpochOneCommon}
                    showPetInfo = {showPetInfo}
                    />
                    <h2 className = "verycommon">Very Common</h2>
                    <PetzCards cards = {EpochOneVeryCommon}
                    showPetInfo = {showPetInfo}
                    />
                </div>
            </div>
        </div>
    )
}

export default Petz;