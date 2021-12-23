import React from 'react'

//Icons
import {AiOutlineCloseCircle} from "react-icons/ai"

function FullCollectionModal(props) {

    return (
        <div className= {props.modalActive ? "petz-modal-active":"petz-modal-hidden"}>
            <div className= {props.modalActive ? "modal-info":"petz-modal-hidden"}>
                <div className ="modal-info-box">
                    <h2>{props.modalPet === undefined ? "" : props.modalPet.name}</h2>
                    <img className = "modal-image" src={props.modalPet === undefined ? "" : `https://cryptopetz.info${props.modalPet.thumbnail}`} alt= {props.modalPet === undefined ? "" : props.modalPet.name}/>
                    <div className = "info-box-pet">
                        <div>
                            <h3 className={props.modalPet === undefined ? "" : props.modalPet.data.rarity.toLowerCase().replace(/\s/g, '')}>{props.modalPet === undefined ? "" : props.modalPet.data.rarity}</h3>
                        </div>
                        <div>
                            <label>Rarity score: {props.modalPet === undefined ? "" : props.modalPet.rarityScore.toFixed(2)}</label>
                            <meter className="rarity-meter "min = '0' max= "100" value ={props.modalPet === undefined ? 0 : parseInt(props.modalPet.rarityScore)}></meter>
                        </div>
                    </div>
                </div>
                 <div className ="modal-info-box">
                    <div className = "info-box-about">
                        <h2>About</h2>
                        <div>
                            <div className = 'about-inner'>
                                <span className ="about-span-label">Category:</span>
                                <span>{props.modalPet === undefined ? "" : props.modalPet.category}</span>
                            </div>
                            <div className = 'about-inner'>
                                <span className ="about-span-label">Epoch:</span>
                                <span>{props.modalPet === undefined ? "" : props.modalPet.data.epoch}</span>
                            </div>
                            <div className = 'about-inner'>
                                <span className ="about-span-label">Types:</span>
                                <span>{props.modalPet === undefined ? "" : props.modalPet.data.types.length === 2 ? `${props.modalPet.data.types[0]} / ${props.modalPet.data.types[1]}`: props.modalPet.data.types[0]}</span>
                            </div>
                            <div className = 'about-inner'>
                                <span className ="about-span-label">Generation:</span>
                                <span>{props.modalPet === undefined ? "" : props.modalPet.data.generation}</span></div>
                            <div className = 'about-inner'>
                                <span className ="about-span-label">Asset ID:</span>
                                <span className="pool-string">{props.modalPet === undefined ? "" : props.modalPet.assetId}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-info-box">
                    <div className = "info-box-stats">
                        <h2>Stats and Traits</h2>
                        <div>
                        <h3>Traits</h3>
                            <div className = 'about-inner'>
                                <span className ="about-span-label">Background:</span>
                                <span>{props.modalPet === undefined ? "" : props.modalPet.data.traits.background}</span>
                            </div>
                            <div className = 'about-inner'>
                                <span className ="about-span-label">Eggshell:</span>
                                <span>{props.modalPet === undefined ? "" : props.modalPet.data.traits.eggShell}</span>
                            </div>
                            <div className = 'about-inner'>
                                <span className ="about-span-label">Crypto Logo:</span>
                                <span>{props.modalPet === undefined ? "" : props.modalPet.data.traits.cryptoLogos}</span>
                            </div>
                            <div className = 'about-inner'>
                                <span className ="about-span-label">Ability Slots:</span>
                                <span>{props.modalPet === undefined ? "" : props.modalPet.data.stats.abilitySlots}</span>
                            </div>
                            <div className = 'about-inner'>
                                <span className ="about-span-label">Special Attack Slots:</span>
                                <span>{props.modalPet === undefined ? "" : props.modalPet.data.stats.specialAttackSlots}</span>
                            </div>
                            <div className = 'about-inner'>
                                <span className ="about-span-label">Attribute Slots:</span>
                                <span>{props.modalPet === undefined ? "" : props.modalPet.data.stats.attributeSlots}</span>
                            </div>
                        <h3>Stats</h3>
                            <div className ="stat-info">
                                <div className = 'about-inner'>
                                    <span className ="about-span-label">Att:</span>
                                    <span>{props.modalPet === undefined ? "" : props.modalPet.data.stats.attributes.att}</span>
                                </div>
                                <div className = 'about-inner'>
                                    <span className ="about-span-label">Def:</span>
                                    <span>{props.modalPet === undefined ? "" : props.modalPet.data.stats.attributes.def}</span>
                                </div>
                                <div className = 'about-inner'>
                                    <span className ="about-span-label">Dex:</span>
                                    <span>{props.modalPet === undefined ? "" : props.modalPet.data.stats.attributes.dex}</span>
                                </div>
                                <div className = 'about-inner'>
                                    <span className ="about-span-label">Hp:</span>
                                    <span>{props.modalPet === undefined ? "" : props.modalPet.data.stats.attributes.hp}</span>
                                </div>
                                <div className = 'about-inner'>
                                    <span className ="about-span-label">Spd:</span>
                                    <span>{props.modalPet === undefined ? "" : props.modalPet.data.stats.attributes.spd}</span>
                                </div>
                                <div className = 'about-inner'>
                                    <span className ="about-span-label">Sta:</span>
                                    <span>{props.modalPet === undefined ? "" : props.modalPet.data.stats.attributes.sta}</span>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            <AiOutlineCloseCircle
            className ="close-modal" 
            style ={{margin: "5px"}} 
            size={30}
            onClick = {() => props.changeModalInactive()}
            />
        </div>
    )
}

export default FullCollectionModal
