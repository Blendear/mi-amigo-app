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
      oneDay: [
        // TODO: Add those events into "library", after giving acces to th library in the app
        {
          name: "Programowanie & Design",
          description: "Tworzenie programów oraz ich visual developmentu",
          imagePath:
            "https://solutioncorridor.com/uploads/services/1684813294.jpg",
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
            "Mi Amigo": {
              "Przygotuj narzędzia": {
                howAndTips: { ytVideoId: "", notes: [] },
                toolsPhysicalOrThirdParty: [
                  {
                    title: "Linear",
                    linkURL:
                      "https://linear.app/sqrwysynki/issue/SL-41/workflows",
                    imageOrGifPath:
                      "https://media.licdn.com/dms/image/D4D0BAQF8WGlksBLY0g/company-logo_200_200/0/1665590651137/linearapp_logo?e=2147483647&v=beta&t=O_5o4iiky8EZ2ZJr9cPeQ64jrILDiYBue_PI-BPxC4c",
                  },
                  {
                    title: "Figma - Templates",
                    linkURL:
                      "https://www.figma.com/file/DQqI5zaJfWxJhZ3XYUPih0/Figma_Node_Template--SS?type=design&node-id=3-2&mode=design&t=YR4drQms9bljODLM-0s",
                    imageOrGifPath:
                      "https://i.pinimg.com/736x/18/f1/72/18f1727873924ba58fde1f739d11b77b.jpg",
                  },
                  {
                    title: "Figma - Mi Amigo",
                    linkURL:
                      "https://www.figma.com/file/YJuBrbVea3ibw7dwYkU1WZ/MiAmigo-(4)?type=design&node-id=0-1&mode=design&t=dafkKmqI9kbw3mMs-0",
                    imageOrGifPath:
                      "https://i.pinimg.com/736x/18/f1/72/18f1727873924ba58fde1f739d11b77b.jpg",
                  },
                  {
                    title: "Localhost",
                    linkURL: "http://localhost:3000/event-manager",
                    imageOrGifPath:
                      "https://dam.thdstatic.com/content/production/K1_G_U1csswMUsD8MJQ2yA/2Z8QA2KYCKjF2d_fnCi0-w/Original%20file/26JAN23_PlaygroundSets_Hero_01.png?im=Resize=(920,575)",
                  },
                  {
                    title: "ChatGPT",
                    linkURL: "https://chat.openai.com/",
                    imageOrGifPath:
                      "https://s7d1.scene7.com/is/image/dmqualcommprod/getting-personal-with-on-device-ai?$QC_Responsive$&fmt=png-alpha&wid=500",
                  },
                ],
              },
            },
            INFINITI: {
              "Przygotuj narzędzia": {
                howAndTips: { ytVideoId: "", notes: [] },
                toolsPhysicalOrThirdParty: [
                  {
                    title: "Linear",
                    linkURL:
                      "https://linear.app/sqrwysynki/issue/SL-59/infiniti-app",
                    imageOrGifPath:
                      "https://media.licdn.com/dms/image/D4D0BAQF8WGlksBLY0g/company-logo_200_200/0/1665590651137/linearapp_logo?e=2147483647&v=beta&t=O_5o4iiky8EZ2ZJr9cPeQ64jrILDiYBue_PI-BPxC4c",
                  },
                  {
                    title: "Figma - Templates",
                    linkURL:
                      "https://www.figma.com/file/DQqI5zaJfWxJhZ3XYUPih0/Figma_Node_Template--SS?type=design&node-id=3-2&mode=design&t=YR4drQms9bljODLM-0s",
                    imageOrGifPath:
                      "https://i.pinimg.com/736x/18/f1/72/18f1727873924ba58fde1f739d11b77b.jpg",
                  },
                  {
                    title: "Figma - INFINITI",
                    linkURL:
                      "https://www.figma.com/file/OkfEUmfeGxTgWf6CHIBjip/INFINITI?type=design&node-id=0-1&mode=design&t=TYy36RkAsLfs2hka-0",
                    imageOrGifPath:
                      "https://i.pinimg.com/736x/18/f1/72/18f1727873924ba58fde1f739d11b77b.jpg",
                  },
                  {
                    title: "Localhost",
                    linkURL: "http://localhost:3000/wywolywacz-e-trenera",
                    imageOrGifPath:
                      "https://dam.thdstatic.com/content/production/K1_G_U1csswMUsD8MJQ2yA/2Z8QA2KYCKjF2d_fnCi0-w/Original%20file/26",
                  },
                  {
                    title: "ChatGPT",
                    linkURL: "https://chat.openai.com/",
                    imageOrGifPath:
                      "https://s7d1.scene7.com/is/image/dmqualcommprod/getting-personal-with-on-device-ai?$QC_Responsive$&fmt=png-alpha&wid=500",
                  },
                ],
              },
            },
          },

          needsFulfilledByVariant: {
            "'tworzę' w domciu": {
              isWant: false,
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
      ],
    },
    libraryOfTemplateEvents: [],
    sheduleOfHourlyPlannedEvents: [],
  },
};
