import styles from "src/styles/sass/styles-all.module.scss";
import { DialogModalProps } from "..";

const DialogModal = ({
  isOpen,
  onClose,
  zIndex = 1,
  children,
}: DialogModalProps) => {
  return (
    <dialog className={styles["modal"]} style={{ zIndex }} open={isOpen}>
      <div className={styles["modal__content"]}>
        <button
          className={styles["modal__content__close-btn"]}
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </dialog>
  );
};

export default DialogModal;
