

const Footer = ({petzArray}) => { 
    return (
        <div className = "footer">
            <img src={petzArray.img}/>
            <div className ="credits">
                <p>Copyright © 2021 CryptoPetz - All Rights Reserved.</p>
                <p>Powered by Cardano</p>
            </div>
            <img src={petzArray.img}/>
        </div>
    )
}

export default Footer