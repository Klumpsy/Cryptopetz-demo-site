const Stamina = () => (
    <div className ="attribute-layout">
        <div>
            <table>
                <tr className="table-header">
                    <th>Rarity</th>
                    <th>Stamina</th>   
                </tr>
                <tr className="table-very-common">
                    <td>Very Common</td>
                    <td>70-90</td>
                </tr>
                <tr className="table-common">
                    <td>Common</td>
                    <td>70-90</td>
                </tr>
                <tr className="table-uncommon">
                    <td>Uncommon</td>
                    <td>80-100</td>
                </tr>
                <tr className="table-scarce">
                    <td>Scarce</td>
                    <td>80-110</td>
                </tr>
                <tr className="table-rare">
                    <td>Rare</td>
                    <td>90-110</td>
                </tr>
                <tr className="table-epic">
                    <td>Epic</td>
                    <td>100-120</td>
                </tr>
                <tr className="table-extremely-rare">
                    <td>Extremely Rare</td>
                    <td>100-130</td>
                </tr>
                <tr className="table-ultra-rare">
                    <td>Ultra Rare</td>
                    <td>10-140</td>
                </tr>
                <tr className="table-legendary">
                    <td>Legendary</td>
                    <td>120-150</td>
                </tr>
            </table>
        </div>
        <div className="attribute-info">
            <h2>Stamina (STA)</h2>
            <p>
            Stamina is a very important stat for your CryptoPet. It allows you to attack or perform actions during your turn. 
            If your CryptoPet doesn’t have stamina, you will need to recover before performing an attack.<br/><br/>

            <em>What takes stamina?</em> <br/><br/>

            Simply put, attacks take the majority of your stamina. Depending on the attack, the stamina used will vary. Typically the stronger the attack the more stamina it uses. The correlation between attack and stamina is 1:1. For every attack point it take 1 stamina points to be available.  
            </p>
        </div>
    </div>
)

export default Stamina;