import cloud from "..//images/cloud.png";
import {useState, useEffect} from "react";

const Updates = ({ allPetzArray }) => { 

    const [offset, setOffset] = useState(); 

    const handleScroll = () => setOffset(window.pageYOffset); 

    window.addEventListener('scroll', handleScroll); 

    return (
        <div className = "updates-background">
             <div>
                <img id="cloud-updates" src={cloud} style={{left: `${0 + offset * 0.02 + "%"}`}}/>
            </div>
            <div className = "update-page-wrapper"> 
                <div className ="update-container">
                    <img className ="update-petz-image" src={allPetzArray[1]}/>
                    <h2>Update 23/09/21</h2>
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
                <div className ="update-container">
                    <img className ="update-petz-image" src={allPetzArray[6]}/>
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
                    tools for you to voice your feedback!

                    <br/><br/>
                    Onwards and Upwards
                    </p>
                    <div className="list-updates-container">
                        <div className="list-update">
                        <h3>Today's Update</h3>
                            <ul>
                                <li>Now Hiring (Indie Game Developer and Front End Developer) Send Resume to <span className="emph">info@cryptopetz.io</span></li>
                                <li>Roadmap Graphic V2</li>
                                <li>Main Menu Soundtrack - <a href="https://www.youtube.com/watch?v=LjilPxj4Z4c" target="_blank"> Click here</a></li>
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
                <div className ="update-container">
                    <img className ="update-petz-image" src={allPetzArray[8]}/>
                    <h2>Update 26/08/21</h2>
                    <p>
                    Hello Fellow Explorers! <br/><br/>
                    
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
                                <li>Adawgs Petz Collection Page <a href="https://cryptopetz.info/" target="_blank">Click here</a></li>
                                <li>Team and Update Page on Website</li>
                                <li>Weaknesses and Strengths Charts- Under Metrics)</li>
                                <li>Justin (Project Timeline Manager) and Jake (Dev) - Onboarded</li>
                                <li>Petz Token Builder Teaser Image</li>
                                <li>First Music Samples received</li>
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
                <div className ="update-container">
                    <img className ="update-petz-image" src={allPetzArray[9]}/>
                    <h2>Update 08/12/21</h2>
                    <p>
                    Hello Fellow Explorers! <br/><br/>
            
                    We are coming to the end of the Third Week of our Epoch 1 Crypto Petz Sale and we just passed 55% 
                    sold!  Some of the Unique Petz sold in Epoch 1 will have the ability to evolve through a leveling 
                    process starting at the beginning of Epoch 2, so be sure to pick up your Epoch 1 Petz because 
                    they won't be released again! As the project and our community grows, we would like to stop 
                    and take a moment to thank those that have been active in the Petz Community!  
                    Thank you for your support and participation in discussions regarding the future of Crypto Petz, 
                    your views are held with very high regard by our team.  
                    With that said, we will be creating a Role in our Discord called Origin Explorer, 
                    those that have achieved level 2+ within the server will be Granted the Role. 
                    We will announce further details on the Origin Explorer Role in our next update on 8/26. <br/><br/>

                    As we push forward we will strive for consistent communication with you and, 
                    with that in mind, have committed ourselves to a Bi-Weekly Project Update, of which this is the 
                    first.  Further, in an effort to accommodate the adoption of our project, 
                    we had developed a PetzBot for the Discord, armed with the ability to Create Sales Listings, 
                    Search for, and Display Petz that have been minted by Petz ID.  Along with the Bot, 
                    we will be launching a Collection Website where you can view all minted Crypto Petz, 
                    their properties and attributes, as well as filter them.  
                    Shout out to Cardano Community Veteran, Adawg also @Laslx, for developing our new web tools,  
                    the PetzBot will go live today and the Collection Website will become available in the coming days.

                    <br/><br/>
                    We are honored to work you all as we build the future of gaming on Cardano.

                    <br/><br/>
                    Onwards and Upwards
                    </p>
                    <div className="list-updates-container">
                        <div className="list-update">
                        <h3>Today's Update</h3>
                            <ul>
                                <li>Bi-Weekly Project Update</li>
                                <li>Discord Origin Explorer Role Announcement</li>
                                <li>Collection Website and Discord Bot</li>
                            </ul>
                        </div>
                        <div className="list-update">
                        <h3>Current Tasks</h3>
                            <ul>
                                <li>Now Hiring (Indie Game Developer / Cardano Ecosystem Specialist / Community Manager) Send Resume to <span className="emph">info@cryptopetz.io</span></li>
                                <li>Update Roadmap</li>
                                <li>Team Page and Roadmap/Update Page on Website</li>
                                <li>Animation Style and Sound Design Samples</li>
                                <li>Name Epoch 1 CryptoPetz</li>
                                <li>Alpha Tournament Design and Implementation</li>
                                <li>Search-Petz Channel</li>
                            </ul>
                        </div> 
                        <div className="list-update">
                        <h3>On-Going Research</h3>  
                            <ul>
                                <li>Catalyst Funding</li>
                                <li>Token Mechanics</li>
                                <li>Play to Earn Mechanics</li>
                                <li>Game Overview (3 modes - Tournament, Expedition, Mini-Games)</li>
                                <li>Polymerization</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Updates