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

const LoadingScreen = () => { 

    const eggCrackArray = [crack1, crack2, crack3, crack4, crack5, crack6, crack7];

    const [egghatched, SetEggHatched] = useState(false)
    const [eggcrack, SetEggCrack] = useState(0)
 
    useEffect(() => { 
        let isMounted = true;
        if(isMounted) { 
            setTimeout(() => SetEggHatched(true), 2000)
        }
        return () => isMounted = false; 
    }, []);

    useEffect(() => { 
        let isMounted = true;
        if(isMounted && eggcrack < 6)setTimeout(() => {
            changeEggCrack()
        }, 300);
        return () => isMounted = false; 
    },[eggcrack])

    const changeEggCrack = () => { 
        SetEggCrack(eggcrack+1)
        console.log(eggcrack)
    }

    return (
        <div className = "loading-screen">
            <div className = {!egghatched ? "egg-div egg-wobble": " egg-div egg-hatched"}>
                <img src={!egghatched ? eggCrackArray[eggcrack] : crackedBottom} alt="egg"/>
            </div>
            <span className ="loading-span">Loading...</span>
        </div> 
    )
}

export default LoadingScreen;