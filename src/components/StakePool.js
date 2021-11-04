import petzBuilder from "../images/petzbuilder.png";
import {React, useEffect, useState} from "react"; 
import petImage from "../images/petzImages/light.png";
import petImage1 from "../images/petzImages/chick.png";
import petImage2 from "../images/petzImages/bull.png";

//Eggshard distribution table 
import EggShardRewards from "./chartData/StakePoolEggShardRewards";

const StakePool = ({mode}) => { 

    const [pool, setPool] = useState([]); 

    useEffect(() => { 
        fetch("https://js.adapools.org/pools/dc6f409d5bd30a59b7b1f0f7969d83b01758e55d3b4e5b7b487532b8/summary.json")
        .then(res => {
            if(!res.ok) { 
                throw Error("Could not get the data from the API")
            }
            return res.json()
        })
        .then(data => {
            setPool(data.data); 
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
                        <div>
                            <span className="api-items-indicator pool-id">Pool Id:</span>
                            <p className="pool-string">{pool.pool_id}</p>
                            <img style = {{width: "30%"}}src={petImage1}/>
                        </div>
                    </div>
                    <div className ="petz-pool-api-info">
                        <h2>Pool Metrics</h2>
                        <div className="api-items">
                            <div><span className="api-items-indicator">Name:</span><span> {pool.db_name}</span></div>
                            <div><span className="api-items-indicator">Ticker:</span><span> {pool.ticker_orig}</span></div>
                            <div><span className="api-items-indicator">Rank:</span><span> {pool.rank}</span></div>
                            <div><span className="api-items-indicator">Active Stake:</span><span> {String(pool.active_stake).slice(0,3)+"K"} ₳</span></div>
                            <div><span className="api-items-indicator">Live Stake:</span><span> {String(pool.total_stake).slice(0,3)+"K"} ₳</span></div>
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
                        <img src={petzBuilder} alt="petzbuilder"/>
                    </div>
                </div>

                <div className ="stake-pool-info-box">
                    <div>
                        <h2>Egg Shards - CryptoPetz In-Game Currency</h2>
                        <p>
                        Egg Shards will be the official currency of the entire CryptoPetz in-game economy. 
                        While the game will include other resources introduced over time, 
                        Egg Shards will be at the base of every in-game purchase and action, 
                        including things like Petz polymerization and evolution. 
                        </p>
                        <p>
                        Long story short, if you plan on playing the game or participating in the community, 
                        you'll want Egg Shards! 
                        </p>
                        <br/>
                        <h2>Tokenomics</h2>
                        <p>
                        Since Egg Shards will be the underpinning of the entire CryptoPetz economy, 
                        we do not want to commit to a maximum supply before we are able to get a better idea 
                        of what a finalized, self-sufficient economy looks like in the game. So to be clear, 
                        the initial tokenomics below are subject to change. They are not final. 
                        In the end, the maximum supply may be higher than the maximum supply stated in the 
                        initial tokenomics plan. 
                        </p>
                        <br/><br/>
                        <ul style ={{marginLeft: "15px"}}>
                            <li>Maximum supply (tentative): 3 billion </li>
                            <li>Stake pool airdrop for current delegators: 10 million</li>
                            <li>Stake pool distribution over 1 year (details below): 490 million </li>
                            <li>Team distribution: 10% (300 million) </li>
                            <li>Future community distribution (in-game rewards, additional stake pool distribution, other distribution mechanisms): 2.2 billion</li>
                        </ul>
                        <br/>
                        <p>
                        This distribution allows us to provide a significant portion of the total Egg Shard supply 
                        (~17%) to the delegators that support our stake pool during the initial development of the game. 
                        The remaining 2.2 billion will not be minted yet, but the team will mint them when needed for 
                        future distribution. While there may be several different methods of distribution, 
                        the primary one that we are exploring (other than the stake pool) is 
                        rewards for winning battles in-game. This will potentially be the first play-to-earn aspect of the game, 
                        and will allow us to stick to our mission of providing the Egg Shards to the community members 
                        that support the project in the early stages. 
                        </p>
                        <img style = {{width: "30%"}}src={petImage}/>
                        <p>
                        As mentioned earlier, although unlikely, the maximum supply may need to be increased 
                        down the road if it would make the in-game economy more likely to thrive. 
                        With that said, there are a few guarantees that we would like to make as a 
                        team to ensure a solid foundation of trust in Egg Shards as an asset: 
                        </p>
                        <br/>
                        <ul style ={{marginLeft: "15px"}}>
                            <li>Only 10% of the maximum supply will ever be minted for the team.</li>
                            <li>The maximum supply will never be increased without extensive community 
                                discussion and feedback, as well as full, detailed transparency from the team. 
                                If we feel the need to increase maximum supply, we will make our motives crystal 
                                clear, and will not do so unless the community agrees it is the right approach.
                            </li>
                            <li>Distributions will never be subjective or biased. Whenever the team decides 
                                to distribute additional Egg Shards, it will always be based on some fair or 
                                random event (e.g. Stake Pool rewards, in-game Battle rewards, random giveaways, 
                                NFT conference giveaways). 
                            </li>
                            <li>The community will be informed about any new Egg Shard distribution before it 
                                happens. Even if it does not relate to maximum supply, the community will know 
                                exactly how we are utilizing the Egg Shards to help grow and foster the community 
                                and the game. 
                            </li>
                            <li>The team will never sell the Egg Shards allocated for future community distribution. 
                                In other words, the 2.2 billion Egg Shards reserved for the community will always be 
                                distributed for free through some fair or random approach – they will never be sold for 
                                profit to the team. 
                            </li>
                            <li>Once the team is at a point where the ideal maximum supply is clear, 
                                we will communicate with the community and utilize smart contracts for a 
                                smooth transition from the current Egg Shards to a new Egg Shard asset – 
                                in other words, the team will give up control of minting Egg Shards once the 
                                economy is stable.  
                            </li>
                        </ul>
                        <br/>
                        <h2>Stake Pool Distribution </h2>
                        <p>
                            Now that we got all of that boring tokenomics talk out of the way, time for rewards! 
                        </p>
                        <img style = {{width: "30%"}}src={petImage2}/>
                        <p>
                            First, let's talk about how rewards will be distributed. Whenever a wallet is eligible for 
                            an airdrop reward, they will be able to claim that reward by sending a claim transaction 
                            to an address that the team will specify. The transaction will go something like this: 
                            You send 3 ADA to address ABC, and then a few seconds later you receive ~2.8 ADA with 
                            all of the Egg Shards available to your address (assuming 0.2 ADA transaction fee). 
                            Essentially, all you need to pay is the transaction fee, and you can claim all of the 
                            Egg Shards for your wallet. Keep in mind that Egg Shard rewards will stack, so you do not 
                            need to claim every epoch! You can wait as long as you like between claiming to minimize your
                            fees – the Egg Shards aren't going anywhere!  
                        </p>
                        <br/>
                        <p>
                            Now, let's go over the rewards for current delegators! 
                            All Cardano wallets that have an active delegation to PETZ pool at the time of this 
                            announcement will be eligible for an airdrop proportional to the amount of ADA they 
                            have staked! Keep in mind the definition of "active delegation" is based on Cardano's 
                            staking model, meaning the staking transaction must have taken place 2 epochs before 
                            the current epoch. It is currently Epoch 297, so any delegators that started staking 
                            with us before the start of Epoch 296 are eligible). The total amount distributed will 
                            be the 10 million Egg Shards mentioned in the tokenomics above. There will be a future 
                            announcement when this airdrop is ready to be claimed. It will likely be around the 
                            time that future Stake Pool Rewards start being distributed, in mid-November.   
                        </p>
                        <br/>
                        <p>
                            Lastly, here are the details on all future Stake Pool distribution rewards! 
                            These rewards have no effect on the ADA rewards for the stake pool – you will receive ADA 
                            in addition to these rewards. As with all other Stake Pools, 
                            you will only receive ADA when the pool mints a block. However, 
                            you will receive Egg Shards regardless!    
                        </p>
                        <br/>
                        <p>
                            The total initial Stake Pool Egg Shard supply is 490 million. 
                            This supply will last 73 Epochs (1 year). The distribution for each wallet will 
                            be proportional to the stake a wallet has in the pool. The total distribution for 
                            each Epoch in Reward Epochs 1-56 is a percentage of the remaining Stake Pool supply. 
                            The percentage for any given Reward Epoch is 1.5% plus 0.1% for each Reward Epoch that 
                            has passed since rewards have started. For example, Reward Epoch 1 distributes 1.6% of 
                            the remaining supply, Reward Epoch 2 distributes 1.7% of the remaining supply, 
                            Reward Epoch 3 distributes 1.8% of the remaining supply, and so on. 
                            For Reward Epochs 57-73, the total distribution amounts were chosen for a clean 
                            transition away from Egg Shard rewards, ensuring that the entire stake pool supply 
                            gets distributed.    
                        </p>
                        <br/>
                        <p>
                            Reward snapshots and calculations follow the same rewards model set by Cardano's ADA 
                            taking rewards. Suppose you start delegating during Epoch 0. 
                            Your stake is not considered active in our pool until Epoch 2. 
                            Your rewards for Epoch 2 are calculated during Epoch 3, and your 
                            rewards for Epoch 2 are made available at the start of Epoch 4. 
                            In other words, snapshots for rewards will occur at the start of each Epoch, 
                            and rewards will be available to claim at the end of the following Epoch. 
                            Your stake must be active to be included in the snapshot.     
                        </p>
                        <br/>
                        <p>
                            The first Reward Epoch will be Epoch 303, which starts on November 16, 
                            2021 @ 21:44:51 UTC. In order to be included in the first reward snapshot, 
                            your stake must be active for Epoch 303, meaning you must start the delegation to 
                            the PETZ pool BEFORE the start of Epoch 2 (November 11, 2021 @ 21:44:51 UTC). 
                            The first rewards, for Epoch 303, will be made available at the start of Epoch 305 
                            (November 26, 2021 @ 21:44:51 UTC).      
                        </p>
                    </div>
                </div>

                <div className ="stake-pool-info-box eggshards-distribution-container">
                    <div>
                        <h2>Tokenomics Graph</h2>
                        <EggShardRewards mode = {mode}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StakePool;