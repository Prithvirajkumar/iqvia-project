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

export const fetchSelectedCityForecast = (
  cityName,
  time,
  weatherIcon,
  averageTemp
) => {
  return {
    type: actionTypes.FETCH_SELECTED_CITY_FORECAST,
    cityName: cityName,
    time: time,
    weatherIcon: weatherIcon,
    averageTemp: averageTemp,
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

export const clearCityForecast = () => {
  return {
    type: actionTypes.CLEAR_SELECTED_CITY_FORECAST,
  };
};
