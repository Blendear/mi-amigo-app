/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useContext } from "react";

import EventDisplayContext from "../context/EventDisplayContext";

import { TogglersOfChaptersProps } from "../types";

const TogglersOfChapters = ({}: TogglersOfChaptersProps) => {
  const { currentChapterOfInfo, setCurrentChapterOfInfo } =
    useContext(EventDisplayContext);

  return <div>TogglersOfChapters</div>;
};

export default TogglersOfChapters;
