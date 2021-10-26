

const SearchFilter = ({handleSearch})=> { 
 
    return (
        <div>
            <input className="petz-searchbox" type="text" placeholder="Search on type/rarity" onChange={handleSearch}/>
        </div>
    )
}

export default SearchFilter