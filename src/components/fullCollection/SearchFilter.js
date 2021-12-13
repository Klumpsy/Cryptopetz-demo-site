import { BsSearch } from "react-icons/bs"
import { useState } from "react"

const SearchFilter = ({petz, placeholder})=> { 

    const [input, setInput] = useState("")

    function handleSearch() { 
        petz.filter((pet) => { 
            console.log("clicked")
            return (
                input.includes(pet.assetId)
            )
        })
    }
   
    return (
        <div>
            <div className="searchInputs">
                <input 
                className="petz-searchbox" 
                type="text" 
                name ="search-form"
                id="search-form"
                placeholder= {placeholder} 
                value = {input}
                onChange={(event) => setInput(event.target.value)}
                />
                <button onClick = {handleSearch}><BsSearch className="search-icon"/></button>
            </div>
        </div>
    )
}

export default SearchFilter


