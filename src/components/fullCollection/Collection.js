import React, {useState, useEffect} from 'react'; 
import LoadingScreen from '../LoadingScreen';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import CheckboxSearchMenu from './CheckboxSearchMenu';
import FullCollectionModal from './FullCollectionModal';

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
    const [modalPet, setModalPet] = useState(undefined);

  
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

    //
    function changeModalInactive() { 
        setModalActive(false)
    }

    const handleUpdate = (update) => { 
        setFilteredPetz(update)
    }

    return (
        <>
        {loading ? <LoadingScreen/>
            :
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
                    <FullCollectionModal 
                    modalPet={modalPet}
                    changeModalInactive ={changeModalInactive} 
                    modalActive={modalActive}/>

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
                </div>
            </div>
        }
        </>
    )
}

export default Collection

