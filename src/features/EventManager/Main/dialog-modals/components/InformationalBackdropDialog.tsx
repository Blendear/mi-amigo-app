/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { InformationalBackdropDialogProps } from "../types/types";
import { handleCloseDialogModal } from "../utils/handleCloseDialogModal";
import { ModalWrapper } from "./ModalWrapper";

const informationalBDCss = {
  container: css({
    padding: "5rem 0",
    display: "grid",
    rowGap: "3.5rem",
  }),

  btnClose: css({
    fontSize: "1.5rem",
    width: "max-content !important",
    aspectRatio: "5 / 1",
    color: `rgb(${colors.primaryLight})`,
    backgroundColor: `rgb(${colors.whiteLight})`,
    fontWeight: "bold",
  }),
};

export const InformationalBackdropDialog = (
  props: InformationalBackdropDialogProps
) => {
  return (
    <ModalWrapper hasBackdrop zIndex={props.zIndex || 10} isOpen={props.isOpen}>
      <div css={informationalBDCss.container}>
        {props.children}
        <button
          onClick={() => {
            handleCloseDialogModal(props.onClose);
          }}
          css={[universalCss.container, informationalBDCss.btnClose]}
        >
          <p>BACK TO ADVENTURE!</p>
        </button>
      </div>
    </ModalWrapper>
  );
};
