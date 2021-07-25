import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

import classes from "./SearchBar.module.css";
import { getCityWeatherHandler } from "../../../utils/getCityWeatherHandler";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [searchStateforButton, setSearchStateforButton] = useState("");
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
              getCityWeatherHandler(event.target.value);
              setSearch(event.target.value);
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
              setSearch(searchStateforButton);
            }
          }}
        ></Button>
      </div>
      <Divider></Divider>
    </React.Fragment>
  );
};

export default SearchBar;
