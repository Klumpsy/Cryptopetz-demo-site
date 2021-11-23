
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
                                <p>Petz have 10 different raritys and way more extra rarity metrics!
                                   The CryptoPetz collection has a total of 21 different types.
                                   Some CryptoPetz may have up to 2 types each. Checkout all the different metrics here.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                     <div className= "metrics-box">
                        <Link to ="/Metrics" style={{ textDecoration: 'none' }}>
                            <div className="all-metrics-box-background">
                                <div className="all-metrics-box metrics-box-petz">
                                    <h1 className ="petz-metrics-title">Petz Metrics</h1>
                                    <p>The strengths and weaknesses are displayed as Radar charts.
                                       The numbers present on the charts are multipliers.
                                       <br/><br/>
                                       For example, if the multiplier number is 2, the type receiving the damage will be
                                       double what it would usually receive if it were type with a multiplier value of 1.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className= "metrics-box metrics-box-game-info">
                        <Link to ="/GameInfo" style={{ textDecoration: 'none' }}>
                            <div className="all-metrics-box-background">
                                <div className="all-metrics-box">
                                <h1 className ="game-info-title">Game Metrics</h1>
                                <p>CryptoPetz The Game - is a tournament-style online role-playing game (RPG)
                                    where you can collect and enhance your own CryptoPet.
                                    Form your own team and battle others. Every CryptoPetz has a number of attribute slots,
                                    ability slots and special attack slots that can be used by their respective tokens purchased
                                    through the store (coming soon).</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
        </div>
    )
}

export default AllMetrics;

