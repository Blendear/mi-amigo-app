import styles from "src/styles/sass/styles-all.module.scss";
import { DialogModal, updateMiAmigoDataOfUser } from "../..";
import { useState } from "react";
import { EditOrCreateEventForm } from "../../features/add-events-with-needs";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/teal.css";

const MyDatePicker = () => {
  const [value, setValue] = useState(new Date());

  return (
    <DatePicker
      className="teal"
      containerClassName={styles["navbar__datepicker"]}
      value={value}
      onChange={setValue}
      range
      numberOfMonths={2}
    />
  );
};

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
          <EditOrCreateEventForm />
        </DialogModal>
      )}
      {/* <MyDatePicker /> */}
    </nav>
  );
};

export default Navbar;
