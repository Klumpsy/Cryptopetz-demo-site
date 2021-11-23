const UpdateComponent = ({allPetzArray}) => { 
    return (
    <div className ="update-container">
        <img alt="pet" className ="update-petz-image" src={allPetzArray[0]}/>
        <h2>Update Oktober 7th 2021</h2>
        <p>
        Hello Fellow Explorers! <br/><br/>
            
        Hokey Smokes, last we wrote you, was the day before the Cardano Summit!  
        What a privilege it was to meet the Cardano Community and build deeper relationships 
        with those building in the ecosystem. Justin (theVaporMonkey) has written up a marketing update/summary for us. 
        Let's take a look!<br/><br/>

        "Hey everyone!  The organic growth you, our amazing community have already created has been phenomenal and 
        now we are ramping up our marketing.  In the last few weeks you saw CryptoPetz in Space, 
        and all around the World. CryptoPetz took over Space during the "CardanoSpace Alonzo Smart Contract Upload" 
        contest with over 21 CryptoPetz representing different user's Spaces and one lucky person in our 
        community even earning an Ultra Rare CryptoPetz! You may have seen Bob (MajikCat) and I hanging out 
        with the "Hosk" himself at the Cardano Summit in Laramie Wyoming. 
        Charles successfully rolled Bob's D20 dice, scoring a dirty 20, and later, 
        during my photo op, Charles said he'd be playing Crypto Petz!  
        You may have also seen Nick (Hemsketsmelvet) run across your screen if you attended the summit virtually, 
        as CryptoPetz was highlighted in NFT project series. The following day, onsite in Laramie, 
        Bob and I were interviewed by Ian at NFT NYC for their upcoming convention in New York. 
        More to follow on the potential for news there as well. In the last few days, Nick, Bob, and Jake (jshear) 
        wrapped up recording with the Cardano Convo and will be featured on both their podcast and YouTube channel, 
        so keep an eye out and an ear open for that to be posted in the coming week. 
        <a href="https://www.youtube.com/c/thecardanoconvo" target="_blank" style={{color:"rgba(119, 184, 245, 0.9)"}}><br/><br/>  https://www.youtube.com/c/thecardanoconvo </a> <br/><br/>
        We have a bunch of marketing efforts, 
        some planned and some in the works, that we think you will all really enjoy, including some potential collabs, 
        more YouTube interviews, and you may begin to see us in places you’d never expect."

        <br/><br/>
        Our Marketing push will create hype alongside the launch of our Attribute and Ability Tokens! 
        These will go on sale Oct. 14 - 5pm EST and we will drop the Mechanics to our Discord community a day early,
        don't miss out, join our Discord to join the fun!

        <br/><br/>
        Onwards and Upwards
        </p>
        <div className="list-updates-container">
            <div className="list-update">
            <h3>Today's Update</h3>
                <ul>
                    <li>Token Mechanics Drop - 10/13 - 5pm EST</li>
                    <li>Token Sales Date/Time Confirmed - 10/14 - 5pm EST</li>
                    <li>In-House CNFT Distribution Mechanism Completed (Vending Machine)</li>
                    <li>Marketing Update from Justin (theVaporMonkey)</li>
                    <li>Updated CryptoPetz.io Home-Page</li>
                    <li>[Petz] Stake Pool 605K+ ADA Delegated</li>
                    <li>Epoch 1 (round 3) Name Voting - Coming days</li>
                </ul>
            </div>
            <div className="list-update">
            <h3>Current Tasks</h3>
                <ul>
                    <li>Now Hiring (Indie Game Developer and Front End Developer) Send Resume to <span className="emph">info@cryptopetz.io</span></li>
                    <li>Team Builder Wallet Integration</li>
                    <li>Alpha Battle Simulator</li>
                    <li>Official Rules (Draft Doc)</li>
                    <li>Egg Shell Research</li>
                    <li>Stake Pool Reward Details</li>
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

