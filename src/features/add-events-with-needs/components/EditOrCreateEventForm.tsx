import styles from "src/styles/sass/styles-all.module.scss";
import {
  placeholderEventEmpty,
  EventWithNeeds,
  ImageAndInput,
  NeedsFullfilled,
  PropsByTimeDependency,
  VocalNotifications,
  NameAndDescription,
  AddOns,
} from "..";
import { useRef, useState } from "react";
import patchEventsWithNeedsInDB from "../../../utils/patchEventsWithNeedsInDB";
import { EditOrCreateEventFormProps } from "../types";

const EditOrCreateEventForm = ({
  isCreatingANewEvent,
}: EditOrCreateEventFormProps) => {
  const formDataRef = useRef<EventWithNeeds>(placeholderEventEmpty);
  const [submittedFormData, setSubmittedFormData] =
    useState<EventWithNeeds | null>(null);

  const handleInputChange = (field: string, value: any) => {
    const fields = field.split(".");

    if (fields.length === 1) {
      // If it's a top-level field
      formDataRef.current = {
        ...formDataRef.current,
        [field]: value,
      };
    } else if (fields.length > 1) {
      // If it's a nested field
      formDataRef.current = {
        ...formDataRef.current,
        [fields[0]]: {
          ...formDataRef.current[fields[0]],
          [fields[1]]: value,
        },
      };
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formDataRef.current);
    setSubmittedFormData({ ...formDataRef.current });
    // TRAP1 - THE WHOLE EVENTS WIHT NEESD DATA OBJECT IS UPDATED - not just the all day events
    patchEventsWithNeedsInDB("Tobi The Wizard", formDataRef.current);
  };

  return (
    <form className={styles["event-manager__form"]} onSubmit={handleSubmit}>
      <div style={{ backgroundColor: "red" }}>
        Creating / Editing is disabled for now - Hardcoded events only
      </div>
      <NameAndDescription
        formDataRef={formDataRef}
        onChange={handleInputChange}
      />
      <ImageAndInput formDataRef={formDataRef} onChange={handleInputChange} />
      <PropsByTimeDependency
        formDataRef={formDataRef}
        onChange={handleInputChange}
      />
      <label className={styles["event-manager__form__has-deadline"]}>
        Deadline variant
        <select defaultValue={formDataRef.current.deadlineVariant}>
          <option value="none">None</option>
          <option value="prefer">Prefer</option>
          <option value="must">Must</option>
        </select>
      </label>
      <AddOns formDataRef={formDataRef} onChange={handleInputChange} />
      <NeedsFullfilled formDataRef={formDataRef} onChange={handleInputChange} />
      <VocalNotifications
        formDataRef={formDataRef}
        onChange={handleInputChange}
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

export default EditOrCreateEventForm;
