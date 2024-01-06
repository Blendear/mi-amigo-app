import styles from "src/styles/sass/styles-all.module.scss";
import { ChestModalContentProps } from "..";
import { useAppSelector } from "../../../store/redux/hooks";
import { ImageWithWrapper } from "../../..";

const ChestModalContent = ({}: ChestModalContentProps) => {
  const chestWithAllDayLongEvents = useAppSelector(
    (state) =>
      state.appDataOfCurrentUserReducer.eventsWithNeeds
        .chestWithAllDayLongEvents
  );

  const showAllProps = (event: any) => {
    alert(JSON.stringify(event, null, 2));
  };
  return (
    <div>
      {chestWithAllDayLongEvents.map((event, index) => {
        return (
          <div
            key={index}
            style={{
              display: "grid",
              justifyItems: "center",
            }}
          >
            <h2>{event.name}</h2>
            <p>{event.description}</p>
            <ImageWithWrapper src={event.imagePath} width="20%" />
            <p>{event.hasDeadline ? "Has Deadline" : "No Deadline"}</p>
            <button
              onClick={() => {
                showAllProps(event);
              }}
            >
              Details
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ChestModalContent;
