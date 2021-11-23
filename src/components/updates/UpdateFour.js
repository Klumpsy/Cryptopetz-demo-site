

const UpdateComponent = ({allPetzArray}) => { 
    return (
        <div className ="update-container">
            <img alt="pet" className ="update-petz-image" src={allPetzArray[1]}/>
            <h2>Update September 9th 2021</h2>
            <p>
            Hello Fellow Explorers! <br/><br/>
                    
            It's time for another bi-weekly update!  It may have been a wild few weeks in the Market, 
            but it's been steady on forward for the Crypto Petz Team.  Most recently, the Crypto Petz Cardano Stake Pool 
            [PETZ] was announced and as of today, with help from our community, we have 380K+ ADA staked in our pool!  
            Thank you for helping to support Cardano's Decentralization! <br/><br/>
                    
            The Petz Pool plays a larger part in-game as well, and to that point, we have released a Story Line 
            Teaser with some concept art focused around the pool's in-game equivalent, The Egg Shard Laboratory! 
            The Egg Shards Research and Laboratory Development 
            are on-going, we will continue to release further updates on the Egg Shard uses.  
            You can see the concept art, story teaser, and more <span className ="emph">@ cryptopetz.io/stake-pool</span> <br/><br/>

            Also today, the Team Builder will receive it's first bug fix update and, to begin receiving specific 
            feedback on it, we have launched the Team Builder Improvement Channel!  We are excited to begin our 
            Community Game Development with you all, and will be going over the Final Draft of our Token Mechanics 
            this next week so we are all ready for Team Builder Wallet Integration in October!  
            From that point forward we can work together to hone the battle mechanics that will be utilized 
            in the Alpha Battle Simulator later on this year!

            <br/><br/>
            Onwards and Upwards
            </p>
            <div className="list-updates-container">
                <div className="list-update">
                    <h3>Today's Update</h3>
                    <ul>
                        <li>Now Hiring (Indie Game Developer and Front End Developer) Send Resume to info@cryptopetz.io</li>
                        <li>Crypto Petz Stake Pool @ cryptopetz.io/stake-pool</li>
                        <li>Egg Shard Laboratory Story Line Teaser</li>
                        <li>Egg Shard Laboratory Concept Art</li>
                        <li>Epoch 1 (round 2) of Names Voting @ cryptopetz.info/voting</li>
                        <li>Team Builder First Bug Update</li>
                        <li>Team Builder Improvement Channel added to Discord</li>
                    </ul>
                </div>
            <div className="list-update">
                <h3>Current Tasks</h3>
                    <ul>
                        <li>Token Mechanics (Final Draft)</li>
                        <li>In-House CNFT (Vending Machine) Sales Distribution</li>
                        <li>Token Sale Date Confirmation</li>
                        <li>Team Builder Wallet Integration</li>
                        <li>Type Emblems Art</li>
                        <li>Petz Sprite Artwork for TeamBuilder</li>
                        <li>Animated Introduction and Story Line</li>
                    </ul>
            </div> 
            <div className="list-update">
                <h3>On-Going Research</h3>  
                     <ul>
                        <li>Egg Shell Research</li>
                        <li>Evolution</li>
                        <li>Polymerization</li>
                        <li>Alpha Battle Simulator</li>
                        <li>Catalyst Funding</li>
                    </ul>
            </div>
        </div>
    </div>
    )
}

export default UpdateComponent