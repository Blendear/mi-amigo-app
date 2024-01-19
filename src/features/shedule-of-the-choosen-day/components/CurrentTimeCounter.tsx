import { useEffect } from "react";
import formatTimeOutOfDate from "../utils/formatTimeOutOfDate";

const DynamicTime = ({ setTime }) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      setTime(currentTime);
    }, 5 * 60 * 1000); // Update time every 5 minutes (don't focus on minutes/seconds, waste of fun)

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [setTime]);

  return <></>;
};

export default DynamicTime;
