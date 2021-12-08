import { Link } from 'react-router-dom';

import insectEmblem from "..//../images/typeEmblems/Insect_Emblem.png"
import insectPet from "..//../images/petzImages/insect.png";
import insectMetricsAtt from "..//../images/radarCharts/Insect_Att.jpg"
import insectMetricsDef from "..//../images/radarCharts/Insect_Def.jpg"

import BackButton from '../buttons/BackButton';

const Insect = () => { 
    return (
        <div className = "metric-type-page-wrapper insect">
            <div className = "metric-type-overlay">
            <BackButton target="Metrics"/>
                <h1>Insect</h1>
                <div className="metric-container">
                    <img className = "background-emblem" src={insectEmblem}/>
                    <img className = "background-pet" src={insectPet}/>
                    <div>
                        <h3>Attack</h3>
                        <img className = "metric-radar-chart" src={insectMetricsAtt}/>
                    </div>
                    <div>
                        <h3>Defence</h3>
                        <img className = "metric-radar-chart" src={insectMetricsDef}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Insect;  