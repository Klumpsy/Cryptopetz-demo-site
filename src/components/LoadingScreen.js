import React, { useEffect, useState } from 'react'; 

import wholeEgg from "../images/eggs/Normal_Egg_REV1.png"
import crack1 from "../images/crackedEgg/crack1.png"
import crack2 from "../images/crackedEgg/crack2.png"
import crack3 from "../images/crackedEgg/crack3.png"
import crack4 from "../images/crackedEgg/crack4.png"
import crack5 from "../images/crackedEgg/crack5.png"
import crack6 from "../images/crackedEgg/crack6.png"
import crack7 from "../images/crackedEgg/crack7.png"
import crackedBottom from "../images/crackedEgg/crackedBottomChick.png"

const LoadingScreen = ({mode}) => { 

    const eggCrackArray = [crack1, crack2, crack3, crack4, crack5, crack6, crack7];

    const [egghatched, SetEggHatched] = useState(false)
    const [eggcrack, SetEggCrack] = useState(0)
 
    useEffect(() => { 
        let isMounted = true;
        if(isMounted) { 
            setTimeout(() => SetEggHatched(true), 4000)
        }
        isMounted = false;
    }, []);

    useEffect(() => { 
        setTimeout(() => {
            changeEggCrack()
        }, 500);
    })

    const changeEggCrack = () => {
        let isMounted = true;
        if(eggcrack < 7 && isMounted) {  
        SetEggCrack(eggcrack + 1)
        }
        isMounted = false; 
    }

    return (
        <div className = {mode ? "loading-screen loading-screen-light" : "loading-screen loading-screen-dark"}>
            <div className = {!egghatched ? "egg-div egg-wobble" : eggcrack < 7 ? "egg-div egg-wobble": " egg-div egg-hatched"}>
                <img src={!egghatched? wholeEgg : eggcrack === 7 ? crackedBottom : eggCrackArray[eggcrack]} alt="egg"/>
            </div>
            {eggcrack < 7 ? <span className ="loading-span">Loading...</span> : <span className = "welcome-span">Done!</span> }    
        </div> 
    )
}

export default LoadingScreen;