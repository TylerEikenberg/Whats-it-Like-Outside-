import React, { useState, useEffect } from 'react';
import './SearchBar.css';

function SearchBar() {
  const [location, setLocation] = useState('');
  useEffect(() => {}, [location]);

  return (
    <div className='SearchBar-container'>
      <form className='SearchBar-form'>
        <label>Get Weather</label>
        <input
          type='text'
          placeholder='location'
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBar;
