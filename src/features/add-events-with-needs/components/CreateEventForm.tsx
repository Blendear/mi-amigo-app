import styles from "src/styles/sass/styles-all.module.scss";
import { placeholderEventEmpty, EventWithNeeds, ImageAndInput } from "..";
import { useRef, useState } from "react";

const CreateEventForm = () => {
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
  };

  return (
    <form className={styles["event-manager__form"]} onSubmit={handleSubmit}>
      {/* General Event Info  */}
      <label className={styles["event-manager__form__name"]}>
        Name
        <input
          type="text"
          placeholder={formDataRef.current.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
      </label>

      <label className={styles["event-manager__description"]}>
        Description
        <textarea
          placeholder={formDataRef.current.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
        />
      </label>

      <ImageAndInput
        currentValue={formDataRef.current.imagePath}
        onChange={handleInputChange}
      />
      {/* Repeat similar pattern for other input fields */}

      {/* All Day Long Variant Props */}
      <label className={styles["event-manager__is-all-day-long"]}>
        Is All Day Long:
        <input
          type="checkbox"
          defaultChecked={formDataRef.current.isAllDayLong}
          onChange={(e) => handleInputChange("isAllDayLong", e.target.checked)}
        />
      </label>

      <label className={styles["event-manager__all-day-long-variant-props"]}>
        Importance:
        <input
          type="number"
          placeholder={formDataRef.current.allDayLongVariantProps.importance.toString()}
          onChange={(e) =>
            handleInputChange(
              "allDayLongVariantProps.importance",
              +e.target.value as 1 | 2
            )
          }
        />
      </label>

      <label className={styles["event-manager__all-day-long-variant-props"]}>
        Date:
        <input
          type="date"
          placeholder={
            formDataRef.current.allDayLongVariantProps.date
              .toISOString()
              .split("T")[0]
          }
          onChange={(e) =>
            handleInputChange(
              "allDayLongVariantProps.date",
              new Date(e.target.value)
            )
          }
        />
      </label>

      {/* Timed Variant Props */}
      <label className={styles["event-manager__timed-variant-props"]}>
        Start Date and Time:
        <input
          type="datetime-local"
          placeholder={formDataRef.current.timedVariantProps.startDateAndTime
            .toISOString()
            .slice(0, -8)}
          onChange={(e) =>
            handleInputChange(
              "timedVariantProps.startDateAndTime",
              new Date(e.target.value)
            )
          }
        />
      </label>

      <label className={styles["event-manager__timed-variant-props"]}>
        End Date and Time:
        <input
          type="datetime-local"
          placeholder={formDataRef.current.timedVariantProps.endDateAndTime
            .toISOString()
            .slice(0, -8)}
          onChange={(e) =>
            handleInputChange(
              "timedVariantProps.endDateAndTime",
              new Date(e.target.value)
            )
          }
        />
      </label>

      {/* Has Deadline */}
      <label className={styles["event-manager__has-deadline"]}>
        Has Deadline:
        <input
          type="checkbox"
          defaultChecked={formDataRef.current.hasDeadline}
          onChange={(e) => handleInputChange("hasDeadline", e.target.checked)}
        />
      </label>

      {/* Add Ons */}
      {/* You might want to handle the array fields differently, e.g., add/remove items */}
      {/* For simplicity, let's just add a single "trap" here */}
      <label className={styles["event-manager__add-ons"]}>
        Trap:
        <input
          type="text"
          placeholder={formDataRef.current.addOns.traps[0]?.name || ""}
          onChange={(e) => console.log("TODO: onChange from Trap")}
        />
      </label>

      {/* Repeat similar pattern for protips, places, programs, objects, etc. */}

      {/* Needs Fulfilled */}
      <label className={styles["event-manager__needs-fulfilled"]}>
        Is Want:
        <input
          type="checkbox"
          defaultChecked={formDataRef.current.needsFulfilled.isWant}
          onChange={(e) =>
            handleInputChange("needsFulfilled.isWant", e.target.checked)
          }
        />
      </label>

      {/* Add other checkboxes for different needs */}

      {/* Vocal Notifications */}
      <label className={styles["event-manager__vocal-notifications"]}>
        Start Event Sound:
        <input
          type="text"
          placeholder={formDataRef.current.vocalNotifications.startEventSound}
          onChange={(e) =>
            handleInputChange(
              "vocalNotifications.startEventSound",
              e.target.value
            )
          }
        />
      </label>

      <label className={styles["event-manager__vocal-notifications"]}>
        X Minutes Before Start Amount:
        <input
          type="number"
          placeholder={
            formDataRef.current.vocalNotifications.xMinutesBeforeStartAmount?.toString() ||
            ""
          }
          onChange={(e) =>
            handleInputChange(
              "vocalNotifications.xMinutesBeforeStartAmount",
              +e.target.value
            )
          }
        />
      </label>

      <label className={styles["event-manager__vocal-notifications"]}>
        X Minutes Before Start Sound:
        <input
          type="text"
          placeholder={
            formDataRef.current.vocalNotifications.xMinutesBeforeStartSound
          }
          onChange={(e) =>
            handleInputChange(
              "vocalNotifications.xMinutesBeforeStartSound",
              e.target.value
            )
          }
        />
      </label>

      <label className={styles["event-manager__vocal-notifications"]}>
        End Event Sound:
        <input
          type="text"
          placeholder={formDataRef.current.vocalNotifications.endEventSound}
          onChange={(e) =>
            handleInputChange(
              "vocalNotifications.endEventSound",
              e.target.value
            )
          }
        />
      </label>

      <button type="submit">Create Event</button>
      <div>
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

export default CreateEventForm;
