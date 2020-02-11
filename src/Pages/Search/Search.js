import React, { useState, useEffect } from 'react';
import './Search.css';
import { SearchBar } from '../../components/';

// create input for search
//    user types in location, search automatically
//      display location name on card
// add useEffect
// add redux

function Search() {
  const [location, setLocation] = useState('');

  useEffect(() => {
    // add fetch
  }, [location]);

  return (
    <div className='Search-container'>
      Search Page
      <SearchBar />
    </div>
  );
}

export default Search;
