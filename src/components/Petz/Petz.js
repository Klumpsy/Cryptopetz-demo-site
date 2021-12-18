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
import {BsFillCloudSunFill} from "react-icons/bs";
import {BsFillCloudMoonFill} from "react-icons/bs"; 
import {GiCaveEntrance} from "react-icons/gi"; 

const Petz = ({mode}) => { 

    const [activePet, setActivePet] = useState(null); 
    const [petModalActive, setPetModalActive] = useState(false); 

    function showPetInfo(pet) { 
        setActivePet(pet);
        setPetModalActive(true); 
    }

    function setActivityIcon(pet) { 
        switch(pet) { 
            case "Diurnal": return <BsFillCloudSunFill className = "modal-day-icon" size={100}/>
            break 
            case "Nocturnal": return <BsFillCloudMoonFill className = "modal-night-icon" size={100}/>
            break
            case "Cavurnal": return <GiCaveEntrance className = "modal-cafe-icon" size={100}/>
            break
            default: return "Could not load image"
        }
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

      function checkRarity(rarity) { 
        switch(rarity) { 
            case "legendary": return "Legendary"
            break 
            case "ultrarare": return  "Ultra Rare"
            break
            case "extremelyrare": return  "Extremely Rare"
            break 
            case "epic": return  "Epic"
            break
            case "rare": return "Rare"
            break 
            case "scarce": return  "Scarce"
            break 
            case "uncommon": return "Uncommon"
            break
            case "common": return "Common"
            break
            case "verycommon": return "Very Common"
            break
            default: return  "No rarity"
        }
    }

    return (
        <div className = {mode? "petz-page-wrapper light-mode" : "petz-page-wrapper dark-mode"}>
            <div className = "all-petz-container">
                <div className= {petModalActive ? "pet-modal pet-modal-active" : "pet-modal-hidden"}>
                <div>
                    <div className = "pet-modal-left-box">
                        <div className= "pet-modal-image">
                            <img src={activePet ? activePet.image : ""}/>
                        </div>
                        {
                            activePet ?
                            activePet.type.length > 1 ?
                            <div className = "pet-modal-type">
                                <img src={petzEmblemChecker(activePet.type[0])}/>
                                <img src={petzEmblemChecker(activePet.type[1])}/>
                            </div>
                            :
                            <div className = "pet-modal-type">
                                <img src={petzEmblemChecker(activePet.type[0])}/>
                            </div>
                            :
                            <span>Nothing here</span>
                        }
                       
                        <div>
                        <div className = "pet-modal-rarity">
                            <span style ={{color: "white"}}>Rarity: </span><span className={activePet ? activePet.rarity : ""}>{activePet ? checkRarity(activePet.rarity):""}</span>
                        </div>
                        <div className = "pet-modal-info">
                            <span>Kingdom: {activePet? activePet.kingdom : ""}</span>
                        </div>
                        <div className = "pet-modal-info">
                            {
                                activePet && activePet.type.length > 1 ? 
                                <span>Types: {activePet? activePet.type[0] + " & " + activePet.type[1]: ""}</span>
                                :
                                <span>Type: {activePet ? activePet.type[0] : ""}</span>
                            }
                        </div>
                        <div className = "pet-modal-info">
                            <span>Size: {activePet? activePet.size: ""}</span>
                        </div>
                        <div className = "pet-modal-info">
                            <span>Weight: {activePet? activePet.weight: ""}</span>
                        </div>
                        <div className = "pet-modal-info">
                            <span>Body Type: {activePet? activePet.bodyType: ""}</span>
                        </div>
                    </div>
                    </div>
                    
                </div>
                <div className = "pet-modal-right-box">
                    <h1>{activePet ? activePet.name : ""}</h1>
                    <div>
                        {
                            activePet ? setActivityIcon(activePet.activity) : ""
                        }
                        <div className = "pet-modal-info">
                            <span>Activity: {activePet ? activePet.activity: ""}</span>
                        </div>
                        <div className = "pet-modal-info">
                            <span>Biome: {activePet ? activePet.biome : ""}</span>
                        </div>
                    </div>
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
                    rarity = "legendary"
                    showPetInfo = {showPetInfo}
                    petzEmblemChecker={petzEmblemChecker}
                    checkRarity={checkRarity}
                    />
                    <h2 className = "ultrarare">Ultra Rare</h2>
                    <PetzCards 
                    cards = {EpochOneUltraRare}
                    rarity = "ultrarare"
                    showPetInfo = {showPetInfo}
                    petzEmblemChecker={petzEmblemChecker}
                    checkRarity={checkRarity}
                    />
                    <h2 className = "extremelyrare">Extremely Rare</h2>
                    <PetzCards
                    cards = {EpochOneExtremelyRare}
                    rarity = "extremelyrare"
                    showPetInfo = {showPetInfo}
                    petzEmblemChecker={petzEmblemChecker}
                    checkRarity={checkRarity}
                    />
                    <h2 className = "epic">Epic</h2>
                    <PetzCards 
                    cards = {EpochOneEpic}
                    rarity = "epic"
                    showPetInfo = {showPetInfo}
                    petzEmblemChecker={petzEmblemChecker}
                    checkRarity={checkRarity}
                    />
                    <h2 className = "rare">Rare</h2>
                    <PetzCards 
                    cards = {EpochOneRare}
                    rarity = "rare"
                    showPetInfo = {showPetInfo}
                    petzEmblemChecker={petzEmblemChecker}
                    checkRarity={checkRarity}
                    />
                    <h2 className = "scarce">Scarce</h2>
                    <PetzCards 
                    cards = {EpochOneScarce}
                    rarity = "scarce"
                    showPetInfo = {showPetInfo}
                    petzEmblemChecker={petzEmblemChecker}
                    checkRarity={checkRarity}
                    />
                    <h2 className = "uncommon">Uncommon</h2>
                    <PetzCards 
                    cards = {EpochOneUncommon}
                    rarity = "uncommon"
                    showPetInfo = {showPetInfo}
                    petzEmblemChecker={petzEmblemChecker}
                    checkRarity={checkRarity}
                    />
                    <h2 className = "common">Common</h2>
                    <PetzCards 
                    cards = {EpochOneCommon}
                    rarity = "common"
                    showPetInfo = {showPetInfo}
                    petzEmblemChecker={petzEmblemChecker}
                    checkRarity={checkRarity}
                    />
                    <h2 className = "verycommon">Very Common</h2>
                    <PetzCards 
                    cards = {EpochOneVeryCommon}
                    rarity = "verycommon"
                    showPetInfo = {showPetInfo}
                    petzEmblemChecker={petzEmblemChecker}
                    checkRarity={checkRarity}
                    />
                </div>
            </div>
        </div>
    )
}

export default Petz;