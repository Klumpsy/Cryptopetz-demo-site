import allpetz from "../images/allpetz.jpg";

const Petz = () => { 
    return (
        <div>
            <div className ="petz-wrapper">
                 <img className = "petz-wrapper-banner" src= {allpetz}/>
            </div>
        </div>
    )
}

export default Petz