const UpdateComponent = ({allPetzArray}) => { 
    return (
    <div className ="update-container">
        <img alt="pet" className ="update-petz-image" src={allPetzArray[5]}/>
        <h2>Update Oktober 21th 2021</h2>
        <p>
        Hello Fellow Explorers! <br/><br/>
            
        We'd like to start by thanking you all for participating in our current Token Sale!
        Our Attribute Tokens are still available at <a href="https://cryptopetz.info/tokensale" target="_blank" style={{color:"rgba(119, 184, 245, 0.9)"}}><br/><br/>  https://cryptopetz.info/tokensale </a> <br/><br/> 
        but our 5K Ability Tokens 
        have already Sold-Out!  While our in-house Vending Machine was providing a smooth experience distributing CNFT's 
        without issue, we on the team were listening to our community in discord.  Hearing the call for "More Power!" rise 
        upon the wind, we went to work creating our first rebalance, "Power Surge", implementing the rebalance immediately, 
        before the Ability Tokens had Sold-Out!  This morning, those that held an under powered Ability Token that was chosen 
        for rebalancing  in the Power Surge received, in their wallet, a rebalanced version of that same Ability Token! 
        This marks the completion of our first ever Air-Drop to the Community!  You can find the list of Abilities 
        that were rebalanced in our Discord News Channel.  Following that thread, the Petz Type Compatibility Grid and the 
        Complete Petz Abilities List for the recent sale is available to download in excel format in our Discord Game_Info 
        Channel!  Compare the effects and targets of your Abilities and seek out the Tokens you need to boost your Petz Team 
        strategy.<br/><br/>

    
        Along side the sale, we have been courting two Game Development Companies to advance the pace of the project as we build
        our in-house team and resources.  We are nearly finished providing the rigorous documentation needed to 
        begin these sometimes lengthy processes, our patience in the beginning will be a necessity as these companies 
        may be finishing other projects.  These top notch companies bring tons of experience that will help bring the 
        CryptoPetz world to life! They will provide a foundational layer of game development that we as a community can 
        critique and build upon, both mechanically and visually.  As these companies are not yet signed, we will bring you 
        further updates as they come to us. 
        
        <br/><br/>
        Finally, Discord will be receiving a "Quality of Life" Upgrade in the coming days.
        The original Discord is feeling clunky, if you feel the Server is in need of something specific 
        please voice your suggestions in... well... our Discord.  Apologies in advance for any new verification 
        methods that may or may not happen haha!

        <br/><br/>
        Onwards and Upwards
        </p>
        <div className="list-updates-container">
            <div className="list-update">
            <h3>Today's Update</h3>
                <ul>
                    <li>Now Hiring (Unity Devs)Send Resume to <span className="emph">info@cryptopetz.io</span></li>
                    <li>Petz Type Compatibility (now available)</li>
                    <li>Ability Token List (now available)</li>
                    <li>Petz Type Compatibility (now available)</li>
                    <li>Egg Shard and Stake Pool Reward Details (10/22)</li>
                    <li>Team Builder Wallet Integration (10/28)</li>
                    <li>[Petz] Stake Pool 635K+ ADA Delegated</li>
                    <li>Attribute Token Sale (37% Sold)</li>
                    <li>Ability Tokens Sale (Sold Out)</li>
                    <li>Special Ability Token Air-Drop (completed)</li>
                </ul>
            </div>
            <div className="list-update">
            <h3>Current Tasks</h3>
                <ul>
                    <li>Game Development Company Timeline</li>
                    <li>Alpha Battle Simulator</li>
                    <li>Official Rules (Draft Doc)</li>
                    <li>Upcoming Marketing Event (NFT NYC event- Nov. 1-3)</li>
                    <li>Type Emblems Art</li>
                    <li>Petz Sprite Artwork</li>
                    <li>Animated Introduction and Story Line</li>
                </ul>
            </div> 
            <div className="list-update">
            <h3>On-Going Research</h3>  
                <ul>
                    <li>Petz Light/White Paper</li>
                    <li>Catalyst Funding</li>
                    <li>Polymerization</li>
                    <li>Evolution</li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default UpdateComponent

