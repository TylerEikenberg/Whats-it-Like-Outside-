import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherDataAsync } from '../../redux/actions/weatherActions';
import './Details.css';

// TODO:
// fetch data on load of page incase user comes to this page without searching
function Details({ match }) {
  const { data, loading, error } = useSelector(state => state.weatherReducer);
  return <div>Details Page for {data.location}</div>;
}

export default Details;
