import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from '@mdi/react';
import { mdiHeart } from '@mdi/js';
import { fetchWeatherDataAsync } from '../../redux/actions/weatherActions';
import './Details.css';

function Details({ match }) {
  const [isFavorite, setFavorite] = useState(false);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.weatherReducer);

  const heartClickHandler = () => {
    setFavorite(!isFavorite);
  };

  useEffect(() => {
    dispatch(fetchWeatherDataAsync(match.params.location));
  }, [dispatch, match.params.location]);

  return (
    <div className='Details-page-wrapper'>
      {loading && !error ? 'loading' : null}
      {data.data && !error ? (
        <div className='Details-weather-container'>
          <section className='Details-temp-box'>
            <h1 className='Details-current-temp'>
              {data.data.currently.temperature}
            </h1>
            <div className='Details-high-low'>
              <h5 className='Details-small-temp'>
                High: {data.data.daily.data[0].temperatureHigh}°f
              </h5>
              <h5 className='Details-small-temp'>
                Low: {data.data.daily.data[0].temperatureLow}°f
              </h5>
            </div>
          </section>
          <section className='Details-extras'>
            <h4>
              {data.data.currently.summary}. {data.data.daily.data[0].summary}
            </h4>
            <h4>{data.data.currently.precipProbability}% chance of rain.</h4>
            <h4>{data.data.currently.windSpeed}MPH Wind speed.</h4>
            <h4>Humidity is at {data.data.daily.data[0].humidity}%.</h4>
          </section>
        </div>
      ) : null}

      <section className='Details-lower'>
        <button
          className={`Details-heart ${isFavorite ? 'Details-heart-on' : null}`}
          onClick={heartClickHandler}
        >
          <Icon
            className={
              isFavorite ? 'Details-heart-icon-on' : 'Details-heart-icon'
            }
            path={mdiHeart}
            size={2}
          />
        </button>
      </section>
    </div>
  );
}

export default Details;
