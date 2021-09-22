
const Attack = () => (
    <div className ="attribute-layout">
        <div>
            <table>
                <tr className="table-header">
                    <th>Rarity</th>
                    <th>Attack</th>   
                </tr>
                <tr className="table-very-common">
                    <td>Very Common</td>
                    <td>15-35</td>
                </tr>
                <tr className="table-common">
                    <td>Common</td>
                    <td>15-35</td>
                </tr>
                <tr className="table-uncommon">
                    <td>Uncommon</td>
                    <td>20-35</td>
                </tr>
                <tr className="table-scarce">
                    <td>Scarce</td>
                    <td>25-40</td>
                </tr>
                    <tr className="table-rare">
                    <td>Rare</td>
                    <td>30-40</td>
                </tr>
                    <tr className="table-epic">
                    <td>Epic</td>
                    <td>30-45</td>
                </tr>
                    <tr className="table-extremely-rare">
                    <td>Extremely Rare</td>
                    <td>35-50</td>
                </tr>
                <tr className="table-ultra-rare">
                    <td>Ultra Rare</td>
                    <td>40-50</td>
                </tr>
                <tr className="table-legendary">
                    <td>Legendary</td>
                    <td>45-55</td>
                </tr>
            </table>
        </div>
        <div className="attribute-info">
            <h2>Attack (ATT)</h2>
             <p>
                Raising attack for your CryptoPet can be highly advantageous as it is used to defeat your opponents 
                CryptoPetz, however, it doesn’t mean it is the most important attribute to increase. <br/><br/>
                As mentioned with the HP, the amount of basic attack power is correlated to the rarity of the CryptoPet. <br/><br/>
                To acquire a CryptoPet of rarity Epic with an attack power of 45 is much harder to do than to 
                get the same rarity CryptoPet with an attack power of 35. The same goes for all other rarity levels.
            </p>
        </div>
    </div>
)

export default Attack; 