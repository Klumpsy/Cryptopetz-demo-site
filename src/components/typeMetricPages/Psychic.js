import { Link } from 'react-router-dom';

import psychicEmblem from "..//../images/typeEmblems/Psychic_Emblem.png"
import psychicPet from "..//../images/petzImages/psychic.png";
import psychicMetricsAtt from "..//../images/radarCharts/Psychic_Att.jpg"
import psychicMetricsDef from "..//../images/radarCharts/Psychic_Def.jpg"


const Psychic = () => { 
    return (
        <div className = "metric-type-page-wrapper psychic">
            <img className = "background-emblem" src={psychicEmblem}/>
            <img className = "background-pet" src={psychicPet}/>
            <div className = "metric-type-overlay">
                <Link className="metric-back-button" to="/Metrics">Back to all types</Link>
                <h1>Psychic</h1>
                <div className="metric-container">
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