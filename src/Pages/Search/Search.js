import React from 'react';
import './Search.css';
import { SearchBar } from '../../components/';

// create input for search
//    user types in location, search automatically
//      display location name on card
// add useEffect
// add redux

function Search() {
  return (
    <div className='Search-container'>
      Search Page
      <SearchBar />
    </div>
  );
}

export default Search;
