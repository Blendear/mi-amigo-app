import { AppDataOfCurrentUser } from "@/types";

export const hardcodedEventsBecauseOfTheLackOfTime: AppDataOfCurrentUser = {
  eventsWithNeeds: {
    chestWithAllDayLongEvents: {
      necessary: [
        {
          name: "Masturbacja kolanami",
          description: "Well, co tu dużo móić",
          imagePath:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1x1-sUdwSML2IWWa4bMlLjR-qujm13UHLPQ&usqp=CAU",
          imageAltText: "",
          eventGroupId: 1,
          eventInstanceId: 1,
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
            kolanami: {
              poczatek: {
                toolsSubApps: [
                  {
                    subappName: "video-watcher",
                    payload: {
                      ytVideoIds: [],
                      VODLinks: [],
                    },
                  },
                ],
                howAndTips: {
                  ytVideoId: "ErzoS25SFa8",
                  notes: [
                    { title: "...", description: "Description 1" },
                    { title: "Note 2", description: "Description 2" },
                    { title: "Note 3", description: "Description 3" },
                  ],
                },

                toolsPhysicalOrThirdParty: [
                  {
                    title: "tool-title-1",
                    linkURL: "www.twitch.com",
                    imageOrGifPath: "https://i.imgur.com/3Qo7z3j.gif",
                  },
                ],
              },
              koniec: {
                toolsPhysicalOrThirdParty: [
                  {
                    title: "kolanami - koniec - tool-title-1",
                    linkURL: "www.twitch.com",
                    imageOrGifPath: "https://i.imgur.com/3Qo7z3j.gif",
                  },
                ],
              },
            },
            lokciami: {
              rozped: {
                howAndTips: {
                  ytVideoId: "lovYZqGVPBQ",
                  notes: [
                    { title: "Note 3", description: "Description 3" },
                    { title: "Note 4", description: "Description 4" },
                  ],
                },

                toolsPhysicalOrThirdParty: [
                  {
                    title: "lokciami - rozped - tool-title-1",
                    linkURL: "www.google.com",
                    imageOrGifPath: "https://i.imgur.com/3Qo7z3j.gif",
                  },
                  {
                    title: "lokciami - rozped - tool-title-2",
                    linkURL: "www.google.com",
                    imageOrGifPath: "https://i.imgur.com/3Qo7z3j.gif",
                  },
                ],
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
        },
      ],
      oneDay: [],
    },
    libraryOfTemplateEvents: [],
    sheduleOfHourlyPlannedEvents: [],
  },
};
