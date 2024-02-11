/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { useState } from "react";
import Video from "./Video";
import { MyTemporaryStyle } from "../types/index";

const playlistCss = {
  container: css({}),
  buttons: css({ display: "grid", gridAutoFlow: "column", gap: "1rem" }),
};

const Playlist = ({ listOfYouTubeVideoIDs }: MyTemporaryStyle) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex < listOfYouTubeVideoIDs.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : listOfYouTubeVideoIDs.length - 1
    );
  };

  return (
    <div>
      <Video yTvideoId={listOfYouTubeVideoIDs[currentVideoIndex]} />
      <div css={playlistCss.buttons}>
        <button
          css={[universalCss.button(true), universalCss.container]}
          onClick={handlePrevVideo}
        >
          Previous
        </button>
        <button
          css={[universalCss.button(true), universalCss.container]}
          onClick={handleNextVideo}
        >
          Next
        </button>
      </div>
      <p>
        Video {currentVideoIndex + 1} of {listOfYouTubeVideoIDs.length}
      </p>
    </div>
  );
};

export default Playlist;
