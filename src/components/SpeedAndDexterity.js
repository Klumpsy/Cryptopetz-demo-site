const SpeedAndDexterity = () => (
    <div className ="attribute-layout">
    <div>
        <table>
            <tr className="table-header">
                <th>Rarity</th>
                <th>Speed</th>   
                <th>Dexterity</th> 
            </tr>
            <tr className="table-very-common">
                <td>Very Common</td>
                <td>60-100</td>
                <td>80-100</td>
            </tr>
            <tr className="table-common">
                <td>Common</td>
                <td>60-100</td>
                <td>80-100</td>
            </tr>
            <tr className="table-uncommon">
                <td>Uncommon</td>
                <td>60-100</td>
                <td>80-100</td>
            </tr>
            <tr className="table-scarce">
                <td>Scarce</td>
                <td>60-100</td>
                <td>80-100</td>
            </tr>
            <tr className="table-rare">
                <td>Rare</td>
                <td>60-100</td>
                <td>80-100</td>
            </tr>
            <tr className="table-epic">
                <td>Epic</td>
                <td>60-100</td>
                <td>85-100</td>
            </tr>
            <tr className="table-extremely-rare">
                <td>Extremely Rare</td>
                <td>60-100</td>
                <td>85-100</td>
            </tr>
            <tr className="table-ultra-rare">
                <td>Ultra Rare</td>
                <td>60-100</td>
                <td>90-100</td>
            </tr>
            <tr className="table-legendary">
                <td>Legendary</td>
                <td>60-100</td>
                <td>90-100</td>
            </tr>
        </table>
    </div>
    <div className="attribute-info">
        <h2>Speed (SPD) and Dexterity (DEX)</h2>
        <p>
        <em>Speed</em> is good for one thing and one thing only. It decides which contender starts first. 
        If CryptoPet 1 has a SPD of 100 and CryptoPet has a SPD of 80, CryptoPet 1 will be allowed to start his turn first. 
        Every CryptoPet will be in a range of 60 to 100. <br/><br/>

       <em>Dexterity</em> is the basis of any attack. Higher dexterity means that your attack has higher chances of hitting your 
        opponent effectively. Dexterity’s range changes depending on the rarity of the CryptoPet. 
        A DEX of 100 will mostly land an effective attack unless a skill is used to deviate your attack
        </p>
    </div>
</div>
)

export default SpeedAndDexterity;