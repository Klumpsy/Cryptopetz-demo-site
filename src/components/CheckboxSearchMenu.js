
import { useEffect, useState } from "react";
import {rarityCheckboxes} from "./SearchDataOptions/checkboxes";

const CheckboxSearchMenu = ({filteredpetz, updateFilteredPetz}) => { 

    //Toggle Searchbar State
    const [searchMenu, setSearchMenu] = useState(false);

    //Checkbox State
    const[isChecked, setIsChecked] = useState(new Array(rarityCheckboxes.length).fill(false));
    const [checkedPetz, setCheckedPetz] = useState([]); 

    const handleOnChange = (position) => { 
        const updatedCheckedState = isChecked.map((checkbox, index) =>  
            index === position ? !checkbox : checkbox
        );
        console.log(updatedCheckedState)
        setIsChecked(updatedCheckedState); 
    }


    return (
        <div className="petz-search-container">
            <button id="petz-search-button" onClick={() => setSearchMenu(!searchMenu)} >Search</button>
            <div className= {searchMenu ? "search-menu-active" : "search-menu-hidden"}>
                <div className = "check-for-type">
                    <h3>Filter by Rarity</h3>
                    {rarityCheckboxes.map(({rarity}, index) => { 
                        return (
                          <div className ="type-box">
                          <label>{rarity}</label>
                          <input 
                          type="checkbox" 
                          value= {rarity}
                          name= {rarity}
                          id={`${rarity}-checkbox-${index}`}
                          checked = {isChecked[index]}
                          onChange ={() => handleOnChange(index)}
                          /> 
                      </div> 
                      )
                    })}
                </div>
            </div>
         </div>
    )
}

export default CheckboxSearchMenu;