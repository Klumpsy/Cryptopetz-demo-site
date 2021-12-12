import { Link } from 'react-router-dom';

import flyingEmblem from "..//../images/typeEmblems/Flying_Emblem.png"
import flyingPet from "..//../images/petzImages/flying.png";
import flyingMetricsAtt from "..//../images/radarCharts/Flying_Att.jpg"
import flyingMetricsDef from "..//../images/radarCharts/Flying_Def.jpg"

import BackButton from '../buttons/BackButton';

const Flying = () => { 
    return (
        <div className = "metric-type-page-wrapper flying">
            <div className = "metric-type-overlay">
            <BackButton target="PetzMetrics"/>
                <h1>Flying</h1>
                <div className="metric-container">
                    <img className = "background-emblem" src={flyingEmblem}/>
                    <img className = "background-pet" src={flyingPet}/>
                    <div>
                        <h3>Attack</h3>
                        <img className = "metric-radar-chart" src={flyingMetricsAtt}/>
                    </div>
                    <div>
                        <h3>Defence</h3>
                        <img className = "metric-radar-chart" src={flyingMetricsDef}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flying;  