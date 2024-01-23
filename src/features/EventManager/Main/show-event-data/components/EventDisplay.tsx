import styles from "../styles/EventDisplay.module.css";
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

const EventDisplay = (props: EventDisplayProps) => {
  const isShowing = useRef(props.variant === "showing");

  const formDataRef = useRef<EventWithNeeds>(
    isShowing ? props.event : placeholderEventEmpty
  );

  const [currentChapterOfInfo, setCurrentChapterOfInfo] =
    useState<CurrentChapterOfInfo>("workflows");

  const [submittedFormData, setSubmittedFormData] =
    useState<EventWithNeeds | null>(null);

  const handleSubmitNewEventData = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedFormData({ ...formDataRef.current });
    // The whole events with needs data object is
    // updated - not just the all day events
    patchEventsWithNeedsInDB("Tobi The Wizard", formDataRef.current);
  };

  return (
    <EventDisplayContext.Provider
      value={{
        formDataRef,
        handleDataChange,
        currentChapterOfInfo,
        setCurrentChapterOfInfo,
      }}
    >
      <form
        // className={styles["event-manager__form"]}
        onSubmit={handleSubmitNewEventData}
      >
        <TitleImageNameAndDescription />
        <TogglersOfChapters />
        <ChapterOfInfo />
        <DangerZoneButtons />

        {/* <label className={styles["event-manager__form__has-deadline"]}>
          Deadline variant
          <select defaultValue={formDataRef.current.deadlineVariant}>
            <option value="none">None</option>
            <option value="prefer">Prefer</option>
            <option value="must">Must</option>
          </select>
        </label> */}

        {/* <button type="submit" className={styles["submit-btn"]}>
        Create Event
      </button> */}

        {/* <div
          className={
            styles["event-manager__form__temporary-JSON-visualisation"]
          }
        >
          {submittedFormData && (
            <div>
              <h2>Submitted Form Data:</h2>
              <pre>{JSON.stringify(submittedFormData, null, 2)}</pre>
            </div>
          )}
        </div> */}
      </form>
    </EventDisplayContext.Provider>
  );
};

export default EventDisplay;