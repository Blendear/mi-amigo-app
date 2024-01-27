/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useMemo, useContext } from "react";

import Workflows from "./Workflows";
import NeedsFullfilled from "./NeedsFullfilled";
import TimeBounding from "./TimeBounding";
import VocalNotifications from "./VocalNotifications";

import EventDisplayContext from "../context/EventDisplayContext";

import formatTitleString from "../utils/formatTitleString";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";

const chapterOfInfoCss = {
  container: css([
    universalCss.container,
    {
      padding: "0",
      display: "grid",

      "& > section": {
        "& > div": {
          "&:before": {
            content: "''",
            display: "block",
            height: "0.1rem",
            backgroundColor: `rgb(${colors.whiteLight}, 0.5)`,
          },
        },
      },
    },
  ]),
};

const ChapterOfInfo = () => {
  const { currentChapterOfInfo } = useContext(EventDisplayContext);

  const title = useMemo(
    () => formatTitleString(currentChapterOfInfo),
    [currentChapterOfInfo]
  );

  return (
    <div css={chapterOfInfoCss.container}>
      <h2>{title}</h2>
      {/* Every chapter below must be divided into sections with child divs
      Before every child divs there will be a visual divider */}
      {
        {
          workflows: <Workflows />,
          needsFullfilled: <NeedsFullfilled />,
          timeBounding: <TimeBounding />,
          vocalNotifications: <VocalNotifications />,
        }[currentChapterOfInfo]
      }
    </div>
  );
};

export default ChapterOfInfo;
