import * as actionTypes from "../actions/actionTypes";

const initialState = [];

const addCityToList = (state, action) => {
  if (state.length === 0) {
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
      ...state,
    ]);
  } else if (state.length >= 1 && state.length <= 7) {
    const found = state.some((el) => el.cityName === action.cityName);
    if (!found) {
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
        ...state,
      ]);
    } else {
      return state;
    }
  } else if (state.length >= 8) {
    const found = state.some((el) => el.cityName === action.cityName);
    if (!found) {
      state.pop();
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
        ...state,
      ]);
    } else {
      return state;
    }
  }
};

const removeCityFromList = (state, action) => {
  for (let i = 0; i < state.length; i++) {
    if (state[i].cityName === action.cityName) {
      state.splice(i, 1);
      i--;
    }
  }
  return (state = [...state]);
};

const clearCityList = (state) => {
  return (state = initialState);
};

const cityWeatherListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CITY_LIST:
      return addCityToList(state, action);
    case actionTypes.REMOVE_FROM_CITY_LIST:
      return removeCityFromList(state, action);
    case actionTypes.CLEAR_CITY_LIST:
      return clearCityList(state);
    default:
      return state;
  }
};

export default cityWeatherListReducer;
