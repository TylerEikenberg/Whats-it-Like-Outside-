import axios from 'axios';

const actions = {
  FETCH_WEATHER_BEGIN: 'FETCH_WEATHER_BEGIN',
  FETCH_WEATHER_SUCCESS: 'FETCH_WEATHER_SUCCESS',
  FETCH_WEATHER_FAILURE: 'FETCH_WEATHER_FAILURE'
};

export const fetchWeatherData = () => {
  return { type: actions.FETCH_WEATHER_BEGIN };
};

export const fetchWeatherSuccess = data => {
  return { type: actions.FETCH_WEATHER_SUCCESS, payload: data };
};

export const fetchWeatherFailer = error => {
  return { type: actions.FETCH_WEATHER_FAILURE, payload: error };
};

export const fetchWeatherDataAsync = location => {};
