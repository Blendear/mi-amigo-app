import styles from "@/styles/sass/styles-all.module.scss";
import ChestModalContent from "@/features/EventManager/Main/chest-of-daily-planned-and-unplanned-events/components/ChestModalContent";
import { useState } from "react";
import { DialogModal } from "..";
import ChestButton from "@/features/EventManager/Main/chest-of-daily-planned-and-unplanned-events/components/ChestButton";
import Scheduler from "@/features/EventManager/Main/shedule-of-hourly-planned-events/components/Scheduler";

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
      <ChestButton onClick={openModal} />
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
