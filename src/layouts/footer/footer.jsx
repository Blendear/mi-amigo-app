import styles from "src/styles/sass/styles-all.module.scss";
import { useEffect, useState } from "react";
import { getMiAmigoDataOfUser } from "../..";
import { useAppDispatch } from "../../store/redux/hooks";
import { appDataOfCurrentUserSliceActions } from "../../store/redux/store-redux";

const Footer = () => {
  const [loadingState, setLoadingState] = useState("fetching");
  const dispatch = useAppDispatch();
  const userName = "Tobi The Wizard";

  useEffect(() => {
    console.log("getDataFromDB started");
    const getItemsFromDB = async () => {
      const itemsFromDB = await getMiAmigoDataOfUser(userName, setLoadingState);
      console.log("getDataFromDB gave us this items: ", itemsFromDB.data);
      dispatch(
        appDataOfCurrentUserSliceActions.setAppDataOfCurrentUser(
          itemsFromDB.data
        )
      );
    };
    getItemsFromDB();
  }, []);

  return <div className={styles["footer__container"]}>{loadingState}</div>;
};
export default Footer;
