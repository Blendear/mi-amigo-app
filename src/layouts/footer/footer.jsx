import styles from "src/styles/sass/styles-all.module.scss";
import { useEffect, useState, useRef } from "react";
import { getMiAmigoDataOfUser } from "../..";
import { useAppDispatch } from "../../store/redux/hooks";
import { appDataOfCurrentUserSliceActions } from "../../store/redux/store-redux";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { ImageWithWrapper } from "../..";
import { FaPlay, FaPause } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import { IoIosArrowUp } from "react-icons/io";
const MyBeautifulTimer = () => {
  const gifTypeRef = useRef("adventure");
  const [timerKey, setTimerKey] = useState(0);
  const [isTimerPlaying, setIsTimerPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(3030);

  const handleSetTimer = (minutes, seconds, gifType) => {
    setCurrentTime(minutes * 60 + seconds);
    setTimerKey((prevKey) => prevKey + 1);
    setIsTimerPlaying(true);
    gifTypeRef.current = gifType;
  };

  const handleTogglePlayPause = () => {
    setIsTimerPlaying((prevState) => !prevState);
  };

  const handleRestartTimer = () => {
    setTimerKey((prevKey) => prevKey + 1);
    setIsTimerPlaying(true);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <>
      <svg style={{ height: "0rem" }}>
        <defs>
          <linearGradient id="your-unique-id" x1="1" y1="0" x2="0" y2="0">
            <stop
              offset="5%"
              stopColor={
                gifTypeRef.current === "adventure" ? "gold" : "#00ff87"
              }
            />
            <stop
              offset="95%"
              stopColor={gifTypeRef.current === "adventure" ? "red" : "#60efff"}
            />
          </linearGradient>
        </defs>
      </svg>
      <CountdownCircleTimer
        key={timerKey}
        size={100}
        isPlaying={isTimerPlaying}
        duration={currentTime}
        colors="url(#your-unique-id)"
        strokeLinecap="none"
        strokeWidth={15}
        onComplete={() => {
          setIsTimerPlaying(false);
        }}
      >
        {({ remainingTime }) => formatTime(remainingTime)}
      </CountdownCircleTimer>
      <button
        onClick={() => handleSetTimer(50, 30, "adventure")}
        style={{
          filter: gifTypeRef.current !== "adventure" ? "saturate(0%)" : "none",
        }}
      >
        <ImageWithWrapper
          width="6rem"
          src={
            gifTypeRef.current === "adventure"
              ? "https://media.tenor.com/0rK1mUAoy_IAAAAj/jake-the-dog-adventure-time.gif"
              : "/images/timer/adventure.png"
          }
        />
      </button>
      <button
        onClick={() => handleSetTimer(9, 30, "chill")}
        style={{
          filter: gifTypeRef.current !== "chill" ? "saturate(0%)" : "none",
        }}
      >
        <ImageWithWrapper
          width="6rem"
          src={
            gifTypeRef.current === "chill"
              ? "https://media.tenor.com/eT65efTNamoAAAAj/bonfire-darksouls.gif"
              : "/images/timer/chill.png"
          }
        />
      </button>
      <button onClick={handleTogglePlayPause}>
        {isTimerPlaying ? (
          <FaPause fontSize={"2.5rem"} />
        ) : (
          <FaPlay fontSize={"2.5rem"} />
        )}
      </button>
      <button onClick={handleRestartTimer}>
        <VscDebugRestart fontSize={"3.5rem"} />
      </button>
    </>
  );
};

const Footer = () => {
  const [loadingState, setLoadingState] = useState("fetching");
  const [isFooterOpen, setIsFooterOpen] = useState(false);
  const dispatch = useAppDispatch();
  const userName = "Tobi The Wizard";

  useEffect(() => {
    const getItemsFromDB = async () => {
      const itemsFromDB = await getMiAmigoDataOfUser(userName, setLoadingState);
      dispatch(
        appDataOfCurrentUserSliceActions.setAppDataOfCurrentUser(
          itemsFromDB.data
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
