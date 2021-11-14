import { EpochOneLegendary, 
         EpochOneUltraRare, 
         EpochOneExtremelyRare, 
         EpochOneEpic, 
         EpochOneRare,
         EpochOneScarce,
         EpochOneUncommon,
         EpochOneCommon,
         EpochOneVeryCommon } from "./PetzData/epochOnePetz";

import {petzObject } from "./PetzData/EmblemData"

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Petz = ({mode}) => { 

    const petzEmblemChecker = (type) => { 
        if(type === "fire") { 
            return petzObject[0].emblem
        }
        if(type === "combat") { 
            return petzObject[17].emblem
        } else { 
            return petzObject[1].emblem
        }
    }

    return (
        <div className = {mode? "all-petz-container light-mode" : "all-petz-container dark-mode"}>
            <h1 style={mode?{color: "black"}:{color:"white"}}>Epoch 1</h1>
            <h2 className = "legendary">Legendary</h2>
            <div className ="legendary-petz">
                { 
                    EpochOneLegendary.map(pet => (
                        <div className =  " epoch-one-pet-card">
                            <LazyLoadImage effect= "blur" src={pet.image} alt={pet.name}/>
                            <div>
                                <span style ={{color: "white"}}>Rarity: </span><span className={pet.rarity}>{pet.rarity === "legendary" ? " Legendary" : ""}</span>
                            </div>
                            <div style ={{flexDirection: "column"}}>
                                <span style ={{color: "white"}}>Type: </span>
                                {pet.type.length > 1 ?
                                <div className = "pet-card-type-container">
                                        <div>
                                            <img src={petzEmblemChecker(pet.type[0])}/>
                                        </div>
                                        <div>
                                            <img src={petzEmblemChecker(pet.type[1])}/>
                                        </div>
                                    </div>
                                :
                                <div className = "pet-card-type-container">
                                    <div>
                                        <img src={petzEmblemChecker(pet.type[0])}/>
                                    </div>
                                </div>}
                            </div>
                        </div>
                    ))
                }
            </div>
            <h2 className = "ultrarare">Ultra Rare</h2>
            <div className ="legendary-petz">
                { 
                    EpochOneUltraRare.map(pet => (
                        <div className =  " epoch-one-pet-card">
                            <LazyLoadImage effect= "blur" src={pet.image} alt={pet.name}/>
                            <div>
                                <span style ={{color: "white"}}>Rarity: </span><span className={pet.rarity}>{pet.rarity === "ultrarare" ? " Ultra Rare" : ""}</span>
                            </div>
                            <div style ={{flexDirection: "column"}}>
                                <span style ={{color: "white"}}>Type: </span>
                                {pet.type.length > 1 ?
                                <div className = "pet-card-type-container">
                                    <span className ={pet.type[0]}>{pet.type[0]}</span>
                                    <span className ={pet.type[1]}>{pet.type[1]}</span>
                                </div> 
                                :
                                <div className = "pet-card-type-container">
                                    <span className ={pet.type[0]}>{pet.type[0]}</span>
                                </div>}
                            </div>
                        </div>
                    ))
                }
            </div>
            <h2 className = "extremelyrare">Extremely Rare</h2>
            <div className ="legendary-petz">
                { 
                    EpochOneExtremelyRare.map(pet => (
                        <div className =  " epoch-one-pet-card">
                            <LazyLoadImage effect= "blur" src={pet.image} alt={pet.name}/>
                            <div>
                                <span style ={{color: "white"}}>Rarity: </span><span className={pet.rarity}>{pet.rarity === "extremelyrare" ? " Extremely Rare" : ""}</span>
                            </div>
                            <div style ={{flexDirection: "column"}}>
                                <span style ={{color: "white"}}>Type: </span>
                                {pet.type.length > 1 ?
                                <div className = "pet-card-type-container">
                                    <span className ={pet.type[0]}>{pet.type[0]}</span>
                                    <span className ={pet.type[1]}>{pet.type[1]}</span>
                                </div> 
                                :
                                <div className = "pet-card-type-container">
                                    <span className ={pet.type[0]}>{pet.type[0]}</span>
                                </div>}
                            </div>
                        </div>
                    ))
                }
            </div>
            <h2 className = "epic">Epic</h2>
            <div className ="legendary-petz">
                { 
                    EpochOneEpic.map(pet => (
                        <div className =  " epoch-one-pet-card">
                            <LazyLoadImage effect= "blur" src={pet.image} alt={pet.name}/>
                            <div>
                                <span style ={{color: "white"}}>Rarity: </span><span className={pet.rarity}>{pet.rarity === "epic" ? " Epic" : ""}</span>
                            </div>
                            <div style ={{flexDirection: "column"}}>
                                <span style ={{color: "white"}}>Type: </span>
                                {pet.type.length > 1 ?
                                <div className = "pet-card-type-container">
                                    <span className ={pet.type[0]}>{pet.type[0]}</span>
                                    <span className ={pet.type[1]}>{pet.type[1]}</span>
                                </div> 
                                :
                                <div className = "pet-card-type-container">
                                    <span className ={pet.type[0]}>{pet.type[0]}</span>
                                </div>}
                            </div>
                        </div>
                    ))
                }
            </div>
            <h2 className = "rare">Rare</h2>
            <div className ="legendary-petz">
                { 
                    EpochOneRare.map(pet => (
                        <div className =  " epoch-one-pet-card">
                            <LazyLoadImage effect= "blur" src={pet.image} alt={pet.name}/>
                            <div>
                                <span style ={{color: "white"}}>Rarity: </span><span className={pet.rarity}>{pet.rarity === "rare" ? " Rare" : ""}</span>
                            </div>
                            <div style ={{flexDirection: "column"}}>
                                <span style ={{color: "white"}}>Type: </span>
                                {pet.type.length > 1 ?
                                <div className = "pet-card-type-container">
                                    <span className ={pet.type[0]}>{pet.type[0]}</span>
                                    <span className ={pet.type[1]}>{pet.type[1]}</span>
                                </div> 
                                :
                                <div className = "pet-card-type-container">
                                    <span className ={pet.type[0]}>{pet.type[0]}</span>
                                </div>}
                            </div>
                        </div>
                    ))
                }
            </div>
            <h2 className = "scarce">Scarce</h2>
            <div className ="legendary-petz">
                { 
                    EpochOneScarce.map(pet => (
                        <div className =  " epoch-one-pet-card">
                            <LazyLoadImage effect= "blur" src={pet.image} alt={pet.name}/>
                            <div>
                                <span style ={{color: "white"}}>Rarity: </span><span className={pet.rarity}>{pet.rarity === "scarce" ? " Scarce" : ""}</span>
                            </div>
                            <div style ={{flexDirection: "column"}}>
                                <span style ={{color: "white"}}>Type: </span>
                                {pet.type.length > 1 ?
                                <div className = "pet-card-type-container">
                                    <span className ={pet.type[0]}>{pet.type[0]}</span>
                                    <span className ={pet.type[1]}>{pet.type[1]}</span>
                                </div> 
                                :
                                <div className = "pet-card-type-container">
                                    <span className ={pet.type[0]}>{pet.type[0]}</span>
                                </div>}
                            </div>
                        </div>
                    ))
                }
            </div>
            <h2 className = "uncommon">Uncommon</h2>
            <div className ="legendary-petz">
                { 
                    EpochOneUncommon.map(pet => (
                        <div className =  " epoch-one-pet-card">
                            <LazyLoadImage effect= "blur" src={pet.image} alt={pet.name}/>
                            <div>
                                <span style ={{color: "white"}}>Rarity: </span><span className={pet.rarity}>{pet.rarity === "uncommon" ? " Uncommon" : ""}</span>
                            </div>
                            <div style ={{flexDirection: "column"}}>
                                <span style ={{color: "white"}}>Type: </span>
                                {pet.type.length > 1 ?
                                <div className = "pet-card-type-container">
                                    <span className ={pet.type[0]}>{pet.type[0]}</span>
                                    <span className ={pet.type[1]}>{pet.type[1]}</span>
                                </div> 
                                :
                                <div className = "pet-card-type-container">
                                    <span className ={pet.type[0]}>{pet.type[0]}</span>
                                </div>}
                            </div>
                        </div>
                    ))
                }
            </div>
            <h2 className = "common">Common</h2>
            <div className ="legendary-petz">
                { 
                    EpochOneCommon.map(pet => (
                        <div className =  " epoch-one-pet-card">
                            <LazyLoadImage effect= "blur" src={pet.image} alt={pet.name}/>
                            <div>
                                <span style ={{color: "white"}}>Rarity: </span><span className={pet.rarity}>{pet.rarity === "common" ? " Common" : ""}</span>
                            </div>
                            <div style ={{flexDirection: "column"}}>
                                <span style ={{color: "white"}}>Type: </span>
                                {pet.type.length > 1 ?
                                <div className = "pet-card-type-container">
                                    <span className ={pet.type[0]}>{pet.type[0]}</span>
                                    <span className ={pet.type[1]}>{pet.type[1]}</span>
                                </div> 
                                :
                                <div className = "pet-card-type-container">
                                    <span className ={pet.type[0]}>{pet.type[0]}</span>
                                </div>}
                            </div>
                        </div>
                    ))
                }
            </div>
            <h2 className = "verycommon">Very Common</h2>
            <div className ="legendary-petz">
                { 
                    EpochOneVeryCommon.map(pet => (
                        <div className =  " epoch-one-pet-card">
                            <LazyLoadImage effect= "blur" src={pet.image} alt={pet.name}/>
                            <div>
                                <span style ={{color: "white"}}>Rarity: </span><span className={pet.rarity}>{pet.rarity === "verycommon" ? " Very Common" : ""}</span>
                            </div>
                            <div style ={{flexDirection: "column"}}>
                                <span style ={{color: "white"}}>Type: </span>
                                {pet.type.length > 1 ?
                                <div className = "pet-card-type-container">
                                    <span className ={pet.type[0]}>{pet.type[0]}</span>
                                    <span className ={pet.type[1]}>{pet.type[1]}</span>
                                </div> 
                                :
                                <div className = "pet-card-type-container">
                                    <span className ={pet.type[0]}>{pet.type[0]}</span>
                                </div>}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Petz;