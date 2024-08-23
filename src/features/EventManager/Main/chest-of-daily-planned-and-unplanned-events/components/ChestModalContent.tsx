/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { ChestModalContentProps } from "../types";
import { useAppSelector } from "@/store/redux/hooks";
import { TitleBarWithTogglableContent } from "@/components/TitleBarWithTogglableContent";
import EventDisplaySmall from "../../show-event-data/components/EventDisplaySmall";
import { CheckboxesToFilterEvents } from "./CheckboxesToFilterEvents";
import { useFilterEventsWithCheckboxes } from "../hooks/useFilterEventsWithCheckboxes";

const chestModalCss = {
  container: css({}),

  titleBarWithContent: css([universalCss.container, {}]),
};

const ChestModalContent = ({}: ChestModalContentProps) => {
  const chestWithAllDayLongEvents = useAppSelector(
    (state) =>
      state.appDataOfCurrentUserReducer.eventsWithNeeds
        .chestWithAllDayLongEvents
  );

  // herehere

  // TODO: Create a special wrapper for an event "small display",
  // which will have buttons to manage the event quickly and will have
  // place for the animation on the right. We can use it in the
  // "ChestModalContent", "LibraryPfTemplateEvents" (maybe one day in
  // the schedule too, but its way to customized for now right there)
  //
  //     ) 3 columns, where 1st is empty, and 3rd is for the animation

  const { handleCheckboxChange, filterEvents } = useFilterEventsWithCheckboxes({
    isWant: false,
    isCreate: false,
    isAbsorb: false,
    isChill: false,
    isVent: false,
    isSquad: false,
    isActive: false,
    isWilderness: false,
    isFresh: false,
  });

  const filteredEvents = {
    necessary: filterEvents(chestWithAllDayLongEvents.necessary),
    oneDay: filterEvents(chestWithAllDayLongEvents.oneDay),
    libraryOfTemplateEvents: filterEvents(
      chestWithAllDayLongEvents.libraryOfTemplateEvents || []
    ),
  };

  return (
    <div css={chestModalCss.container}>
      {/* <CheckboxesToFilterEvents onChange={handleCheckboxChange} /> */}

      {/* TODO: map over all chestWithAllDayLongEvents.necessary, and tender only those which "deadline" is for today or in the past */}
      {/* <section>
        <TitleBarWithTogglableContent
          titleBarContent={
            <h2 css={chestModalCss.titleBarWithContent}>For Today</h2>
          }
        >
          ....
        </TitleBarWithTogglableContent>
      </section> */}
      <section>
        <TitleBarWithTogglableContent
          titleBarContent={
            <h2 css={chestModalCss.titleBarWithContent}>TODO Konieczne</h2>
          }
        >
          {filteredEvents.necessary.map((event, index) => {
            return <EventDisplaySmall key={index} event={event} />;
          })}
        </TitleBarWithTogglableContent>
      </section>
      <section>
        <TitleBarWithTogglableContent
          titleBarContent={
            <h2 css={chestModalCss.titleBarWithContent}>TODO Opcjonalne</h2>
          }
        >
          {filteredEvents.oneDay.map((event, index) => {
            return <EventDisplaySmall key={index} event={event} />;
          })}
        </TitleBarWithTogglableContent>
      </section>

      <section>
        <TitleBarWithTogglableContent
          titleBarContent={
            <h2 css={chestModalCss.titleBarWithContent}>
              Templatki powtarzalnych
            </h2>
          }
        >
          {filteredEvents.libraryOfTemplateEvents.map((event, index) => {
            return <EventDisplaySmall key={index} event={event} />;
          })}
        </TitleBarWithTogglableContent>
      </section>
    </div>
  );
};

export default ChestModalContent;
