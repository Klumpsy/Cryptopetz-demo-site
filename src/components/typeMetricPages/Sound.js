import { Link } from 'react-router-dom';

//import soundEmblem from "..//../images/typeEmblems/Sound_Emblem.png";
import soundPet from "..//../images/petzImages/sound.png";
import soundEmblem from "..//..//images/typeEmblems/Sound_Emblem.png";
import soundMetricsAtt from "..//../images/radarCharts/Sound_Att.jpg";
import soundMetricsDef from "..//../images/radarCharts/Sound_Def.jpg";

import BackButton from '../buttons/BackButton';
const Sound = () => { 
    return (
        <div className = "metric-type-page-wrapper sound">
            <div className = "metric-type-overlay">
            <BackButton target="Metrics"/>
                <h1>Sound</h1>
                <div className="metric-container">
                <img className = "background-emblem" src={soundEmblem}/>
                <img className = "background-pet" src={soundPet}/>
                    <div>
                        <h3>Attack</h3>
                        <img className = "metric-radar-chart" src={soundMetricsAtt}/>
                    </div>
                    <div>
                        <h3>Defence</h3>
                        <img className = "metric-radar-chart" src={soundMetricsDef}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sound; 