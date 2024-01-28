/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";

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

const eventDisplayCss = {
  container: css({
    backgroundColor: colors.tertiaryLight,
    display: "grid",
    gridAutoRows: "max-content",
    gap: "1.5rem",
    justifyItems: "center",
    color: colors.primaryLight,
  }),
};

const EventDisplay = (props: EventDisplayProps) => {
  // isShowing & formDataRef are a useRef object, so they wont cause a rerender
  const isShowing = useRef(props.variant === "showing");

  const formDataRef = useRef<EventWithNeeds>(
    props.variant !== "creating" ? props.event : placeholderEventEmpty
  );

  const [currentChapterOfInfo, setCurrentChapterOfInfo] =
    useState<CurrentChapterOfInfo>("workflows");
  // The indexes for specific chapter parts are saved here, so that jumping
  // between chapters won't restart the active slide
  const workflowVariantIndex = useRef<number>(0);
  const worfklowStepIndex = useRef<number>(0);
  const workflowBookOfAddonsIndex = useRef<number>(0);

  const handleSubmitNewEventData = (e: React.FormEvent) => {
    e.preventDefault();
    // The whole events with needs data object is
    // updated - not just the all day events
    patchEventsWithNeedsInDB("Tobi The Wizard", formDataRef.current);
  };

  return (
    <EventDisplayContext.Provider
      value={{
        isShowing,
        formDataRef,
        handleDataChange,
        currentChapterOfInfo,
        setCurrentChapterOfInfo,
        workflowVariantIndex,
        worfklowStepIndex,
        workflowBookOfAddonsIndex,
      }}
    >
      <form css={eventDisplayCss.container} onSubmit={handleSubmitNewEventData}>
        <TitleImageNameAndDescription />
        <TogglersOfChapters />
        <ChapterOfInfo />
        <DangerZoneButtons />
      </form>
    </EventDisplayContext.Provider>
  );
};

export default EventDisplay;
