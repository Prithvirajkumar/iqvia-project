import React from "react";
import { useSelector } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import ClearIcon from "@material-ui/icons/Clear";

import classes from "./SearchedCitiesList.module.css";

const SearchedCitiesList = () => {
  const cityWeatherList = useSelector((state) => state.cityWeatherList);
  console.log(cityWeatherList);
  cityWeatherList.forEach((c) => {
    console.log(c.temperature);
  });
  return (
    <React.Fragment>
      <div className={classes.citiesList}>
        <List>
          <h3>Recent Locations</h3>
          {cityWeatherList.map((cityWeather) => {
            return (
              <div
                className={classes.listItems}
                key={
                  cityWeather.cityName + cityWeather.temperature + Math.random()
                }
              >
                <ListItem className={classes.listItemText} button>
                  <ListItemText>
                    {cityWeather.cityName} - {cityWeather.temperature}
                  </ListItemText>
                </ListItem>
                <Button
                  className={classes.listButton}
                  color="secondary"
                  startIcon={<ClearIcon className={classes.removeIcon} />}
                ></Button>
              </div>
            );
          })}
        </List>
      </div>
    </React.Fragment>
  );
};

export default SearchedCitiesList;
