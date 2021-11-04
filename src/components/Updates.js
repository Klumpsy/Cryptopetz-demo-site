import UpdateComponentSeven from "./updates/UpdateSeven"
import UpdateComponentSix from "./updates/UpdateSix";
import UpdateComponentFive from "./updates/UpdateFive";
import UpdateComponentFour from "./updates/UpdateFour";
import UpdateComponentThree from "./updates/UpdateThree";
import UpdateComponentTwo from "./updates/UpdateTwo";
import UpdateComponentOne from "./updates/UpdateOne";

const Updates = ({ allPetzArray }) => { 

    return (
        <div className = "updates-background">
            <div className = "update-page-wrapper"> 
                <h1 className="updates-title">Updates</h1>
                <UpdateComponentSeven allPetzArray = {allPetzArray}/>
                <UpdateComponentSix allPetzArray = {allPetzArray}/>
                <UpdateComponentFive allPetzArray = {allPetzArray}/>
                <UpdateComponentFour allPetzArray = {allPetzArray}/>
                <UpdateComponentThree allPetzArray = {allPetzArray}/>
                <UpdateComponentTwo allPetzArray = {allPetzArray}/>
                <UpdateComponentOne allPetzArray = {allPetzArray}/>
            </div>
        </div>
    )
}

export default Updates