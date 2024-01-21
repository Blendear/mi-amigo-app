import React from "react";
import styles from "@/styles/sass/styles-all.module.scss";
import { useState, useRef, useEffect } from "react";
import DynamicTime from "./CurrentTimeCounter";
import TimeBlocks15Minutes from "./TimeBlocks15Minutes";
import formatTimeOutOfDate from "../utils/formatTimeOutOfDate";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import { Event } from "../types";
import calculateEventPosition from "../utils/calculateEventPosition";
import calculateActiveBlock from "../utils/calculateActiveBlock";

const placeholderEvents: Event[] = [
  {
    id: 1,
    title: "Placeholder Event 1",
    startDate: new Date(2024, 0, 19, 9, 15), // January 19, 2024, 10:15 AM
    endDate: new Date(2024, 0, 19, 11, 0), // January 19, 2024, 11:00 AM
    image: "placeholder_image_1.jpg",
  },
  {
    id: 2,
    title: "Placeholder Event 2",
    startDate: new Date(2024, 0, 19, 14, 30), // January 19, 2024, 2:30 PM
    endDate: new Date(2024, 0, 19, 15, 15), // January 19, 2024, 3:15 PM
    image: "placeholder_image_2.jpg",
  },
];

const Scheduler = () =>
  // { events }: DailyScheduleProps
  {
    const scheduleRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
      if (scheduleRef.current) {
        // calculateActiveBlock();
        const activeBlockElement = scheduleRef.current.querySelector(
          `.${styles["schedule__grid__time-blocks__block--active"]}`
        );

        if (activeBlockElement) {
          scheduleRef.current.scrollTop = activeBlockElement.offsetTop;
        }
      }
    }, [currentTime]);

    return (
      <div className={styles["schedule"]}>
        <p>Czasunio: {formatTimeOutOfDate(currentTime)}</p>
        <DynamicTime setTime={setCurrentTime} />
        <div className={styles["schedule__grid"]}>
          <div className={styles["schedule__grid__time-blocks"]}>
            <TimeBlocks15Minutes
              activeBlockNr={calculateActiveBlock(currentTime)}
            />
          </div>
          <div className={styles["schedule__grid__events"]}>
            {placeholderEvents.map((event) => (
              <div
                key={event.id}
                className={styles["schedule__grid__events__event"]}
                style={calculateEventPosition(event)}
              >
                <ImageWithWrapper
                  src="https://cdn.hearthstonetopdecks.com/wp-content/uploads/2018/11/desktop-wallpaper-rastakhans-rumble098.jpg"
                  width="100%"
                />
                <div>{event.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default Scheduler;
