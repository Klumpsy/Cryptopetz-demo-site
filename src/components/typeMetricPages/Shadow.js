import { Link } from 'react-router-dom';

import shadowEmblem from "..//../images/typeEmblems/Shadow_Emblem.png";
import shadowPet from "..//../images/petzImages/shadow.png";
import shadowMetricsAtt from "..//../images/radarCharts/Shadow_Att.jpg";
import shadowMetricsDef from "..//../images/radarCharts/Shadow_Def.jpg";


const Shadow = () => { 
    return (
        <div className = "metric-type-page-wrapper shadow">
            <div className = "metric-type-overlay">
                <Link className="metric-back-button" to="/Metrics">Back to all types</Link>
                <h1>Shadow</h1>
                <div className="metric-container">
                    <img className = "background-emblem" src={shadowEmblem}/>
                    <img className = "background-pet" src={shadowPet}/>
                    <div>
                        <h3>Attack</h3>
                        <img className = "metric-radar-chart" src={shadowMetricsAtt}/>
                    </div>
                    <div>
                        <h3>Defence</h3>
                        <img className = "metric-radar-chart" src={shadowMetricsDef}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shadow; 