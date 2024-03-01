/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
// import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
// import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { MealProps } from "../types";
import { useState } from "react";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import Video from "@/features/EventManager/SubApps/yt-watcher/components/Video";

export const Meal = ({ details, hideContentUnderNamedButton }: MealProps) => {
  const [hideDetails, setHideDetails] = useState(
    hideContentUnderNamedButton || false
  );

  return (
    <div>
      {hideContentUnderNamedButton && (
        <button
          onClick={() => {
            setHideDetails((prev) => !prev);
          }}
        >
          <ImageWithWrapper src={details.imagePaths} />
          <p>{details.name}</p>
        </button>
      )}
      {(!hideContentUnderNamedButton || !hideDetails) && (
        <div>
          <Video yTvideoId={details.ytVideoId} />
        </div>
      )}
    </div>
  );
};
