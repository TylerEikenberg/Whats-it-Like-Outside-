import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchBar.css';
import useDebounce from '../../hooks/useDebounce';

function SearchBar() {
  const [location, setLocation] = useState('');
  const debouncedLocation = useDebounce(location, 800);
  useEffect(() => {
    const fetchData = async location => {
      const data = await axios.get(
        `https://weather-api-tse.herokuapp.com/weather?address=${location}`
      );
      console.log('data: ', data);
    };
    fetchData(debouncedLocation);
  }, [debouncedLocation]);

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
