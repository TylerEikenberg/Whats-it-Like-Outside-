import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className='SearchBar-container'>
      <form className='SearchBar-form'>
        <label>Get Weather</label>
        <input type='text' placeholder='location' />
      </form>
    </div>
  );
}

export default SearchBar;
