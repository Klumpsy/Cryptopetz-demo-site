import { Link } from 'react-router-dom';

import iceEmblem from "..//../images/typeEmblems/Ice_Emblem_REV2.png"
import icePet from "..//../images/petzImages/ice.png";
import iceMetricsAtt from "..//../images/radarCharts/Ice_Att.jpg"
import iceMetricsDef from "..//../images/radarCharts/Ice_Def.jpg"

import BackButton from '../buttons/BackButton';

const Ice = () => { 
    return (
        <div className = "metric-type-page-wrapper ice">
            <div className = "metric-type-overlay">
            <BackButton target="Metrics"/>
                <h1>Ice</h1>
                <div className="metric-container">
                    <img className = "background-emblem" src={iceEmblem}/>
                    <img className = "background-pet" src={icePet}/>
                    <div>
                        <h3>Attack</h3>
                        <img className = "metric-radar-chart" src={iceMetricsAtt}/>
                    </div>
                    <div>
                        <h3>Defence</h3>
                        <img className = "metric-radar-chart" src={iceMetricsDef}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ice; 