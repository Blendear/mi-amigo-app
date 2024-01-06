import styles from "src/styles/sass/styles-all.module.scss";

import { ChestModalContentProps } from "..";
import { useAppSelector } from "../../../store/redux/hooks";

const ChestModalContent = ({}: ChestModalContentProps) => {
  const chestWithAllDayLongEvents = useAppSelector(
    (state) =>
      state.appDataOfCurrentUserReducer.eventsWithNeeds
        .chestWithAllDayLongEvents
  );

  return <div>array</div>;
};

export default ChestModalContent;
