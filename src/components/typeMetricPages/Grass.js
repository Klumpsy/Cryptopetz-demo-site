import { Link } from 'react-router-dom';

import grassEmblem from "..//../images/typeEmblems/Grass_Emblem.png";
import grassPet from "..//../images/petzImages/grass.png";
import GrassMetricsAtt from "..//../images/radarCharts/Grass_Att.jpg"
import GrassMetricsDef from "..//../images/radarCharts/Grass_Def.jpg"

const Grass = () => { 
    return (
        <div className = "metric-type-page-wrapper grass">
            <img className = "background-emblem" src={grassEmblem}/>
            <img className = "background-pet" src={grassPet}/>
            <div className = "metric-type-overlay">
                <Link className="metric-back-button" to="/Metrics">Back to all types</Link>
                <h1>Grass</h1>
                <div className="metric-container">
                <img className = "metric-radar-chart" src={GrassMetricsAtt}/>
                <img className = "metric-radar-chart" src={GrassMetricsDef}/>
                </div>
            </div>
        </div>
    )
}

export default Grass; 