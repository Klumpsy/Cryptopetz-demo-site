
import {Link} from "react-router-dom";

//images imports
import petzMetricPetOne from "../images/petzImages/pony.png";
import petzMetricPetTwo from "../images/petzImages/owlghost.png";
import petzMetricPetThree from "../images/petzImages/fishy.png";

const AllMetrics = ({mode, width}) => { 

    return (
        <div className= {mode? "all-metrics-container all-metrics-container-lightmode" : "all-metrics-container all-metrics-container-darkmode"}>
              <div className ="petz-carousel-background petz-background-carousel-first"></div> 
              <div className ="petz-carousel-background petz-background-carousel-second"></div> 
              <div className ="petz-carousel-background petz-background-carousel-third"></div> 
              <div className ="petz-carousel-background petz-background-carousel-fourth"></div>
              <div className ="metric-box-container">
                    <div className= "metrics-box">
                        <Link to ="/RarityMetrics" style={{ textDecoration: 'none' }}>
                            <div className="all-metrics-box-background">
                                <div className="all-metrics-box metrics-box-rarity">
                                <h1 className ="rarity-metrics-title">Rarity Metrics</h1>
                                </div>
                            </div>
                        </Link>
                    </div>
                     <div className= "metrics-box">
                        <Link to ="/Metrics" style={{ textDecoration: 'none' }}>
                            <div className="all-metrics-box-background">
                                <div className="all-metrics-box metrics-box-petz">
                                    <h1 className ="petz-metrics-title">Petz Metrics</h1>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className= "metrics-box metrics-box-game-info">
                        <Link to ="/GameInfo" style={{ textDecoration: 'none' }}>
                            <div className="all-metrics-box-background">
                                <div className="all-metrics-box metrics-box-game-info">
                                <h1 className ="game-info-title">Game Metrics</h1>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
        </div>
    )
}

export default AllMetrics;

