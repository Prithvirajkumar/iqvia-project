import * as actionTypes from "./actionTypes";

export const fetchSelectedCity = (
  cityName,
  weatherIcon,
  temperature,
  weatherDescription,
  windSpeed,
  windDeg,
  pressure,
  nextFiveDays
) => {
  return {
    type: actionTypes.FETCH_SELECTED_CITY,
    cityName: cityName,
    weatherIcon: weatherIcon,
    temperature: temperature,
    weatherDescription: weatherDescription,
    windSpeed: windSpeed,
    windDeg: windDeg,
    pressure: pressure,
    nextFiveDays: nextFiveDays,
  };
};

export const addCityToList = (
  cityName,
  weatherIcon,
  temperature,
  weatherDescription,
  windSpeed,
  windDeg,
  pressure,
  nextFiveDays
) => {
  return {
    type: actionTypes.ADD_TO_CITY_LIST,
    cityName: cityName,
    weatherIcon: weatherIcon,
    temperature: temperature,
    weatherDescription: weatherDescription,
    windSpeed: windSpeed,
    windDeg: windDeg,
    pressure: pressure,
    nextFiveDays: nextFiveDays,
  };
};

export const removeCityFromList = (cityName) => {
  return {
    type: actionTypes.REMOVE_FROM_CITY_LIST,
    cityName: cityName,
  };
};

export const clearCityList = () => {
  return {
    type: actionTypes.CLEAR_CITY_LIST,
  };
};

export const clearCity = () => {
  return {
    type: actionTypes.CLEAR_CITY_LIST,
  };
};
