import React from 'react';
import { Link } from 'react-router-dom';
import './weatherCard.css';

function WeatherCard({ data }) {
  return (
    <Link className='WeatherCard-link' to={`/weather/details/${data.location}`}>
      <div className='WeatherCard-container'>
        <h4>{data.location}</h4>
        <h2>{data.data.currently.temperature}°f</h2>
        <h4>More info</h4>
      </div>
    </Link>
  );
}

export default WeatherCard;
