
import {useState, useEffect } from "react";
import {rarityCheckboxes} from "./SearchDataOptions/Raritycheckboxes";
import {typeCheckboxes} from "./SearchDataOptions/Typecheckboxes"; 

const CheckboxSearchMenu = ({petz, handleUpdate, filteredPetz, searchMenu}) => { 
  
   //Checkbox State
   const[isRarityChecked, setIsRarityChecked] = useState(new Array(rarityCheckboxes.length).fill(false));
   const[isTypeChecked, setIsTypeChecked] = useState(new Array(typeCheckboxes.length).fill(false));

    useEffect(() => { 
        if(!filteredPetz.length) { 
            handleUpdate(petz);
        }
    }, [isRarityChecked, isTypeChecked])


    //Rarity checkbox 
    const handleRarityCheckbox = (value, e, position) => { 
        const updatedCheckedState = isRarityChecked.map((checkbox, index) =>  
        index === position ? !checkbox : checkbox
    );
        setIsRarityChecked(updatedCheckedState); 

        if(e.target.checked) { 
            let selectedData = petz.filter(pet => pet.data.rarity === value); 

            handleUpdate(filteredPetz.length && filteredPetz.length === petz.length ? [...selectedData] : [...selectedData, ...filteredPetz])
        } else { 
            let unselected = filteredPetz.filter(pet => { 
                return pet.data.rarity !== value; 
            }); 
            handleUpdate(unselected);
        }
    }

    //Type Checkbox
    const handleTypeCheckbox = (value, e, position) => { 
        const updatedCheckedState = isTypeChecked.map((checkbox, index) =>  
        index === position ? !checkbox : checkbox
    );
        setIsTypeChecked(updatedCheckedState); 

        if(e.target.checked) { 
            let selectedData = petz.filter(pet => pet.data.types === 2 ? pet.data.types[0, 1].toLowerCase() === value.toLowerCase() : pet.data.types[0].toLowerCase() === value.toLowerCase());

            handleUpdate(filteredPetz.length && filteredPetz.length === petz.length ? [...selectedData] : [...selectedData, ...filteredPetz])
        } else { 
            let unselected = filteredPetz.filter(pet => { 
                return pet.data.types === 2 ? 
                pet.data.types[0].toLowerCase() !== value.toLowerCase() && 
                pet.data.types[1].toLowerCase() !== value.toLowerCase() : 
                pet.data.types[0].toLowerCase() !== value.toLowerCase();
            }); 
            handleUpdate(unselected);
        }
    }

    return (
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
                  checked = {isRarityChecked[index]}
                  onChange ={(e) => handleRarityCheckbox(rarity, e, index)}
                  /> 
              </div> 
              )
            })}
        </div>
        <div className = "check-for-type">
            <h3>Filter by Type</h3>
            {typeCheckboxes.map(({type}, index) => { 
                return (
                  <div className ="type-box">
                  <label>{type}</label>
                  <input 
                  type="checkbox" 
                  value= {type}
                  name= {type}
                  id={`${type}-checkbox-${index}`}
                  checked = {isTypeChecked[index]}
                  onChange ={(e) => handleTypeCheckbox(type, e, index)}
                  /> 
              </div> 
              )
            })}
        </div>
    </div>
    )
}

export default CheckboxSearchMenu;