/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styles from "@/styles/sass/styles-all.module.scss";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import { ChestButtonProps } from "../types";
import { GiScrollQuill } from "react-icons/gi";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { useState } from "react";
import { hardcodedEventsBecauseOfTheLackOfTime } from "../../show-event-data/data/hardcodedEventsBecauseOfTheLackOfTime";

export const biggerSmaller = keyframes`
  0% {
    transform: scale(1);
    filter: drop-shadow(0 0 0.5rem black) brightness(1);
  }
  50% {
    transform: scale(1.5);
    filter: drop-shadow(0 0 0.5rem black) brightness(1.25);
  }
  100% {
    transform: scale(1);
     filter: drop-shadow(0 0 0.5rem black) brightness(1);
  }
`;

const chestButtonCss = {
  container: css({
    position: "relative",
  }),

  questIcon: css([
    universalCss.wrapperWithCenteredSvg("40px", "100%"),
    {
      position: "absolute",
      top: "0",
      right: "0",
      animation: `${biggerSmaller} 2s infinite`,
    },
  ]),
};

const ChestButton = ({ onClick }: ChestButtonProps) => {
  // TODO: Get the value from redux before app goes live (for now it's hardcoded)
  const showQuestIcon =
    hardcodedEventsBecauseOfTheLackOfTime.eventsWithNeeds
      .chestWithAllDayLongEvents.necessary.length > 0;

  return (
    <button
      css={chestButtonCss.container}
      onClick={onClick}
      className={styles["event-manager__chest-button"]}
    >
      <ImageWithWrapper
        src="https://static.vecteezy.com/system/resources/previews/022/913/766/non_2x/game-equipment-chest-illustration-3d-png.png"
        width="10rem"
      />
      {showQuestIcon && (
        <div css={chestButtonCss.questIcon}>
          <GiScrollQuill size="4rem" />
        </div>
      )}
    </button>
  );
};

export default ChestButton;
