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
import { HowlerOfIncomingOrActiveEvent } from "../components/HowlerOfIncomingOrActiveEvent";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiReset } from "react-icons/bi";

const toastProps = {
  hideProgressBar: true,
  closeOnClick: false,
  icon: false,
};

const colorOfBoxShadow = {
  create: "189, 16, 77",
  absorb: "16, 189, 183",
  chill: "111, 189, 16",
};

const toastCss = {
  container: css({}),

  ul: css({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    justifyItems: "center",
  }),

  liImage: css({
    width: "100px",
    aspectRatio: "1/1",
  }),
};

const getTodayDateString = () => {
  const today = new Date();
  return today.toISOString().split("T")[0]; // Returns 'YYYY-MM-DD' format
};

const Scheduler = () =>
  // { events }: DailyScheduleProps
  {
    const scrollHereRef = useRef(null);
    const dontScrollHereRef = useRef(null);

    const executeScroll = () => scrollHereRef.current?.scrollIntoView();

    const scheduleRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(new Date());

    const [hardcodedEventsInSchedule, setHardcodedEventsInSchedule] = useState(
      hardcodedEventsBecauseOfTheLackOfTime.eventsWithNeeds
        .sheduleOfHourlyPlannedEvents
    );

    // Needed for showing current events list, if the date is today
    // (otherwise, show the original list)
    const getDeletedEventIds = () =>
      JSON.parse(localStorage.getItem("deletedEventIds")) || [];
    const getLastUpdateDate = () =>
      localStorage.getItem("dateOfUpdatingTheSchedule");

    // Deleting events onHold
    const holdTimeout = useRef(null);
    const handleMouseDown = (eventId) => {
      // Start a timeout when the button is pressed
      holdTimeout.current = setTimeout(() => {
        // alert("Button held for specified duration!");
        handleDeleteEvent(eventId);
      }, 1000); // Duration in milliseconds
    };
    const handleMouseUpOrLeave = () => {
      // Clear the timeout if the user releases or leaves early
      if (holdTimeout.current) {
        clearTimeout(holdTimeout.current);
        holdTimeout.current = null;
      }
    };
    // Delete & Save list of deleted events in localStorage
    const handleDeleteEvent = (eventId) => {
      const deletedEventIds = getDeletedEventIds();

      // Add event ID to the deleted list if not already deleted
      if (!deletedEventIds.includes(eventId)) {
        deletedEventIds.push(eventId);
        localStorage.setItem(
          "deletedEventIds",
          JSON.stringify(deletedEventIds)
        );
      }

      // Update schedule by filtering out the deleted event
      setHardcodedEventsInSchedule((prevEvents) => {
        const updatedEvents = prevEvents.filter(
          (event) => event.id !== eventId
        );
        return updatedEvents;
      });

      // Update the date of the schedule update in localStorage to today
      localStorage.setItem("dateOfUpdatingTheSchedule", getTodayDateString());
    };

    // If i deleted events today - Gets the events without the deleted ones
    // If it was not today - Get the original events & reset the deleted events list
    useEffect(() => {
      // Get the current date and the last update date from localStorage
      const todayDateString = getTodayDateString();
      const lastUpdateDate = getLastUpdateDate();
      console.log("lastUpdateDate", lastUpdateDate);
      console.log("todayDateString", todayDateString);
      console.log(
        "lastUpdateDate === todayDateString",
        lastUpdateDate === todayDateString
      );
      if (lastUpdateDate !== todayDateString) {
        // If the schedule was updated NOT today, reset the deleted events list
        localStorage.setItem("deletedEventIds", JSON.stringify([]));
        setHardcodedEventsInSchedule(
          hardcodedEventsBecauseOfTheLackOfTime.eventsWithNeeds
            .sheduleOfHourlyPlannedEvents
        );
      } else {
        // Otherwise, filter out deleted events, which i deleted today
        const deletedEventIds = getDeletedEventIds();
        const filteredEvents =
          hardcodedEventsBecauseOfTheLackOfTime.eventsWithNeeds.sheduleOfHourlyPlannedEvents.filter(
            (event) => !deletedEventIds.includes(event.id)
          );
        setHardcodedEventsInSchedule(filteredEvents);
      }
    }, []);

    useEffect(() => {
      // executeScroll();
      if (scheduleRef.current) {
        // calculateActiveBlock();
        const activeBlockElement = scheduleRef.current.querySelector(
          `.${styles["schedule__grid__time-blocks__block--active"]}`
        );

        if (activeBlockElement) {
          scheduleRef.current.scrollTop = activeBlockElement.offsetTop;
        }
      }
      // }, [currentTime]); // only once is enough for now, because I often change the focused event manually
    }, []);

    return (
      <div className={styles["schedule"]}>
        {/* <p>Czasunio: {formatTimeOutOfDate(currentTime)}</p> */}
        {/* <HowlerOfIncomingOrActiveEvent currentTime={currentTime} /> */}
        <DynamicTime setTime={setCurrentTime} />
        <div className={styles["schedule__grid"]}>
          <div className={styles["schedule__grid__time-blocks"]}>
            <TimeBlocks15Minutes
              activeBlockNr={calculateActiveBlock(currentTime)}
            />
          </div>
          <div className={styles["schedule__grid__events"]}>
            {hardcodedEventsInSchedule.map((event, index) => {
              const eventPosition = calculateEventPosition(event);
              const activeBlockPosition = calculateActiveBlock(currentTime);
              const isEventActive =
                activeBlockPosition + 1 >= eventPosition.gridRowStart &&
                activeBlockPosition + 1 <= eventPosition.gridRowEnd;

              const colorForNeed = colorOfBoxShadow[event.variant];

              return (
                <button
                  onClick={() => {
                    toast.info(
                      <div>
                        <h1>{event.title}</h1>

                        {event.workflowsAkaKWLinks && (
                          <ul css={toastCss.ul}>
                            {event.workflowsAkaKWLinks.map((data, index) => (
                              <li key={index}>
                                <a href={data.link}>
                                  <ImageWithWrapper
                                    src={data.imagePath}
                                    wrapperCss={toastCss.liImage}
                                  />
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>,

                      toastProps
                    );
                  }}
                  // hold=delete will be better UX, as it seems
                  // onDoubleClick={() => handleDeleteEvent(event.id)}
                  // \/
                  onMouseDown={() => {
                    handleMouseDown(event.id);
                  }}
                  onMouseUp={handleMouseUpOrLeave}
                  onMouseLeave={handleMouseUpOrLeave}
                  onTouchStart={() => {
                    handleMouseDown(event.id);
                  }}
                  onTouchEnd={handleMouseUpOrLeave}
                  ref={isEventActive ? scrollHereRef : dontScrollHereRef}
                  key={event.id}
                  className={styles["schedule__grid__events__event"]}
                  style={calculateEventPosition(event)}
                  css={{
                    fontSize: "1rem",
                    // boxShadow: `inset 0 0 1rem 0.1rem rgb(${colorForNeed}, 0.75)`,
                    filter: `drop-shadow(0px 0 10px rgb(${colorForNeed},0.5))`,
                    border: `1px solid rgb(${colorForNeed})`,
                    backgroundColor: "black",
                  }}
                >
                  <ImageWithWrapper
                    src={event.image}
                    wrapperCss={{
                      width: "100%",
                    }}
                  />
                  {/* The title will be shown on click only */}
                  {/* <div>{event.title}</div> */}
                </button>
              );
            })}
          </div>
        </div>
        <button
          css={{
            fontSize: "100px",
          }}
          onClick={() => {
            localStorage.setItem("deletedEventIds", JSON.stringify([]));
            setHardcodedEventsInSchedule(
              hardcodedEventsBecauseOfTheLackOfTime.eventsWithNeeds
                .sheduleOfHourlyPlannedEvents
            );
            localStorage.setItem(
              "dateOfUpdatingTheSchedule",
              getTodayDateString()
            );
          }}
        >
          <BiReset />
        </button>
      </div>
    );
  };

export default Scheduler;
