import drakePet from "../../images/petzImages/drake.png"
const PageOne = () => { 
    return ( 
        <div className = "book-page">
            <div className="book-container page-container">
                <h2 className= "page-title">Planet Adano</h2>
                <p className="page-paragraph">
                Adano, a planet located in the vast universe of Cardano,
                is home to approximately 10,000 unique CryptoPetz waiting to be collected. 
                Up to 150 different species are coexisting in Adano’s diverse ecosystem.
                </p> 
                <img src={drakePet} alt="pet"/>
            </div>
        </div>
    )
}

export default PageOne;