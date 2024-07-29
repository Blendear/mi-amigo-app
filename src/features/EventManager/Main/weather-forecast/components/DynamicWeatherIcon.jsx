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
import { useState } from "react";
import { biggerSmaller } from "../../chest-of-daily-planned-and-unplanned-events/components/ChestButton";

const dynamicWeatherICss = {
  container: (isIconGrey) =>
    css([
      universalCss.wrapperWithCenteredSvg("100px", "70%"),
      {
        "& *": {
          color: isIconGrey ? `rgb(${colors.whiteLight}, 0.25)` : `white`,
        },
      },

      !isIconGrey && {
        animation: `${biggerSmaller} 1s infinite`,
      },
    ]),
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
  const [isIconGrey, setIsIconGrey] = useState(false);

  return (
    <button
      css={dynamicWeatherICss.container(
        isIconGrey ? true : weatherDescription === "Clear"
      )}
      onClick={() => setIsIconGrey(!isIconGrey)}
    >
      {weatherIcons[weatherDescription]}
    </button>
  );
};
