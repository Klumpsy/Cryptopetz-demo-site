import { Link } from 'react-router-dom';

import metalEmblem from "..//../images/typeEmblems/Metal_Emblem.png";
import metalPet from "..//../images/petzImages/metal.png";
import metalMetricsAtt from "..//../images/radarCharts/Metal_Att.jpg";
import metalMetricsDef from "..//../images/radarCharts/Metal_Def.jpg";

import BackButton from '../buttons/BackButton';

const Metal = () => { 
    return (
        <div className = "metric-type-page-wrapper metal">
            <div className = "metric-type-overlay">
            <BackButton target="Metrics"/>
                <h1>Metal</h1>
                <div className="metric-container">
                    <img className = "background-emblem" src={metalEmblem}/>
                    <img className = "background-pet" src={metalPet}/>
                    <div>
                        <h3>Attack</h3>
                        <img className = "metric-radar-chart" src={metalMetricsAtt}/>
                    </div>
                    <div>
                        <h3>Defence</h3>
                        <img className = "metric-radar-chart" src={metalMetricsDef}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Metal; 