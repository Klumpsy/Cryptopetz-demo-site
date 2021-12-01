import React, {useState, useEffect} from 'react'; 
import LoadingScreen from './LoadingScreen';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import SearchFilter from '../components/SearchFilter';
import CheckboxSearchMenu from './CheckboxSearchMenu';
import { BsSearch } from "react-icons/bs"

const Collection = ({mode}) => { 
    //API petz state
    const [petz, setPetz] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

     //Toggle Searchbar State
   const [searchMenu, setSearchMenu] = useState(false);

    //Search state
    const [filteredPetz, setFilteredPetz] = useState([]);
  
    //Modal state
    const [modalActive, setModalActive] = useState(false);
    const [modalPet, setModalPet] = useState();

  
    useEffect(() => { 
        let isMounted = true; 

        setLoading(true);
        fetch("https://www.cryptopetz.info/api/petz/metadata/all")
        .then(res => {
            if(!res.ok) { 
                console.log("Could not fetch that data..")
            }
            return res.json(); 
        })
        .then(data => { 
            if(isMounted) { 
                const petzData = Object.values(data)
                setPetz(petzData);
                setFilteredPetz(petzData)
                setLoading(false);
                setError(null);
            }
        })
        .catch(err => { 
            if(err.name === "AbortError"){ 
                console.log("Fetch Aborted")
            } else { 
                setLoading(false); 
                setError(err.message)
                console.log(err.message)
            } 
        });
        return () => isMounted = false;
    }, []);

    //Modal function to show pet that user clicked on 
    function showPetInfo(pet) { 
        setModalPet(pet);
        setModalActive(true); 
    }

    const handleUpdate = (update) => { 
        setFilteredPetz(update)
    }

    return (
            <div className ="petz-container"> 
                <div className = {modalActive? "modal-overlay-background-active": "modal-overlay-background-hidden"}></div>
                <div className = {mode ? "petz-searchbox-container petz-wrapper-light" : "petz-searchbox-container petz-wrapper-dark"}> 
                <div>
    
                 </div>
                </div>
                <div className ="petz-container-background petz-background-first"></div> 
                <div className ="petz-container-background petz-background-second"></div> 
                <div className ="petz-container-background petz-background-third"></div> 
                <div className ="petz-container-background petz-background-fourth"></div> 
                <div className="petz-search-container">
            <button id="petz-search-button" onClick={() => setSearchMenu(!searchMenu)} >Search</button>
            <CheckboxSearchMenu 
                petz={petz} 
                handleUpdate = {handleUpdate} 
                searchMenu ={searchMenu}
                />
         </div>
                <div className = {mode ? "petz-wrapper petz-wrapper-light" : "petz-wrapper petz-wrapper-dark"} >
                    <div className= {modalActive ? "petz-modal-active":"petz-modal-hidden"}>
                        <div className= {modalActive ? "modal-info":"petz-modal-hidden"}>
                            <div className ="modal-info-box">
                            <h2>{modalPet === undefined ? "" : modalPet.name}</h2>
                                <img className = "modal-image" src={modalPet === undefined ? "" : modalPet.thumbnail} alt= {modalPet === undefined ? "" : modalPet.name}/>
                                <div className = "info-box-pet">
                                    <div><h3 className={modalPet === undefined ? "" : modalPet.data.rarity.toLowerCase().replace(/\s/g, '')}>{modalPet === undefined ? "" : modalPet.data.rarity}</h3></div>
                                    <div><label>Rarity score: {modalPet === undefined ? "" : modalPet.rarityScore.toFixed(2)}</label><meter className="rarity-meter "min = '0' max= "100" value ={modalPet === undefined ? 0 : parseInt(modalPet.rarityScore)}></meter></div>
                                </div>
                            </div>
                            <div className ="modal-info-box">
                                <div className = "info-box-about">
                                    <h2>About</h2>
                                    <div>
                                        <div className = 'about-inner'><span className ="about-span-label">Category:</span><span>{modalPet === undefined ? "" : modalPet.category}</span></div>
                                        <div className = 'about-inner'><span className ="about-span-label">Epoch:</span><span>{modalPet === undefined ? "" : modalPet.data.epoch}</span></div>
                                        <div className = 'about-inner'><span className ="about-span-label">Types:</span>{modalPet === undefined ? "" : modalPet.data.types.length === 2 ? `${modalPet.data.types[0]} / ${modalPet.data.types[1]}`: modalPet.data.types[0]}<span></span></div>
                                        <div className = 'about-inner'><span className ="about-span-label">Generation:</span><span>{modalPet === undefined ? "" : modalPet.data.generation}</span></div>
                                        <div className = 'about-inner'><span className ="about-span-label">Asset ID:</span><span className="pool-string">{modalPet === undefined ? "" : modalPet.assetId}</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-info-box">
                                <div className = "info-box-stats">
                                    <h2>Stats and Traits</h2>
                                    <div>
                                        <h3>Traits</h3>
                                        <div className = 'about-inner'><span className ="about-span-label">Background:</span><span>{modalPet === undefined ? "" : modalPet.data.traits.background}</span></div>
                                        <div className = 'about-inner'><span className ="about-span-label">Eggshell:</span><span>{modalPet === undefined ? "" : modalPet.data.traits.eggShell}</span></div>
                                        <div className = 'about-inner'><span className ="about-span-label">Crypto Logo:</span>{modalPet === undefined ? "" : modalPet.data.traits.cryptoLogos}<span></span></div>
                                        <div className = 'about-inner'><span className ="about-span-label">Ability Slots:</span><span>{modalPet === undefined ? "" : modalPet.data.stats.abilitySlots}</span></div>
                                            <div className = 'about-inner'><span className ="about-span-label">Special Attack Slots:</span><span>{modalPet === undefined ? "" : modalPet.data.stats.specialAttackSlots}</span></div>
                                            <div className = 'about-inner'><span className ="about-span-label">Attribute Slots:</span><span>{modalPet === undefined ? "" : modalPet.data.stats.attributeSlots}</span></div>
                                        <h3>Stats</h3>
                                        <div className ="stat-info">
                                            <div className = 'about-inner'><span className ="about-span-label">Att:</span><span>{modalPet === undefined ? "" : modalPet.data.stats.attributes.att}</span></div>
                                            <div className = 'about-inner'><span className ="about-span-label">Def:</span><span>{modalPet === undefined ? "" : modalPet.data.stats.attributes.def}</span></div>
                                            <div className = 'about-inner'><span className ="about-span-label">Dex:</span><span>{modalPet === undefined ? "" : modalPet.data.stats.attributes.dex}</span></div>
                                            <div className = 'about-inner'><span className ="about-span-label">Hp:</span><span>{modalPet === undefined ? "" : modalPet.data.stats.attributes.hp}</span></div>
                                            <div className = 'about-inner'><span className ="about-span-label">Spd:</span><span>{modalPet === undefined ? "" : modalPet.data.stats.attributes.spd}</span></div>
                                            <div className = 'about-inner'><span className ="about-span-label">Sta:</span><span>{modalPet === undefined ? "" : modalPet.data.stats.attributes.sta}</span></div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className ="close-modal" onClick = {() => setModalActive(false)}>X</button>
                    </div>
                    {loading? <LoadingScreen mode={mode}/>:
                    <div className="petz-inner-wrapper">
                        {filteredPetz.map((pet, index) => ( 
                            <div className= {mode ? "pet-card pet-card-light" : "pet-card pet-card-dark"} key={index} onClick = {() => showPetInfo(pet)}>
                             <h4>{pet.name}</h4>
                             <LazyLoadImage effect= "blur" src= {`https://cryptopetz.info${pet.thumbnail}`} alt={pet.name}/>
                                <div>
                                    <p>Epoch: {pet.data.epoch}</p>
                                    <p>Type: {pet.data.types.length === 2 ? `${pet.data.types[0]} / ${pet.data.types[1]}`: pet.data.types[0]}</p>
                                    <p className = {pet.data.rarity.toLowerCase().replace(/\s/g, '')}>{pet.data.rarity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    }
                </div>
            </div>
    )
}

export default Collection

