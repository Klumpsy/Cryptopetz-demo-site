import { Link } from 'react-router-dom';

import waterEmblem from "..//../images/typeEmblems/Water_Emblem.png";
import waterPet from "..//../images/petzImages/water.png";
import waterMetricsAtt from "..//../images/radarCharts/Water_Att.jpg"
import waterMetricsDef from "..//../images/radarCharts/Water_Def.jpg"

const Water = () => { 
    return (
        <div className = "metric-type-page-wrapper water">
            <div className = "metric-type-overlay">
                <Link className="metric-back-button" to="/Metrics">Back to all types</Link>
                <h1>Water</h1>
                <div className="metric-container">
                    <img className = "background-emblem" src={waterEmblem}/>
                    <img className = "background-pet" src={waterPet}/>
                    <div>
                        <h3>Attack</h3>
                        <img className = "metric-radar-chart" src={waterMetricsAtt}/>
                    </div>
                    <div>
                        <h3>Defence</h3>
                        <img className = "metric-radar-chart" src={waterMetricsDef}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Water; 