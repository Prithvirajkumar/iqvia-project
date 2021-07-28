import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import ClearIcon from "@material-ui/icons/Clear";

import classes from "./SearchedCitiesList.module.css";
import {
  getCityWeatherHandler,
  getCityForcastHandler,
} from "../../../utils/getCityWeatherHandler";
import {
  fetchSelectedCity,
  fetchSelectedCityForecast,
  clearCityList,
  clearCity,
  removeCityFromList,
  clearCityForecast,
} from "../../../store/actions/cityWeather";

const SearchedCitiesList = () => {
  const dispatch = useDispatch();
  const cityWeatherList = useSelector((state) => state.cityWeatherList);
  return (
    <React.Fragment>
      <div className={classes.citiesList}>
        <List>
          <h3>Recent Locations</h3>
          {cityWeatherList.map((cityWeather) => {
            let weatherDesc = cityWeather.weatherDescription;
            let cityName = cityWeather.cityName;
            let upperCasedweatherDesc =
              weatherDesc.charAt(0).toUpperCase() + weatherDesc.slice(1);
            return (
              <div
                className={classes.listItems}
                key={
                  cityWeather.cityName + cityWeather.temperature + Math.random()
                }
              >
                <ListItem
                  className={classes.listItemText}
                  button
                  onClick={() => {
                    getCityForcastHandler(cityWeather.cityName).then(
                      (response) => {
                        if (response) {
                          dispatch(fetchSelectedCityForecast(response));
                        }
                      }
                    );
                    getCityWeatherHandler(cityWeather.cityName).then(
                      (response) => {
                        if (response) {
                          dispatch(
                            fetchSelectedCity(
                              response.data.name,
                              response.data.weather[0].id,
                              response.data.main.temp,
                              response.data.weather[0].description,
                              response.data.wind.speed,
                              response.data.wind.deg,
                              response.data.main.pressure
                            )
                          );
                        }
                      }
                    );
                  }}
                >
                  <ListItemText>
                    {cityWeather.cityName}:{" "}
                    {Math.trunc(cityWeather.temperature)}°C{" "}
                    {upperCasedweatherDesc}
                  </ListItemText>
                </ListItem>
                <Button
                  className={classes.listButton}
                  color="secondary"
                  startIcon={
                    <ClearIcon
                      className={classes.removeIcon}
                      onClick={() => {
                        dispatch(removeCityFromList(cityName));
                      }}
                    />
                  }
                ></Button>
              </div>
            );
          })}
        </List>
      </div>
      <div className={classes.clearButtonDiv}>
        {cityWeatherList.length >= 2 && (
          <Button
            color="secondary"
            variant="contained"
            className={classes.clearButton}
            onClick={() => {
              dispatch(clearCityList());
              dispatch(clearCity());
              dispatch(clearCityForecast());
            }}
          >
            Clear
          </Button>
        )}
      </div>
    </React.Fragment>
  );
};

export default SearchedCitiesList;
