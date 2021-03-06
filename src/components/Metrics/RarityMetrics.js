import {Doughnut} from "react-chartjs-2";
import {Bar} from "react-chartjs-2"; 
import "chartjs-plugin-datalabels"
import { Link } from "react-router-dom";

//Data
import {PetRarityData} from "../chartData/PetRaritydata";
import {PetDistributionData} from "../chartData/PetDistributionData";
import {TypesAmount} from "../chartData/TypesAmount";
import {BackgroundRarity} from "../chartData/BackgroundRarity";
import {EggRarityData} from "../chartData/EggRarityData";
import {UniqueAmountPetzPerRarity} from "../chartData/UniqueAmountPetzPerRarity";
import {UniquePetzPerRarity} from "../chartData/UniquePetzPerRarity";
import {petzObject} from "../PetzData/EmblemData";
import {petzBackgrounds} from "../PetzData/PetzBackgroundData";
import {eggShells} from "../PetzData/EggshellData";
import {cryptoLogos} from "../PetzData/CryptoLogo"; 

import BackButton from "../buttons/BackButton"

const RarityMetrics = ({eggArray}) => { 

    return (
        <div className = 'petz-metric-background'>
            <BackButton target="AllMetrics"/>
            <div className ="petz-metric-info-box">
                <h2 className = "metric-data-title">Petz</h2>
                <div className ="petz-chart-data">
                    <div className="petz-info-box-left">
                        <div>
                            <p style ={{textAlign: "center", margin: "10px"}}>The following pie chart shows the distribution of the CryptoPetz collections(%) in terms of rarity. </p>
                        </div>
                        <Doughnut data={PetRarityData}/>
                    </div>
                    <div className="petz-info-box-right">
                        <div>
                            <p style ={{textAlign: "center", margin: "10px"}}>The CryptoPetz collection has a total of 21 different types. Some CryptoPetz may have up to 2 types each.</p>
                            
                            {petzObject.map(pet => {
                                
                               return   <Link className ="" to={"/" + pet.type}>
                                                <img className ="petz-info-egg type-link" src={pet.emblem}></img>
                                        </Link>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className ="petz-metric-info-box">
                    <h2 className = "metric-data-title">Petz Type Distribution</h2>
                    <p>The following chart displays the amount of CryptoPetz per types. <span style={{color:"red"}}>Note:</span> Some CryptoPetz have 2 types.</p>
                <div className ="petz-chart-data">
                    <div className="petz-info-box-center">
                        <Bar data={PetDistributionData}/>
                    </div>
                </div>
            </div>
            <div className ="petz-metric-info-box">
                <h2 className = "metric-data-title">1 Type VS 2 Types and Backgrounds Distribution</h2>
                <p>The following pie charts shows the distribution of 1 and 2 types in % and</p>
                <p> normal and special background distribution in %.</p>
                <div className ="petz-chart-data">
                    <div className="petz-info-box-left">
                        <Doughnut data={BackgroundRarity}/>
                    </div>
                    <div className="petz-info-box-right">
                        <Doughnut data={TypesAmount}/>
                    </div>
                </div>
            </div>
            <div className ="petz-metric-info-box">
                <h2 className = "metric-data-title">CryptoPetz per rarity</h2>
                <div className ="petz-chart-data">
                    <div className="petz-info-box-left">
                        <div>
                            <p style ={{textAlign: "center", margin: "10px"}}>The chart below represents the amount of CryptoPetz per rarity.
                            For example, for every unique CryptoPet in the Epic rarity, 
                            there are 40 CryptoPetz generated. This means for every Epic CryptoPet 
                            there are another 39 that are similar.</p>
                        </div>
                        <Bar data={UniqueAmountPetzPerRarity}/>
                    </div>
                    <div className="petz-info-box-right">
                        <div>
                            <p style ={{textAlign: "center", margin: "10px"}}>The chart below represents the number of unique CryptoPetz per rarity.
                            For example, there are a total of 22 unique CryptoPetz for a total of 880 
                            Epic CryptoPetz. This equates to 40 CryptoPetz for each unique Epic CryptoPet.</p>
                        </div>
                        <Bar data={UniquePetzPerRarity}/>
                    </div>
                </div>
            </div>
            <div className ="petz-metric-info-box">
                <h2 className = "metric-data-title">Eggs</h2>
                <div className ="petz-chart-data">
                    <div className="petz-info-box-left">
                    <p style ={{textAlign: "center", margin: "10px"}}>The CryptoPetz egg collection has a total of 12 unique eggs.</p>
                        <div className ="egg-type-list-container">    
                            <ul className="egg-type-container"><span className ="common">Common: </span> 
                                <li>Normal(5)</li> 
                                <li>Metal(5)</li> 
                                <li>Shadow(5)</li> 
                                <li>Water(6)</li> 
                                <li>Fae(6)</li>
                            </ul>
                            <ul className="egg-type-container"><span className ="rare">Rare: </span> 
                                <li>Electric(5)</li>
                                <li>Fire(5)</li>
                                <li>Grass(5)</li>
                                <li>Ice(5)</li>
                            </ul>
                            <ul className="egg-type-container"><span className ="ultrarare">Ultra Rare: </span> 
                                <li>Lava(5)</li>
                                <li>Sound(5)</li>
                            </ul>
                            <ul className="egg-type-container"><span className ="legendary">Legendary: </span>
                                <li>Legendary(3)</li>
                            </ul>
                        </div>
                        <div className ="petz-info-egg-container">
                            {eggArray.map(egg => {
                               return <img className ="petz-info-egg" src={egg}></img>
                            })}
                        </div>
                    </div>
                    <div className="petz-info-box-right">
                         <div>
                            <p style ={{textAlign: "center", margin: "10px"}}>The following chart displays the distribution of eggs in terms of rarity</p>
                        </div>
                        <Doughnut data={EggRarityData}/>
                    </div>
                </div>
            </div>
            <div className ="petz-metric-info-box">
                <h2 className = "metric-data-title">Backgrounds</h2>
                <div className ="petz-chart-data">
                    <div className="petz-info-box-left">
                        <div>
                            <p style ={{textAlign: "center", margin: "10px"}}>The following pie chart shows the distribution of the CryptoPetz collections(%) in terms of rarity. </p>
                        </div>
                        <Doughnut data={PetRarityData}/>
                    </div>
                    <div className="petz-info-box-right">
                        <div className="petz-info-backgrounds">
                            <p style ={{textAlign: "center", margin: "10px"}}>A total of 20 normal backgrounds are equally distributed. They represent 90% of the total backgrounds.</p>
                            
                            {petzBackgrounds.map(background => {
                                
                               return <img className ="petz-info-background" src={background.img}></img>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className ="petz-metric-info-box">
                <h2 className = "metric-data-title">Crypto Logo's</h2>
                <p style ={{textAlign: "center", margin: "10px"}}>
                    The crypto logos located on the hatched egg shell means that the CryptoPet is from that crypto???s ecosystem. 
                    They are equally distributed amongst the 10,000 CryptoPetz.<br/><br/>
                    The crypto logos are as follows: Vechain, Stellar, Monero, XRP, Polkadot, Litecoin, Tether, Tron, Uniswap, Tezos, Chainlink, Iota, Ethereum, EOS, Cardano, Basic Attention Token, Binance Coin, Doge Coin, Dash and Bitcoin. 
                    More details on these will be released on a later date.. 
                </p>
                <div className ="petz-chart-data">
                    <div className="petz-info-box-left">
                    <div className="petz-info-backgrounds">
                           
                           {eggShells.map(eggShell => {
                               
                              return <img className ="petz-info-background" src={eggShell.img}></img>
                           })}
                       </div>
                    </div>
                    <div className="petz-info-box-right">
                        <div className="petz-info-backgrounds">
                           
                            {cryptoLogos.map(cryptoLogo => {
                                
                               return <div className = "dummy-eggShell"><img className ="petz-info-background" src={cryptoLogo.img}></img></div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RarityMetrics; 

//chart.js
