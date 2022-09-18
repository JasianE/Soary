import React, {useState} from 'react'

function SearchDrugs(){
    const [query, setQuery] = useState('')
    return(
        <div>
            <input
            type='text'
            value={query}
            onChange={(e) => {setQuery(e.target.value)}}
            placeholder='Query'
            />
            
        </div>
    )
}

export default SearchDrugs