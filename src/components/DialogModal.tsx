import styles from "@/styles/sass/styles-all.module.scss";
import { DialogModalProps } from "..";
import { useEffect } from "react";
/* eslint-disable */
const DialogModal = ({
  isOpen,
  onClose,
  zIndex = 1,
  children,
}: DialogModalProps) => {
  const disableBodyOverflow = () => {
    document.body.classList.add("modal-open");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    if (isOpen) {
      disableBodyOverflow();
      scrollToTop();
    }
  }, [isOpen]);

  const handleCloseDialogModal = () => {
    document.body.classList.remove("modal-open");
    onClose();
  };

  return (
    <dialog
      className={styles["modal__container"]}
      style={{ zIndex }}
      open={isOpen}
    >
      <button
        className={styles["modal__content__close-btn"]}
        onClick={handleCloseDialogModal}
      >
        X
      </button>
      {children}
    </dialog>
  );
};

export default DialogModal;
/* eslint-enable */
