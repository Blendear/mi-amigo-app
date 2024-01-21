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
  {
    name: "Gaming",
    description: "",
    imagePath:
      "https://www.jaxon.gg/wp-content/uploads/2022/10/fortnite-movie.jpg",
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
    needsFulfilledByVariant: {
      "z-ekipą": {
        isWant: true,
        isCreate: true,
        isAbsorb: false,
        isChill: false,
        isVent: false,
        isSquad: true,
        isActive: false,
        isWilderness: false,
        isFresh: true,
      },
      solo: {
        isWant: true,
        isCreate: true,
        isAbsorb: false,
        isChill: false,
        isVent: false,
        isSquad: false,
        isActive: false,
        isWilderness: false,
        isFresh: false,
      },
    },
    vocalNotifications: {
      startEventSound: "",
      xMinutesBeforeStartAmount: null,
      xMinutesBeforeStartSound: "",
      endEventSound: "",
    },
  },
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
      youtubeVideos: {
        subApps: [
          {
            subappName: "video-watcher",
            payload: {
              ytVideoIds: ["IzBuiwjozDc", "JEjFm5kMdtw", "Qhw51Sr5drs"],
              VODLinks: ["vod-link-1", "vod-link-2", "vod-link-3"],
            },
          },
        ],
        protips: [
          {
            name: "Protip 1",
            description: "Protip 1 description",
            imagePath:
              "https://images.unsplash.com/photo-1642726197634-2a21f764220a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHlvdXR1YmUlMjBpY29ufGVufDB8fDB8fHww",
            contentAsLink: "https://google.com",
            contentAsText: "Protip 1 content as text",
          },
        ],

        traps: [
          {
            name: "Trap 1",
            description: "Trap 1 description",
            imagePath:
              "https://images.unsplash.com/photo-1642726197634-2a21f764220a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHlvdXR1YmUlMjBpY29ufGVufDB8fDB8fHww",
            contentAsLink: "https://google.com",
            contentAsText: "Trap 1 content as text",
          },
        ],
      },
      VODs: {
        subApps: [],
      },
    },
    needsFulfilledByVariant: {
      jakikolwiek: {
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
