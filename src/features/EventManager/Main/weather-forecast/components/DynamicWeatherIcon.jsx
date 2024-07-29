/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import {
  TiWeatherSunny,
  TiWeatherPartlySunny,
  TiWeatherCloudy,
  TiWeatherShower,
  TiWeatherStormy,
  TiWeatherSnow,
} from "react-icons/ti";
import { MdLocationOff } from "react-icons/md";

const dynamicWeatherICss = {
  container: (weather) =>
    css({
      "& > svg": {
        fontSize: "70px",

        "& > path": {
          color: {
            Clear: `rgb(${colors.whiteLight}, 0.25)`,
            Clouds: `aqua`,
            Mist: `aqua`,
            Drizzle: "aqua",
            Rain: "aqua",
            Extreme: "aqua",
            Thunderstorm: "aqua",
            Snow: "aqua",
          }[weather],
        },
      },
    }),
};

const weatherIcons = {
  default: <MdLocationOff />,
  Clear: <TiWeatherSunny />,
  Clouds: <TiWeatherCloudy />,
  Mist: <TiWeatherCloudy />,
  Drizzle: <TiWeatherShower />,
  Rain: <TiWeatherShower />,
  Extreme: <TiWeatherShower />,
  Thunderstorm: <TiWeatherStormy />,
  Snow: <TiWeatherSnow />,
};

export const DynamicWeatherIcon = ({ weatherDescription }) => {
  return (
    <div css={dynamicWeatherICss.container(weatherDescription)}>
      {weatherIcons[weatherDescription]}
    </div>
  );
};
