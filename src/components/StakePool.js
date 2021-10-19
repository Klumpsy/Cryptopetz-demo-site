import petzBuilder from "../images/petzbuilder.png";
import {React, useEffect, useState} from "react"; 
import axios from "axios";

const StakePool = () => { 

    const [pool, setPool] = useState([]); 

    useEffect(() => { 
        axios.get("https://js.adapools.org/pools/dc6f409d5bd30a59b7b1f0f7969d83b01758e55d3b4e5b7b487532b8/summary.json")
        .then(res => {
            setPool(res.data.data); 
        })
        .catch(err => { 
            console.log(err)
        });
    }, []);
   
    return (
        <div className="stake-pool-background">
            <div className="stake-pool-wrapper">
                <div className ="stake-pool-info-box">
                    <div>
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
                        <div><span className="api-items-indicator pool-id">Pool Id:</span><span> { pool.pool_id}</span></div>
                    </div>
                    <div className ="petz-pool-api-info">
                        <h2>Pool Metrics</h2>
                        <div className="api-items">
                            <div><span className="api-items-indicator">Name:</span><span> {pool.db_name}</span></div>
                            <div><span className="api-items-indicator">Ticker:</span><span> {pool.ticker_orig}</span></div>
                            <div><span className="api-items-indicator">Rank:</span><span> {pool.rank}</span></div>
                            <div><span className="api-items-indicator">Active Stake:</span><span> {pool.active_stake} ₳</span></div>
                            <div><span className="api-items-indicator">Live Stake:</span><span> {pool.total_stake} ₳</span></div>
                            <div><span className="api-items-indicator">Delegators:</span><span> {pool.delegators}</span></div>
                            <div><span className="api-items-indicator">Margin:</span><span> {pool.tax_ratio * 100} %</span></div>
                            <div><span className="api-items-indicator">Delegators:</span><span> {pool.delegators}</span></div>
                            <div><span className="api-items-indicator">Estimated blocks:</span><span> {pool.blocks_estimated} blocks</span></div>
                            <div><span className="api-items-indicator">Last Epoch Rewards:</span><span> {pool.rewards_epoch}</span></div>
                            <div>
                            <span className="api-items-indicator">Saturation:</span>
                            <p>{Math.round(pool.saturated * 100)}%</p>
                            <progress max ="100" value={Math.round(pool.saturated * 100)}></progress>
                        </div>
                        </div>
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