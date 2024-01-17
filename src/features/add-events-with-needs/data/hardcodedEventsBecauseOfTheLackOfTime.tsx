import { placeholderEvent1 } from "@/features/add-events-with-needs/data/placeholderEvents";
import { EventWithNeeds } from "../types";
/*
Thats how an object data of an event looks like - an empty one:

{
  name: "",
  description: "",
  imagePath: "",
  imageAltText: "",
  eventGroupId: "",
  eventInstanceId: "",
  GIFPath: "",
  isAllDayLong: false,
  allDayLongVariantProps: {
    importance: "",
    date: new Date(),
  },
  timedVariantProps: {
    startDateAndTime: new Date(),
    endDateAndTime: new Date(),
  },
  deadlineVariant: "none",
  addOnsByVariants: {},
  needsFulfilled: {
    isWant: false,
    isCreate: false,
    isAbsorb: false,
    isChill: false,
    isVent: false,
    isSquad: false,
    isActive: false,
    isWilderness: false,
    isFresh: false,
  },
  vocalNotifications: {
    startEventSound: "",
    xMinutesBeforeStartAmount: null,
    xMinutesBeforeStartSound: "",
    endEventSound: "",
  },
};
*/

const hardcodedEventsBecauseOfTheLackOfTime: EventWithNeeds[] = [
  placeholderEvent1,
  {
    name: "aaaa",
    description: "",
    imagePath: "",
    imageAltText: "",
    eventGroupId: "",
    eventInstanceId: "",
    GIFPath: "",
    isAllDayLong: false,
    allDayLongVariantProps: {
      importance: "",
      date: new Date(),
    },
    timedVariantProps: {
      startDateAndTime: new Date(),
      endDateAndTime: new Date(),
    },
    deadlineVariant: "none",
    addOnsByVariants: {},
    needsFulfilled: {
      isWant: false,
      isCreate: false,
      isAbsorb: false,
      isChill: false,
      isVent: false,
      isSquad: false,
      isActive: false,
      isWilderness: false,
      isFresh: false,
    },
    vocalNotifications: {
      startEventSound: "",
      xMinutesBeforeStartAmount: null,
      xMinutesBeforeStartSound: "",
      endEventSound: "",
    },
  },
];

export default hardcodedEventsBecauseOfTheLackOfTime;
