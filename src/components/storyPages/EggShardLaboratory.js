import adanoFromSpace from "../../images/adanoFromSpace.jpg";

const EggShardLaboratory = () => { 
    return (
    <div className = "book-page">
        <div className="book-container page-container">
            <h2 className= "page-title">1. Egg Shard Laboratory</h2>
            <p className="page-paragraph">
            We were a civilization amongst the sky, traveling freely between stars in our galaxy. 
            Until The Catalyst occurred, and our people were cast irrevocably into the Universe, stranded. 
            <br/><br/> 
            Ours was one of the first ships that jumped, we arrived here, at Adano…
            </p>
            <img className = "image-border-book"src={adanoFromSpace}/>
        </div>
    </div>
    )   
}

export default EggShardLaboratory; 