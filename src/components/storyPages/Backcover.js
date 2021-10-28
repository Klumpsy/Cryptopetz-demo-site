import petzBookBackCover from "../../images/bookbackcover.jpg"

const Backcover = () => { 
    return (
    <div className = "book-page book-cover-back book-page">
        <img src={petzBookBackCover} style={{width: "100%"}}></img> 
    </div>
    )
}

export default Backcover; 