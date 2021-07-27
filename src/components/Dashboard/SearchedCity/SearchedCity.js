import React from "react";
import { useSelector } from "react-redux";
import RefreshIcon from "@material-ui/icons/Refresh";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import classes from "./SearchedCity.module.css";
import cloudy from "../../../images/cloudy.svg";
import rainy from "../../../images/rainy.svg";
import snowy from "../../../images/snowy.svg";
import sunny from "../../../images/sunny.svg";
import thunder from "../../../images/thunder.svg";

const SearchedCity = () => {
  const cityWeather = useSelector((state) => state.cityWeather);

  console.log(cityWeather[0].weatherIcon);

  let weatherURL;

  switch (cityWeather[0].weatherIcon) {
    case 200:
      weatherURL = thunder;
      break;
    case 201:
      weatherURL = thunder;
      break;
    case 202:
      weatherURL = thunder;
      break;
    case 210:
      weatherURL = thunder;
      break;
    case 211:
      weatherURL = thunder;
      break;
    case 212:
      weatherURL = thunder;
      break;
    case 221:
      weatherURL = thunder;
      break;
    case 230:
      weatherURL = thunder;
      break;
    case 231:
      weatherURL = thunder;
      break;
    case 232:
      weatherURL = thunder;
      break;
    case 300:
      weatherURL = rainy;
      break;
    case 301:
      weatherURL = rainy;
      break;
    case 302:
      weatherURL = rainy;
      break;
    case 310:
      weatherURL = rainy;
      break;
    case 311:
      weatherURL = rainy;
      break;
    case 312:
      weatherURL = rainy;
      break;
    case 313:
      weatherURL = rainy;
      break;
    case 314:
      weatherURL = rainy;
      break;
    case 321:
      weatherURL = rainy;
      break;
    case 500:
      weatherURL = rainy;
      break;
    case 501:
      weatherURL = rainy;
      break;
    case 502:
      weatherURL = rainy;
      break;
    case 503:
      weatherURL = rainy;
      break;
    case 504:
      weatherURL = rainy;
      break;
    case 511:
      weatherURL = rainy;
      break;
    case 520:
      weatherURL = rainy;
      break;
    case 521:
      weatherURL = rainy;
      break;
    case 522:
      weatherURL = rainy;
      break;
    case 531:
      weatherURL = rainy;
      break;
    case 600:
      weatherURL = snowy;
      break;
    case 601:
      weatherURL = snowy;
      break;
    case 602:
      weatherURL = snowy;
      break;
    case 611:
      weatherURL = snowy;
      break;
    case 612:
      weatherURL = snowy;
      break;
    case 613:
      weatherURL = snowy;
      break;
    case 615:
      weatherURL = snowy;
      break;
    case 616:
      weatherURL = snowy;
      break;
    case 620:
      weatherURL = snowy;
      break;
    case 621:
      weatherURL = snowy;
      break;
    case 622:
      weatherURL = snowy;
      break;
    case 701:
      weatherURL = cloudy;
      break;
    case 711:
      weatherURL = cloudy;
      break;
    case 721:
      weatherURL = cloudy;
      break;
    case 731:
      weatherURL = cloudy;
      break;
    case 741:
      weatherURL = cloudy;
      break;
    case 751:
      weatherURL = cloudy;
      break;
    case 761:
      weatherURL = cloudy;
      break;
    case 762:
      weatherURL = cloudy;
      break;
    case 771:
      weatherURL = cloudy;
      break;
    case 781:
      weatherURL = cloudy;
      break;
    case 800:
      weatherURL = sunny;
      break;
    case 801:
      weatherURL = cloudy;
      break;
    case 802:
      weatherURL = cloudy;
      break;
    case 803:
      weatherURL = cloudy;
      break;
    case 804:
      weatherURL = cloudy;
      break;
    default:
      break;
  }

  return (
    <React.Fragment>
      <div>
        <div className={classes.cityTitleContainer}>
          <h3 className={classes.cityTitle}>{cityWeather[0].cityName}</h3>
          <Button
            className={classes.refreshButton}
            color="primary"
            startIcon={<RefreshIcon className={classes.removeIcon} />}
          ></Button>
        </div>
        <Grid container item xs={12}>
          <Grid item xs={4}>
            <img
              className={classes.weatherIcon}
              src={weatherURL}
              alt="cityImage"
            ></img>
          </Grid>
          <Grid item xs={8}>
            <div className={classes.weatherDetailsContainer}>
              <List>
                <ListItem>
                  <ListItemText>
                    Temperature: {cityWeather[0].temperature}°C
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Description: {cityWeather[0].weatherDescription}
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
          <Grid item xs={2}>
            Forcast 1
          </Grid>
          <Grid item xs={2}>
            Forcast 2
          </Grid>
          <Grid item xs={2}>
            Forcast 3
          </Grid>
          <Grid item xs={2}>
            Forcast 4
          </Grid>
          <Grid item xs={2}>
            Forcast 5
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default SearchedCity;
