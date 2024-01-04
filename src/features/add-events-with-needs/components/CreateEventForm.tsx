import styles from "src/styles/sass/styles-all.module.scss";
import { placeholderEventEmpty, EventWithNeeds } from "..";
import { useState } from "react";

const CreateEventForm = () => {
  const [formData, setFormData] = useState<EventWithNeeds>(
    placeholderEventEmpty
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
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
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </label>

      <label>
        Description:
        <input
          type="text"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </label>

      <label>
        Image Path:
        <input
          type="text"
          value={formData.imagePath}
          onChange={(e) =>
            setFormData({ ...formData, imagePath: e.target.value })
          }
        />
      </label>

      <label>
        Image Alt Text:
        <input
          type="text"
          value={formData.imageAltText}
          onChange={(e) =>
            setFormData({ ...formData, imageAltText: e.target.value })
          }
        />
      </label>

      <label>
        Event Group ID:
        <input
          type="text"
          value={formData.eventGroupId}
          onChange={(e) =>
            setFormData({ ...formData, eventGroupId: e.target.value })
          }
        />
      </label>

      <label>
        Event Instance ID:
        <input
          type="text"
          value={formData.eventInstanceId}
          onChange={(e) =>
            setFormData({ ...formData, eventInstanceId: e.target.value })
          }
        />
      </label>

      <label>
        GIF Path:
        <input
          type="text"
          value={formData.GIFPath}
          onChange={(e) =>
            setFormData({ ...formData, GIFPath: e.target.value })
          }
        />
      </label>

      {/* All Day Long Variant Props */}
      <label>
        Is All Day Long:
        <input
          type="checkbox"
          checked={formData.isAllDayLong}
          onChange={(e) =>
            setFormData({ ...formData, isAllDayLong: e.target.checked })
          }
        />
      </label>

      <label>
        Importance:
        <input
          type="number"
          value={formData.allDayLongVariantProps.importance}
          onChange={(e) =>
            setFormData({
              ...formData,
              allDayLongVariantProps: {
                ...formData.allDayLongVariantProps,
                importance: +e.target.value as 1 | 2,
              },
            })
          }
        />
      </label>

      <label>
        Date:
        <input
          type="date"
          value={
            formData.allDayLongVariantProps.date.toISOString().split("T")[0]
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              allDayLongVariantProps: {
                ...formData.allDayLongVariantProps,
                date: new Date(e.target.value),
              },
            })
          }
        />
      </label>

      {/* Timed Variant Props */}
      <label>
        Start Date and Time:
        <input
          type="datetime-local"
          value={formData.timedVariantProps.startDateAndTime
            .toISOString()
            .slice(0, -8)}
          onChange={(e) =>
            setFormData({
              ...formData,
              timedVariantProps: {
                ...formData.timedVariantProps,
                startDateAndTime: new Date(e.target.value),
              },
            })
          }
        />
      </label>

      <label>
        End Date and Time:
        <input
          type="datetime-local"
          value={formData.timedVariantProps.endDateAndTime
            .toISOString()
            .slice(0, -8)}
          onChange={(e) =>
            setFormData({
              ...formData,
              timedVariantProps: {
                ...formData.timedVariantProps,
                endDateAndTime: new Date(e.target.value),
              },
            })
          }
        />
      </label>

      {/* Has Deadline */}
      <label>
        Has Deadline:
        <input
          type="checkbox"
          checked={formData.hasDeadline}
          onChange={(e) =>
            setFormData({ ...formData, hasDeadline: e.target.checked })
          }
        />
      </label>

      {/* Add Ons */}
      {/* You might want to handle the array fields differently, e.g., add/remove items */}
      {/* For simplicity, let's just add a single "trap" here */}
      <label>
        Trap:
        <input
          type="text"
          value={formData.addOns.traps[0]?.name || ""}
          onChange={
            (e) => console.log("TODO: onChange from Trap")
            // setFormData({
            //   ...formData,
            //   addOns: { ...formData.addOns, traps: [{ name: e.target.value }] },
            // })
          }
        />
      </label>

      {/* Repeat similar pattern for protips, places, programs, objects, etc. */}

      {/* Needs Fulfilled */}
      <label>
        Is Want:
        <input
          type="checkbox"
          checked={formData.needsFulfilled.isWant}
          onChange={(e) =>
            setFormData({
              ...formData,
              needsFulfilled: {
                ...formData.needsFulfilled,
                isWant: e.target.checked,
              },
            })
          }
        />
      </label>

      {/* Add other checkboxes for different needs */}

      {/* Vocal Notifications */}
      <label>
        Start Event Sound:
        <input
          type="text"
          value={formData.vocalNotifications.startEventSound}
          onChange={(e) =>
            setFormData({
              ...formData,
              vocalNotifications: {
                ...formData.vocalNotifications,
                startEventSound: e.target.value,
              },
            })
          }
        />
      </label>

      <label>
        X Minutes Before Start Amount:
        <input
          type="number"
          value={formData.vocalNotifications.xMinutesBeforeStartAmount || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              vocalNotifications: {
                ...formData.vocalNotifications,
                xMinutesBeforeStartAmount: +e.target.value,
              },
            })
          }
        />
      </label>

      <label>
        X Minutes Before Start Sound:
        <input
          type="text"
          value={formData.vocalNotifications.xMinutesBeforeStartSound}
          onChange={(e) =>
            setFormData({
              ...formData,
              vocalNotifications: {
                ...formData.vocalNotifications,
                xMinutesBeforeStartSound: e.target.value,
              },
            })
          }
        />
      </label>

      <label>
        End Event Sound:
        <input
          type="text"
          value={formData.vocalNotifications.endEventSound}
          onChange={(e) =>
            setFormData({
              ...formData,
              vocalNotifications: {
                ...formData.vocalNotifications,
                endEventSound: e.target.value,
              },
            })
          }
        />
      </label>

      <button type="submit">Create Event</button>
    </form>
  );
};

export default CreateEventForm;
