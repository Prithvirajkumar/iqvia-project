import * as actionTypes from "../actions/actionTypes";

const initialState = [];

const fetchSelectedCityForecast = (state, action) => {
  console.log("REDUCER", action);
  return (state = action);
};

const clearCityForecast = (state) => {
  return (state = initialState);
};

const cityWeatherForecast = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SELECTED_CITY_FORECAST:
      return fetchSelectedCityForecast(state, action);
    case actionTypes.CLEAR_SELECTED_CITY_FORECAST:
      return clearCityForecast(state, action);
    default:
      return state;
  }
};

export default cityWeatherForecast;
