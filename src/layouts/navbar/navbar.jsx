import styles from "@/styles/sass/styles-all.module.scss";
import { useState } from "react";
import DialogModal from "@/components/DialogModal";
import EventDisplay from "@/features/EventManager/Main/show-event-data/components/EventDisplay";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className={styles["navbar__container"]}>
      <button onClick={openModal}>+</button>
      {isModalOpen && (
        <DialogModal isOpen={isModalOpen} onClose={closeModal}>
          <EventDisplay />
        </DialogModal>
      )}
    </nav>
  );
};

export default Navbar;
