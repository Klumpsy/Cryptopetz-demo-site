const UpdateComponentSeven = ({allPetzArray}) => { 
    return (
    <div className ="update-container">
        <img alt="pet" className ="update-petz-image" src={allPetzArray[11]}/>
        <h2>Update 04/11/21</h2>
        <p>
        Hello Fellow Explorers! <br/><br/>
            
        New York, New York, New York. Wow, what an amazing time we had in New York!
        The team was finally able to meet each other in person! 
        The team bonded, got to meet some amazing people, and, as I’m sure you’ve seen, 
        we got some great marketing and exposure at NFT.NYC. The goal of this marketing push was to 
        get people familiar with the CryptoPetz project and its future. 
        We discussed our PETZ stake pool and how it can generate our in-game rewards called Egg Shards 
        (used for in-game purchases) and ADA rewards. We’ve noticed that a lot of people don’t 
        know how to delegate their ADA to a stake pool, so we did our best to educate 
        them on the win-win scenario of staking with PETZ.
        <br/><br/>

        Furthermore, We were front and center in Times Square, NYC to show the world CryptoPetz, 
        but also to show the Ethereum community that Cardano NFTs mean business. 
        We were one of the only Cardano projects there and people loved what we brought to the table. 
        We met the IOHK team and are now followed by them! Whatever that means ;) 
        <br/><br/>

        Now for the project update. We’re working hard to move game development forward 
        and get the stake pool Egg Shards rewards to all of our awesome supporters. 
        We have continued talks with the 2 game development companies and things have 
        gotten off to an amazing start. We have also begun development on some eagerly 
        awaited on-chain interaction with your Petz… does someone hear eggs hatching in the distance?

        <br/>
        To finish things off, we have overhauled our discord server to be better than ever. 
        If ever you have any proposals about anything project related please post them in the feedback 
        category in our discord.
        <br/>
        Onwards and Upwards
        </p>
        <div className="list-updates-container">
            <div className="list-update">
            <h3>Today's Update</h3>
                <ul>
                    <li>Now Hiring (Unity Devs)Send Resume to <span className="emph">info@cryptopetz.io</span></li>
                    <li>[Petz] Stake Pool 675K+ ADA Delegated and Almost 100 delegators!</li>
                    <li>Attribute Token Sale (41% Sold)</li>
                    <li>Discord Revamp</li>
                    <li>Game Development Company Contract Discussions</li>
                    <li>Types Emblems Art</li>
                    <li>NFT.NYC Event Update</li>
                </ul>
            </div>
            <div className="list-update">
            <h3>Current Tasks</h3>
                <ul>
                    <li>Game Development Company Timeline</li>
                    <li>Game Development Company Preliminary Artwork</li>
                    <li>Alpha Battle Simulator</li>
                    <li>Wallet Integration</li>
                    <li>Marketing follow-ups from NFT.NYC</li>
                    <li>Official Rules (Draft Doc)</li>
                    <li>Petz Animation Artwork</li>
                    <li>Animated Introduction and Story Line</li>
                    <li>New CryptoPetz Website</li>
                    <li>Custom airdrop mechanics/blockchain interactions</li>
                    <li>Discord Bot Mitigation Implementation</li>
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

export default UpdateComponentSeven