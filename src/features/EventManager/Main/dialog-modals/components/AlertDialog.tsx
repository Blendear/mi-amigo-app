import { AlertDialogProps } from "../types/types";
import { ModalWrapper } from "./ModalWrapper";
import { handleCloseDialogModal } from "../utils/handleCloseDialogModal";

export const AlertDialog = (props: AlertDialogProps) => {
  return (
    <ModalWrapper
      additionalContainerClassName="dialog-modal__container--alert"
      isOpen={props.isOpen}
    >
      <div>
        <div>
          <h2>{props.title}</h2>
          {props.children}
          <div>
            <button
              className="btn"
              onClick={() => {
                handleCloseDialogModal(props.onClose);
              }}
            >
              {props.cancelBtnText}
            </button>
            <button
              className="btn"
              onClick={() => {
                props.onConfirm();
                handleCloseDialogModal(props.onClose);
              }}
            >
              {props.confirmBtnText}
            </button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};
