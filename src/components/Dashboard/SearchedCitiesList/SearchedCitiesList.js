import React from "react";
import { useSelector } from "react-redux";

const SeachedCitiesList = () => {
  const cityWeatherList = useSelector((state) => state.cityWeatherList);
  console.log(cityWeatherList);
  cityWeatherList.forEach((c) => {
    console.log(c.temperature);
  });
  return (
    <React.Fragment>
      <h3>Recent Locations</h3>
      <div>
        {cityWeatherList.map((cityWeather) => {
          return (
            <li
              key={
                cityWeather.cityName + cityWeather.temperature + Math.random()
              }
            >
              {cityWeather.cityName} - {cityWeather.temperature}
            </li>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default SeachedCitiesList;
