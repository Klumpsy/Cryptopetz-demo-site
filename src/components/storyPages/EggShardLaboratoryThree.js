import eggLab from "../../images/egglab.jpg";

const EggShardLaboratoryThree = () => { 
    return (
    <div className = "book-page">
        <div className="book-container page-container">
            <h2 className= "page-title">1.3 Egg Shard Laboratory</h2>
            <p className="page-paragraph">
            Using the Robotics Barge as a Lab we have begun studying the biodiversity of our new ecosystem, 
            the Med-Pod and Bio-Polymer Devices have been moved to the barge as well.
            Using them we have started by breaking down the Shards into dust and running tests hoping 
            to learn more about the patterns on the shells. It may be optimistic,
            but early research shows we may be able to bolster the numbers and resourcefulness of our new found 
            friends using these Shell Shards. 
            <br/><br/>
            We will update the logs as we continue to build out the Egg Shard Laboratory and gather more data.
            </p>
            <img className = "image-border-book" src={eggLab}/>
        </div>
    </div>
    )   
}

export default EggShardLaboratoryThree; 