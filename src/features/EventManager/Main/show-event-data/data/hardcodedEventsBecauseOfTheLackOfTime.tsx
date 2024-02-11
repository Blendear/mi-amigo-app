import { AppDataOfCurrentUser } from "@/types";

export const hardcodedEventsBecauseOfTheLackOfTime: AppDataOfCurrentUser = {
  eventsWithNeeds: {
    chestWithAllDayLongEvents: {
      necessary: [],
      oneDay: [
        // TODO: Add those events into "library", after giving acces to th library in the app
        {
          name: "Oglądanko / Słuchanko",
          description:
            "Jakiekolwiek oglądanie / słuchanie treści, od Youtube i Twitch, po Spoti i Storytel",
          imagePath:
            "https://www.belloflostsouls.net/wp-content/uploads/2022/03/dnd-halfling-bard-header-e1664727059553.jpg",
          imageAltText: "",
          eventGroupId: 0,
          eventInstanceId: 0,
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
            oglądamy: {
              "rano/płonę - wymagajuące engage'u, nie 'podane na tacy', bez adhd, zwolna rozkręcające/inspirujące":
                {
                  toolsSubApps: [
                    {
                      subappName: "yt-video-watcher",
                      payload: {
                        ytVideoIds: [""],
                      },
                    },
                  ],
                  toolsPhysicalOrThirdParty: [
                    {
                      title: "Storytel",
                      imageOrGifPath:
                        "https://www.storytel.com/pl/pl/images/og-image.jpg",
                      linkURL: "https://www.storytel.com/pl/pl/",
                    },
                  ],
                },
              "żarełko - enteraining, pomijalna wizualnie treść": {
                toolsSubApps: [
                  {
                    subappName: "yt-video-watcher",
                    payload: {
                      ytVideoIds: [""],
                    },
                  },
                ],
                toolsPhysicalOrThirdParty: [],
              },
              "padnięcie - entertainment, audio-visual candy": {
                toolsSubApps: [
                  {
                    subappName: "yt-video-watcher",
                    payload: {
                      ytVideoIds: [""],
                    },
                  },
                ],
                toolsPhysicalOrThirdParty: [],
              },
            },
            "słuchamy - treść": {
              "engaging -  całkowicie zajmujące głowę przy braindead aktywności":
                {
                  toolsSubApps: [
                    {
                      subappName: "yt-video-watcher",
                      payload: {
                        ytVideoIds: [""],
                      },
                    },
                  ],
                  toolsPhysicalOrThirdParty: [],
                },

              "entertaining - dodaje 'want' do piesczę/braindead questa": {
                toolsSubApps: [
                  {
                    subappName: "yt-video-watcher",
                    payload: {
                      ytVideoIds: [""],
                    },
                  },
                ],
                toolsPhysicalOrThirdParty: [],
              },
            },
            "słuchamy - mjusik": {
              "ambient doprawiacze ciszy": {
                toolsSubApps: [
                  {
                    subappName: "yt-video-watcher",
                    payload: {
                      ytVideoIds: [""],
                    },
                  },
                ],
                toolsPhysicalOrThirdParty: [],
              },
              "pobudzające bangery": {
                toolsSubApps: [
                  {
                    subappName: "yt-video-watcher",
                    payload: {
                      ytVideoIds: [""],
                    },
                  },
                ],
                toolsPhysicalOrThirdParty: [],
              },
            },
            "słuchamy - zagłuszacze": {
              "niskie fq - na niski hałas": {
                toolsSubApps: [
                  {
                    subappName: "yt-video-watcher",
                    payload: {
                      ytVideoIds: [""],
                    },
                  },
                ],
                toolsPhysicalOrThirdParty: [],
              },
              "n. & średnie fq - na rozmowy": {
                toolsSubApps: [
                  {
                    subappName: "yt-video-watcher",
                    payload: {
                      ytVideoIds: [""],
                    },
                  },
                ],
                toolsPhysicalOrThirdParty: [],
              },
              "ś & wysokie fq - na piski": {
                toolsSubApps: [
                  {
                    subappName: "yt-video-watcher",
                    payload: {
                      ytVideoIds: [""],
                    },
                  },
                ],
                toolsPhysicalOrThirdParty: [],
              },
            },
          },
          needsFulfilledByVariant: {
            "chwila dla siebie": {
              isWant: true,
              isCreate: false,
              isAbsorb: true,
              isChill: false,
              isVent: false,
              isSquad: false,
              isActive: false,
              isWilderness: false,
              isFresh: true,
            },
            "seansik z duszyczką": {
              isWant: true,
              isCreate: false,
              isAbsorb: true,
              isChill: false,
              isVent: false,
              isSquad: true,
              isActive: false,
              isWilderness: false,
              isFresh: true,
            },
            "podróżowanko z tłem": {
              isWant: true,
              isCreate: false,
              isAbsorb: true,
              isChill: false,
              isVent: false,
              isSquad: false,
              isActive: true,
              isWilderness: true,
              isFresh: true,
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
          name: "Nocna Warta",
          description: "",
          imagePath:
            "https://ocdn.eu/pulscms-transforms/1/Y33ktkpTURBXy83MjI2M2ViNTcyNWJhNWJjZjU4ODJiYWQ5ZTljOTM4OS5qcGeSlQMBzQNizQ3XzQfJkwXNBLDNAqQ",
          imageAltText: "",
          eventGroupId: 0,
          eventInstanceId: 0,
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
            tradycyjnie: {
              "Prosiaczki przyszły?": {
                howAndTips: {
                  ytVideoId: "",
                  notes: [
                    {
                      title: "Sprawdź wiadomości w komunikatorach z toolsów",
                      description: "",
                    },
                  ],
                },
                toolsPhysicalOrThirdParty: [
                  {
                    title: "Gmail",
                    imageOrGifPath:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRehBkcICeAaY5qdgGWJCTIGBP_RYYE4A0ciDVWTpmOWA&s",
                  },
                  {
                    title: "Messenger",
                    imageOrGifPath:
                      "https://cdn3.vectorstock.com/i/1000x1000/61/72/facebook-messenger-logo-vector-41086172.jpg",
                  },
                  {
                    title: "Discord",
                    imageOrGifPath:
                      "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxsG72wAo9EWJR4yQWyJJaDb6rYcBtJvTvH3UoAS4JFNDaxGhmKNaMwgElLURlRFeVkLCjkfnXmWtINWZIrPGYq0-&format=source",
                  },
                ],
              },
              Herbatka: {
                howAndTips: {
                  ytVideoId: "",
                  notes: [
                    {
                      title:
                        "Cały termos herbatki na biurko / w podróz, zamiast coli",
                      description: "",
                    },
                  ],
                },
              },
              "Telefonowe notatki do projektów / worda wpisz": {},
              "Ładuj słuchawki, telefon i powerbanka": {},
              "Tygodniowy Harmonogram przejżyj": {},
              "Hooksa jednego chcesz ogarnąć?": {},
              Zakupki: {
                toolsPhysicalOrThirdParty: [
                  {
                    title: "SubApp Zakupowy",
                    imageOrGifPath:
                      "https://img.freepik.com/premium-vector/cute-banana-cartoon-vector-icon-illustration-logo-mascot-hand-drawn-concept-trandy-cartoon_519183-187.jpg?w=2000",
                    linkURL: "https://mi-amigo-green.vercel.app/landing-page",
                  },
                ],
              },
              "Porcjuj || Rozpisz tegotygodniowe || Przygotuj ingredients || Gotuj":
                {
                  howAndTips: {
                    ytVideoId: "",
                    notes: [
                      {
                        title: "Np. pokrój cukinie, dopraw i pokruj kurczaka",
                        description:
                          "Lwia część ognia jedzeniowego idzie właśnie na prep posiłku tóż przed zjedzeniem, kiedy ani nie masz czasu, ani ochoty na to (przy okazji psująć pomodoro, bo 10 minut nie starcza na prep i zjedzenie)",
                      },
                    ],
                  },
                },
              "Ściągnij || Umyj naczynia": {},
              "Śmieci wychędoż": {
                howAndTips: {
                  ytVideoId: "",
                  notes: [
                    {
                      title:
                        "Zmywak & Lodówka & Łazienka & Inne pokoje random finds",
                      description: "",
                    },
                  ],
                },
              },
              "Przygotuj || Zrób pranie": {},
              "Umówiajta 3-3-1": {
                howAndTips: {
                  ytVideoId: "",
                  notes: [
                    {
                      title:
                        "3 we-time, 3 amigo-time, 1 me-time, wg poniższej rozpiski",
                      description:
                        "* PORANNY żeby mieć po co wstawac \n nawyki nowe bros \n * tradycje \n * kursy \n * świeże przeżycia/wypadziki \n * Facebook \n * PIK wroclaw \n * Kiwi Portal\n * duporuch\n * online gaming / LAN-planszówkowe",
                    },
                  ],
                },
              },
              "Tnij, kąp i czyść": {
                howAndTips: {
                  ytVideoId: "",
                  notes: [
                    {
                      title:
                        "Gól & Włosy oszczydznij & Kąp bez włosów || Z nimi i ułóż je już wieczorem & Uszka & Kły nić, pasta i listerine & Pazury & Gąszcze rozległe skróć",
                      description: "",
                    },
                  ],
                },
              },
              "1 z 20 kroków sprzątania, pod wolne weekendy": {},
              "Strój ćwiczebny & Armor dzienny przygotuj": {
                howAndTips: {
                  ytVideoId: "",
                  notes: [
                    {
                      title:
                        "W 'Toby > Backup > Stylówy ubraniowe--ss' rozpisałeś",
                      description: "",
                    },
                  ],
                },
              },
              "Paragony podlicz": {},
              "Ręczniki & Kocyk & Prześcieradło wymień": {},
              Poczta: {},
            },
          },
          needsFulfilledByVariant: {
            zakupy: {
              isWant: false,
              isCreate: false,
              isAbsorb: false,
              isChill: true,
              isVent: false,
              isSquad: false,
              isActive: true,
              isWilderness: true,
              isFresh: true,
            },
            "tylko domowe": {
              isWant: false,
              isCreate: false,
              isAbsorb: false,
              isChill: true,
              isVent: false,
              isSquad: false,
              isActive: true,
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
          name: "Eksplorowanie Wrld RPG",
          description:
            "O kuwa. Trudno to opisać. To jest Wrld. Game dev, web dev, design, itd. wszystko w jednym",
          imagePath:
            "/images/events-manager/temporaryHardcodedVisuals/event-image/wrld-rpg.png",
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
            "Webowy Asystent - Frontend": {
              "Przygotuj narzędzia": {
                toolsPhysicalOrThirdParty: [
                  {
                    title: "Linear",
                    linkURL:
                      "https://linear.app/infiniti/roadmap/webowy-asystent-08d8f5e2f9bd/all",
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
                    title: "Figma - Webowy Asytent",
                    linkURL:
                      "https://www.figma.com/file/wz3WO2mmkR7DCuteUzdXti/Wrld--Wrld_React_Webapp--SS?type=design&node-id=0-1&mode=design&t=0UNA36EQG6xqjxQS-0",
                    imageOrGifPath:
                      "https://i.pinimg.com/736x/18/f1/72/18f1727873924ba58fde1f739d11b77b.jpg",
                  },
                  {
                    title: "Localhost",
                    linkURL: "http://localhost:3000/meet-info",
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
            "Unreal Giera - Fullstack": {
              "Przygotuj narzędzia": {
                toolsPhysicalOrThirdParty: [
                  {
                    title: "Unreal Engine",
                    imageOrGifPath:
                      "https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt1374d89863bb9247/650f069dce47f98019322d48/placeholder-social.png",
                  },
                  {
                    title: "Linear",
                    linkURL:
                      "https://linear.app/infiniti/roadmap/unreal-giera-48ecc7b55a37/all",
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
                    title: "Figma - Unreal Giera",
                    linkURL:
                      "https://www.figma.com/file/wz3WO2mmkR7DCuteUzdXti/Wrld--Wrld_React_Webapp--SS?type=design&node-id=0-1&mode=design&t=0UNA36EQG6xqjxQS-0",
                    imageOrGifPath:
                      "https://i.pinimg.com/736x/18/f1/72/18f1727873924ba58fde1f739d11b77b.jpg",
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
            Marketing: {
              "Przygotuj narzędzia": {
                toolsPhysicalOrThirdParty: [
                  {
                    title: "Linear",
                    linkURL:
                      "https://linear.app/infiniti/roadmap/marketing-15eb0183f4b1/all",
                    imageOrGifPath:
                      "https://media.licdn.com/dms/image/D4D0BAQF8WGlksBLY0g/company-logo_200_200/0/1665590651137/linearapp_logo?e=2147483647&v=beta&t=O_5o4iiky8EZ2ZJr9cPeQ64jrILDiYBue_PI-BPxC4c",
                  },
                ],
              },
            },
            "Sesja - Gameplay/Minigames Dev": {
              "Przygotuj narzędzia": {
                toolsPhysicalOrThirdParty: [
                  {
                    title: "Linear",
                    linkURL:
                      "https://linear.app/infiniti/roadmap/sesje-399949a60a78/all",
                    imageOrGifPath:
                      "https://media.licdn.com/dms/image/D4D0BAQF8WGlksBLY0g/company-logo_200_200/0/1665590651137/linearapp_logo?e=2147483647&v=beta&t=O_5o4iiky8EZ2ZJr9cPeQ64jrILDiYBue_PI-BPxC4c",
                  },
                ],
              },
              "Sprawdzam questa": {
                howAndTips: {
                  ytVideoId: "OKI71MWG1sQ",
                  notes: [
                    {
                      title: "Dodaj 'workflow creation' rozdział",
                      description:
                        "1. Mój podział od 'One day', po  progresowe etapy etc. \n 2.Wyłącz defaultowe 'Auto-close stale issues' \n 3.Dodaj szybki przebieg tworzenia/używania view'ów",
                    },
                  ],
                },
              },
            },
            "Sesja - Meet Character Dev": {
              "Przygotuj narzędzia": {},
            },
            "Sesja - 2D Vis Dev": {
              "Przygotuj narzędzia": {},
            },
            "Sesja - 3D Assets": {
              "Przygotuj narzędzia": {},
            },
            "Sesja - Live YT/Twitch": {
              "Przygotuj narzędzia": {},
            },
            "Sesja - Worldbuilding": {
              "Przygotuj narzędzia": {},
            },
            "Sesja - Questlines": {
              "Przygotuj narzędzia": {},
            },
            "Sesja - Soundtracks": {
              "Przygotuj narzędzia": {},
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
        {
          name: "Programowanie & Design",
          description: "Tworzenie programów oraz ich visual developmentu",
          imagePath:
            "https://solutioncorridor.com/uploads/services/1684813294.jpg",
          imageAltText: "",
          eventGroupId: 2,
          eventInstanceId: 2,
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
                toolsPhysicalOrThirdParty: [
                  {
                    title: "Linear",
                    linkURL:
                      "https://linear.app/mi-amigo/view/df41fdbf-a23c-4e7f-8e4d-bc078a6b9001",
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
