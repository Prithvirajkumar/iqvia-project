import * as actionTypes from "../actions/actionTypes";

const initialState = [];

const fetchSelectedCity = (state, action) => {
  return (state = [
    {
      cityName: action.cityName,
      weatherIcon: action.weatherIcon,
      temperature: action.temperature,
      weatherDescription: action.weatherDescription,
      windSpeed: action.windSpeed,
      windDeg: action.windDeg,
      pressure: action.pressure,
      nextFiveDays: action.nextFiveDays,
    },
  ]);
};

const clearCity = (state) => {
  return (state = initialState);
};

const cityWeatherList = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SELECTED_CITY:
      return fetchSelectedCity(state, action);
    case actionTypes.CLEAR_CITY_LIST:
      return clearCity(state);
    default:
      return state;
  }
};

export default cityWeatherList;
