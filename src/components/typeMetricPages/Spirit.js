import { Link } from 'react-router-dom';

import spiritEmblem from "..//../images/typeEmblems/Spirit_Emblem.png"
import spiritPet from "..//../images/petzImages/spirit.png";
import spiritMetricsAtt from "..//../images/radarCharts/Spirit_Att.jpg"
import spiritMetricsDef from "..//../images/radarCharts/Spirit_Def.jpg"


const Spirit = () => { 
    return (
        <div className = "metric-type-page-wrapper spirit">
            <img className = "background-emblem" src={spiritEmblem}/>
            <img className = "background-pet" src={spiritPet}/>
            <div className = "metric-type-overlay">
                <Link className="metric-back-button" to="/Metrics">Back to all types</Link>
                <h1>Spirit</h1>
                <div className="metric-container">
                    <div>
                        <h3>Attack</h3>
                        <img className = "metric-radar-chart" src={spiritMetricsAtt}/>
                    </div>
                    <div>
                        <h3>Defence</h3>
                        <img className = "metric-radar-chart" src={spiritMetricsDef}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spirit;  