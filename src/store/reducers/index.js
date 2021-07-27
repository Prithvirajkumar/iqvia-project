import cityWeather from "./cityWeather";
import cityWeatherList from "./cityWeatherList";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  cityWeather,
  cityWeatherList,
});

export default allReducers;
