import { Link } from 'react-router-dom';

import iceEmblem from "..//../images/typeEmblems/Ice_Emblem_REV2.png"
import icePet from "..//../images/petzImages/ice.png";
import iceMetricsAtt from "..//../images/radarCharts/Ice_Att.jpg"
import iceMetricsDef from "..//../images/radarCharts/Ice_Def.jpg"


const Ice = () => { 
    return (
        <div className = "metric-type-page-wrapper ice">
            <img className = "background-emblem" src={iceEmblem}/>
            <img className = "background-pet" src={icePet}/>
            <div className = "metric-type-overlay">
                <Link className="metric-back-button" to="/Metrics">Back to all types</Link>
                <h1>Ice</h1>
                <div className="metric-container">
                <img className = "metric-radar-chart" src={iceMetricsAtt}/>
                <img className = "metric-radar-chart" src={iceMetricsDef}/>
                </div>
            </div>
        </div>
    )
}

export default Ice; 