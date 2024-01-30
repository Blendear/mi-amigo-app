/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { WhereAndToolsProps } from "../types";
import PortalesqueLink from "./PortalesqueLink";
import { useContext, useMemo } from "react";
import EventDisplayContext from "../context/EventDisplayContext";
import { booksOfAddonsNames } from "../data/booksOfAddonsNames";

const whereAndToolsCss = {
  container: css({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
  }),
};

const placeholderPortalsByBookOfAddons = {
  where: [
    {
      title: "Where Portal 1",
      linkURL: "https://www.google.com",
      imageOrGifPath:
        "https://4.bp.blogspot.com/-7EDxlHn4b_A/XKG5NjiEZjI/AAAAAAAABGw/hG92qvWs7uQF-Wxry4N0QYklnYbNqyHBwCKgBGAs/w3440-h1440-c/fantasy-serpent-uhdpaper.com-4K-65.jpg",
    },
  ],

  "tool-subapp": [
    {
      title: "Tool Subapp Portal 1",
      linkURL: "https://www.wikipedia.com",
      imageOrGifPath:
        "https://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1082,w_1623,x_189,y_0/c_fill,f_auto,h_1200,q_auto,w_1600/v1/m/6/5/656f0e7d8a211461e8c3ffada42b8509930a03d0/25-fun-fantasy-films.jpg",
    },
    {
      title: "Tool Subapp Portal 2",
      linkURL: "https://www.youtube.com",
      imageOrGifPath:
        "https://as1.ftcdn.net/v2/jpg/05/70/08/86/1000_F_570088674_addcp8N71c6bZzsC0tFcVOqkLEW3u9Z2.jpg",
    },
  ],

  "tool-physical-or-3rd-party": [
    {
      title: "Tool Physical or 3rd Party Portal 1",
      linkURL: "https://www.twitch.com",
      imageOrGifPath:
        "https://w0.peakpx.com/wallpaper/33/563/HD-wallpaper-fantasy-cool-dragon-art-resolution-fantasy-and-background-3440x1440-dragon.jpg",
    },
  ],
};

const WhereAndTools = ({}: WhereAndToolsProps) => {
  const { workflowBookOfAddonsIndex } = useContext(EventDisplayContext);

  return (
    <ul css={whereAndToolsCss.container}>
      {placeholderPortalsByBookOfAddons[
        booksOfAddonsNames[workflowBookOfAddonsIndex.current]
      ].map((portal, index) => {
        return (
          <li key={index}>
            <PortalesqueLink
              title={portal.title}
              linkURL={portal.linkURL}
              imageOrGifPath={portal.imageOrGifPath}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default WhereAndTools;
