import styles from "src/styles/sass/styles-all.module.scss";
import { CreateEventForm } from "../features/add-events-with-needs";
import { useState } from "react";
import { DialogModal } from "..";
import { ChestButton } from "../features/all-day-long-events-management";

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
      {isModalOpen && (
        <DialogModal isOpen={isModalOpen} onClose={closeModal}>
          <div>lista getnietyc eventow all day long</div>
        </DialogModal>
      )}
    </div>
  );
};

export default EventManager;
