/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { GoogleCalendarLinkProps } from "../types";
import { TbCalendarTime } from "react-icons/tb";
import { biggerSmaller } from "../../chest-of-daily-planned-and-unplanned-events/components/ChestButton";
import { useState } from "react";

export const googleCalendarLCss = {
  container: (isIconGrey) =>
    css([
      universalCss.wrapperWithCenteredSvg("75px", "55%"),

      {
        "& *": {
          color: isIconGrey ? `#484848` : `white`,
          strokeWidth: "1.5px",
        },
      },

      !isIconGrey && {
        animation: `${biggerSmaller} 1s infinite`,
      },
    ]),
};

export const GoogleCalendarLink = ({}: GoogleCalendarLinkProps) => {
  const [isIconGrey, setIsIconGrey] = useState(false);

  return (
    <button
      css={googleCalendarLCss.container(isIconGrey)}
      onClick={() => setIsIconGrey(!isIconGrey)}
      onDoubleClick={() => {
        window.open(
          "https://calendar.google.com/calendar/u/0/r/week",
          "_blank"
        );
      }}
    >
      <TbCalendarTime />
    </button>
  );
};
