import data from "./EggShardRewardsTable.json";

const EggShardRewards = ({mode}) => { 

    return (
        <>
            <table className = "eggshard-table">
                <thead>
                    <tr className="table-header table-header-eggshards">
                        <th>Reward Epoch</th>
                        <th>Remaining Supply</th>  
                        <th>Distributed</th>
                        <th>Cardano Epoch</th>
                        <th>Snapshot Time (Epocht Start)</th>
                        <th>Distribution Time (Epoch n + 3)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(data => ( 
                            
                        <tr className="table-very-common-eggshards" key ={data["Cardano Epoch"]}style ={mode?{background: "rgba(255, 255, 255, 0.9)", color:"black"}:{background: "rgba(20, 20, 20, 0.7)"}}>
                            <td style = {{color: "rgba(130, 185, 130)"}}>{data["Reward Epoch"]}</td>
                            <td>{data["Remaining Supply"]}</td>
                            <td>{data["Distributed"]}</td>
                            <td>{data["Cardano Epoch"]}</td>
                            <td>{data["Snapshot Time (Epoch Start)"]}</td>
                            <td>{data["Distribution Time (Epoch n + 3)"]}</td>
                       </tr>
                    ), ) 
                    } 
                </tbody>
            </table>
        </>
    )
}

export default EggShardRewards; 