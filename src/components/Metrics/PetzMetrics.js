import { Link } from 'react-router-dom';
import {petzObject} from '../PetzData/EmblemData'

import BackButton from "../buttons/BackButton"

const PetzMetrics = () => { 

    return (
        <div className ="metrics-background">
            <BackButton target="AllMetrics"/>
            <div className="metrics-wrapper">
                <div className = "petz-type-container">
                    {petzObject.map((pet, index)=> ( 
                      <Link className = "link-text" key={index} to={"/" + pet.type}>
                         <div className = {"petz-type " + pet.type}>
                             <h3>{pet.title}</h3>
                             <p>Metrics</p>
                             <img className="emblem" src={pet.emblem} alt="Emblem"/>
                             <img className="metric-pet"src={pet.petImg} alt="pet"/>
                         </div>
                     </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PetzMetrics