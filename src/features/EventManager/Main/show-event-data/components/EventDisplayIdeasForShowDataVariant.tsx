/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styles from "@/styles/sass/styles-all.module.scss";
import Playlist from "@/features/EventManager/SubApps/yt-watcher/components/Playlist";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import { useState } from "react";
import ToggleableContent from "@/components/ToggleableContent";
import NeedsFullfilled from "./NeedsFullfilled";

const EventDisplayIdeasForShowDataVariant = ({ eventData }) => {
  // variants of this event - "youtubeVideos", "VODs" ... often there is only 1, but sometimes there are different tools for different variats
  const displayAddOnsByVariants = (addOnsByVariants) => {
    return Object.keys(addOnsByVariants).map((eventVariant) => (
      <div key={eventVariant}>
        <h3
          style={{ color: "brown" }}
        >{`Addons of this event-variant: ${eventVariant}`}</h3>
        {/* types of addOns - "subApps", "protips" ...*/}
        {Object.keys(addOnsByVariants[eventVariant]).map((addOnType) => (
          <div key={addOnType}>
            <h4 style={{ color: "orange" }}>{addOnType}</h4>
            {/* single addOns data objects - data structure depends on the addOn type */}
            {addOnsByVariants[eventVariant][addOnType].map((addOn) => (
              <div key={addOn}>
                <h5>Name of addOn : {addOn.subappName || addOn.name}</h5>
                {/* TODO: Create a separate file wiht an object, that has a keys (like "video-watcher") 
                and values as components (like <VideoPlaylistWatcher/> and i will pass the whole payload)
                for subapp components, which I will use as an objetc to get a specific component by name
                from. Through {}[subappName] */}
                {addOn.subappName === "video-watcher" ? (
                  <Playlist listOfYouTubeVideoIDs={addOn.payload.ytVideoIds} />
                ) : (
                  // Handle other subApps accordingly
                  <div>what to show in non-subapps?</div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    ));
  };

  return (
    <section className={styles["event-data-display__container"]}>
      <ImageWithWrapper
        src={eventData.GIFPath !== "" ? eventData.GIFPath : eventData.imagePath}
        wrapperCss={{
          width: "20vw",
        }}
      />

      <h1>{eventData.name}</h1>

      <h2>{eventData.description}</h2>

      <ToggleableContent title="Time And Sound">
        <p>Is All Day Long: {eventData.isAllDayLong ? "Yes" : "No"}</p>
        <p>Deadline Variant: {eventData.deadlineVariant}</p>
        {/* Temoporarily disabled props \/ because the placeholder data is build differently than the DB one? No idea */}
        {/* <p>Start Date and Time: {eventData.timedVariantProps.startDateAndTime}</p> */}
        {/* <p>End Date and Time: {eventData.timedVariantProps.endDateAndTime}</p> */}
        {/* <p>Importance: {eventData.allDayLongVariantProps.importance}</p> */}
        {/* <p>Date: {eventData.allDayLongVariantProps.date}</p> */}
        <p>Start Event Sound: {eventData.vocalNotifications.startEventSound}</p>
        <p>End Event Sound: {eventData.vocalNotifications.endEventSound}</p>
        <p>
          X Minutes Before Start Amount:
          {eventData.vocalNotifications.xMinutesBeforeStartAmount}
        </p>
        <p>
          X Minutes Before Start Sound:
          {eventData.vocalNotifications.xMinutesBeforeStartSound}
        </p>
      </ToggleableContent>

      <ToggleableContent title="Needs Fulfilled">
        <NeedsFullfilled />
      </ToggleableContent>

      {displayAddOnsByVariants(eventData.addOnsByVariants)}
    </section>
  );
};

export default EventDisplayIdeasForShowDataVariant;
