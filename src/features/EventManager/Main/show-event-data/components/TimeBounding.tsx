import styles from "@/styles/sass/styles-all.module.scss";
import { useContext } from "react";
import EventDisplayContext from "../context/EventDisplayContext";

const TimeBounding = () => {
  const { formDataRef, handleDataChange } = useContext(EventDisplayContext);
  return (
    <div className={styles["event-manager__form__props-by-time-dependancy"]}>
      <label>
        Is All Day Long:
        <input
          type="checkbox"
          defaultChecked={formDataRef.current.isAllDayLong}
          onChange={(e) =>
            handleDataChange(formDataRef, "isAllDayLong", e.target.checked)
          }
        />
      </label>
      <div>
        <label>
          Importance
          <select
            defaultValue={formDataRef.current.deadlineVariant}
            required={true}
          >
            <option value="necessary">necessary</option>
            <option value="extra">extra</option>
          </select>
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
              handleDataChange(
                formDataRef,
                "allDayLongVariantProps.date",
                new Date(e.target.value)
              )
            }
          />
        </label>
      </div>

      {/* Timed Variant Props */}
      <div>
        <label>
          Start Date and Time:
          <input
            type="datetime-local"
            placeholder={formDataRef.current.timedVariantProps.startDateAndTime
              .toISOString()
              .slice(0, -8)}
            onChange={(e) =>
              handleDataChange(
                formDataRef,
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
              handleDataChange(
                formDataRef,
                "timedVariantProps.endDateAndTime",
                new Date(e.target.value)
              )
            }
          />
        </label>
      </div>
    </div>
  );
};
export default TimeBounding;
