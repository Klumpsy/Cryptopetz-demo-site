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
import soundEmblem from "../images/typeEmblems/Sound_Emblem.png";

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

    const petzObject = 
    [
        {
            title: "Fire",
            type: "fire",
            emblem: fireEmblem,
            petImg: firePet
        },
        {
            title: "Water",
            type: "water",
            emblem: waterEmblem,
            petImg: waterPet
        },
        {
            title: "Electric",
            type: "electric",
            emblem: electricEmblem,
            petImg: electricPet
        },
        {
            title: "Grass",
            type: "grass",
            emblem: grassEmblem,
            petImg: grassPet
        },
        {
            title: "Ice",
            type: "ice",
            emblem: iceEmblem,
            petImg: icePet
        },
        {
            title: "Earth",
            type: "earth",
            emblem: earthEmblem,
            petImg: earthPet
        },
        {
            title: "Drake",
            type: "drake",
            emblem: drakeEmblem,
            petImg: drakePet
        },
        {
            title: "Shadow",
            type: "shadow",
            emblem: shadowEmblem,
            petImg: shadowPet
        },
        {
            title: "Insect",
            type: "insect",
            emblem: insectEmblem,
            petImg: insectPet
        },
        {
            title: "Metal",
            type: "metal",
            emblem: metalEmblem,
            petImg: metalPet
        },
        {
            title: "Lava",
            type: "lava",
            emblem: lavaEmblem,
            petImg: lavaPet
        },
        {
            title: "Poison",
            type: "poison",
            emblem: poisonEmblem,
            petImg: poisonPet
        },
        {
            title: "Fae",
            type: "fae",
            emblem: faeEmblem,
            petImg: faePet
        },
        {
            title: "Psychic",
            type: "psychic",
            emblem: psychicEmblem,
            petImg: psychicPet
        },
        {
            title: "Flying",
            type: "flying",
            emblem: flyingEmblem,
            petImg: flyingPet
        },
        {
            title: "sound",
            type: "sound",
            emblem: soundEmblem,
            petImg: soundPet
        },
        {
            title: "Spirit",
            type: "spirit",
            emblem: spiritEmblem,
            petImg: spiritPet
        },
        {
            title: "Combat",
            type: "combat",
            emblem: combatEmblem,
            petImg: combatPet
        }
    ]

    return (
        <div className ="metrics-background">
            <div className="metrics-wrapper">
                <div className = "petz-type-container">
                    {petzObject.map((pet, index)=> ( 
                      <Link className = "link-text" to={"/" + pet.type}>
                         <div className = {"petz-type " + pet.type}>
                             <h3>{pet.title}</h3>
                             <p>Metrics</p>
                             <img className="emblem" src={pet.emblem}/>
                             <img className="metric-pet"src={pet.petImg}/>
                         </div>
                     </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Metrics