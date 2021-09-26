import petzBuilder from "../images/petzbuilder.png";

const StakePool = () => { 
    return (
        <div className="stake-pool-background">
            <div className="stake-pool-wrapper">
                <div className ="stake-pool-info-box">
                    <h2>PETZ Stake Pool</h2>
                    <p>
                    The CryptoPetz team is super excited to announce our PETZ stake pool! We are committed to giving our 
                    delegators the best ADA and in-game rewards possible.<br/><br/>

                    We are actively working on solidifying the tokenomics for the in-game rewards and want to make 
                    sure a feasible method of distribution is in place before enabling these additional rewards. 
                    We also want to make sure that all community members have enough time to delegate to the PETZ pool 
                    before we enable in-game rewards. <br/><br/>

                    The stake pool rewards for in-game use will enable a variety of different actions throughout the game, 
                    therefore, they are very useful. Early delegators to the PETZ pool will have a substantial head start 
                    when game actions come to fruition.
                    </p>
                    <div className ="stake-pool-metrics">
                        <h2>PETZ Stake Pool Metrics</h2>
                        <a href="https://PoolTool.io/PetzPool" target="_blank">PoolTool.io/PetzPool</a>
                        <a href="https://AdaPool.org/PetzPool" target="_blank">AdaPool.org/PetzPool</a>
                        <a href="https://Pool.pm/PetzPool" target="_blank">Pool.pm/PetzPool</a>
                    </div>
                </div>

                <div className ="stake-pool-info-box staking-percentage">
                    <div>
                        <h2>Why 4.5%?</h2>
                        <p>
                        While we appreciate everyone who delegates to help fund the project,
                        we aren't expecting anyone to do it simply out of the goodness of their heart!
                        While we can't predict the future value of the in-game rewards (coming soon),
                        we hope you agree that they make up for having a slightly higher percentage on ADA rewards
                        than some other pools.
                        <br/><br/>
                        The proceeds of the stake pool will be directly linked to the creation of the NFT Game
                        currently under development. As you all know, creating a game takes a lot of time,
                        determination and it certainly doesn’t come cheap.
                        <br/><br/>
                        So far we have our Petz builder app that we are continuously modifying based on community feedback.
                        </p>
                    </div>
                    <div className ="stake-pool-metrics">
                        <img src={petzBuilder}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StakePool;