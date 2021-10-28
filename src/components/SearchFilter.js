import { BsSearch } from "react-icons/bs"

const SearchFilter = ({placeholder, handleSearch})=> { 

 
    return (
        <div>
            <div className="searchInputs">
                <input className="petz-searchbox" type="text" placeholder= {placeholder} onChange={handleSearch}/>
                <BsSearch className="search-icon"/>
            </div>
        </div>
    )
}

export default SearchFilter