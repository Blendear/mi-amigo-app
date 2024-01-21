import styles from "@/styles/sass/styles-all.module.scss";
import { ChestModalContentProps } from "../types";
import { useAppSelector } from "@/store/redux/hooks";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import { useState, useRef } from "react";
import DialogModal from "@/components/DialogModal";
import EventFullDisplay from "../../show-event-data/components/EventFullDisplay";
import hardcodedEventsBecauseOfTheLackOfTime from "@/features/EventManager/Main/show-event-data/data/hardcodedEventsBecauseOfTheLackOfTime";

const ChestModalContent = ({}: ChestModalContentProps) => {
  const eventIndexRef = useRef(0);
  // const chestWithAllDayLongEvents = useAppSelector(
  //   (state) =>
  //     state.appDataOfCurrentUserReducer.eventsWithNeeds
  //       .chestWithAllDayLongEvents
  // );
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
      {hardcodedEventsBecauseOfTheLackOfTime.map((event, index) => {
        return (
          <div
            key={index}
            style={{
              marginTop: "2rem",
            }}
          >
            <button
              onClick={() => openModal(index)}
              style={{ width: "100%", display: "grid", justifyItems: "center" }}
            >
              <ImageWithWrapper src={event.imagePath} width="20%" />
              <div>{event.name}</div>
            </button>
          </div>
        );
      })}
      {isModalOpen && (
        <DialogModal isOpen={isModalOpen} onClose={closeModal} zIndex={1002}>
          <EventFullDisplay
            // temporarily commented out, because creating an event-editor for all functionalities
            // is time consuming, and i need those events right now
            // eventData={chestWithAllDayLongEvents[eventIndexRef.current]}

            eventData={
              hardcodedEventsBecauseOfTheLackOfTime[eventIndexRef.current]
            }
          />
        </DialogModal>
      )}
    </div>
  );
};

export default ChestModalContent;
