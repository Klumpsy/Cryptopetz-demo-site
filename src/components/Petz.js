import { EpochOneLegendary, EpochOneUltraRare } from "./PetzData/epochOnePetz";

const Petz = () => { 
    return (
        <div className ="all-petz-container">
            <h1>Epoch 1</h1>
            <h2 className = "legendary">Legendary</h2>
            <div className ="legendary-petz">
                { 
                    EpochOneLegendary.map(pet => (
                        <div className =  " epoch-one-pet-card">
                            <img src={pet.image}></img>
                            <div>
                                <span style ={{color: "white"}}>Rarity: </span><span className={pet.rarity}>{pet.rarity}</span>
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
            <h2 className = "ultrarare">Ultra Rare</h2>
            <div className ="legendary-petz">
                { 
                    EpochOneUltraRare.map(pet => (
                        <div className =  " epoch-one-pet-card">
                            <img src={pet.image}></img>
                            <div>
                                <span style ={{color: "white"}}>Rarity: </span><span className={pet.rarity}>{pet.rarity}</span>
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
            <h2 className = "epic">Epic</h2>
            <h2 className = "rare">Rare</h2>
            <h2 className = "scarce">Scarce</h2>
            <h2 className = "uncommon">Uncommon</h2>
            <h2 className = "common">Common</h2>
            <h2 className = "verycommon">Very Common</h2>
        </div>
    )
}

export default Petz;