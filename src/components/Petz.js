import React, {useState, useEffect} from 'react'; 
import axios from 'axios';

const Petz = () => { 
    const [petz, setPetz] = useState([]); 
    const [searchMenu, setSearchMenu] = useState(false);
    
    useEffect(()=> {
        try{
            async function fetchData() { 
                const request = await axios.get("/all");
                setPetz(request.data)
                return request;
            }
    
            fetchData();
        }
        catch(err) {
            return err => console.log(err)
        }
     
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
                <div className ="petz-wrapper" >
                {petzArray.map((pet, index) => ( 
                    <div className= {`pet-card ${pet.data.types[0]}`} key={index}>
                        <h4>{pet.name}</h4>
                        <img src= {`https://cryptopetz.info${pet.thumbnail}`}/>
                        <div>
                            <p>Gen: {pet.data.generation}</p>
                            <p>Type: {pet.data.types}</p>
                            <p>Rarity: {pet.data.rarity}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
               
    )
}

export default Petz