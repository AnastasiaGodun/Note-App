import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Search.style.css'


const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <SearchIcon className="search-icon" size='1.3cm' />
      <input 
      onChange={(event)=>
        handleSearchNote(event.target.value)
      }
      type='text' placeholder='type to search...' />
    </div>
  )
}

export default Search
