import { Link } from 'react-router-dom';

import combatEmblem from "..//../images/typeEmblems/Combat_Emblem.png";
import combatPet from "..//../images/petzImages/combat.png";
import combatMetricsAtt from "..//../images/radarCharts/Combat_Att.jpg";
import combatMetricsDef from "..//../images/radarCharts/Combat_Def.jpg";


const Combat = () => { 
    return (
        <div className = "metric-type-page-wrapper combat">
            <div className = "metric-type-overlay">
                <Link className="metric-back-button" to="/Metrics">Back to all types</Link>
                <h1>Combat</h1>
                <div className="metric-container">
                    <img className = "background-emblem" src={combatEmblem}/>
                    <img className = "background-pet" src={combatPet}/> 
                    <div>
                        <h3>Attack</h3>
                        <img className = "metric-radar-chart" src={combatMetricsAtt}/>
                    </div>
                    <div>
                        <h3>Defence</h3>
                        <img className = "metric-radar-chart" src={combatMetricsDef}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Combat; 