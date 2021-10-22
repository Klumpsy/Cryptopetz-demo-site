import React, {useState, useEffect} from 'react'; 
import axios from 'axios';

const Collection = ({mode}) => { 
    const [petz, setPetz] = useState([]); 
    const [searchMenu, setSearchMenu] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const [modalPet, setModalPet] = useState();

    useEffect(() => { 
        axios.get("api/petz/metadata/all")
        .then(res => {
            setPetz(res.data);
        })
        .catch(err => { 
            console.log(err)
        });
    }, []);

    function showPetInfo(pet) { 
        setModalPet(pet);
        setModalActive(true); 
        console.log(pet)
    }

    //Petz Array retreived from API
    const petzArray = [];

    for (let[key, value] of Object.entries(petz)) { 
            petzArray.push(value);
        }

    return (
        
            <div className ="petz-container"> 
                <div className ="petz-container-background petz-background-first"></div> 
                <div className ="petz-container-background petz-background-second"></div> 
                <div className ="petz-container-background petz-background-third"></div> 
                <div className ="petz-container-background petz-background-fourth"></div> 
                <div className="petz-search-container">
                    <button id="petz-search-button" onClick={() => setSearchMenu(!searchMenu)} >Search</button>
                    <div className= {searchMenu ? "search-menu-active" : "search-menu-hidden"}>
                        <div className = "check-for-type">
                            <h3>Filter by Type</h3>
                            <div className ="type-box"><label>Fire</label><input type="checkbox" /></div>
                            <div className ="type-box"><label>Water</label><input type="checkbox"/></div>
                            <div className ="type-box"><label>Grass</label><input type="checkbox"/></div>
                        </div>
                        <div className = "check-for-type">
                            <h3>Filter by Rarity</h3>
                            <div className ="type-box"><label>Legendary</label><input type="checkbox"/></div>
                            <div className ="type-box"><label>Ultra Rare</label><input type="checkbox"/></div>
                            <div className ="type-box"><label>Extremely Rare</label><input type="checkbox"/></div>
                        </div>
                    </div>
                </div>
                <div className = {mode ? "petz-wrapper petz-wrapper-light" : "petz-wrapper petz-wrapper-dark"} >
                    <div className= {modalActive ? "petz-modal-active":"petz-modal-hidden"}>
                        <div className= {modalActive ? "modal-info":"petz-modal-hidden"}>
                            <div className ="modal-info-box">
                            <h2>{modalPet == undefined ? "" : modalPet.name}</h2>
                                <img src={modalPet == undefined ? "" : modalPet.thumbnail}></img>
                                <div className = "info-box-pet">
                                    <div><h3>{modalPet == undefined ? "" : modalPet.data.rarity}</h3></div>
                                    <div><label>Rarity score: {modalPet == undefined ? "" : modalPet.rarityScore.toFixed(2)}</label><meter className="rarity-meter "min = '0' max= "100" value ={modalPet == undefined ? "" : modalPet.rarity}></meter></div>
                                </div>
                            </div>
                            <div className ="modal-info-box">
                                <div className = "info-box-about">
                                    <h2>About</h2>
                                    <div>
                                        <div className = 'about-inner'><span className ="about-span-label">Category:</span><span>{modalPet == undefined ? "" : modalPet.category}</span></div>
                                        <div className = 'about-inner'><span className ="about-span-label">Epoch:</span><span>{modalPet == undefined ? "" : modalPet.data.epoch}</span></div>
                                        <div className = 'about-inner'><span className ="about-span-label">Types:</span>{modalPet == undefined ? "" : modalPet.data.types}<span></span></div>
                                        <div className = 'about-inner'><span className ="about-span-label">Generation:</span><span>{modalPet == undefined ? "" : modalPet.data.generation}</span></div>
                                        <div className = 'about-inner'><span className ="about-span-label">Asset ID:</span><span>{modalPet == undefined ? "" : modalPet.assetId}</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-info-box">
                                <div className = "info-box-stats">
                                    <h2>Stats and Traits</h2>
                                    <div>
                                        <h3>Traits</h3>
                                        <div className = 'about-inner'><span className ="about-span-label">Background:</span><span>{modalPet == undefined ? "" : modalPet.data.traits.background}</span></div>
                                        <div className = 'about-inner'><span className ="about-span-label">Eggshell:</span><span>{modalPet == undefined ? "" : modalPet.data.traits.eggShell}</span></div>
                                        <div className = 'about-inner'><span className ="about-span-label">Crypto Logo:</span>{modalPet == undefined ? "" : modalPet.data.traits.cryptoLogos}<span></span></div>
                                        <div className = 'about-inner'><span className ="about-span-label">Ability Slots:</span><span>{modalPet == undefined ? "" : modalPet.data.stats.abilitySlots}</span></div>
                                            <div className = 'about-inner'><span className ="about-span-label">Special Attack Slots:</span><span>{modalPet == undefined ? "" : modalPet.data.stats.specialAttackSlots}</span></div>
                                            <div className = 'about-inner'><span className ="about-span-label">Attribute Slots:</span><span>{modalPet == undefined ? "" : modalPet.data.stats.attributeSlots}</span></div>
                                        <h3>Stats</h3>
                                        <div className ="stat-info">
                                            <div className = 'about-inner'><span className ="about-span-label">Att:</span><span>{modalPet == undefined ? "" : modalPet.data.stats.attributes.att}</span></div>
                                            <div className = 'about-inner'><span className ="about-span-label">Def:</span><span>{modalPet == undefined ? "" : modalPet.data.stats.attributes.def}</span></div>
                                            <div className = 'about-inner'><span className ="about-span-label">Dex:</span><span>{modalPet == undefined ? "" : modalPet.data.stats.attributes.dex}</span></div>
                                            <div className = 'about-inner'><span className ="about-span-label">Hp:</span><span>{modalPet == undefined ? "" : modalPet.data.stats.attributes.hp}</span></div>
                                            <div className = 'about-inner'><span className ="about-span-label">Spd:</span><span>{modalPet == undefined ? "" : modalPet.data.stats.attributes.spd}</span></div>
                                            <div className = 'about-inner'><span className ="about-span-label">Sta:</span><span>{modalPet == undefined ? "" : modalPet.data.stats.attributes.sta}</span></div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className ="close-modal" onClick = {() => setModalActive(false)}>X</button>
                    </div>
                    <div className="petz-inner-wrapper">
                        {petzArray.map((pet, index) => ( 
                            <div className= {mode ? "pet-card pet-card-light" : "pet-card pet-card-dark"} key={index} onClick = {() => showPetInfo(pet)}>
                             <h4>{pet.name}</h4>
                             <img src= {`https://cryptopetz.info${pet.thumbnail}`}/>
                                <div>
                                    <p>Epoch: {pet.data.epoch}</p>
                                    <p>Type: {pet.data.types}</p>
                                    <p>Rarity: {pet.data.rarity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    )
}

export default Collection