import {useState, useEffect } from "react";

//Import checkboxes for searchfilters 
import {rarityCheckboxes} from "../SearchDataOptions/Raritycheckboxes";
import {typeCheckboxes} from "../SearchDataOptions/Typecheckboxes"; 
import {categoryCheckboxes} from "../SearchDataOptions/Categorycheckboxes"; 
import {backgroundCheckboxes} from "../SearchDataOptions/Backgroundcheckboxes";
import {cryptoLogoCheckboxes} from "../SearchDataOptions/CryptoLogoCheckboxes";
import {eggshellCheckboxes} from "../SearchDataOptions/EggshellCheckboxes";
import {standCheckboxes} from "../SearchDataOptions/StandCheckboxes";

//import react icons 
import {IoMdArrowDropdownCircle, IoMdArrowDropupCircle} from "react-icons/io"; 

const CheckboxSearchMenu = ({petz, handleUpdate, searchMenu}) => { 

//Checkbox type state 
    const [rarity, setRarity] = useState([]);
    const [type, setType] = useState([]);
    const [category, setCategory] = useState([]);
    const [backgrounds, setBackground] = useState([]);
    const [cryptoLogo, setCryptoLogo] = useState([]);
    const [eggshell, setEggshell] = useState([]);
    const [stand, setStand] = useState([]);

//Colaps menu state
    const [colapseCategory, setColapseCategory] = useState(false); 
    const [colapseRarity, setcolapseRarity] = useState(false); 
    const [colapseBackground, setcolapseBackground] = useState(false); 
    const [colapseType, setcolapseType] = useState(false); 
    const [colapseCryptoLogo, setcolapseCryptoLogo] = useState(false); 
    const [colapseEggshell, setcolapseEggshell] = useState(false);
    const [colapseStand, setcolapseStand] = useState(false);  

//Filtered units 
    const filteredUnits =
        rarity.length       || 
        type.length         || 
        category.length     || 
        backgrounds.length  || 
        cryptoLogo.length   || 
        eggshell.length     ||
        stand.length
          ? petz.filter((pet) => {
              return (
                (!rarity.length || rarity.includes(pet.data.rarity)) &&
                (!type.length || type.includes(pet.data.types.length > 0 ? pet.data.types[0] || pet.data.types[1] : pet.data.types[0])) &&
                (!category.length || category.includes(pet.category)) &&
                (!backgrounds.length || backgrounds.includes(pet.data.traits.background)) &&
                (!cryptoLogo.length || cryptoLogo.includes(pet.data.traits.cryptoLogos)) &&
                (!eggshell.length || eggshell.includes(pet.data.traits.eggShell)) &&
                (!stand.length || stand.includes(pet.data.traits.stand))
              );
            })
          : 
          petz;

//Check if checkboxes changed => callback to parent for updated view of petz      
    useEffect(() => { 
        handleUpdate(filteredUnits)
    }, [rarity, type, category, backgrounds, cryptoLogo, eggshell, stand])


    return (
        <div className= {searchMenu ? "search-menu-active" : "search-menu-hidden"}>
             <div className="check-for-type">
                <div className="colaps-menu-container">
                    <h3>Filter by Category</h3>
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
                        onChange = {(event) => 
                            setCategory((prev) => event.target.checked ? [...prev, categoryCheckbox.category] 
                            : 
                            prev.includes(categoryCheckbox.category) && prev.length > 0 ? prev.filter(e => e !== categoryCheckbox.category) 
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
                    <h3>Filter by Rarity</h3>
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
                        onChange = {(event) => 
                            setRarity((prev) => event.target.checked ? [...prev, rarityCheckbox.rarity] 
                            : 
                            prev.includes(rarityCheckbox.rarity) && prev.length > 0 ? prev.filter(e => e !== rarityCheckbox.rarity) 
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
                    <h3>Filter by Background</h3>
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
                        onChange = {(event) => 
                            setBackground((prev) => event.target.checked ? [...prev, backgroundCheckbox.background] 
                            : 
                            prev.includes(backgroundCheckbox.background) && prev.length > 0 ? prev.filter(e => e !== backgroundCheckbox.background) 
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
                    <h3>Filter by Type</h3>
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
                        onChange = {(event) => 
                            setType((prev) => event.target.checked ? [...prev, typeCheckbox.type] 
                            : 
                            prev.includes(typeCheckbox.type) && prev.length > 0 ? prev.filter(e => e !== typeCheckbox.type) 
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
                    <h3>Filter by Crypto Logo</h3>
                    {colapseCryptoLogo ? 
                    <IoMdArrowDropupCircle
                    className ="collapse-button" 
                    onClick ={() => setcolapseCryptoLogo(!colapseCryptoLogo)}
                    size={24}
                    />
                    :
                    <IoMdArrowDropdownCircle
                    className ="collapse-button" 
                    onClick ={() => setcolapseCryptoLogo(!colapseCryptoLogo)}
                    size={24}
                    />
                }
                </div >
                <div className = {colapseCryptoLogo ? "filter-active" : "filter-hidden"}>
                    {cryptoLogoCheckboxes.map((cryptoLogoCheckbox, i) => (
                        <div className ="type-box" key = {i}>
                        <label>{cryptoLogoCheckbox.cryptoLogo}</label>
                        <input
                        type ="checkbox"
                        onChange = {(event) => 
                            setCryptoLogo((prev) => event.target.checked ? [...prev, cryptoLogoCheckbox.cryptoLogo] 
                            : 
                            prev.includes(cryptoLogoCheckbox.cryptoLogo) && prev.length > 0 ? prev.filter(e => e !== cryptoLogoCheckbox.cryptoLogo) 
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
                    <h3>Filter by Egg Shell</h3>
                    {colapseEggshell ? 
                    <IoMdArrowDropupCircle
                    className ="collapse-button" 
                    onClick ={() => setcolapseEggshell(!colapseEggshell)}
                    size={24}
                    />
                    :
                    <IoMdArrowDropdownCircle
                    className ="collapse-button" 
                    onClick ={() => setcolapseEggshell(!colapseEggshell)}
                    size={24}
                    />
                }
                </div >
                <div className = {colapseEggshell ? "filter-active" : "filter-hidden"}>
                    {eggshellCheckboxes.map((eggshellCheckbox, i) => (
                        <div className ="type-box" key = {i}>
                        <label>{eggshellCheckbox.eggShell}</label>
                        <input
                        type ="checkbox"
                        onChange = {(event) => 
                            setEggshell((prev) => event.target.checked ? [...prev, eggshellCheckbox.eggShell] 
                            : 
                            prev.includes(eggshellCheckbox.eggShell) && prev.length > 0 ? prev.filter(e => e !== eggshellCheckbox.eggShell) 
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
                    <h3>Filter by Stand</h3>
                    {colapseStand ? 
                    <IoMdArrowDropupCircle
                    className ="collapse-button" 
                    onClick ={() => setcolapseStand(!colapseStand)}
                    size={24}
                    />
                    :
                    <IoMdArrowDropdownCircle
                    className ="collapse-button" 
                    onClick ={() => setcolapseStand(!colapseStand)}
                    size={24}
                    />
                }
                </div >
                <div className = {colapseStand ? "filter-active" : "filter-hidden"}>
                    {standCheckboxes.map((standCheckbox, i) => (
                        <div className ="type-box" key = {i}>
                        <label>{standCheckbox.stand}</label>
                        <input
                        type ="checkbox"
                        onChange = {(event) => 
                            setStand((prev) => event.target.checked ? [...prev, standCheckbox.stand] 
                            : 
                            prev.includes(standCheckbox.stand) && prev.length > 0 ? prev.filter(e => e !== standCheckbox.stand) 
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