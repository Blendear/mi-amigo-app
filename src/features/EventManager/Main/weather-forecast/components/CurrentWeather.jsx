import { useEffect, useState } from "react";
import { DynamicWeatherIcon } from "./DynamicWeatherIcon";
import { Temperature } from "./Temperature";
import { getWeatherCurrent } from "../utils/weather-current";

export const CurrentWeather = () => {
  const [weatherData, setWeatherData] = useState({
    isDefault: true,
    main: {
      temp: 0.0,
      feels_like: 0.0,
    },
    weather: [{ description: "default" }],
  });

  useEffect(() => {
    getWeatherCurrent(setWeatherData);
  }, []);

  return (
    <div>
      <DynamicWeatherIcon
        weatherDescription={
          weatherData.isDefault
            ? weatherData.weather[0].description
            : weatherData.weather[0].main
        }
      />
      <Temperature
        temperature={weatherData.main.temp.toFixed(1)}
        isDefault={weatherData.isDefault ? true : false}
      />
    </div>
  );
};
