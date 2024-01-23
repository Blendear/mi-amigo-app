/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import colors from "@/styles/emotion-css-experiment/abstracts/colors";

import { useRef, useState } from "react";

import TitleImageNameAndDescription from "./TitleImageNameAndDescription";
import TogglersOfChapters from "./TogglersOfChapters";
import ChapterOfInfo from "./ChapterOfInfo";
import DangerZoneButtons from "./DangerZoneButtons";

import EventDisplayContext from "../context/EventDisplayContext";

import { placeholderEventEmpty } from "../data/placeholderEvents";

import { EventWithNeeds } from "../types";
import { EventDisplayProps } from "../types";
import { CurrentChapterOfInfo } from "../types";

import patchEventsWithNeedsInDB from "@/utils/patchEventsWithNeedsInDB";
import handleDataChange from "../utils/handleDataChange";

const formCss = css({
  padding: "2rem",
  backgroundColor: colors.tertiaryLight,
  display: "grid",
  gap: "1.5rem",
  justifyItems: "center",
  color: colors.primaryLight,
});

const EventDisplay = (props: EventDisplayProps) => {
  const isShowing = useRef(props.variant === "showing");

  const formDataRef = useRef<EventWithNeeds>(
    !isShowing ? props.event : placeholderEventEmpty
  );

  const [currentChapterOfInfo, setCurrentChapterOfInfo] =
    useState<CurrentChapterOfInfo>("workflows");

  const handleSubmitNewEventData = (e: React.FormEvent) => {
    e.preventDefault();
    // The whole events with needs data object is
    // updated - not just the all day events
    patchEventsWithNeedsInDB("Tobi The Wizard", formDataRef.current);
  };

  return (
    <EventDisplayContext.Provider
      value={{
        variant: props.variant,
        formDataRef,
        handleDataChange,
        currentChapterOfInfo,
        setCurrentChapterOfInfo,
      }}
    >
      <form css={formCss} onSubmit={handleSubmitNewEventData}>
        <TitleImageNameAndDescription />
        <TogglersOfChapters />
        <ChapterOfInfo />
        <DangerZoneButtons />
      </form>
    </EventDisplayContext.Provider>
  );
};

export default EventDisplay;
