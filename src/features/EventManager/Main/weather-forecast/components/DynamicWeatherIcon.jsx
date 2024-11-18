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
import { MdLocationOn } from "react-icons/md";
import { useState } from "react";
import { biggerSmaller } from "../../chest-of-daily-planned-and-unplanned-events/components/ChestButton";

export const dynamicWeatherICss = {
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
  // temporarily changeg to 'on' icon, since I usually dont even
  // turn it on, but just go to the weather link
  //
  //   default: <MdLocationOff style={{ width: "50%", height: "50%" }} />,
  default: <MdLocationOn style={{ width: "50%", height: "50%" }} />,
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
      onDoubleClick={() => {
        window.location.href =
          "https://www.google.com/search?q=pogoda&oq=pogoda&gs_lcrp=EgZjaHJvbWUyFwgAEEUYORhDGIMBGLEDGMkDGIAEGIoFMgkIARBFGDsYgAQyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDsyBggFECMYJzIMCAYQIxgnGIAEGIoFMgoIBxAAGJIDGIAEMhIICBAAGEMYgwEYsQMYgAQYigUyEggJEAAYQxiDARixAxiABBiKBdIBCDQ0MzJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8";
      }}
    >
      {weatherIcons[weatherDescription]}
    </button>
  );
};
