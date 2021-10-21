import React, {useState, useEffect} from 'react'; 
import axios from 'axios';

const Collection = ({mode}) => { 
    const [petz, setPetz] = useState([]); 
    const [searchMenu, setSearchMenu] = useState(false);
    
    useEffect(() => { 
        axios.get("api/petz/metadata/all")
        .then(res => {
            setPetz(res.data);
        })
        .catch(err => { 
            console.log(err)
        });
    }, []);

    const petzArray = [];

    for (let[key, value] of Object.entries(petz)) { 
            petzArray.push(value);
        }

    return (
        
            <div className ="petz-container">  
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
                    <div className="petz-inner-wrapper">
                        {petzArray.map((pet, index) => ( 
                            <div className= {mode ? "pet-card pet-card-light" : "pet-card pet-card-dark"} key={index}>
                             <h4></h4>
                             <img src= {`https://cryptopetz.info${pet.thumbnail}`}/>
                                <div>
                                    <p>Gen: </p>
                                    <p>Type: </p>
                                    <p>Rarity:</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    )
}

export default Collection