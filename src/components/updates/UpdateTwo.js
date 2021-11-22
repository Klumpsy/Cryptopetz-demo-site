const UpdateComponentTwo = ({allPetzArray}) => { 
    return (
        <div className ="update-container">
           <img alt="pet" className ="update-petz-image" src={allPetzArray[8]}/>
                <h2>Update 26/08/21</h2>
                <p> Hello Fellow Explorers! <br/><br/>
                    
                We are happy to be writing you all regarding our updates the last few weeks. 
                We have continued to work with Adawg developing our Web Tools, and our Collection Website is 
                officially live!  We now have the ability to search Petz and Filter them by 
                attributes/characteristics! Along those lines, you may have seen the new tabs on CryptoPetz.io;
                Our Team and Update tabs are available!  Our team is growing, adding Justin and Jake to the Crypto Petz Crew.  
                Justin brings foresight and goal setting to our team, allowing us to build out our Roadmap with achievable deadlines. 
                Jake is a seasoned programmer and Graduate of the Plutus Pioneer Program's First Cohort, 
                bringing Cardano Blockchain expertise along with years of development experience. <br/><br/>

                Along with our team, the Community has been growing as well!  
                We are about to celebrate 3000 Followers on Twitter and 1000 Discord Server Members! 
                With this in mind, we'll be expanding our Origin Explorer Role on our Discord, those that have achieved Level 
                3+ will be added to the role. This is the final addition to the Epoch 1 Origin Explorer Role. 
                Coupled with this, we are adding a channel specific to our Origin Explorer Role that will serve as a 
                private showcase to our early supporters, filled with items that inspires the teams project design! <br/><br/>

                More on the game side, we have been developing a Petz Builder that utilizes the Tokens to show how the 
                Petz will be enhanced by them, this tool will drop on our next update and will help us hone in the 
                mechanics of the tokens through community testing, dropping new versions as mechanics and gameplay 
                are developed based on your feedback!  We expect for the Token Mechanics Finalization process to take 
                time and revisions.  Knowing that the Battle or Tournament mode will rely on the Token Mechanics, 
                and knowing that we plan to release Epoch 2 a bit before or in line with our Battle Mode we can say 
                with certainty that the community will have seen consistent Game Developments before Epoch 2 launches. 
                Look forward to the New Road Map in our Next update on 09/09!

                <br/><br/>
                Onwards and Upwards
                </p>
                <div className="list-updates-container">
                    <div className="list-update">
                    <h3>Today's Update</h3>
                           <ul>
                            <li>Origin Explorer Discord Role - Update</li>
                            <li>Adawgs Petz Collection Page <a href="https://cryptopetz.info/" target="_blank" rel="noreferrer">Click here</a></li>
                            <li>Team and Update Page on Website</li>
                            <li>Weaknesses and Strengths Charts- Under Metrics)</li>
                            <li>Justin (Project Timeline Manager) and Jake (Dev) - Onboarded</li>
                            <li>Petz Token Builder Teaser Image</li>
                            </ul>
                    </div>
                    <div className="list-update">
                    <h3>Current Tasks</h3>
                        <ul>
                            <li>Now Hiring (Indie Game Developer and Front End Developer) Send Resume to <span className="emph">info@cryptopetz.io</span></li>
                            <li>Epoch 1 Names and Descriptions</li>
                            <li>Rarity Calculator and Recently Sold Website Integration</li>
                            <li>Animated Introduction and Story Line Tease</li>
                            <li>Petz Sprite Artwork for Petz</li>
                            <li>Token Mechanics</li>
                            <li>Catalyst Proposal Framework</li>
                        </ul>
                    </div> 
                    <div className="list-update">
                    <h3>On-Going Research</h3>  
                        <ul>
                            <li>Catalyst Fund</li>
                            <li>Crypto Petz Stakepool</li>
                            <li>Epoch 1 CryptoPetz (Evolutions and Renting)</li>
                            <li>Polymerization</li>
                        </ul>
                    </div>
            </div>
    </div>
    )
}

export default UpdateComponentTwo



