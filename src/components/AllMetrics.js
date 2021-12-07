import { useState } from "react";
import {Link} from "react-router-dom";

//rarity background 
import lightmodeRarity from "../images/gifs/waterfishgif.gif"; 
import darkmodeRarity from "../images/gifs/darkmodewaterfishgif.gif"; 
import rarityBackgroundMain from "../images/smallPngPetz/Pi7compressed0141.png"

const AllMetrics = ({mode}) => { 
    const [rarityBackground, setRarityBackground] = useState(rarityBackgroundMain); 


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
                                <div className= "all-metrics-box metrics-box-rarity">
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
                        <Link to ="/GameMetrics" style={{ textDecoration: 'none' }}>
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

