import fireEmblem from "../images/typeEmblems/Fire_Emblem.png";
import waterEmblem from "../images/typeEmblems/Water_Emblem.png";
import electricEmblem from "../images/typeEmblems/Electric_Emblem_REV2.png";
import grassEmblem from "../images/typeEmblems/Grass_Emblem.png";
import iceEmblem from "../images/typeEmblems/Ice_Emblem_REV2.png";
import combatEmblem from "../images/typeEmblems/Combat_Emblem.png";
import poisonEmblem from "../images/typeEmblems/Poison_Emblem.png";
import earthEmblem from "../images/typeEmblems/Earth_Emblem.png";
import flyingEmblem from "../images/typeEmblems/Flying_Emblem.png";
import psychicEmblem from "../images/typeEmblems/Psychic_Emblem.png";
import insectEmblem from "../images/typeEmblems/Insect_Emblem.png";
import spiritEmblem from "../images/typeEmblems/Spirit_Emblem.png";

import firePet from "..//images/petzImages/fire.png";
import waterPet from "..//images/petzImages/water.png";
import electricPet from "..//images/petzImages/electric.png";
import grassPet from "..//images/petzImages/grass.png";
import icePet from "..//images/petzImages/ice.png";
import combatPet from "..//images/petzImages/combat.png";
import poisonPet from "..//images/petzImages/poison.png";
import earthPet from "..//images/petzImages/earth.png";
import flyingPet from "..//images/petzImages/flying.png";
import psychicPet from "..//images/petzImages/psychic.png";
import insectPet from "..//images/petzImages/insect.png";
import spiritPet from "..//images/petzImages/spirit.png";


const Metrics = () => { 
    return (
        <div className="metrics-wrapper">
            <div className = "petz-type-container">
                <div className ="petz-type fire">
                    <h3>Fire</h3>
                    <a>Fire Metrics</a>
                    <img className="emblem" src={fireEmblem}/>
                    <img className="metric-pet"src={firePet}/>
                </div>
                <div className ="petz-type water">
                    <h3>Water</h3>
                    <a>Water Metrics</a>
                    <img className="emblem" src={waterEmblem}/>
                    <img className="metric-pet"src={waterPet}/>
                </div>
                <div className ="petz-type electric">
                    <h3>Electric</h3>
                    <a>Electric Metrics</a>
                    <img className="emblem" src={electricEmblem}/>
                    <img className="metric-pet"src={electricPet}/>
                </div>
                <div className ="petz-type grass">
                    <h3>Grass</h3>
                    <a>Grass Metrics</a>
                    <img className="emblem" src={grassEmblem}/>
                    <img className="metric-pet"src={grassPet}/>
                </div>
                <div className ="petz-type ice">
                    <h3>Ice</h3>
                    <a>Ice Metrics</a>
                    <img className="emblem" src={iceEmblem}/>
                    <img className="metric-pet"src={icePet}/>
                </div>
                <div className ="petz-type combat">
                    <h3>Combat</h3>
                    <a>Combat Metrics</a>
                    <img className="emblem" src={combatEmblem}/>
                    <img className="metric-pet"src={combatPet}/>
                </div>
                <div className ="petz-type poison">
                    <h3>Poison</h3>
                    <a>Poison Metrics</a>
                    <img className="emblem" src={poisonEmblem}/>
                    <img className="metric-pet"src={poisonPet}/>
                </div>
                <div className ="petz-type earth">
                    <h3>Earth</h3>
                    <a>Earth Metrics</a>
                    <img className="emblem" src={earthEmblem}/>
                    <img className="metric-pet"src={earthPet}/>
                </div>
                <div className ="petz-type flying">
                    <h3>Flying</h3>
                    <a>Flying Metrics</a>
                    <img className="emblem" src={flyingEmblem}/>
                    <img className="metric-pet"src={flyingPet}/>
                </div>
                <div className ="petz-type psychic">
                    <h3>Psychic</h3>
                    <a>Psychic Metrics</a>
                    <img className="emblem" src={psychicEmblem}/>
                    <img className="metric-pet"src={psychicPet}/>
                </div>
                <div className ="petz-type insect">
                    <h3>Insect</h3>
                    <a>Insect Metrics</a>
                    <img className="emblem" src={insectEmblem}/>
                    <img className="metric-pet"src={insectPet}/>
                </div>
                <div className ="petz-type spirit">
                    <h3>Spirit</h3>
                    <a>Spirit Metrics</a>
                    <img className="emblem" src={spiritEmblem}/>
                    <img className="metric-pet"src={spiritPet}/>
                </div>
            </div>
        </div>
    )
}

export default Metrics