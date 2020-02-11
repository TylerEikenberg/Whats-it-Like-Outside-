import React from 'react';
import { useSelector } from 'react-redux';
import './Search.css';
import { SearchBar, WeatherCard } from '../../components/';

// create input for search
//    user types in location, search automatically
//      display location name on card
// add useEffect
// add redux

function Search() {
  const { data, loading, error } = useSelector(state => state.weatherReducer);
  console.log(data);

  return (
    <div className='Search-container'>
      Search Page
      <SearchBar />
      {data.location ? <WeatherCard data={data} /> : null}
    </div>
  );
}

export default Search;
