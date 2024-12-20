/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import styles from "@/styles/sass/styles-all.module.scss";
import ChestModalContent from "@/features/EventManager/Main/chest-of-daily-planned-and-unplanned-events/components/ChestModalContent";
import { useEffect, useState } from "react";
import { DialogModal } from "..";
import ChestButton from "@/features/EventManager/Main/chest-of-daily-planned-and-unplanned-events/components/ChestButton";
import Scheduler from "@/features/EventManager/Main/shedule-of-hourly-planned-events/components/Scheduler";
import { CurrentWeather } from "@/features/EventManager/Main/weather-forecast/components/CurrentWeather";
import { GoogleCalendarLink } from "@/features/EventManager/Main/google-calendar-link/components/GoogleCalendarLink";
import { MonsterManualLink } from "@/features/EventManager/Main/monster-manual/components/MonsterManualLink";

const eventManagerCss = {
  container: css({
    margin: "0 0 20px 0",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
  }),
};

const EventManager = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles["event-manager__container"]}>
      <div css={eventManagerCss.container}>
        <MonsterManualLink />
        <CurrentWeather />
        <ChestButton onClick={openModal} />
        <GoogleCalendarLink />
      </div>

      {/* <Diagram /> */}

      <Scheduler
      //  events={events}
      />

      {isModalOpen && (
        <DialogModal isOpen={isModalOpen} onClose={closeModal} zIndex={1001}>
          <ChestModalContent />
        </DialogModal>
      )}
    </div>
  );
};

export default EventManager;
