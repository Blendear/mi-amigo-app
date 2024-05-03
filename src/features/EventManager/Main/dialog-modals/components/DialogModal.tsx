/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { DialogModalProps } from "../types/types";
import { handleCloseDialogModal } from "../utils/handleCloseDialogModal";
import { ModalWrapper } from "./ModalWrapper";
import { CloseButton } from "react-toastify/dist/components";
import { GiCrossMark } from "react-icons/gi";

const dialogModalCss = {
  container: css({}),

  closeButton: css({
    width: "100%",
    textAlign: "start",
  }),
};

export const DialogModal = (props: DialogModalProps) => {
  return (
    <ModalWrapper
      additionalContainerClassName="dialog-modal__container--classic"
      zIndex={props.zIndex || 10}
      isOpen={props.isOpen}
    >
      <div css={universalCss.navbarButtonsList}>
        {props.extraNavbarButtons}
        <button
          onClick={() => {
            handleCloseDialogModal(props.onClose);
          }}
          css={dialogModalCss.closeButton}
        >
          <GiCrossMark />
        </button>
      </div>

      {props.children}
    </ModalWrapper>
  );
};
