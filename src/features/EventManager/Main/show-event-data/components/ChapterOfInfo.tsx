/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useMemo, useContext } from "react";

import Workflows from "./Workflows";
import NeedsFullfilled from "./NeedsFullfilled";
import TimeBounding from "./TimeBounding";
import VocalNotifications from "./VocalNotifications";

import EventDisplayContext from "../context/EventDisplayContext";

import formatTitleString from "../utils/formatTitleString";

const ChapterOfInfo = () => {
  const { currentChapterOfInfo } = useContext(EventDisplayContext);

  const title = useMemo(
    () => formatTitleString(currentChapterOfInfo),
    [currentChapterOfInfo]
  );

  return (
    <div>
      <h2>{title}</h2>
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
