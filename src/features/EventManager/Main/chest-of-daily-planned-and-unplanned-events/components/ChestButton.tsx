/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styles from "@/styles/sass/styles-all.module.scss";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import { ChestButtonProps } from "../types";
import { GiScrollQuill } from "react-icons/gi";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { useState } from "react";
import { hardcodedEventsBecauseOfTheLackOfTime } from "../../show-event-data/data/hardcodedEventsBecauseOfTheLackOfTime";
import { GiLockedChest } from "react-icons/gi";
import { googleCalendarLCss } from "../../google-calendar-link/components/GoogleCalendarLink";

export const biggerSmaller = keyframes`
  0% {
    transform: scale(1);
    filter: drop-shadow(0 0 0.5rem black) brightness(1);
  }
  50% {
    transform: scale(1.25);
    filter: drop-shadow(0 0 0.5rem black) brightness(1.25);
  }
  100% {
    transform: scale(1);
     filter: drop-shadow(0 0 0.5rem black) brightness(1);
  }
`;

const chestButtonCss = {
  container: css([
    universalCss.wrapperWithCenteredSvg("100px", "60%"),

    {
      "& *": { color: `rgb(${colors.whiteLight}, 0.25)` },
    },
  ]),

  questIcon: css([
    universalCss.wrapperWithCenteredSvg("40px", "100%"),
    {
      position: "absolute",
      top: "0",
      right: "0",
      animation: `${biggerSmaller} 1s infinite`,
    },
  ]),
};

const ChestButton = ({ onClick }: ChestButtonProps) => {
  // TODO: Get the value from redux before app goes live (for now it's hardcoded)
  const [isIconGrey, setIsIconGrey] = useState(false);

  return (
    <button
      css={googleCalendarLCss.container(isIconGrey)}
      onClick={() => {
        setIsIconGrey(!isIconGrey);
      }}
      onDoubleClick={onClick}
      className={styles["event-manager__chest-button"]}
    >
      <GiLockedChest />
      {/* <ImageWithWrapper
        src="https://static.vecteezy.com/system/resources/previews/022/913/766/non_2x/game-equipment-chest-illustration-3d-png.png"
        width="10rem"
      /> */}
      {/* {showQuestIcon && (
        <div css={chestButtonCss.questIcon}>
          <GiScrollQuill size="4rem" />
        </div>
      )} */}
    </button>
  );
};

export default ChestButton;
