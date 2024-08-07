/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { useEffect, useState } from "react";
import { DynamicWeatherIcon } from "./DynamicWeatherIcon";
import { Temperature } from "./Temperature";
import { getWeatherCurrent } from "../utils/weather-current";

const currentWeatherCss = {
  container: css({
    display: "grid",

    "& > *": {
      gridColumn: "1 / 2",
      gridRow: "1 / 2",
    },
  }),
};

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
    <div css={currentWeatherCss.container}>
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
