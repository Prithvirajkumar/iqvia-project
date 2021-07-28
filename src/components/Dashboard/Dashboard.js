import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import SearchBar from "./SearchBar/SearchBar";
import SeachedCitiesList from "./SearchedCitiesList/SearchedCitiesList";
import SearchedCity from "./SearchedCity/SearchedCity";
import classes from "./Dashboard.module.css";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const cityWeather = useSelector((state) => state.cityWeather);
  const cityWeatherList = useSelector((state) => state.cityWeatherList);
  return (
    <React.Fragment>
      <div>
        <h1 className={classes.title}>IQVIA Challenge Project</h1>
        <div className={classes.dashboardContainer}>
          <Grid item xs={6}>
            <Paper className={classes.searchAndListContainer}>
              <div>
                <SearchBar></SearchBar>
                {cityWeatherList.length >= 1 && (
                  <SeachedCitiesList></SeachedCitiesList>
                )}
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            {cityWeather.length >= 1 && (
              <Paper className={classes.searchedCity}>
                <SearchedCity></SearchedCity>
              </Paper>
            )}
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
