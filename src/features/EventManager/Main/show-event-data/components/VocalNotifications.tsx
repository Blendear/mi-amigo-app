import styles from "@/styles/sass/styles-all.module.scss";
import ButtonThatPlaysSound from "@/components/ButtonThatPlaysSound";
import { EventFormSegmentProps } from "../types";

const VocalNotifications = ({
  formDataRef,
  onChange,
}: EventFormSegmentProps) => {
  return (
    <>
      <div className={styles["event-manager__form__vocal-notifications"]}>
        <label>
          Start Event Sound
          <input
            type="text"
            placeholder={formDataRef.current.vocalNotifications.startEventSound}
            onChange={(e) =>
              onChange(
                formDataRef,
                "vocalNotifications.startEventSound",
                e.target.value
              )
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
                formDataRef,
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
                formDataRef,
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
              onChange(
                formDataRef,
                "vocalNotifications.endEventSound",
                e.target.value
              )
            }
          />
        </label>
      </div>
    </>
  );
};
export default VocalNotifications;
