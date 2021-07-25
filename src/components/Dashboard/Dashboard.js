import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import SearchBar from "./SearchBar/SearchBar";
import SeachedCitiesList from "./SearchedCitiesList/SearchedCitiesList";
import SearchedCity from "./SearchedCity/SearchedCity";
import classes from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Grid className={classes.gridDisplay} item xs={12}>
        <Grid item xs={6}>
          <Paper>
            <SearchBar></SearchBar>
            <SeachedCitiesList></SeachedCitiesList>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <SearchedCity></SearchedCity>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Dashboard;
