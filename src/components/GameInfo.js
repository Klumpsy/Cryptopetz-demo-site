import React, { useState} from 'react';
import roadmap from '../images/roadmap.jpg';

import Health from '../components/Health';
import Attack from '../components/Attack';
import Defense from './Defense';
import AttackvsDefense from '../components/AttackvsDefense';
import Stamina from '../components/Stamina';
import SpeedAndDexterity from '../components/SpeedAndDexterity';

import attackToken from '../images/tokens/Attack_Gold.png';
import abilityToken from '../images/tokens/Ability_Gold.png';
import defenseToken from '../images/tokens/Defense_Gold.png';
import healthToken from '../images/tokens/Health_Gold.png';
import speedToken from '../images/tokens/Speed_Gold.png';
import staminaToken from '../images/tokens/Stamina_Gold.png';
import dexterityToken from '../images/tokens/Dexterity_Gold.png';
import specialAttackGold from '../images/tokens/Special_Attack_Gold.png';
import specialAttackSilver from '../images/tokens/Special_Attack_Silver.png';
import specialAttackBronze from '../images/tokens/Special_Attack_Bronze.png';

const GameInfo = ({ allPetzArray, eggArray }) => { 

    const attributes = [<Health/>, <Attack/>, <Defense/>, <AttackvsDefense/>, <Stamina/>, <SpeedAndDexterity/>];
    const tokenArray = [attackToken, abilityToken, defenseToken, healthToken, speedToken, staminaToken, dexterityToken,
                        specialAttackBronze, specialAttackSilver, specialAttackGold];

    const [currentAttribute, setCurrentAttribute] = useState(0);
    const length = attributes.length

    const nextSlide = () => { 
        setCurrentAttribute(currentAttribute === length -1 ? 0 : currentAttribute + 1)
    }

    const previousSlide = () => { 
        setCurrentAttribute(currentAttribute === 0 ? length -1 : currentAttribute - 1)
    }

    return (
        <div className = "game-info-background">
            <div className = "page-wrapper game-info-wrapper">
                <h1>Game Metrics</h1>
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
                    <img src={allPetzArray[8]} alt="pet"/>
                    <img src={allPetzArray[9]} alt="pet"/>
                    <img src={allPetzArray[10]} alt="pet"/>
                    <img src={allPetzArray[11]} alt="pet"/>
                    <img src={allPetzArray[12]} alt="pet"/>
                    <img src={allPetzArray[13]} alt="pet"/>
                    <img src={allPetzArray[14]} alt="pet"/>
                </div>
                <div className ="game-intro">
                    <h2>CryptoPetz Characteristics</h2>
                    <p>Note: The CryptoPetz characteristics and game mechanics aren’t finalized yet.
                       We are currently working with game experts to make it fair for everyone. 
                       If you have any ideas of feedback please feel free and contact us via Twitter or Discord! 
                    </p>
                </div>
                <div className = "attributes-container" id="attributes"> 
                    <i className= "arrow arrow-left fa fas fa-arrow-circle-left fa-4x" onClick ={previousSlide}></i>
                        {
                            attributes.map((attribute, index) => { 
                            return (
                                <div className ={index === currentAttribute ? 'project active': 'project'} key={index}>
                                    {index === currentAttribute ? attribute : ""}
                                </div>
                            )
                        })
                    }
                    <i className= {"arrow arrow-right fa fas fa-arrow-circle-right fa-4x"} onClick = {nextSlide}></i>
                </div>
                <div className ="petz-row">
                    <img src={allPetzArray[7]} alt="pet"/>
                    <img src={allPetzArray[6]} alt="pet"/>
                    <img src={allPetzArray[5]} alt="pet"/>
                    <img src={allPetzArray[4]} alt="pet"/>
                    <img src={allPetzArray[3]} alt="pet"/>
                    <img src={allPetzArray[2]} alt="pet"/>
                    <img src={allPetzArray[1]} alt="pet"/>
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
                    <img src={roadmap} alt="Roadmap"/>
                </div>
                <div className ="roadmap-layout">
                    <div className="attribute-info attribute-info-roadmap">
                        <h2>What kind of token can I add to my CryptoPet?</h2>
                        <p>The token you combine with your CryptoPet will depend on your CryptoPet’z available slots. 
                           For example, if you were able to collect an Epic CryptoPet then you will have an attribute slot 
                           ranging between 6 and 7, 2 ability slots and 2 special attack slots. Therefore, 
                           you can only merge a total of 10-11 tokens with your CryptoPetz. Token rarity ranges between: 
                           Bronze, Silver and Gold. <br/><br/>
                           
                           All three can be bought through the store, however, 
                           Gold tokens are very hard to come by. Participating in our discord, entering tournaments and 
                           playing matches are all things you can do to increase your chances of getting gold tokens.</p>
                    </div>
                    <div className ="petz-row token-row">
                    <img src={tokenArray[6]} alt="pet" />
                    <img src={tokenArray[5]} alt="pet"/>
                    <img src={tokenArray[4]} alt="pet"/>
                    <img src={tokenArray[3]} alt="pet"/>
                    <img src={tokenArray[2]} alt="pet"/>
                    <img src={tokenArray[1]} alt="pet"/>
                    <img src={tokenArray[0]} alt="pet"/>
                    </div>
                </div>
                <div className ="roadmap-layout">
                    <div className="attribute-info attribute-info-roadmap">
                        <h2>What are special attack tokens?</h2>
                        <p>In order to win the match, you need to defeat your opponent. 
                           To do so, you must attack them and deplete all their CryptoPet’z health to 0. 
                           Every CryptoPet can do a normal attack, however, if you really want the advantage, 
                           you will make sure to add special attacks to your CryptoPet. For example, 
                           I can add an attack called “Hyperbeam” that has an attack power of 60 which could be better 
                           than my basic attacks. <br/><br/>
                           
                           Special attack tokens are categorized per type; Fire, Ice, Sound, Grass, Normal, Psychic, Dark, 
                           Ground, Water, Electric and Poison. The attack tokens must correspond with your CryptoPet’z 
                           type otherwise it will be useless.</p>
                    </div>
                    <div className ="petz-row">
                    <img src={tokenArray[7]} alt="pet"/>
                    <img src={tokenArray[8]} alt="pet"/>
                    <img src={tokenArray[9]} alt="pet"/>
                    </div>
                </div>
                <div className ="attribute-layout">
                    <div className="attribute-info">
                        <h2>What happens if I collect an egg during the pre-sale?</h2>
                        <p>You’re lucky! Every person who has collected an egg during the pre-sale will be able to redeem it 
                           during the Epoch 2 pre-sale. Doing so, you will gain access to an exclusive CryptoPet that 
                           cannot be obtained by a pre-sale. The CryptoPet will be related to the type of egg that you’ve 
                           collected. <br/><br/>
                           
                           For example, if you collected a Legendary Egg, you will receive an exclusive Epoch 2 legendary 
                           CryptoPet. 
                        </p>
                    </div>
                    <div><img className = "big-egg-image" src={eggArray[5]} alt="egg"/></div>
                </div>   
                <div className ="petz-row egg-row">
                    <img src={eggArray[0]} alt="egg" />
                    <img src={eggArray[1]} alt="egg"/>
                    <img src={eggArray[2]} alt="egg"/>
                    <img src={eggArray[3]} alt="egg"/>
                    <img src={eggArray[4]} alt="egg"/>
                    <img src={eggArray[6]} alt="egg"/>
                    <img src={eggArray[7]} alt="egg"/>
                    <img src={eggArray[8]} alt="egg"/>
                    <img src={eggArray[9]} alt="egg"/>
                    <img src={eggArray[10]} alt="egg"/>
                    <img src={eggArray[11]} alt="egg"/>
                </div>
            </div>
        </div>
    )
}

export default GameInfo