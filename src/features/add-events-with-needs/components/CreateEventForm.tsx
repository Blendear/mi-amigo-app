import styles from "src/styles/sass/styles-all.module.scss";
import { placeholderEventEmpty, EventWithNeeds } from "..";
import { useRef } from "react";

const CreateEventForm = () => {
  // const [formData, setFormData] = useState<EventWithNeeds>(
  //   placeholderEventEmpty
  // );
  const formDataRef = useRef<EventWithNeeds>(placeholderEventEmpty);

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

  console.log("rerender");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formDataRef.current);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        overflowY: "scroll",
        display: "grid",
        rowGap: "0.2rem",
        margin: "2rem",
        padding: "1rem",
        backgroundColor: "lightgray",
      }}
    >
      {/* General Event Info  */}
      <label>
        Name:
        <input
          type="text"
          placeholder={formDataRef.current.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
      </label>

      <label>
        Description:
        <input
          type="text"
          placeholder={formDataRef.current.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
        />
      </label>

      <label>
        Image Path:
        <input
          type="text"
          placeholder={formDataRef.current.imagePath}
          onChange={(e) => handleInputChange("imagePath", e.target.value)}
        />
      </label>

      {/* Repeat similar pattern for other input fields */}

      {/* All Day Long Variant Props */}
      <label>
        Is All Day Long:
        <input
          type="checkbox"
          defaultChecked={formDataRef.current.isAllDayLong}
          onChange={(e) => handleInputChange("isAllDayLong", e.target.checked)}
        />
      </label>

      <label>
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

      <label>
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
      <label>
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

      <label>
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
      <label>
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
      <label>
        Trap:
        <input
          type="text"
          placeholder={formDataRef.current.addOns.traps[0]?.name || ""}
          onChange={(e) => console.log("TODO: onChange from Trap")}
        />
      </label>

      {/* Repeat similar pattern for protips, places, programs, objects, etc. */}

      {/* Needs Fulfilled */}
      <label>
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
      <label>
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

      <label>
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

      <label>
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

      <label>
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
    </form>
  );
};

export default CreateEventForm;
