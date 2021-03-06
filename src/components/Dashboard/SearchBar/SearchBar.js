import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

import classes from "./SearchBar.module.css";
import {
  getCityWeatherHandler,
  getCityForcastHandler,
} from "../../../utils/getCityWeatherHandler";
import {
  addCityToList,
  fetchSelectedCity,
  fetchSelectedCityForecast,
} from "../../../store/actions/cityWeather";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [searchStateforButton, setSearchStateforButton] = useState("");

  const [inputValue, setInputValue] = useState("");
  const handleUserInput = (e) => {
    setInputValue(e.target.value);
  };
  const resetInputField = () => {
    setInputValue("");
  };

  const [errorState, setErrorState] = useState(false);
  const [errorStateLabel, setErrorStateLabel] = useState("Search by city name");

  return (
    <React.Fragment>
      <div className={classes.searchbarContainer}>
        <TextField
          className={classes.searchbar}
          error={errorState}
          id="search-by-city-name"
          name="search"
          label={errorStateLabel}
          variant="outlined"
          value={inputValue}
          onChange={handleUserInput}
          onKeyUp={(event) => {
            setSearchStateforButton(event.target.value);
            if (event.keyCode === 13) {
              getCityForcastHandler(event.target.value).then((response) => {
                if (response) {
                  dispatch(fetchSelectedCityForecast(response));
                }
              });
              getCityWeatherHandler(event.target.value).then((response) => {
                if (response) {
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
                  resetInputField();
                  setErrorState(false);
                  setErrorStateLabel("Search by city name");
                } else {
                  setErrorState(true);
                  setErrorStateLabel("Please enter a valid city name");
                }
              });
            }
          }}
        />
        <Button
          className={classes.searchButton}
          variant="outlined"
          color="primary"
          startIcon={<SearchIcon className={classes.addIcon} />}
          onClick={() => {
            if (searchStateforButton) {
              getCityWeatherHandler(searchStateforButton).then((response) => {
                if (response) {
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
                  resetInputField();
                  setErrorState(false);
                  setErrorStateLabel("Search by city name");
                } else {
                  setErrorState(true);
                  setErrorStateLabel("Please enter a valid city name");
                }
              });
            }
          }}
        ></Button>
      </div>
    </React.Fragment>
  );
};

export default SearchBar;
