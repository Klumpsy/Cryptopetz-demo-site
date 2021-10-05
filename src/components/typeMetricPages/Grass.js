import { Link } from 'react-router-dom';

import grassEmblem from "..//../images/typeEmblems/Grass_Emblem.png";
import grassPet from "..//../images/petzImages/grass.png";
import grassMetricsAtt from "..//../images/radarCharts/Grass_Att.jpg"
import grassMetricsDef from "..//../images/radarCharts/Grass_Def.jpg"

const Grass = () => { 
    return (
        <div className = "metric-type-page-wrapper grass">
            <div className = "metric-type-overlay">
                <Link className="metric-back-button" to="/Metrics">Back to all types</Link>
                <h1>Grass</h1>
                <div className="metric-container">
                    <img className = "background-emblem" src={grassEmblem}/>
                    <img className = "background-pet" src={grassPet}/>
                    <div>
                        <h3>Attack</h3>
                        <img className = "metric-radar-chart" src={grassMetricsAtt}/>
                    </div>
                    <div>
                        <h3>Defence</h3>
                        <img className = "metric-radar-chart" src={grassMetricsDef}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grass; 