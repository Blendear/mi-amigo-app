import styles from "@/styles/sass/styles-all.module.scss";
import ButtonThatPlaysSound from "@/components/ButtonThatPlaysSound";
import { EventFormSegmentProps } from "../types";
import { useContext } from "react";
import EventDisplayContext from "../context/EventDisplayContext";

const VocalNotifications = () => {
  const { formDataRef, handleDataChange } = useContext(EventDisplayContext);

  return (
    <>
      <div className={styles["event-manager__form__vocal-notifications"]}>
        <label>
          Start Event Sound
          <input
            type="text"
            placeholder={formDataRef.current.vocalNotifications.startEventSound}
            onChange={(e) =>
              handleDataChange(
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
              handleDataChange(
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
              handleDataChange(
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
              handleDataChange(
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
