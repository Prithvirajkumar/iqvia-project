import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import RefreshIcon from "@material-ui/icons/Refresh";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import classes from "./SearchedCity.module.css";
import {
  getCityWeatherHandler,
  getCityForcastHandler,
} from "../../../utils/getCityWeatherHandler";
import {
  fetchSelectedCity,
  fetchSelectedCityForecast,
} from "../../../store/actions/cityWeather";
import { iconUrlGenerator } from "../../../utils/iconUrlGenerator";
import {
  dayGenerator,
  monthGenerator,
} from "../../../utils/dayAndMonthGenerator";

const SearchedCity = () => {
  const dispatch = useDispatch();
  const cityWeather = useSelector((state) => state.cityWeather);
  const cityWeatherForecast = useSelector((state) => state.cityWeatherForecast);

  let weatherDesc = cityWeather[0].weatherDescription;
  let upperCasedweatherDesc =
    weatherDesc.charAt(0).toUpperCase() + weatherDesc.slice(1);

  return (
    <React.Fragment>
      <div>
        <div className={classes.cityTitleContainer}>
          <h3 className={classes.cityTitle}>{cityWeather[0].cityName}</h3>
          <Button
            className={classes.refreshButton}
            color="primary"
            startIcon={
              <RefreshIcon
                className={classes.removeIcon}
                onClick={() => {
                  getCityForcastHandler(cityWeather.cityName).then(
                    (response) => {
                      if (response) {
                        dispatch(fetchSelectedCityForecast(response));
                      }
                    }
                  );
                  getCityWeatherHandler(cityWeather[0].cityName).then(
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
              />
            }
          ></Button>
        </div>
        <Grid container item xs={12}>
          <Grid item xs={4}>
            <img
              className={classes.weatherIcon}
              src={iconUrlGenerator(cityWeather[0].weatherIcon)}
              alt="cityImage"
            ></img>
          </Grid>
          <Grid item xs={8}>
            <div className={classes.weatherDetailsContainer}>
              <List>
                <ListItem>
                  <ListItemText>
                    Temperature: {Math.trunc(cityWeather[0].temperature)}°C
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Description: {upperCasedweatherDesc}
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Wind: {cityWeather[0].windSpeed}ms {cityWeather[0].windDeg}
                    deg
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Pressure: {cityWeather[0].pressure}
                  </ListItemText>
                </ListItem>
              </List>
            </div>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          {cityWeatherForecast.cityName &&
            cityWeatherForecast.cityName.map((eachForecast) => {
              return (
                <Grid
                  item
                  xs={2}
                  key={eachForecast.cityName + Math.random()}
                  className={classes.forecastContainer}
                >
                  <div>
                    <List>
                      <ListItem>
                        <ListItemText>
                          {eachForecast.time.getDate()}{" "}
                          {monthGenerator(eachForecast.time)}
                        </ListItemText>
                      </ListItem>
                    </List>
                    <List>
                      <ListItem>
                        <ListItemText>
                          {dayGenerator(eachForecast.time)}
                        </ListItemText>
                      </ListItem>
                    </List>
                    <img
                      className={classes.weatherForeCastIcon}
                      src={iconUrlGenerator(eachForecast.weatherIcon)}
                      alt="cityForecastImage"
                    ></img>
                    <List>
                      <ListItem>
                        <ListItemText>
                          {Math.trunc(eachForecast.averageTemp)}°C
                        </ListItemText>
                      </ListItem>
                    </List>
                  </div>
                </Grid>
              );
            })}
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default SearchedCity;
