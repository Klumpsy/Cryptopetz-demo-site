import { Link } from 'react-router-dom';

import psychicEmblem from "..//../images/typeEmblems/Psychic_Emblem.png"
import psychicPet from "..//../images/petzImages/psychic.png";
import psychicMetricsAtt from "..//../images/radarCharts/Psychic_Att.jpg"
import psychicMetricsDef from "..//../images/radarCharts/Psychic_Def.jpg"

import BackButton from '../buttons/BackButton';

const Psychic = () => { 
    return (
        <div className = "metric-type-page-wrapper psychic">
            <div className = "metric-type-overlay">
            <BackButton target="Metrics"/>
                <h1>Psychic</h1>
                <div className="metric-container">
                    <img className = "background-emblem" src={psychicEmblem}/>
                    <img className = "background-pet" src={psychicPet}/>
                    <div>
                        <h3>Attack</h3>
                        <img className = "metric-radar-chart" src={psychicMetricsAtt}/>
                    </div>
                    <div>
                        <h3>Defence</h3>
                        <img className = "metric-radar-chart" src={psychicMetricsDef}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Psychic;  