/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
// import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
// import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import { EventDisplaySmallProps } from "../types";
import { useState } from "react";
import DialogModal from "@/components/DialogModal";
import EventDisplay from "./EventDisplay";

const eventDisplaySmallCss = {
  container: css({ marginTop: "2rem" }),
  button: css({ width: "100%", display: "grid", justifyItems: "center" }),
};

const EventDisplaySmall = ({ event }: EventDisplaySmallProps) => {
  const [showModalWithEventDisplay, setShowModalWithEventDisplay] =
    useState(false);

  return (
    <div css={eventDisplaySmallCss.container}>
      <button
        onClick={() => {
          console.log("setShowModalWithEventDisplay");
          setShowModalWithEventDisplay(true);
        }}
        css={eventDisplaySmallCss.button}
      >
        <ImageWithWrapper
          src={event.GIFPath !== "" ? event.GIFPath : event.imagePath}
          width="100%"
          aspectRatio="2.63/1"
        />
        <div>{event.name}</div>
      </button>

      {showModalWithEventDisplay && (
        <DialogModal
          isOpen={showModalWithEventDisplay}
          onClose={() => {
            setShowModalWithEventDisplay(false);
          }}
          zIndex={1002}
        >
          <EventDisplay variant="showing" event={event} />
        </DialogModal>
      )}
    </div>
  );
};

export default EventDisplaySmall;
