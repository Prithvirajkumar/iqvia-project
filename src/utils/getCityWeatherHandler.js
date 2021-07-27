import axios from "axios";

export const getCityWeatherHandler = async (searchValue) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=c51223c219d6aec8cb8c5210449bd859&units=metric`
    );
    return response;
  } catch (error) {
    console.error("Data from getCityWeatherHandler API:", error);
  }
};

export const getCityForcastHandler = async (searchValue) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&appid=c51223c219d6aec8cb8c5210449bd859&units=metric`
    );
    return response;
  } catch (error) {
    console.error("Data from getCityForcastHandler API:", error);
  }
};
