import { EventWithNeeds } from "../types";

export const placeholderEventEmpty: EventWithNeeds = {
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
  addOnsByVariants: {
    variant1: {
      step1: {
        habits: [],
        howAndTips: [],
        toolsWhere: [],
        toolsSubApps: [],
        toolsPhysicalOrThirdParty: [],
      },
    },
  },
  needsFulfilledByVariant: {
    variant1: {
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
};

export const placeholderEvent1: EventWithNeeds = {
  name: "Placeholder Event 1",
  description: "This is a placeholder event description.",
  imagePath:
    "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  imageAltText: "Placeholder Event 1",
  eventGroupId: "placeholder-group-1",
  eventInstanceId: "instance-1",
  GIFPath: "/path/to/your/image1.gif",
  isAllDayLong: false,
  allDayLongVariantProps: {
    importance: "",
    date: new Date("2023-01-01T00:00:00Z"),
  },
  timedVariantProps: {
    startDateAndTime: new Date("2023-01-01T08:00:00Z"),
    endDateAndTime: new Date("2023-01-01T09:30:00Z"),
  },
  deadlineVariant: "must",
  addOnsByVariants: {
    wrldRPG: {
      figma: {
        habits: [1, 3],
        howAndTips: [
          {
            ytVideoId: "abcdefghijk",
            notes: [{ title: "title1", description: "description1" }],
          },
        ],
        toolsWhere: [
          {
            title: "where-title-1",
            linkURL: "www.google.com",
            imageOrGifPath: "yes",
          },
        ],
        toolsSubApps: [
          {
            subappName: "video-watcher",
            payload: {
              ytVideoIds: ["a1", "b2"],
              VODLinks: ["111", "222"],
            },
          },
        ],
        toolsPhysicalOrThirdParty: [
          {
            title: "tool-title-1",
            linkURL: "www.twitch.com",
            imageOrGifPath: "maybe",
          },
          {
            title: "tool-title-2",
            linkURL: "www.wikipedia.com",
            imageOrGifPath: "nope",
          },
        ],
      },
      react: {
        habits: [7, 12],
        howAndTips: [
          {
            ytVideoId: "abcdefghijk",
            notes: [{ title: "title1", description: "description1" }],
          },
        ],
      },
    },
    miAmigo: {
      figma: {
        howAndTips: [
          {
            ytVideoId: "abcdefghijk",
            notes: [{ title: "title1", description: "description1" }],
          },
        ],
        toolsPhysicalOrThirdParty: [
          {
            title: "tool-title-1",
            linkURL: "www.twitch.com",
            imageOrGifPath: "maybe",
          },
        ],
      },
    },
  },
  needsFulfilledByVariant: {
    variant1: {
      isWant: true,
      isCreate: true,
      isAbsorb: true,
      isChill: true,
      isVent: true,
      isSquad: true,
      isActive: true,
      isWilderness: true,
      isFresh: true,
    },
  },
  vocalNotifications: {
    startEventSound: "Event 1 is starting!",
    xMinutesBeforeStartAmount: 15,
    xMinutesBeforeStartSound: "Event 1 is starting in 15 minutes.",
    endEventSound: "Thank you for participating in Event 1.",
  },
};

// export const placeholderEvent2: EventWithNeeds = {
//   name: "Placeholder Event 2",
//   description: "This is another placeholder event description.",
//   imagePath: "/path/to/your/image2.gif",
//   imageAltText: "Placeholder Event 2",
//   eventGroupId: "placeholder-group-2",
//   eventInstanceId: "instance-2",
//   GIFPath: "/path/to/your/image2.gif",
//   isAllDayLong: true,
//   allDayLongVariantProps: {
//     importance: "necessary",
//     date: new Date("2023-01-02T00:00:00Z"),
//   },
//   timedVariantProps: {
//     startDateAndTime: new Date("2023-01-02T14:00:00Z"),
//     endDateAndTime: new Date("2023-01-02T16:00:00Z"),
//   },
//   deadlineVariant: "prefer",
//   addOnsByVariants: {
//     placeholderVariantA: {
//       traps: [],
//       protips: [],
//       places: [],
//       programs: [],
//       objects: [],
//       workflows: [],
//     },
//   },
//   needsFulfilledByVariant: {
//     variant1: {
//       isWant: false,
//       isCreate: true,
//       isAbsorb: true,
//       isChill: false,
//       isVent: true,
//       isSquad: false,
//       isActive: true,
//       isWilderness: true,
//       isFresh: false,
//     },
//   },
//   vocalNotifications: {
//     startEventSound: "Event 2 is starting!",
//     xMinutesBeforeStartAmount: null,
//     xMinutesBeforeStartSound: "",
//     endEventSound: "Thank you for participating in Event 2.",
//   },
// };
