import React from 'react'

//Icons
import {AiFillInfoCircle} from "react-icons/ai"

//Emblem Data
import {petzObject } from "../PetzData/EmblemData"

//Lazy Loading
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function PetzCards({showPetInfo, cards}) {

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
  
    function capitalize(petName) { 
          const lower = petName.toLowerCase(); 
          return petName.charAt(0).toUpperCase() + lower.slice(1); 
    }
    
    return (
        <div className ="legendary-petz">
            
        { 
            cards.map((pet,index) => (
                <div 
                className =  "epoch-one-pet-card" 
                key={pet.name+index}
                onClick = {() => showPetInfo(pet)}
                >
                    <AiFillInfoCircle style ={{color: "white", margin: "5px"}} size={30}/>
                    <LazyLoadImage effect= "blur" src={pet.image} alt={pet.name}/>
                    <div>
                        <span style ={{color: "white"}}>Rarity: </span><span className={pet.rarity}>{pet.rarity === "legendary" ? " Legendary" : ""}</span>
                    </div>
                    <div style ={{flexDirection: "column"}}>
                        <span style ={{color: "white"}}>Type: </span>
                        {pet.type.length > 1 ?
                        <div className = "pet-card-type-container">
                                <div>
                                    <img src={petzEmblemChecker(pet.type[0])} alt={pet.name}/>
                                    <span className = {pet.type[0]}>{capitalize(pet.type[0])}</span>
                                </div>
                                <div>
                                    <img src={petzEmblemChecker(pet.type[1])} alt={pet.name}/>
                                    <span className = {pet.type[1]}>{capitalize(pet.type[1])}</span>
                                </div>
                            </div>
                        :
                        <div className = "pet-card-type-container">
                            <div>
                                <img src={petzEmblemChecker(pet.type[0])} alt={pet.name}/>
                                <span className = {pet.type[0]}>{capitalize(pet.type[0])}</span>
                            </div>
                        </div>}
                    </div>
                </div>
            ))
        }
    </div>
    )
}

export default PetzCards
