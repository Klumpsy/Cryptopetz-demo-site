import {RiAlarmWarningFill} from "react-icons/ri"

import CurrentSale from "./CurrentSale"

const Sales = ({mode}) => {
    return (
        <div className = {mode ? "sales-page-wrapper light-mode": "sales-page-wrapper dark-mode"}>
            <div className = "sales-current-sales-box">    
                <div className = "warning-message-container">
                <h2><RiAlarmWarningFill style = {{color: "red"}} size={20}/> Important <RiAlarmWarningFill style = {{color: "red"}} size={20}/></h2>
                    <p>Send the <span className= "important-span-styling">EXACT</span> amount of ADA for the number of tokens you want to buy to the Cardano Addresses below.</p>
                    <p>Clicking “Copy to Clipboard” and pasting in to your Yoroi, Nami or Daedalus wallet is the best way to ensure you send to the correct address.</p>
                    <p><span className= "important-span-styling">DO NOT </span>
                        send ADA from an exchange wallet.
                        You <span className= "important-span-styling">MUST</span> send from a wallet that supports Cardano NFTs (Nami, Yoroi, and Daedalus, for example)
                        or you <span className= "important-span-styling">WILL NOT</span> receive your NFT Token. </p>
                </div>
                <div className = "sales-current-sale">
                    <h1 style={mode?{color:"black"}:{color:"white"}}>Current Sale</h1>
                    <CurrentSale/>
                </div>
            </div>
            <div className = "sales-past-sales-box">
                <div
                style={mode?{backgroundColor:"rgba(0, 0, 0, 0.9)"}:{backgroundColor:"rgba(0, 0, 0, 0.6)"}}>
                    <h2>Upcomming Sales</h2>
                    <ul>
                        <li>Epoch Two Petz</li>
                    </ul>
                </div>
                <div 
                className = "past-sales-box" 
                style={mode?{backgroundColor:"rgba(0, 0, 0, 0.9)"}:{backgroundColor:"rgba(0, 0, 0, 0.6)"}}>
                    <h2>Past Sales</h2>
                    <ul>
                        <li>Epoch One Petz</li>
                        <li>Epoch One Attribute tokens</li>
                        <li>Epoch One Ability tokens</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sales