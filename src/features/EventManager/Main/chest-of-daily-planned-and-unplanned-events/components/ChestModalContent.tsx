/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { ChestModalContentProps } from "../types";
import { useAppSelector } from "@/store/redux/hooks";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import { useState, useRef } from "react";
import DialogModal from "@/components/DialogModal";
import hardcodedEventsBecauseOfTheLackOfTime from "@/features/EventManager/Main/show-event-data/data/hardcodedEventsBecauseOfTheLackOfTime";
import EventDisplay from "@/features/EventManager/Main/show-event-data/components/EventDisplay";
import { TitleBarWithTogglableContent } from "@/components/TitleBarWithTogglableContent";

const chestModalCss = {
  container: css({}),

  titleBarWithContent: css([universalCss.container, {}]),
};

const ChestModalContent = ({}: ChestModalContentProps) => {
  const [isShowingOrEditing, setIsShowingOrEditing] = useState<
    "showing" | "editing"
  >("showing");

  const eventIndexRef = useRef(0);

  const chestWithAllDayLongEvents = useAppSelector(
    (state) =>
      state.appDataOfCurrentUserReducer.eventsWithNeeds
        .chestWithAllDayLongEvents
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index) => {
    eventIndexRef.current = index;
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // herehere

  // TODO: Create a special wrapper for an event "small display",
  // which will have buttons to manage the event quickly and will have
  // place for the animation on the right. We can use it in the
  // "ChestModalContent", "LibraryPfTemplateEvents" (maybe one day in
  // the schedule too, but its way to customized for now right there)

  // TODO: Rework the "hardecodedEventsBecauseOfTheLackOfTime" to be
  // an objetc with ALL placeholder data for the "EventManager" feature
  // with separate events for the library, chest and schedule (later on)

  return (
    <div css={chestModalCss.container}>
      <section>
        <TitleBarWithTogglableContent
          titleBarContent={
            <h2 css={chestModalCss.titleBarWithContent}>For Today</h2>
          }
        >
          {/* TODO: map over all chestWithAllDayLongEvents.necessary, and tender only those which "deadline" is for today or in the past */}
          ....
        </TitleBarWithTogglableContent>
      </section>
      <section>
        <TitleBarWithTogglableContent
          titleBarContent={
            <h2 css={chestModalCss.titleBarWithContent}>Necessary</h2>
          }
        >
          {chestWithAllDayLongEvents.necessary.map((event, index) => {
            return (
              <div
                key={index}
                css={{
                  marginTop: "2rem",
                }}
              >
                <button
                  onClick={() => openModal(index)}
                  css={{
                    width: "100%",
                    display: "grid",
                    justifyItems: "center",
                  }}
                >
                  <ImageWithWrapper
                    src={event.imagePath}
                    width="100%"
                    aspectRatio="2.63/1"
                  />
                  <div>{event.name}</div>
                </button>
              </div>
            );
          })}
        </TitleBarWithTogglableContent>
      </section>
      <section>
        <TitleBarWithTogglableContent
          titleBarContent={
            <h2 css={chestModalCss.titleBarWithContent}>Necessary</h2>
          }
        >
          {chestWithAllDayLongEvents.oneDay.map((event, index) => {
            return (
              <div
                key={index}
                style={{
                  marginTop: "2rem",
                }}
              >
                <button
                  onClick={() => openModal(index)}
                  style={{
                    width: "100%",
                    display: "grid",
                    justifyItems: "center",
                  }}
                >
                  <ImageWithWrapper
                    src={event.imagePath}
                    width="100%"
                    aspectRatio="2.63/1"
                  />
                  <div>{event.name}</div>
                </button>
              </div>
            );
          })}
        </TitleBarWithTogglableContent>
      </section>
      {isModalOpen && (
        <DialogModal isOpen={isModalOpen} onClose={closeModal} zIndex={1002}>
          <EventDisplay
            variant={isShowingOrEditing}
            event={chestWithAllDayLongEvents.necessary[eventIndexRef.current]}
          />
        </DialogModal>
      )}
    </div>
  );
};

export default ChestModalContent;
