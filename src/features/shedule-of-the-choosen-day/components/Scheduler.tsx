import React from "react";
import styles from "@/styles/sass/styles-all.module.scss";
import { useState } from "react";
import DynamicTime from "./CurrentTimeCounter";
import TimeBlocks15Minutes from "./TimeBlocks15Minutes";
import formatTimeOutOfDate from "../utils/formatTimeOutOfDate";

interface Event {
  id: number;
  title: string;
  startTime: string;
  endTime: string;
  image: string;
}

interface DailyScheduleProps {
  events: Event[];
}

const Scheduler = ({ events }: DailyScheduleProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const calculateActiveBlock = () => {
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    return hours * 4 + Math.floor(minutes / 15);
  };

  return (
    <div className={styles["schedule"]}>
      <p>Czasunio: {formatTimeOutOfDate(currentTime)}</p>
      <DynamicTime setTime={setCurrentTime} />
      <div className={styles["schedule__grid"]}>
        <div className={styles["schedule__grid__time-blocks"]}>
          <TimeBlocks15Minutes activeBlockNr={calculateActiveBlock()} />
        </div>
        <div className={styles["schedule__grid__events"]}></div>
      </div>
    </div>
  );
};

export default Scheduler;
