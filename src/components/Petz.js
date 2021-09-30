import allpetz from "../images/allpetz.jpg";
import React, {useState, useEffect} from 'react'; 
import axios from 'axios';

const Petz = () => { 
    const [petz, setPetz] = useState([]); 

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
                <div className="petz-search-input">
                    <input placeholder="Search pet by Type, Rarity or ID..."/>
                </div>
                <div className ="petz-wrapper" >
                {petzArray.map(pet => ( 
                    <div className= {`pet-card ${pet.data.types[0]}`} pet-card key={pet.name}>
                        <h4>{pet.name}</h4>
                        <img src= {`https://cryptopetz.info${pet.image}`}/>
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