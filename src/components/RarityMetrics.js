import {Doughnut} from "react-chartjs-2";
import {Bar} from "react-chartjs-2"; 

//Data
import {PetRarityData} from "../components/chartData/PetRaritydata";
import {PetDistributionData} from "../components/chartData/PetDistributionData";
import {TypesAmount} from "../components/chartData/TypesAmount";
import {BackgroundRarity} from "../components/chartData/BackgroundRarity";
import {EggRarityData} from "../components/chartData/EggRarityData";

const RarityMetrics = () => { 

    
    return (
        <div className = 'petz-metric-background'>
            <div className ="petz-metric-info-box">
                <h2 className = "metric-data-title">Petz(left) and Egg(right) Rarity</h2>
                <p>The following pie chart shows the distribution of the CryptoPetz collections in terms of rarity. </p>
                <div className ="petz-chart-data">
                    <div className="petz-info-box-left">
                        <Doughnut data={PetRarityData}/>
                    </div>
                    <div className="petz-info-box-right">
                        <Doughnut data={EggRarityData}/>
                    </div>
                </div>
            </div>
            <div className ="petz-metric-info-box">
                    <h2 className = "metric-data-title">Petz Type Distribution</h2>
                    <p>The following chart displays the amount of CryptoPetz per types. <span style={{color:"red"}}>Note:</span> Some CryptoPetz have 2 types.</p>
                <div className ="petz-chart-data">
                    <div className="petz-info-box-right">
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
        </div>
    )
}

export default RarityMetrics; 