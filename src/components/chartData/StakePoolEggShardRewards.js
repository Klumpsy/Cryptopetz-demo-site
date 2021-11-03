import { rewardEpoch } from "./EggShardRewardsTable";

const EggShardRewards = () => { 

    return (
        <div>
            <table>
                <thead>
                    <tr className="table-header">
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
                        rewardEpoch.map(epoch => ( 
                            
                        <tr className="table-very-common" styles ={{border: ""}}>
                            <td>{epoch.epoch}</td>
                            <td>{epoch.remainingSupply}</td>
                            <td>{epoch.distributed}</td>
                            <td>{epoch.epochCardano}</td>
                            <td>{epoch.snapshotTime}</td>
                            <td>{epoch.distributionTime}</td>
                       </tr>
                    ), ) 
                    } 
                </tbody>
            </table>
        </div>
    )
}

export default EggShardRewards; 