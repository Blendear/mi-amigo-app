import { AppDataOfCurrentUser } from "@/types";

// TODO: Rework the "hardecodedEventsBecauseOfTheLackOfTime" to be
// an objetc with ALL placeholder data for the "EventManager" feature
// with separate events for the library, chest and schedule (later on)
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
                toolsPhysicalOrThirdParty: [
                  {
                    title: "tool-title-1",
                    linkURL: "www.twitch.com",
                    imageOrGifPath: "maybe",
                  },
                ],
              },
            },
            lokciami: {
              rozped: {
                toolsPhysicalOrThirdParty: [
                  {
                    title: "tool-title-1",
                    linkURL: "www.google.com",
                    imageOrGifPath: "nope",
                  },
                  {
                    title: "tool-title-2",
                    linkURL: "www.google.com",
                    imageOrGifPath: "nope",
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
