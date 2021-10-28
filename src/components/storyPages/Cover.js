import petzBookCover from "../../images/bookCover.jpg"

const Cover = () => { 
    return ( 
        <div className = "book-page book-cover">
             <img src={petzBookCover} style={{width: "100%"}}></img> 
        </div>
    )
}

export default Cover;