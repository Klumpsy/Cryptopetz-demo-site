
import {useState, useEffect } from "react";
import {rarityCheckboxes} from "./SearchDataOptions/Raritycheckboxes";
import {typeCheckboxes} from "./SearchDataOptions/Typecheckboxes"; 
import {categoryCheckboxes} from "./SearchDataOptions/Categorycheckboxes"; 
import {backgroundCheckboxes} from "./SearchDataOptions/Backgroundcheckboxes";

//https://codesandbox.io/s/magical-yalow-wndg8?file=/src/App.js

const CheckboxSearchMenu = ({petz, handleUpdate, searchMenu}) => { 
  
    const [rarity, setRarity] = useState([]);
    const [type, setType] = useState([]);
    const [category, setCategory] = useState([]);
    const [backgrounds, setBackground] = useState([]);

    console.log(backgrounds, category, type, rarity)


      const filteredUnits =
        rarity.length || type.length || category.length
          ? petz.filter((pet) => {
              return (
                (!backgrounds.length || backgrounds.includes(pet.data.traits.background)) &&
                (!rarity.length || rarity.includes(pet.data.rarity)) &&
                (!type.length || type.includes(pet.data.types.length > 0 ? pet.data.types[0] : pet.data.types[0] || pet.data.types[1])) &&
                (!category.length || category.includes(pet.category)) 
              );
            })
          : petz;
        
        useEffect(() => { 
            handleUpdate(filteredUnits)
        }, [rarity, type, category, backgrounds])

    return (
        <div className= {searchMenu ? "search-menu-active" : "search-menu-hidden"}>
             <div className="check-for-type">
                <h3>Filter by category</h3>
                {categoryCheckboxes.map((categoryCheckbox, i) => ( 
                    <div className ="type-box" key = {i}>
                    <label>{categoryCheckbox.category}</label>
                    <input 
                    type ="checkbox"
                    onChange = {(event) => setCategory((prev) => event.target.checked ? 
                        [...prev, categoryCheckbox.category] 
                        : 
                        []
                    )}
                    ></input>
                    </div>
                ))}
            </div>

            <div className="check-for-type">
                <h3>Filter by rarity</h3>
                {rarityCheckboxes.map((rarityCheckbox, i) => ( 
                    <div className ="type-box" key = {i}>
                    <label>{rarityCheckbox.rarity}</label>
                    <input 
                    type ="checkbox"
                    onChange = {(event) => setRarity((prev) => event.target.checked ? 
                        [...prev, rarityCheckbox.rarity] 
                        : 
                        []
                    )}
                    ></input>
                    </div>
                ))}
            </div>

            <div className="check-for-type">
                <h3>Filter by background</h3>
                {backgroundCheckboxes.map((backgroundCheckbox, i) => ( 
                    <div className ="type-box" key = {i}>
                    <label>{backgroundCheckbox.background}</label>
                    <input 
                    type ="checkbox"
                    onChange = {(event) =>  setBackground((prev) => event.target.checked ? 
                        [...prev, backgroundCheckbox.background] 
                        : 
                        []
                    )}
                    ></input>
                    </div>
                ))}
            </div>
            
            <div className="check-for-type">
            <h3>Filter by type</h3>
                {typeCheckboxes.map((typeCheckbox, i) => ( 
                    <div className ="type-box" key = {i}>
                    <label>{typeCheckbox.type}</label>
                    <input 
                    type ="checkbox"
                    onChange = {(event) => setType((prev) => event.target.checked ? 
                        [...prev, typeCheckbox.type] 
                        : 
                        []
                    )}
                    ></input>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default CheckboxSearchMenu;