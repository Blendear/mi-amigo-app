const EventDataDisplay = ({ eventData }) => {
  const displayArray = (array) => {
    return array.map((item) => (
      <div key={item.id}>
        <p>{item.id}</p>
        <p>{JSON.stringify(item.name || item.description)}</p>
      </div>
    ));
  };

  const displayAddOnsByVariants = (addOnsByVariants) => {
    return Object.keys(addOnsByVariants).map((variant) => (
      <div key={variant}>
        <h3>{variant}</h3>
        {Object.keys(addOnsByVariants[variant]).map((property) => (
          <div key={property}>
            <h4>{property}</h4>
            {displayArray(addOnsByVariants[variant][property])}
          </div>
        ))}
      </div>
    ));
  };

  console.log(eventData);

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
      <p>Start Date and Time: {eventData.timedVariantProps.startDateAndTime}</p>
      <p>End Date and Time: {eventData.timedVariantProps.endDateAndTime}</p>
      <p>Importance: {eventData.allDayLongVariantProps.importance}</p>
      <p>Date: {eventData.allDayLongVariantProps.date}</p>
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

      {/* {displayAddOnsByVariants(eventData.addOnsByVariants)} */}

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
