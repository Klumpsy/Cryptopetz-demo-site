

const Footer = ({petzArray, mode}) => { 
    return (
        <div className = {mode ? "footer light-mode": "footer dark-mode"}>
            <img src={petzArray.img}/>
            <div className = {mode ? "credits credits-light" : "credits credits-dark"}>
                <p>Copyright © 2021 CryptoPetz - All Rights Reserved.</p>
                <p>Powered by Cardano</p>
            </div>
            <img src={petzArray.img}/>
        </div>
    )
}

export default Footer