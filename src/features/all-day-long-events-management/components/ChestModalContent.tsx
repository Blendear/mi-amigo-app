import styles from "src/styles/sass/styles-all.module.scss";
import { ChestModalContentProps } from "..";
import { useAppSelector } from "../../../store/redux/hooks";
import { ImageWithWrapper } from "../../..";
import { useState, useRef } from "react";
import DialogModal from "../../../components/DialogModal";
import EventDataDisplay from "./EventDataDisplay";
import hardcodedEventsBecauseOfTheLackOfTime from "@/features/add-events-with-needs/data/hardcodedEventsBecauseOfTheLackOfTime";

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
  // console.log(chestWithAllDayLongEvents[0]);

  return (
    <div>
      {hardcodedEventsBecauseOfTheLackOfTime.map((event, index) => {
        console.log(index);
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
            </button>
          </div>
        );
      })}
      {isModalOpen && (
        <DialogModal isOpen={isModalOpen} onClose={closeModal}>
          <EventDataDisplay
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
