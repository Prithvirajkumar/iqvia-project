import * as actionTypes from "../actions/actionTypes";

const initialState = [];

const addCityToList = (state, action) => {
  return (state = [
    ...state,
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

const removeCityFromList = (state, action) => {
  return (state = state + 4);
};

const cityWeatherListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CITY_LIST:
      return addCityToList(state, action);
    case actionTypes.REMOVE_FROM_CITY_LIST:
      return removeCityFromList(state, action);
    default:
      return state;
  }
};

export default cityWeatherListReducer;
