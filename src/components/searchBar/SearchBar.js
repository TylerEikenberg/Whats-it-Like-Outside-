import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SearchBar.css';
import useDebounce from '../../hooks/useDebounce';
import { fetchWeatherDataAsync } from '../../redux/actions/weatherActions';

function SearchBar() {
  const [location, setLocation] = useState('');
  const data = useSelector(state => state.weatherReducer);
  const dispatch = useDispatch();
  const debouncedLocation = useDebounce(location, 800);
  useEffect(() => {
    dispatch(fetchWeatherDataAsync(debouncedLocation));
  }, [debouncedLocation, dispatch]);

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
