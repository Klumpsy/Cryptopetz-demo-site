import { Link } from 'react-router-dom';

import drakeEmblem from "..//../images/typeEmblems/Drake_Emblem.png";
import drakePet from "..//../images/petzImages/drake.png";
import drakeMetricsAtt from "..//../images/radarCharts/Drake_Att.jpg";
import drakeMetricsDef from "..//../images/radarCharts/Drake_Def.jpg";


const Drake = () => { 
    return (
        <div className = "metric-type-page-wrapper drake">
            <img className = "background-emblem" src={drakeEmblem}/>
            <img className = "background-pet" src={drakePet}/>
            <div className = "metric-type-overlay">
                <Link className="metric-back-button" to="/Metrics">Back to all types</Link>
                <h1>Drake</h1>
                <div className="metric-container">
                    <div>
                        <h3>Attack</h3>
                        <img className = "metric-radar-chart" src={drakeMetricsAtt}/>
                    </div>
                    <div>
                        <h3>Defence</h3>
                        <img className = "metric-radar-chart" src={drakeMetricsDef}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drake; 