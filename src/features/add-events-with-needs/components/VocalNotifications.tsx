import styles from "@/styles/sass/styles-all.module.scss";
import { ButtonThatPlaysSound } from "../../..";

const VocalNotifications = ({ formDataRef, onChange }) => {
  return (
    <>
      <div className={styles["event-manager__form__vocal-notifications"]}>
        <label>
          Start Event Sound
          <input
            type="text"
            placeholder={formDataRef.current.vocalNotifications.startEventSound}
            onChange={(e) =>
              onChange("vocalNotifications.startEventSound", e.target.value)
            }
          />
        </label>
        <ButtonThatPlaysSound
          src={
            formDataRef.current.vocalNotifications.startEventSound ||
            "https://freesound.org/s/718454/"
          }
        />
        <label>
          X Minutes Before Start Amount
          <input
            type="number"
            placeholder={
              formDataRef.current.vocalNotifications.xMinutesBeforeStartAmount?.toString() ||
              ""
            }
            onChange={(e) =>
              onChange(
                "vocalNotifications.xMinutesBeforeStartAmount",
                +e.target.value
              )
            }
          />
        </label>
        <label>
          X Minutes Before Start Sound
          <input
            type="text"
            placeholder={
              formDataRef.current.vocalNotifications.xMinutesBeforeStartSound
            }
            onChange={(e) =>
              onChange(
                "vocalNotifications.xMinutesBeforeStartSound",
                e.target.value
              )
            }
          />
        </label>
        <label>
          End Event Sound
          <input
            type="text"
            placeholder={formDataRef.current.vocalNotifications.endEventSound}
            onChange={(e) =>
              onChange("vocalNotifications.endEventSound", e.target.value)
            }
          />
        </label>
      </div>
    </>
  );
};
export default VocalNotifications;
