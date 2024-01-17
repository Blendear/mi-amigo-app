import VideoPlaylistWatcher from "@/features/subapp-yt-watcher/components/VideoPlaylistWatcher";

const EventDataDisplay = ({ eventData }) => {
  console.log("eventData", eventData);

  const displayArray = (array) => {
    return array.map((item) => (
      <div key={item.id}>
        <p>{item.id}</p>
        <p>{JSON.stringify(item.name || item.description)}</p>
      </div>
    ));
  };

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
                <>{console.log("addOnData", addOn)}</>
                <h5>Name of addOn : {addOn.subappName || addOn.name}</h5>
                {addOn.subappName === "video-watcher" ? (
                  <VideoPlaylistWatcher
                    listOfYouTubeVideoIDs={addOn.payload.ytVideoIds}
                  />
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
    <div>
      <p>Event Instance ID: {eventData.eventInstanceId}</p>
      <p> Image Path: {eventData.imagePath}</p>
      <p>GIF Path: {eventData.GIFPath}</p>
      <p>Name: {eventData.name}</p>
      <p>Description: {eventData.description}</p>
      <p>Image Path: {eventData.imagePath}</p>
      <p>Image Alt Text: {eventData.imageAltText}</p>
      <p>Event Group ID: {eventData.eventGroupId}</p>
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
        X Minutes Before Start Amount:{" "}
        {eventData.vocalNotifications.xMinutesBeforeStartAmount}
      </p>
      <p>
        X Minutes Before Start Sound:{" "}
        {eventData.vocalNotifications.xMinutesBeforeStartSound}
      </p>

      {displayAddOnsByVariants(eventData.addOnsByVariants)}

      <p>Needs Fulfilled:</p>
      <ul>
        {Object.keys(eventData.needsFulfilled).map((need) => (
          <li key={need}>
            {need}: {eventData.needsFulfilled[need] ? "Yes" : "No"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventDataDisplay;
