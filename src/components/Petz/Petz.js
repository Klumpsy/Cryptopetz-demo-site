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

//Emblem Data
import {petzObject } from "../PetzData/EmblemData"

import {AiOutlineCloseCircle} from 'react-icons/ai';

const Petz = ({mode}) => { 

    const [activePet, setActivePet] = useState(""); 
    const [petModalActive, setPetModalActive] = useState(false); 

    function showPetInfo(pet) { 
        setActivePet(pet);
        setPetModalActive(true); 
    }

    const petzEmblemChecker = (type) => { 
        switch(type) { 
            case "fire": return petzObject[0].emblem
            break 
            case "water": return petzObject[1].emblem
            break
            case "electric": return petzObject[2].emblem
            break
            case "grass": return petzObject[3].emblem
            break
            case "ice": return petzObject[4].emblem
            break
            case "earth": return petzObject[5].emblem
            break 
            case "drake": return petzObject[6].emblem
            break
            case "shadow": return petzObject[7].emblem
            break
            case "insect": return petzObject[8].emblem
            break
            case "metal": return petzObject[9].emblem
            break
            case "lava": return petzObject[10].emblem
            break 
            case "poison": return petzObject[11].emblem
            break
            case "fae": return petzObject[12].emblem
            break
            case "psychic": return petzObject[13].emblem
            break
            case "flying": return petzObject[14].emblem
            break
            case "sound": return petzObject[15].emblem
            break 
            case "spirit": return petzObject[16].emblem
            break
            case "combat": return petzObject[17].emblem
           
            default: return "No emblem"
        }
      }

    return (
        <div className = {mode? "petz-page-wrapper light-mode" : "petz-page-wrapper dark-mode"}>
            <div className = "all-petz-container">
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
                    petzEmblemChecker={petzEmblemChecker}
                    />
                    <h2 className = "ultrarare">Ultra Rare</h2>
                    <PetzCards cards = {EpochOneUltraRare}
                    showPetInfo = {showPetInfo}
                    petzEmblemChecker={petzEmblemChecker}
                    />
                    <h2 className = "extremelyrare">Extremely Rare</h2>
                    <PetzCards
                    cards = {EpochOneExtremelyRare}
                    showPetInfo = {showPetInfo}
                    petzEmblemChecker={petzEmblemChecker}
                    />
                    <h2 className = "epic">Epic</h2>
                    <PetzCards cards = {EpochOneEpic}
                    showPetInfo = {showPetInfo}
                    petzEmblemChecker={petzEmblemChecker}
                    />
                    <h2 className = "rare">Rare</h2>
                    <PetzCards cards = {EpochOneRare}
                    showPetInfo = {showPetInfo}
                    petzEmblemChecker={petzEmblemChecker}
                    />
                    <h2 className = "scarce">Scarce</h2>
                    <PetzCards cards = {EpochOneScarce}
                    showPetInfo = {showPetInfo}
                    petzEmblemChecker={petzEmblemChecker}
                    />
                    <h2 className = "uncommon">Uncommon</h2>
                    <PetzCards cards = {EpochOneUncommon}
                    showPetInfo = {showPetInfo}
                    petzEmblemChecker={petzEmblemChecker}
                    />
                    <h2 className = "common">Common</h2>
                    <PetzCards cards = {EpochOneCommon}
                    showPetInfo = {showPetInfo}
                    petzEmblemChecker={petzEmblemChecker}
                    />
                    <h2 className = "verycommon">Very Common</h2>
                    <PetzCards cards = {EpochOneVeryCommon}
                    showPetInfo = {showPetInfo}
                    petzEmblemChecker={petzEmblemChecker}
                    />
                </div>
            </div>
        </div>
    )
}

export default Petz;