import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import SeachedCitiesList from "./SearchedCitiesList/SearchedCitiesList";
import SearchedCity from "./SearchedCity/SearchedCity";

const Dashboard = () => {
  return (
    <React.Fragment>
      <SearchBar></SearchBar>
      <SeachedCitiesList></SeachedCitiesList>
      <SearchedCity></SearchedCity>
    </React.Fragment>
  );
};

export default Dashboard;
