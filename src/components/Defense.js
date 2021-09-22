

const Defense = () => (
    <div className ="attribute-layout">
        <div>
            <table>
                <tr className="table-header">
                    <th>Rarity</th>
                    <th>Defence</th>   
                </tr>
                <tr className="table-very-common">
                    <td>Very Common</td>
                    <td>60-120</td>
                </tr>
                <tr className="table-common">
                    <td>Common</td>
                    <td>60-120</td>
                </tr>
                <tr className="table-uncommon">
                    <td>Uncommon</td>
                    <td>80-120</td>
                </tr>
                <tr className="table-scarce">
                    <td>Scarce</td>
                    <td>100-120</td>
                </tr>
                    <tr className="table-rare">
                    <td>Rare</td>
                    <td>100-140</td>
                </tr>
                    <tr className="table-epic">
                    <td>Epic</td>
                    <td>100-140</td>
                </tr>
                    <tr className="table-extremely-rare">
                    <td>Extremely Rare</td>
                    <td>120-140</td>
                </tr>
                <tr className="table-ultra-rare">
                    <td>Ultra Rare</td>
                    <td>120-160</td>
                </tr>
                <tr className="table-legendary">
                    <td>Legendary</td>
                    <td>140-180</td>
                </tr>
            </table>
        </div>
        <div className="attribute-info">
            <h2>Defense (DEF)</h2>
             <p>
                The best defense is a good offence. Defense is critical in maintaining your CryptoPet'z fighting capability. 
                As your defense increases, the resistance to your opponent's attacks increases.  
            </p>
        </div>
    </div>
)

export default Defense; 