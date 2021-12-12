import MetricsCard from "./MetricsCard"; 

const AllMetrics = ({mode}) => { 
   
    return (
        <div className= {mode? "all-metrics-container all-metrics-container-lightmode" : "all-metrics-container all-metrics-container-darkmode"}>
              <div className ="petz-carousel-background petz-background-carousel-first"></div> 
              <div className ="petz-carousel-background petz-background-carousel-second"></div> 
              <div className ="petz-carousel-background petz-background-carousel-third"></div> 
              <div className ="petz-carousel-background petz-background-carousel-fourth"></div>
              <div className ="metric-box-container">
                <MetricsCard 
                cardType = "Rarity Metrics" 
                metricType = "metrics-box-rarity" 
                title="rarity-metrics-title"
                metricClass = "metrics-box-rarity"
                linkTo = "RarityMetrics"/>
                <MetricsCard 
                cardType = "Petz Metrics" 
                metricType = "metrics-box-petz" 
                title="petz-metrics-title"
                metricClass = "metrics-box-petz"
                linkTo = "PetzMetrics"/>
                <MetricsCard 
                cardType = "Game Metrics" 
                metricType = "metrics-box-game-info" 
                title="game-metrics-title"
                metricClass = "metrics-box-game-info"
                linkTo = "GameMetrics"/>      
              </div>
        </div>
    )
}

export default AllMetrics;

