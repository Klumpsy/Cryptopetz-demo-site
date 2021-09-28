import { Link } from 'react-router-dom';

import faeEmblem from "..//../images/typeEmblems/Fae_Emblem.png";
import faePet from "..//../images/petzImages/fae.png";
import faeMetricsAtt from "..//../images/radarCharts/Fae_Att.jpg";
import faeMetricsDef from "..//../images/radarCharts/Fae_Defense.jpg";


const Fae = () => { 
    return (
        <div className = "metric-type-page-wrapper fae">
            <img className = "background-emblem" src={faeEmblem}/>
            <img className = "background-pet" src={faePet}/>
            <div className = "metric-type-overlay">
                <Link className="metric-back-button" to="/Metrics">Back to all types</Link>
                <h1>Fae</h1>
                <div className="metric-container">
                    <div>
                        <h3>Attack</h3>
                        <img className = "metric-radar-chart" src={faeMetricsAtt}/>
                    </div>
                    <div>
                        <h3>Defence</h3>
                        <img className = "metric-radar-chart" src={faeMetricsDef}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fae; 