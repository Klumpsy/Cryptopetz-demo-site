const AttackvsDefense = () => (
        <div className ="attribute-layout">
            <div>
                <table>
                    <tr className="table-header">
                        <th>Stat</th>
                        <th>CryptoPet 1</th>
                        <th>CryptoPet 2</th>    
                    </tr>
                    <tr className="table-odd">
                        <td>HP</td>
                        <td>70</td>
                        <td>60</td>
                    </tr>
                    <tr className="table-even">
                        <td>ATT</td>
                        <td>15</td>
                        <td>10</td>
                    </tr>
                    <tr className="table-odd">
                        <td>DEF</td>
                        <td>80</td>
                        <td>100</td>
                    </tr>
                    <tr className="table-even">
                        <td>STA</td>
                        <td>50</td>
                        <td>45</td>
                    </tr>
                    <tr className="table-odd">
                        <td>SPD</td>
                        <td>50</td>
                        <td>55</td>
                    </tr>
                    <tr className="table-even">
                        <td>DEX</td>
                        <td>85</td>
                        <td>85</td>
                    </tr>
                </table>
            </div>
            <div className="attribute-info">
                <h2>Attack VS Defense</h2>
                 <p>
                    What does it take to defeat your opponent's CryptoPet? Very simple calculation can be made. 
                    For every 10 attack power, it takes 100 defense to receive no damage to your HP. <br/><br/>

                    If CryptoPet 1 decides to attack CryptoPet 2 with a normal attack of 15, 
                    then it will deal a total damage of 5 to CryptoPet 2’z HP. Therefore, 
                    ryptoPet 2 will have a total HP level of 55 after being attacked. However, 
                    if CryptoPet 2 had a defense level of 150, then it wouldn’t be affected by CryptoPet 1’z attack. <br/><br/> 

                    Important Note: The defense level of the attacked CryptoPet doesn’t recover immediately after being 
                    attacked. It takes a total of 2 turns to recover from said attack unless it uses the “Recover” 
                    action (more on that later). This said, if CryptoPet 1 attacks on the second turn before CryptoPet 2’z 
                    defense hasn’t fully recovered, it will receive more damage. <br/><br/>

                    Additional research is being conducted, thus, do not solely rely on the description above. 
                    Details about the Attack VS Defense mechanics are subjected to change. <br/><br/>
                </p>
            </div>
        </div>
)

export default AttackvsDefense;