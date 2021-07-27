import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

import classes from "./SearchBar.module.css";
import { getCityWeatherHandler } from "../../../utils/getCityWeatherHandler";
import {
  addCityToList,
  fetchSelectedCity,
} from "../../../store/actions/cityWeather";

const SearchBar = () => {
  const [searchStateforButton, setSearchStateforButton] = useState("");
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div>
        <TextField
          className={classes.searchbar}
          id="search-by-city-name"
          name="search"
          label="Search by city name"
          variant="outlined"
          onKeyUp={(event) => {
            setSearchStateforButton(event.target.value);
            if (event.keyCode === 13) {
              getCityWeatherHandler(event.target.value).then((response) => {
                console.log(response);
                dispatch(
                  addCityToList(
                    response.data.name,
                    response.data.weather[0].id,
                    response.data.main.temp,
                    response.data.weather[0].description,
                    response.data.wind.speed,
                    response.data.wind.deg,
                    response.data.main.pressure
                  )
                );
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
              });
            }
          }}
        />
        <Button
          className={classes.searchButton}
          variant="outlined"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => {
            if (searchStateforButton) {
              getCityWeatherHandler(searchStateforButton);
            }
          }}
        ></Button>
      </div>
      <Divider></Divider>
    </React.Fragment>
  );
};

export default SearchBar;
