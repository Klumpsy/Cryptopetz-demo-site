import { Link } from 'react-router-dom';

import lavaEmblem from "..//../images/typeEmblems/Lava_Emblem.png";
import lavaPet from "..//../images/petzImages/lava.png";
import lavaMetricsAtt from "..//../images/radarCharts/Lava_Att.jpg";
import lavaMetricsDef from "..//../images/radarCharts/Lava_Defense.jpg";

import BackButton from '../buttons/BackButton';

const Lava = () => { 
    return (
        <div className = "metric-type-page-wrapper lava">
            <div className = "metric-type-overlay">
            <BackButton target="PetzMetrics"/>
                <h1>Lava</h1>
                <div className="metric-container">
                    <img className = "background-emblem" src={lavaEmblem}/>
                    <img className = "background-pet" src={lavaPet}/>
                    <div>
                        <h3>Attack</h3>
                        <img className = "metric-radar-chart" src={lavaMetricsAtt}/>
                    </div>
                    <div>
                        <h3>Defence</h3>
                        <img className = "metric-radar-chart" src={lavaMetricsDef}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lava; 