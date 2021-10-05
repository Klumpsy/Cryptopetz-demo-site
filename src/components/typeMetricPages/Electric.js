import { Link } from 'react-router-dom';

import electricEmblem from "..//../images/typeEmblems/Electric_Emblem_REV2.png";
import electricPet from "..//../images/petzImages/electric.png";
import electricMetricsAtt from "..//../images/radarCharts/Electric_Att.jpg";
import electricMetricsDef from "..//../images/radarCharts/Electric_Def.jpg";


const Electric = () => { 
    return (
        <div className = "metric-type-page-wrapper electric">
            <div className = "metric-type-overlay">
                <Link className="metric-back-button" to="/Metrics">Back to all types</Link>
                <h1>Electric</h1>
                <div className="metric-container">
                    <img className = "background-emblem" src={electricEmblem}/>
                    <img className = "background-pet" src={electricPet}/>
                    <div>
                        <h3>Attack</h3>
                        <img className = "metric-radar-chart" src={electricMetricsAtt}/>
                    </div>
                    <div>
                        <h3>Defence</h3>
                        <img className = "metric-radar-chart" src={electricMetricsDef}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Electric; 