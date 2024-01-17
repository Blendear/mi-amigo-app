import styles from "@/styles/sass/styles-all.module.scss";
import { needsFulfilled } from "..";

const NeedsFullfilled = ({ formDataRef, onChange }) => {
  return (
    <div className={styles["event-manager__form__needs-fulfilled"]}>
      {needsFulfilled.map((need, index) => (
        <label key={index}>
          {need}
          <input
            type="checkbox"
            defaultChecked={formDataRef.current.needsFulfilled[need]}
            onChange={(e) =>
              onChange(`needsFulfilled.${need}`, e.target.checked)
            }
          />
        </label>
      ))}
    </div>
  );
};
export default NeedsFullfilled;
