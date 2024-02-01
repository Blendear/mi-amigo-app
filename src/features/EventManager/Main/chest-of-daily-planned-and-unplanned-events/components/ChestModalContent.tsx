/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChestModalContentProps } from "../types";
import { useAppSelector } from "@/store/redux/hooks";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import { useState, useRef } from "react";
import DialogModal from "@/components/DialogModal";
import EventDisplayIdeasForShowDataVariant from "@/features/EventManager/Main/show-event-data/components/EventDisplayIdeasForShowDataVariant";
import hardcodedEventsBecauseOfTheLackOfTime from "@/features/EventManager/Main/show-event-data/data/hardcodedEventsBecauseOfTheLackOfTime";
import EventDisplay from "@/features/EventManager/Main/show-event-data/components/EventDisplay";

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

  return (
    <div>
      <section>For Today</section>
      <section>
        {" "}
        {chestWithAllDayLongEvents.necessary.map((event, index) => {
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
                  width="50%"
                  aspectRatio="2.63/1"
                />
                <div>{event.name}</div>
              </button>
            </div>
          );
        })}
      </section>
      <section>
        {" "}
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
                  width="50%"
                  aspectRatio="2.63/1"
                />
                <div>{event.name}</div>
              </button>
            </div>
          );
        })}
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
