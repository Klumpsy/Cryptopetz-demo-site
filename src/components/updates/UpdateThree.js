
const UpdateComponent = ({allPetzArray}) => { 
    return (
        <div className ="update-container">
            <img alt="pet" className ="update-petz-image" src={allPetzArray[6]}/>
            <h2>Update 09/09/21</h2>
            <p>
            Hello Fellow Explorers! <br/><br/>
                    
            These last few weeks have been Very Formative for us, the New Additions to the team have already 
            shown themselves to be Vital assets to the Project. We have had our Meetings and Created our 
            "Game-plan" through the end of the year and beyond.  And with this, we will launch our Updated 
            Roadmap V2; this will help guide us through the end of the year, 
            at which point we will have Completed Attribute and Epoch 1 Ability and Special Attack Tokens, 
            we will have a Crypto Petz Cardano Stake Pool, a Completed V3 Teambuilder, 
            Epoch 2 Petz and Token Sales, and an Alpha Battle system being sent through the Community Feedback 
            process.  We will continue to Hire, and develop as a team through the coming year, 
            and you can Expect another detailed Roadmap V3 sometime in December. <br/><br/>

            Focusing more on the Present, Today we have some new features to announce, First of which, 
            Our Team Builder has become available on our web page!  
            V1 is lacking the values associated with the Tokens until we finalize those in the coming weeks, 
            however you'll see the format and can start to develop feedback.  We plan for consistent Version 
            upgrades as you can see in our new Roadmap and the graphics will continue to improve throughout. 
            Next, Round 1 of Epoch 1 Names Voting has come along, we've developed a page for you to vote if you 
            like the name!  If you don't like the name, and not many have given a thumbs up, 
            we'll take it back to the drawing board. <br/><br/>

            Within our community we have continued to build and add depth to our Discord: 
            our Origin Explorer chat has been created and made available to those with that role,
            again thank you for your support.  Also, we are creating currently a Website Bug channel on our Discord 
            to report any issues there, as well as creating a Team Builder Bug channel when Version 1.1 becomes
            available in a week or so.  
            We are excited to begin the Game Development process with you all and will continue to create 
            tools for you to voice your feedback
            <br/><br/>
            Onwards and Upwards
            </p>
            <div className="list-updates-container">
            <div className="list-update">
                <h3>Today's Update</h3>
                    <ul>
                        <li>Now Hiring (Indie Game Developer and Front End Developer) Send Resume to <span className="emph">info@cryptopetz.io</span></li>
                        <li>Roadmap Graphic V2</li>
                        <li>Main Menu Soundtrack - <a href="https://www.youtube.com/watch?v=LjilPxj4Z4c" target="_blank" rel="noreferrer"> Click here</a></li>
                        <li>Team Builder V1 - https://cryptopetz.info/game/play (We will integrate this into the website in the coming days)</li>
                        <li>Rarity Calculator and Recently Sold Website Integration</li>
                        <li>Epoch 1 Names Voting page on Website</li>
                        <li>Bug Channel for Website on Discord</li>
                    </ul>
                </div>
                <div className="list-update">
                <h3>Current Tasks</h3>
                    <ul>
                        <li>Crypto Petz Stake Pool</li>
                        <li>Petz Sprite Artwork for Team Builder</li>
                        <li>Token Mechanic Finalization</li>
                        <li>Bug Channel for Team Builder</li>
                        <li>Catalyst Proposal Framework</li>
                        <li>Animated Introduction and Story Line Tease</li>
                    </ul>
                </div> 
                <div className="list-update">
                <h3>On-Going Research</h3>  
                    <ul>
                        <li>Epoch 1 CryptoPetz Evolutions</li>
                        <li>Egg Shell Research</li>
                        <li>Catalyst Fund</li>
                        <li>Alpha Battle Simulator</li>
                        <li>Polymerization</li>
                    </ul>
                </div>
        </div>
    </div>
    )
}

export default UpdateComponent
