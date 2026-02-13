import React from 'react'

function Search({getSearchData}) {
    const handleChange = (e) =>{
        getSearchData(e.target.value);
    }
  return (
    <div>
        <input type='text' placeholder='Search for countries...'
        onChange={handleChange} style={{marginBottom:"10px", height:"25px", minWidth:"600px"}} />
    </div>
  )
}

export default Search