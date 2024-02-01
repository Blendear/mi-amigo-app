import styles from "@/styles/sass/styles-all.module.scss";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../store/redux/hooks";
import { appDataOfCurrentUserSliceActions } from "../../store/redux/store-redux";
import { IoIosArrowUp } from "react-icons/io";

import { hardcodedEventsBecauseOfTheLackOfTime } from "@/features/EventManager/Main/show-event-data/data/hardcodedEventsBecauseOfTheLackOfTime";
import { MyBeautifulTimer } from "@/features/EventManager/Main/pomodoro-timer/components/MyBeautifulTimer";

const Footer = () => {
  const [loadingState, setLoadingState] = useState("fetching");
  const [isFooterOpen, setIsFooterOpen] = useState(false);
  const dispatch = useAppDispatch();
  const userName = "Tobi The Wizard";

  useEffect(() => {
    const getItemsFromDB = async () => {
      // TODO: Use the DB data after testing the app with the placeholder data
      // const itemsFromDB = await getMiAmigoDataOfUser(userName, setLoadingState);
      dispatch(
        appDataOfCurrentUserSliceActions.setAppDataOfCurrentUser(
          // itemsFromDB.data
          hardcodedEventsBecauseOfTheLackOfTime
        )
      );
    };
    getItemsFromDB();
  }, []);

  return (
    <footer className={styles["footer__container"]}>
      <div
        style={!isFooterOpen ? { display: "none" } : {}}
        className={styles["footer__timer"]}
      >
        <MyBeautifulTimer />
      </div>
      <button onClick={() => setIsFooterOpen((prevState) => !prevState)}>
        {
          <IoIosArrowUp
            fontSize={"5rem"}
            style={isFooterOpen ? { rotate: "180deg" } : {}}
          />
        }
      </button>
    </footer>
  );
};
export default Footer;
