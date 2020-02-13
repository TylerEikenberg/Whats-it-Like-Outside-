const initState = {
  data: {},
  loading: false,
  error: null
};

const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_WEATHER_BEGIN':
      return { ...state, loading: true };
    case 'FETCH_WEATHER_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_WEATHER_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default weatherReducer;
