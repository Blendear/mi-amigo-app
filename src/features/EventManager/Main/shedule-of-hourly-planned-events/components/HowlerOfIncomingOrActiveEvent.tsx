/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useMemo, useState } from "react";
import { hardcodedEventsBecauseOfTheLackOfTime } from "../../show-event-data/data/hardcodedEventsBecauseOfTheLackOfTime";
import ReactHowler from "react-howler";
import { IoMdNotificationsOff } from "react-icons/io";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { biggerSmaller } from "../../chest-of-daily-planned-and-unplanned-events/components/ChestButton";

export const HowlerOfIncomingOrActiveEvent = ({ currentTime }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const [isSoundAllowed, setIsSoundAllowed] = useState(false);

  const [src, setSrc] = useState<null | string>(null);

  const currentTimeHoursAndMinutes = useMemo(() => {
    return {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
    };
  }, [currentTime]);

  const startTimesOfEventHowls = useMemo(() => {
    return hardcodedEventsBecauseOfTheLackOfTime.eventsWithNeeds.sheduleOfHourlyPlannedEvents.map(
      (event) => {
        const startDate = new Date(event.startDate);

        return {
          startTime: {
            hours: startDate.getHours(),
            minutes: startDate.getMinutes(),
          },
          soundToHowl: event.soundToHowl,
        };
      }
    );
  }, []);

  useEffect(() => {
    const checkAndPlaySound = () => {
      startTimesOfEventHowls.forEach((event) => {
        const isHourEqual =
          event.startTime.hours === currentTimeHoursAndMinutes.hours;

        if (!isHourEqual) {
          return;
        }

        // is matching if it's the same minute or maximum 10 minutes before
        const isMinuteMatching =
          event.startTime.minutes === currentTimeHoursAndMinutes.minutes ||
          (event.startTime.minutes >= currentTimeHoursAndMinutes.minutes - 5 &&
            event.startTime.minutes <= currentTimeHoursAndMinutes.minutes + 5);

        if (!isMinuteMatching) {
          return;
        }

        if (!isPlaying) {
          setIsPlaying(true);
        }
      });
    };

    checkAndPlaySound();
  }, [currentTime]);

  // console.log("isplaying", isPlaying, "sound", src);
  return (
    <>
      {/* 
      // isSoundAllowed button is necessary, since new google policy
      // requires any user interaction on the website before playing sound
    */}
      <button
        css={[
          universalCss.wrapperWithCenteredSvg("40px", "100%"),
          {
            zIndex: 1,
            position: "absolute",
            right: "10px",
            animation: `${biggerSmaller} 1s infinite`,
          },
        ]}
        onClick={() => {
          setSrc("/mp3/cello-notification.mp3");
          setIsSoundAllowed(true);
        }}
      >
        {isSoundAllowed ? <></> : <IoMdNotificationsOff />}
      </button>

      <ReactHowler
        src={src || "/mp3/"}
        playing={isSoundAllowed && isPlaying}
        onEnd={() => {
          setIsPlaying(false);
          setSrc(null);
        }}
      />
    </>
  );
};
