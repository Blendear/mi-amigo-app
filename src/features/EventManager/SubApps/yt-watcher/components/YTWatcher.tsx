/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import Playlist from "./Playlist";
import { YTWatcherProps } from "@/types";

const YTWatcherCss = {
  container: css({}),
};

export const YTWatcher = ({}: YTWatcherProps) => {
  return (
    <article>
      <Playlist
        listOfYouTubeVideoIDs={
          (subAppNameAndPayload.payload as YTWatcherProps).listOfYouTubeVideoIDs
        }
      />
    </article>
  );
};
