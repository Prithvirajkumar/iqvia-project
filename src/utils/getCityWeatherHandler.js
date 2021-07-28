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
    console.log(response);
    const newResponse = [];
    for (let i = 7; i < response.data.list.length; i += 8) {
      let utcSeconds = response.data.list[i].dt;
      let d = new Date(0);
      d.setUTCSeconds(utcSeconds);
      newResponse.push({
        cityName: response.data.city.name,
        time: d,
        weatherIcon: response.data.list[i].weather[0].id,
        averageTemp:
          (response.data.list[i].main.temp_max +
            response.data.list[i].main.temp_min) /
          2,
      });
    }
    console.log(newResponse);
    return newResponse;
  } catch (error) {
    console.error("Data from getCityForcastHandler API:", error);
  }
};
