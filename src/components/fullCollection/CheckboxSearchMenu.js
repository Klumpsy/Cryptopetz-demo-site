import {useState, useEffect } from "react";

//Import checkboxes for searchfilters 
import {rarityCheckboxes} from "../SearchDataOptions/Raritycheckboxes";
import {typeCheckboxes} from "../SearchDataOptions/Typecheckboxes"; 
import {categoryCheckboxes} from "../SearchDataOptions/Categorycheckboxes"; 
import {backgroundCheckboxes} from "../SearchDataOptions/Backgroundcheckboxes";

//import react icons 
import {IoMdArrowDropdownCircle, IoMdArrowDropupCircle} from "react-icons/io"; 


//https://codesandbox.io/s/magical-yalow-wndg8?file=/src/App.js

const CheckboxSearchMenu = ({petz, handleUpdate, searchMenu}) => { 

//Checkbox type state 
    const [rarity, setRarity] = useState([]);
    const [type, setType] = useState([]);
    const [category, setCategory] = useState([]);
    const [backgrounds, setBackground] = useState([]);

//Colaps menu state
    const [colapseCategory, setColapseCategory] = useState(false); 
    const [colapseRarity, setcolapseRarity] = useState(false); 
    const [colapseBackground, setcolapseBackground] = useState(false); 
    const [colapseType, setcolapseType] = useState(false); 

//Filtered units 
    const filteredUnits =
        rarity.length || type.length || category.length || backgrounds.length
          ? petz.filter((pet) => {
              return (
                (!rarity.length || rarity.includes(pet.data.rarity)) &&
                (!type.length || type.includes(pet.data.types.length > 0 ? pet.data.types[0] || pet.data.types[1] : pet.data.types[0])) &&
                (!category.length || category.includes(pet.category)) &&
                (!backgrounds.length || backgrounds.includes(pet.data.traits.background)) 
              );
            })
          : 
          petz;
//Check if checkboxes changed => callback to parent for updated view of petz      
    useEffect(() => { 
        handleUpdate(filteredUnits)
    }, [rarity, type, category, backgrounds])

    return (
        <div className= {searchMenu ? "search-menu-active" : "search-menu-hidden"}>
             <div className="check-for-type">
                <div className="colaps-menu-container">
                    <h3>Filter by category</h3>
                    {colapseCategory ? 
                    <IoMdArrowDropupCircle
                    className ="collapse-button" 
                    onClick ={() => setColapseCategory(!colapseCategory)}
                    size={24}
                    />
                    :
                    <IoMdArrowDropdownCircle
                    className ="collapse-button" 
                    onClick ={() => setColapseCategory(!colapseCategory)}
                    size={24}
                    />
                }
                </div >
                <div className = {colapseCategory ? "filter-active" : "filter-hidden"}>
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
            </div>

            <div className="check-for-type">
            <div className="colaps-menu-container">
                    <h3>Filter by rarity</h3>
                    {colapseRarity ? 
                    <IoMdArrowDropupCircle
                    className ="collapse-button" 
                    onClick ={() => setcolapseRarity(!colapseRarity)}
                    size={24}
                    />
                    :
                    <IoMdArrowDropdownCircle
                    className ="collapse-button" 
                    onClick ={() => setcolapseRarity(!colapseRarity)}
                    size={24}
                    />
                }
                </div >
                <div className = {colapseRarity ? "filter-active" : "filter-hidden"}>
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
            </div>

            <div className="check-for-type">
            <div className="colaps-menu-container">
                    <h3>Filter by background</h3>
                    {colapseBackground ? 
                    <IoMdArrowDropupCircle
                    className ="collapse-button" 
                    onClick ={() => setcolapseBackground(!colapseBackground)}
                    size={24}
                    />
                    :
                    <IoMdArrowDropdownCircle
                    className ="collapse-button" 
                    onClick ={() => setcolapseBackground(!colapseBackground)}
                    size={24}
                    />
                }
            </div>
                <div className = {colapseBackground ? "filter-active" : "filter-hidden"}>
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
            </div>
            
            <div className="check-for-type">
            <div className="colaps-menu-container">
                    <h3>Filter by type</h3>
                    {colapseType ? 
                    <IoMdArrowDropupCircle
                    className ="collapse-button" 
                    onClick ={() => setcolapseType(!colapseType)}
                    size={24}
                    />
                    :
                    <IoMdArrowDropdownCircle
                    className ="collapse-button" 
                    onClick ={() => setcolapseType(!colapseType)}
                    size={24}
                    />
                }
            </div>
                <div className = {colapseType ? "filter-active" : "filter-hidden"}>
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
        </div>
    )
}

export default CheckboxSearchMenu;