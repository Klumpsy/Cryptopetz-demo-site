import { Link} from 'react-router-dom';

import fireEmblem from "..//../images/typeEmblems/Fire_Emblem.png";
import firePet from "..//../images/petzImages/fire.png";
import fireMetricsAtt from "..//../images/radarCharts/Fire_Att.jpg";
import fireMetricsDef from "..//../images/radarCharts/Fire_Def.jpg";

import BackButton from '../buttons/BackButton';

const Fire = () => { 

    return (
        <div className = "metric-type-page-wrapper fire">
            <div className = "metric-type-overlay">
            <BackButton target="PetzMetrics"/>
                <h1>Fire</h1>
                <div className="metric-container">
                    <img className = "background-emblem" src={fireEmblem}/>
                    <img className = "background-pet" src={firePet}/>
                    <div>
                        <h3>Attack</h3>
                        <img className = "metric-radar-chart" src={fireMetricsAtt}/>
                    </div>
                    <div>
                        <h3>Defence</h3>
                        <img className = "metric-radar-chart" src={fireMetricsDef}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fire; 