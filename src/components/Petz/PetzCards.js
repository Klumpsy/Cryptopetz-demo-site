import React from 'react'

//Icons
import {AiFillInfoCircle} from "react-icons/ai"

//Lazy Loading
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function PetzCards({petzEmblemChecker, showPetInfo, cards}) {

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
