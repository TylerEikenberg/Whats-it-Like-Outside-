import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherDataAsync } from '../../redux/actions/weatherActions';
import './Details.css';

// TODO:
// fetch data on load of page incase user comes to this page without searching

/**
 * Details to include:
 * 1.{data.location}
          {data.data.currently.summary}
          {data.data.currently.precipProbability}
          {data.data.currently.temperature}
          {data.data.currently.windSpeed}
          {data.data.daily.data[0].summary}
          {data.data.daily.data[0].temperatureHigh}
          {data.data.daily.data[0].temperatureLow}
          {data.data.daily.data[0].humidity}
 */
function Details({ match }) {
  const { data, loading, error } = useSelector(state => state.weatherReducer);
  return (
    <div className='Details-page-wrapper'>
      Details Page for location
      <div className='Details-weather-container'>
        <section className='Details-temp-box'>
          <h1 className='Details-current-temp'>56.3</h1>
          <div className='Details-high-low'>
            <h5 className='Details-small-temp'>High: 58°f</h5>
            <h5 className='Details-small-temp'>Low: 39°f</h5>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Details;
