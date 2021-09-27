import { Link } from 'react-router-dom';

//Petz Emblems
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
import drakeEmblem from "../images/typeEmblems/Drake_Emblem.png";
import shadowEmblem from "../images/typeEmblems/Shadow_Emblem.png";
import metalEmblem from "../images/typeEmblems/Metal_Emblem.png";
import faeEmblem from "../images/typeEmblems/Fae_Emblem.png";
import lavaEmblem from "../images/typeEmblems/Lava_Emblem.png";
import soundEmblem from "../images/typeEmblems/Normal_Emblem.png";

//Petz Images 
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
import drakePet from "..//images/petzImages/drake.png";
import shadowPet from "..//images/petzImages/shadow.png";
import metalPet from "..//images/petzImages/metal.png";
import faePet from "..//images/petzImages/fae.png";
import lavaPet from "..//images/petzImages/lava.png";
import soundPet from "..//images/petzImages/sound.png";

const Metrics = () => { 
    return (
        <div className ="metrics-background">
            <div className="metrics-wrapper">
                <div className = "petz-type-container">
                    <div className ="petz-type fire">
                        <h3>Fire</h3>
                        <a><Link to="/Fire">Fire Metrics</Link></a>
                        <img className="emblem" src={fireEmblem}/>
                        <img className="metric-pet"src={firePet}/>
                    </div>
                    <div className ="petz-type water">
                        <h3>Water</h3>
                        <a><Link to="/Water">Water Metrics</Link></a>
                        <img className="emblem" src={waterEmblem}/>
                        <img className="metric-pet"src={waterPet}/>
                    </div>
                    <div className ="petz-type electric">
                        <h3>Electric</h3>
                        <a><Link to="/Electric">Electric Metrics</Link></a>
                        <img className="emblem" src={electricEmblem}/>
                        <img className="metric-pet"src={electricPet}/>
                    </div>
                    <div className ="petz-type grass">
                        <h3>Grass</h3>
                        <a><Link to="/Grass">Grass Metrics</Link></a>
                        <img className="emblem" src={grassEmblem}/>
                        <img className="metric-pet"src={grassPet}/>
                    </div>
                    <div className ="petz-type ice">
                        <h3>Ice</h3>
                        <a><Link to="/Ice">Ice Metrics</Link></a>
                        <img className="emblem" src={iceEmblem}/>
                        <img className="metric-pet"src={icePet}/>
                    </div>
                    <div className ="petz-type combat">
                        <h3>Combat</h3>
                        <a><Link to="/Combat">Combat Metrics</Link></a>
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
                    <div className ="petz-type drake">
                        <h3>Drake</h3>
                        <a>Drake Metrics</a>
                        <img className="emblem" src={drakeEmblem}/>
                        <img className="metric-pet"src={drakePet}/>
                    </div>
                    <div className ="petz-type shadow">
                        <h3>Shadow</h3>
                        <a>Shadow Metrics</a>
                        <img className="emblem" src={shadowEmblem}/>
                        <img className="metric-pet"src={shadowPet}/>
                    </div>
                    <div className ="petz-type metal">
                        <h3>Metal</h3>
                        <a>Metal Metrics</a>
                        <img className="emblem" src={metalEmblem}/>
                        <img className="metric-pet"src={metalPet}/>
                    </div>
                    <div className ="petz-type fae">
                        <h3>Fae</h3>
                        <a>Fae Metrics</a>
                        <img className="emblem" src={faeEmblem}/>
                        <img className="metric-pet"src={faePet}/>
                    </div>
                    <div className ="petz-type lava">
                        <h3>Lava</h3>
                        <a>Lava Metrics</a>
                        <img className="emblem" src={lavaEmblem}/>
                        <img className="metric-pet"src={lavaPet}/>
                    </div>
                    <div className ="petz-type sound">
                        <h3>Sound</h3>
                        <a>Sound Metrics</a>
                        <img className="emblem" src={soundEmblem}/>
                        <img className="metric-pet"src={soundPet}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Metrics