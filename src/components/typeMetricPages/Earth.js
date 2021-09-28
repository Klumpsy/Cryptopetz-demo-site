import { Link } from 'react-router-dom';

import earthEmblem from "..//../images/typeEmblems/Earth_Emblem.png"
import earthPet from "..//../images/petzImages/earth.png";
import earthMetricsAtt from "..//../images/radarCharts/Earth_Att.jpg"
import earthMetricsDef from "..//../images/radarCharts/Earth_Def.jpg"


const Earth = () => { 
    return (
        <div className = "metric-type-page-wrapper earth">
            <img className = "background-emblem" src={earthEmblem}/>
            <img className = "background-pet" src={earthPet}/>
            <div className = "metric-type-overlay">
                <Link className="metric-back-button" to="/Metrics">Back to all types</Link>
                <h1>Earth</h1>
                <div className="metric-container">
                    <div>
                        <h3>Attack</h3>
                        <img className = "metric-radar-chart" src={earthMetricsAtt}/>
                    </div>
                    <div>
                        <h3>Defence</h3>
                        <img className = "metric-radar-chart" src={earthMetricsDef}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Earth; 