import styles from "@/styles/sass/styles-all.module.scss";
import { ChestModalContent } from "../features/all-day-long-events-management";
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
          <ChestModalContent />
        </DialogModal>
      )}
    </div>
  );
};

export default EventManager;
