
import {Link} from "react-router-dom";

//images imports
import petzMetricPetOne from "../images/petzImages/pony.png";
import petzMetricPetTwo from "../images/petzImages/owlghost.png";
import petzMetricPetThree from "../images/petzImages/fishy.png";

const AllMetrics = ({mode, width}) => { 

    let selectedIndex = 0;

    function rotateCarousel() {
        let carousel = document.querySelector('.carousel');
        let radius = 173;
        let theta = 120;
        let angle = theta * selectedIndex * -1;
        carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 
          "rotateY" + '(' + angle + 'deg)';
      }

    const next = () => { 
        selectedIndex--
        rotateCarousel()
    }

    const previous = () => { 
        selectedIndex++
        rotateCarousel()
    }

    return (
        <div className= {mode? "all-metrics-container all-metrics-container-lightmode" : "all-metrics-container all-metrics-container-darkmode"}>
              <div className ="petz-carousel-background petz-background-carousel-first"></div> 
              <div className ="petz-carousel-background petz-background-carousel-second"></div> 
              <div className ="petz-carousel-background petz-background-carousel-third"></div> 
              <div className ="petz-carousel-background petz-background-carousel-fourth"></div>
            <div className ="scene">
                <div className ="carousel">
                    <div className= {mode ? "metrics-box metrics-box-light" : "metrics-box metrics-box-dark"}>
                        <Link to ="/RarityMetrics" style={{ textDecoration: 'none' }}>
                            <div className="all-metrics-box">
                            <h1>Rarity Metrics</h1>
                            <p>Petz have 10 different raritys and way more extra rarity metrics!
                               The CryptoPetz collection has a total of 21 different types.
                               Some CryptoPetz may have up to 2 types each. Checkout all the different metrics here.</p>
                               <span className= {mode? "click-carousel-instructions-light" : "click-carousel-instructions-dark"}>Click the box to go to the designated page</span>
                               <img className = "all-metrics-box-pet" src= {petzMetricPetOne} alt="pet"></img> 
                            </div>
                        </Link>
                    </div>
                     <div className= {mode ? "metrics-box metrics-box-light" : "metrics-box metrics-box-dark"}>
                        <Link to ="/Metrics" style={{ textDecoration: 'none' }}>
                            <div className="all-metrics-box">
                                <h1>Petz Metrics</h1>
                                <p>The strengths and weaknesses are displayed as Radar charts.
                                   The numbers present on the charts are multipliers.
                                   <br/><br/>
                                   For example, if the multiplier number is 2, the type receiving the damage will be 
                                   double what it would usually receive if it were type with a multiplier value of 1.</p>
                                   <span className= {mode? "click-carousel-instructions-light" : "click-carousel-instructions-dark"}>Click the box to go to the designated page</span>
                                   <img className = "all-metrics-box-pet" src= {petzMetricPetTwo} alt="pet"></img> 
                            </div>
                        </Link>
                    </div>
                    <div className= {mode ? "metrics-box metrics-box-light" : "metrics-box metrics-box-dark"}>
                        <Link to ="/GameInfo" style={{ textDecoration: 'none' }}>
                            <div className="all-metrics-box">
                            <h1>Game Info</h1>
                            <p>CryptoPetz The Game - is a tournament-style online role-playing game (RPG)
                                where you can collect and enhance your own CryptoPet.
                                Form your own team and battle others. Every CryptoPetz has a number of attribute slots,
                                ability slots and special attack slots that can be used by their respective tokens purchased
                                through the store (coming soon).</p> 
                                <span className= {mode? "click-carousel-instructions-light" : "click-carousel-instructions-dark"}>Click the box to go to the designated page</span>
                                <img className = "all-metrics-box-pet" src= {petzMetricPetThree} alt="pet"></img> 
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className ="carousel-buttons">
               <i className=" carousel-button fa fas fa-arrow-circle-left fa-4x"  onClick ={next}></i>
               <i className=" carousel-button fa fas fa-arrow-circle-right fa-4x" onClick ={previous}></i>
            </div>
        </div>
    )
}

export default AllMetrics;

