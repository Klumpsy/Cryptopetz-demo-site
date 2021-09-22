
const Health = () => { 
    return (
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
    )
}

export default Health; 