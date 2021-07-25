import React from "react";
import TextField from "@material-ui/core/TextField";
import classes from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <React.Fragment>
      <h1>SearchBar</h1>
      <TextField
        className={classes.searchbar}
        id="search-by-city-name"
        name="search"
        label="Search by city name"
        variant="outlined"
        onKeyUp={(event) => {
          //   setSearchForClick(event.target.value);
          //   if (event.keyCode === 13) {
          //     getMoviesHandler(event.target.value);
          //     setSearch(event.target.value);
          //   }
        }}
      />
    </React.Fragment>
  );
};

export default SearchBar;
