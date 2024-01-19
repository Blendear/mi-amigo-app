import styles from "@/styles/sass/styles-all.module.scss";
import { ChestModalContent } from "../features/all-day-long-events-management";
import { useState } from "react";
import { DialogModal } from "..";
import { ChestButton } from "../features/all-day-long-events-management";
import Scheduler from "@/features/shedule-of-the-choosen-day/components/Scheduler";

const events = [
  {
    id: 1,
    title: "Meeting 1",
    startTime: "09:00",
    endTime: "10:15",
    image: "url-to-image-1.jpg",
  },
  {
    id: 2,
    title: "Lunch",
    startTime: "12:30",
    endTime: "13:15",
    image: "url-to-image-2.jpg",
  },
  // Add more events as needed
];

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
      <Scheduler events={events} />
      {isModalOpen && (
        <DialogModal isOpen={isModalOpen} onClose={closeModal} zIndex={1001}>
          <ChestModalContent />
        </DialogModal>
      )}
    </div>
  );
};

export default EventManager;
