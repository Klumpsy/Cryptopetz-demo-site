import roadmap from '../images/roadmap.jpg'

const GameInfo = ({ petzArray }) => { 
    return (
        <div className = "game-info-background">
            <div className = "page-wrapper game-info-wrapper">
                <h1>The Game</h1>
                <div className ="game-intro">
                    <h2>Tournement-Style Online RPG</h2>
                    <p>CryptoPetz The Game - is a tournament-style online role-playing game (RPG)
                        where you can collect and enhance your own CryptoPet.
                        Form your own team and battle others. Every CryptoPetz has a number of attribute slots,
                        ability slots and special attack slots that can be used by their respective tokens purchased
                        through the store (coming soon).</p>
                </div>
                <div className ="attribute-layout">
                    <div className="attribute-info">
                        <h2>Attribute, Ability and Special Attack</h2>
                        <p>The number of attributes, special attacks and ability slots are correlated to the rarity 
                           level of the CryptoPet. <br/><br/> 
                           
                           Every CryptoPet has basic stats in Health, Attack, Defense, Speed, 
                           Stamina and Dexterity. You can enhance each of these stats by merging an attribute token with 
                           your CryptoPet. Note, attribute tokens can only be used on CryptoPetz with available attribute slots. <br/><br/> 

                           Furthermore, ability tokens can be used to fulfill your CryptoPet’z skill slots. 
                           Skills such as “Iron Skin”, “Deflection” and  “Auto-Attack” for example, have their own unique characteristics.<br/><br/> 

                           Finally, special attack tokens can be collected to increase your CryptoPet’z attack power. 
                           Every CryptoPet has basic stats in Attack, however, it takes more than basic attack power to defeat your opponent. <br/><br/> 

                           Merging tokens with a CryptoPet is a permanent process. 
                           You cannot unmerge the token from the CryptoPet. Therefore, you must choose your tokens wisely!</p>
                    </div>
                    <div>
                        <table>
                            <tr className="table-header">
                                <th>Rarity</th>
                                <th>Attribute</th>
                                <th>Ability</th>
                                <th>Special Attack</th>
                            </tr>
                            <tr className="table-very-common">
                                <td>Very Common</td>
                                <td>3-4</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr className="table-common">
                                <td>Common</td>
                                <td>3-5</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr className="table-uncommon">
                                <td>Uncommon</td>
                                <td>4-5</td>
                                <td>2</td>
                                <td>1</td>
                            </tr>
                            <tr className="table-scarce">
                                <td>Scarce</td>
                                <td>4-6</td>
                                <td>2</td>
                                <td>1</td>
                            </tr>
                                <tr className="table-rare">
                                <td>Rare</td>
                                <td>5-6</td>
                                <td>2</td>
                                <td>2</td>
                            </tr>
                                <tr className="table-epic">
                                <td>Epic</td>
                                <td>6-7</td>
                                <td>2</td>
                                <td>2</td>
                            </tr>
                            <tr className="table-extremely-rare">
                                <td>Extremely Rare</td>
                                <td>7-8</td>
                                <td>3</td>
                                <td>2</td>
                            </tr>
                            <tr className="table-ultra-rare">
                                <td>Ultra Rare</td>
                                <td>8-9</td>
                                <td>3</td>
                                <td>2</td>
                            </tr>
                            <tr className="table-legendary">
                                <td>Legendary</td>
                                <td>10</td>
                                <td>3</td>
                                <td>3</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className ="petz-row">
                    <img src={petzArray[0].img}/>
                    <img src={petzArray[1].img}/>
                    <img src={petzArray[2].img}/>
                    <img src={petzArray[3].img}/>
                    <img src={petzArray[4].img}/>
                    <img src={petzArray[5].img}/>
                    <img src={petzArray[6].img}/>
                </div>
                <div className ="game-intro">
                    <h2>CryptoPetz Characteristics</h2>
                    <p>Note: The CryptoPetz characteristics and game mechanics aren’t finalized yet.
                       We are currently working with game experts to make it fair for everyone. 
                       If you have any ideas of feedback please feel free and contact us via Twitter or Discord! 
                    </p>
                </div>
                <div className ="attribute-layout">
                    <div>
                        <table>
                            <tr className="table-header">
                                <th>Rarity</th>
                                <th>Health</th>   
                            </tr>
                            <tr className="table-very-common">
                                <td>Very Common</td>
                                <td>40-80</td>
                            </tr>
                            <tr className="table-common">
                                <td>Common</td>
                                <td>50-90</td>
                            </tr>
                            <tr className="table-uncommon">
                                <td>Uncommon</td>
                                <td>60-100</td>
                            </tr>
                            <tr className="table-scarce">
                                <td>Scarce</td>
                                <td>70-110</td>
                            </tr>
                                <tr className="table-rare">
                                <td>Rare</td>
                                <td>80-120</td>
                            </tr>
                                <tr className="table-epic">
                                <td>Epic</td>
                                <td>90-130</td>
                            </tr>
                            <tr className="table-extremely-rare">
                                <td>Extremely Rare</td>
                                <td>100-140</td>
                            </tr>
                            <tr className="table-ultra-rare">
                                <td>Ultra Rare</td>
                                <td>110-150</td>
                            </tr>
                            <tr className="table-legendary">
                                <td>Legendary</td>
                                <td>130-160</td>
                            </tr>
                        </table>
                    </div>
                    <div className="attribute-info">
                        <h2>Health (HP)</h2>
                        <p>
                        The CryptoPet’z health is correlated to the rarity of the CryptoPet. 
                        As the rarity increases, the HP increases. HP fluctuates between 2 values as shown in the table. <br/><br/>
                        For example, to acquire a CryptoPet of rarity Common with a HP of 80 is much harder than 
                        acquiring the same rarity CryptoPet with an HP of 60. The same goes for all other rarity levels.
                        </p>
                    </div>
                </div>
                <div className ="petz-row">
                    <img src={petzArray[7].img}/>
                    <img src={petzArray[6].img}/>
                    <img src={petzArray[5].img}/>
                    <img src={petzArray[4].img}/>
                    <img src={petzArray[3].img}/>
                    <img src={petzArray[2].img}/>
                    <img src={petzArray[1].img}/>
                </div>
                <div className ="roadmap-layout">
                    <div className="attribute-info attribute-info-roadmap">
                        <h2>How can I purchase tokens?</h2>
                        <p>Please see our Roadmap for more details about the release of our token sale. 
                           Tokens will be sold randomly to make it fair for everyone participating. 
                           We will release details about the tokens packs and pricing closer to the pre-sale. 
                           Tokens can also be won. By participating in tournaments, friendly battles and our discord 
                           you will receive tokens which can be used to upgrade your CryptoPet.
                           <br/><br/>
                           Note: The Roadmap is subject to change as the scope of work is being researched.</p>
                    </div>
                    <div>
                        <img src={roadmap}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameInfo