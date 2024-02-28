/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import styles from "@/styles/sass/styles-all.module.scss";
import { useState, useRef, useEffect } from "react";
import DynamicTime from "./CurrentTimeCounter";
import TimeBlocks15Minutes from "./TimeBlocks15Minutes";
import formatTimeOutOfDate from "../utils/formatTimeOutOfDate";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import calculateEventPosition from "../utils/calculateEventPosition";
import calculateActiveBlock from "../utils/calculateActiveBlock";
import { hardcodedEventsBecauseOfTheLackOfTime } from "../../show-event-data/data/hardcodedEventsBecauseOfTheLackOfTime";

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
        {/* <p>Czasunio: {formatTimeOutOfDate(currentTime)}</p> */}
        <DynamicTime setTime={setCurrentTime} />
        <div className={styles["schedule__grid"]}>
          <div className={styles["schedule__grid__time-blocks"]}>
            <TimeBlocks15Minutes
              activeBlockNr={calculateActiveBlock(currentTime)}
            />
          </div>
          <div className={styles["schedule__grid__events"]}>
            {hardcodedEventsBecauseOfTheLackOfTime.eventsWithNeeds.sheduleOfHourlyPlannedEvents.map(
              (event) => (
                <div
                  key={event.id}
                  className={styles["schedule__grid__events__event"]}
                  style={calculateEventPosition(event)}
                >
                  <ImageWithWrapper src={event.image} width="100%" />
                  <div>{event.title}</div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  };

export default Scheduler;
