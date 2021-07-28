import cityWeather from "./cityWeather";
import cityWeatherList from "./cityWeatherList";
import cityWeatherForecast from "./cityWeatherForecast";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  cityWeather,
  cityWeatherForecast,
  cityWeatherList,
});

export default allReducers;
