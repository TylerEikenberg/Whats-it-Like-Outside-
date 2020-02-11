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

export const fetchWeatherFailure = error => {
  return { type: actions.FETCH_WEATHER_FAILURE, payload: error };
};

export const fetchWeatherDataAsync = location => {
  return async dispatch => {
    try {
      const { data } = await axios.get(
        `https://weather-api-tse.herokuapp.com/weather?address=${location}`
      );
      dispatch(fetchWeatherSuccess(data));
    } catch (error) {
      dispatch(fetchWeatherFailure(error.response));
    }
  };
};
