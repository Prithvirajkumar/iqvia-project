import cloudy from "../images/cloudy.svg";
import rainy from "../images/rainy.svg";
import snowy from "../images/snowy.svg";
import sunny from "../images/sunny.svg";
import thunder from "../images/thunder.svg";

export const iconUrlGenerator = (iconCode) => {
  let weatherURL;
  switch (iconCode) {
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
  return weatherURL;
};
