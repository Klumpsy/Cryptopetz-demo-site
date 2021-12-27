
import UpdateComponentTen from "./updates/UpdateTen";
import UpdateComponentNine from "./updates/UpdateNine";
import UpdateComponentEighth from "./updates/UpdateEighth"
import UpdateComponentSeven from "./updates/UpdateSeven"
import UpdateComponentSix from "./updates/UpdateSix";
import UpdateComponentFive from "./updates/UpdateFive";
import UpdateComponentFour from "./updates/UpdateFour";
import UpdateComponentThree from "./updates/UpdateThree";
import UpdateComponentTwo from "./updates/UpdateTwo";
import UpdateComponentOne from "./updates/UpdateOne";

import { useState } from "react";

const Updates = ({ allPetzArray }) => { 

    const updates = 
    [
        <UpdateComponentTen allPetzArray = {allPetzArray}/>,
        <UpdateComponentNine allPetzArray = {allPetzArray}/>,
        <UpdateComponentEighth allPetzArray = {allPetzArray}/>,
        <UpdateComponentSeven allPetzArray = {allPetzArray}/>,
        <UpdateComponentSix allPetzArray = {allPetzArray}/>,
        <UpdateComponentFive allPetzArray = {allPetzArray}/>,
        <UpdateComponentFour allPetzArray = {allPetzArray}/>,
        <UpdateComponentThree allPetzArray = {allPetzArray}/>,
        <UpdateComponentTwo allPetzArray = {allPetzArray}/>,
        <UpdateComponentOne allPetzArray = {allPetzArray}/>
    ];

    const [currentUpdate, setCurrentUpdate] = useState(0);
    const length = updates.length

    const nextUpdate = () => { 
        setCurrentUpdate(currentUpdate === length -1 ? 0 : currentUpdate + 1)
    }

    const previousUpdate = () => { 
        setCurrentUpdate(currentUpdate === 0 ? length -1 : currentUpdate - 1)
    }

    return (
        <div className = "updates-background">
            <div className = "update-page-wrapper"> 
                <h1 className="updates-title">Updates</h1>
                <div className ="arrow-holder">
                        <i className= {currentUpdate === 0 ? "" : "updates-arrow updates-arrow-left fa fas fa-arrow-circle-left fa-4x"} onClick ={previousUpdate}></i>
                            {
                                updates.map((update, index) => {
                                return (
                                    <div className ={index === currentUpdate ? 'update-active': 'update'} key={index}>
                                        {index === currentUpdate ? update : ""}
                                    </div>
                                )
                            })
                        }
                        <i className= {currentUpdate === (updates.length -1) ? "" : "updates-arrow updates-arrow-right fa fas fa-arrow-circle-right fa-4x"} onClick = {nextUpdate}></i>
                </div>
            </div>
        </div>
    )
}

export default Updates