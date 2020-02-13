import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import get from 'lodash/get';
import './Search.css';
import { SearchBar, WeatherCard } from '../../components/';

// create input for search
//    user types in location, search automatically
//      display location name on card
// add useEffect
// add redux

/**
 * TODO:
 * figure out why I cant get the currently data from state...
 */
function Search() {
  const { data, loading, error } = useSelector(state => state.weatherReducer);

  // get(data, 'data.daily')

  // console.log(data.data?.daily);
  return (
    <div className='Search-container'>
      Search Page
      <SearchBar />
      {data.error ? data.error : null}
      {loading ? 'Loading' : null}
      {data.location ? <WeatherCard data={data} /> : null}
      {data.data ? data.data.daily.summary : null}
    </div>
  );
}

export default Search;
