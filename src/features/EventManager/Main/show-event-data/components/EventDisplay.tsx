import styles from "@/styles/sass/styles-all.module.scss";
import { placeholderEventEmpty } from "../data/placeholderEvents";
import { EventWithNeeds } from "../types";
import AddOns from "./AddOns";
import TitleImageNameAndDescription from "./TitleImageNameAndDescription";
import NeedsFullfilled from "./NeedsFullfilled";
import TimeBounding from "./TimeBounding";
import VocalNotifications from "./VocalNotifications";
import { useRef, useState } from "react";
import patchEventsWithNeedsInDB from "@/utils/patchEventsWithNeedsInDB";
import { EditOrCreateEventFormProps } from "../types";
import handleDataChange from "../utils/handleDataChange";

const EventDisplay = ({ isCreatingANewEvent }: EditOrCreateEventFormProps) => {
  const formDataRef = useRef<EventWithNeeds>(placeholderEventEmpty);
  const [submittedFormData, setSubmittedFormData] =
    useState<EventWithNeeds | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedFormData({ ...formDataRef.current });
    // TRAP1 - THE WHOLE EVENTS WIHT NEESD DATA OBJECT IS UPDATED - not just the all day events
    patchEventsWithNeedsInDB("Tobi The Wizard", formDataRef.current);
  };

  return (
    <form className={styles["event-manager__form"]} onSubmit={handleSubmit}>
      <div style={{ backgroundColor: "red" }}>
        Creating / Editing is disabled for now - Hardcoded events only
      </div>
      <TitleImageNameAndDescription
        formDataRef={formDataRef}
        onChange={handleDataChange}
      />
      <TimeBounding formDataRef={formDataRef} onChange={handleDataChange} />
      <label className={styles["event-manager__form__has-deadline"]}>
        Deadline variant
        <select defaultValue={formDataRef.current.deadlineVariant}>
          <option value="none">None</option>
          <option value="prefer">Prefer</option>
          <option value="must">Must</option>
        </select>
      </label>
      <AddOns formDataRef={formDataRef} onChange={handleDataChange} />
      {/* <OLD NeedsFullfilled formDataRef={formDataRef} onChange={handleDataChange} /> */}
      <VocalNotifications
        formDataRef={formDataRef}
        onChange={handleDataChange}
      />
      {/* <button type="submit" className={styles["submit-btn"]}>
        Create Event
      </button> */}
      <div style={{ backgroundColor: "red" }}>
        Creating / Editing is disabled for now - Hardcoded events only
      </div>
      <div
        className={styles["event-manager__form__temporary-JSON-visualisation"]}
      >
        {submittedFormData && (
          <div>
            <h2>Submitted Form Data:</h2>
            <pre>{JSON.stringify(submittedFormData, null, 2)}</pre>
          </div>
        )}
      </div>
    </form>
  );
};

export default EventDisplay;
