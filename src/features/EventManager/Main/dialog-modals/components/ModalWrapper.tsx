/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";

import { ModalWrapperProps } from "../types/types";
import { useEffect } from "react";
import { enableBodyOverflow } from "../utils/enableBodyOverflow";
import ReactDOM from "react-dom";
const modalWrapperCss = {
  container: css({
    overscrollBehavior: "contain",
    zIndex: 10,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100vh",
    border: "none",
    display: "grid",
    gridTemplateRows: "max-content 1fr",
    // overflowY: "hidden", // Set overflow-y to hidden initially
    overflowY: "scroll",
    backgroundColor: "rgba(0, 0, 0)",

    "& > div": {
      overflowY: "scroll",
    },

    "& *": {
      // color: "white",
    },
  }),
};

export const ModalWrapper = (props: ModalWrapperProps) => {
  const disableBodyOverflow = () => {
    document.body.classList.add("dialog-modal-open");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      //   behavior: "instant",
    });
  };

  useEffect(() => {
    if (props.isOpen) {
      disableBodyOverflow();
      scrollToTop();
    } else {
      enableBodyOverflow();
    }
  }, [props.isOpen]);

  const modalContent = (
    <dialog
      //   className={`${styles["dialog-modal__container"]} ${
      //     styles[props.additionalContainerClassName]
      //   }`}
      css={[
        modalWrapperCss.container,
        props.zIndex && { zIndex: props.zIndex },
        props.hasBackdrop && {
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          backdropFilter: "blur(8px) saturate(0%)",
        },
      ]}
      open={props.isOpen}
      style={props.isOpen ? { display: "block" } : { display: "none" }}
    >
      {props.children}
    </dialog>
  );

  return ReactDOM.createPortal(modalContent, document.getElementById("modal"));
};
