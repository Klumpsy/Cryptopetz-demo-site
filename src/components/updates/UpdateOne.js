const UpdateComponent = ({allPetzArray}) => { 
    return (
    <div className ="update-container">
        <img alt="pet" className ="update-petz-image" src={allPetzArray[9]}/>
        <h2>Update August 12th 2021</h2>
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
    )
}

export default UpdateComponent

