import { Link } from 'react-router-dom';

import poisonEmblem from "..//../images/typeEmblems/Poison_Emblem.png"
import poisonPet from "..//../images/petzImages/poison.png";
import poisonMetricsAtt from "..//../images/radarCharts/Poison_Att.jpg"
import poisonMetricsDef from "..//../images/radarCharts/Poison_Def.jpg"


const Poison = () => { 
    return (
        <div className = "metric-type-page-wrapper poison">
            <div className = "metric-type-overlay">
                <Link className="metric-back-button" to="/Metrics">Back to all types</Link>
                <h1>Poison</h1>
                <div className="metric-container">
                    <img className = "background-emblem" src={poisonEmblem}/>
                    <img className = "background-pet" src={poisonPet}/>
                    <div>
                        <h3>Attack</h3>
                        <img className = "metric-radar-chart" src={poisonMetricsAtt}/>
                    </div>
                    <div>
                        <h3>Defence</h3>
                        <img className = "metric-radar-chart" src={poisonMetricsDef}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Poison; 