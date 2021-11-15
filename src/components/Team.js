import nick from "../images/Nick-team.png";
import dom from "../images/Dom-team.png";
import bob from "../images/Bob-team.png";
import justin from "../images/Justin-team.png"
import jake from "../images/Jake-team.png"

import bear from "../images/petzImages/bear.png";
import cactus from "../images/petzImages/cactus.png";
import psychicCow from "../images/petzImages/psychicCow.png";
import bulb from "../images/petzImages/bulb.png"
import combatSheep from "../images/petzImages/combatSheep.png"

const Team = () => { 
    return (
        <div className = "team-info-background">
        
            <div className = "game-info-wrapper team-wrapper">
                <h1>You, Yeah You!</h1>
                <p className="intro-text">
                    We are one big community and your feedback is important to us.
                    So far, you have all participated in giving feedback and making us 100% better already. 
                    We would like to thank you and we truly appreciate your patience and help! 
                    Let’s build and grow this piece of Cardano together.
                </p>

                <div className = "team-member-container">
                   <img class="background-team-pet" id="background-team-pet-one" src={bear}/>
                    <div className = "team-member-image">
                        <img src ={nick} alt="Team-member" />
                    </div>
                    <div className ="team-member-text">
                        <h2>Nick (Hemsketsmelvet)</h2>
                        <p>Hey! I'm Hemsketsmelvet formally known as Nick. I have recently (2018-2019) graduated Magna Cum Laude 
                           in Mechanical Engineering at the University of Ottawa. After graduating, I ventured in entrepreneurship 
                           and finally find myself here with CryptoPetz. I am the "Grand Master Assembler" of all art, marketing 
                           lead and business development at CryptoPetz. I am super excited about this project and I want to take on 
                           Ethereum's Axie Infinity!</p>
                    </div>
                </div>
                <div className = "team-member-container">
                <img class="background-team-pet" id="background-team-pet-two" src={cactus}/>
                <div className ="team-member-text">
                        <h2>Dom  (Domenhagen)</h2>
                        <p>Salut! I'm Dom, a French-Canadian engineer. My technical background is in embedded systems and 
                           firmware engineering. I've been lucky enough to travel across North America, Europe and Asia 
                           for work, which has allowed me to witness first-hand how to bring a project from prototype to MP, 
                           from dream to reality. In my spare time, I enjoy biking, exploring the outdoors with my floofy 
                           pupper, and most of all, learning new skills. Currently a CryptoPetz dev and Plutus Pioneer, 
                           and looking forward to everything we are going to build with, and for, this amazing community.</p>
                    </div>
                    <div className = "team-member-image">
                        <img src ={dom} alt="Team-member" />
                    </div>
                    
                </div>
                <div className = "team-member-container">
                <img class="background-team-pet" id="background-team-pet-three" src={combatSheep}/>
                    <div className = "team-member-image">
                        <img src ={bob} alt="Team-member"  />
                    </div>
                    <div className ="team-member-text">
                        <h2>Bob (MajikCat)</h2>
                        <p>I studied Creative Non-Fiction Writing in College and for about a decade I worked in Customer 
                            Care and Event Building in Chicago. For the last year I've been working in the Cardano 
                            Community, often supporting projects through Discord Moderation and Community Building. 
                            In my free time I play Role Playing Games like Dungeons and Dragons and homebrew Worlds, 
                            Histories, and Backstories; I'm overjoyed to serve as Story Designer on the CryptoPetz Team.</p>
                    </div>
                </div>
                <div className = "team-member-container">
                <img class="background-team-pet" id="background-team-pet-four" src={psychicCow}/>
                    <div className ="team-member-text">
                        <h2>Justin (theVaporMonkey)</h2>
                        <p>By day, I work for one of the three largest tech companies in the world. By night, 
                           I am the Cardano stake pool operator of Crayon Eater Hooah Pool [Hooah] and co-host of the 
                           Pump Your Coin YouTube channel. My degree is in Marketing, but I have been around the IT block 
                           and now I have the desire to be part of history with this team on the blockchain. 
                           I will serve as an advisor and agile coach for game and website development. 
                           I am supremely passionate about the future of the NFT gaming space and proud of what we will 
                           be bringing to and with you all. I am also a proud disabled vet, serving 9 years in both Iraq 
                           and Afghanistan as Satellite Communications Team Chief and love to give back to that community.</p>
                    </div>
                    <div className = "team-member-image">
                        <img src ={justin} alt="Team-member" />
                    </div>
                </div>
                <div className = "team-member-container team-last-container">
                <img class="background-team-pet" id="background-team-pet-five" src={bulb}/>
                <div className = "team-member-image ">
                        <img src ={jake} alt="Team-member" />
                    </div>
                    <div className ="team-member-text">
                        <h2>Jake (jshear)</h2>
                        <p>Howdy, I'm Jake. I found my passion as a kid when I started programming iOS apps and Minecraft mods.
                           Fast forward 10 years and I was graduating Summa Cum Laude in Computer Science and Engineering 
                           from the University of Connecticut. Since then I've spent a couple years in the traditional FinTech 
                           space as a software engineer while simultaneously getting familiar with various crypto ecosystems. 
                           After months of eagerly waiting for Cardano to make smart contract development possible, 
                           I was honored to be a part of the Plutus Pioneers First Cohort. 
                           I'll be working as one of the lead developers across the CryptoPetz tech stack, 
                           from website development to Plutus smart contracts.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team