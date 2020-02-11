import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherDataAsync } from '../../redux/actions/weatherActions';
import './SearchBar.css';
import useDebounce from '../../hooks/useDebounce';

function SearchBar() {
  const [location, setLocation] = useState('');
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.weatherReducer);
  const debouncedLocation = useDebounce(location, 500);

  useEffect(() => {
    dispatch(fetchWeatherDataAsync(debouncedLocation));
  }, [debouncedLocation, dispatch]);

  return (
    <div className='SearchBar-container'>
      <form className='SearchBar-form'>
        <label>Get Weather</label>
        <input
          className='SearchBar-input'
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
