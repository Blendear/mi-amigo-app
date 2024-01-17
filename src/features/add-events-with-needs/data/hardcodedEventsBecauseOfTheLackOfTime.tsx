import { placeholderEvent1 } from "@/features/add-events-with-needs/data/placeholderEvents";
import { EventWithNeeds } from "../types";
import VideoPlaylistWatcher from "@/features/subapp-yt-watcher/components/VideoPlaylistWatcher";
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
    name: "Oglądanie",
    description: "VOD / YT / seriale / Twitch etc.",
    imagePath:
      "https://images.unsplash.com/photo-1642726197634-2a21f764220a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHlvdXR1YmUlMjBpY29ufGVufDB8fDB8fHww",
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
    addOnsByVariants: {
      youtube: {
        subApps: [
          {
            id: "",
            name: "",
            description: "",
            imagePath: "",
            imageAltText: "",
            contentAsLink: "",
            contentAsText: "",
          },
        ],
      },
      VODs: {
        subApps: [],
      },
    },
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
