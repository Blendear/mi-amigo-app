import styles from "src/styles/sass/styles-all.module.scss";
import { DialogModal } from "../..";
import { useState } from "react";
import { CreateEventForm } from "../../features/add-events-with-needs";

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
          <CreateEventForm />
        </DialogModal>
      )}
    </nav>
  );
};

export default Navbar;
