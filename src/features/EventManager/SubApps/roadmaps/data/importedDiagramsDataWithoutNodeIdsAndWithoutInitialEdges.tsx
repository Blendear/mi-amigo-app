import { SingleRawInitialNodeType } from "../types";

export type ImportedDiagramsDataWithoutNodeIdsAndWithoutInitialEdgesType = {
  [diagramName: string]: {
    initialNodes: SingleRawInitialNodeType[];
  };
};

export const importedDiagramsDataWithoutNodeIdsAndWithoutInitialEdges: ImportedDiagramsDataWithoutNodeIdsAndWithoutInitialEdgesType =
  {
    sql: {
      initialNodes: [
        // TODO: Check why the first node is not being displayed
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 0,
            label: "___",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 1,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [
                  {
                    imagePath: "https://placehold.co/1200x400",
                  },
                  {
                    imagePath: "https://placehold.co/770x700",
                  },
                  {
                    imagePath: "https://placehold.co/666x666",
                  },
                  {
                    imagePath: "https://placehold.co/20x70",
                  },
                ],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 0,
            label: "Po kiego grzyba nam SQL?",
            // label: "What and why is SQL",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 1,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [
                          "Watch with subtitles & at 0.75 speed.",
                        ],
                      },
                      additionalLinks: [
                        {
                          title: "SQL for beginners",
                          url: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
                        },
                      ],
                    },
                    transcript: [
                      {
                        typeOfContent: "txt",
                        content: "This is the first node",
                      },
                      {
                        typeOfContent: "img",
                        content: "https://placehold.co/600x400",
                      },
                      {
                        typeOfContent: "txt",
                        content: "This is the second  node",
                      },
                      {
                        typeOfContent: "txt",
                        content: "This is the third node",
                      },
                      {
                        typeOfContent: "img",
                        content: "https://placehold.co/600x400",
                      },
                    ],
                  },
                },
                exercisesWithSolutions: [
                  {
                    imagePath: "https://placehold.co/1200x400",
                  },
                  {
                    imagePath: "https://placehold.co/770x700",
                  },
                  {
                    imagePath: "https://placehold.co/666x666",
                  },
                  {
                    imagePath: "https://placehold.co/20x70",
                  },
                ],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 0,
            label: "Podstawowa pisownia (aka Syntax)",
            // label: "Basic Syntax",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [
                  {
                    imagePath: "https://placehold.co/1200x400",
                  },
                  {
                    imagePath: "https://placehold.co/770x700",
                  },
                  {
                    imagePath: "https://placehold.co/666x666",
                  },
                  {
                    imagePath: "https://placehold.co/20x70",
                  },
                ],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 1,
            label: "Typy danych aka klasy postaci (Data Types)",
            // label: "Basic Syntax",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [
                  {
                    imagePath: "https://placehold.co/1200x400",
                  },
                  {
                    imagePath: "https://placehold.co/770x700",
                  },
                  {
                    imagePath: "https://placehold.co/666x666",
                  },
                  {
                    imagePath: "https://placehold.co/20x70",
                  },
                ],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 2,
            label: "INT (Integer)",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [
                  {
                    imagePath: "https://placehold.co/1200x400",
                  },
                  {
                    imagePath: "https://placehold.co/770x700",
                  },
                  {
                    imagePath: "https://placehold.co/666x666",
                  },
                  {
                    imagePath: "https://placehold.co/20x70",
                  },
                ],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 2,
            label: "DECIMAL",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 2,
            label: "CHAR",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 2,
            label: "VARCHAR",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 2,
            label: "DATE",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 2,
            label: "DATETIME",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 2,
            label: "BOOLEAN",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 2,
            label: "BINARY",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 1,
            label: "Operatory (Operators)",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 2,
            label: "Arytmetyczne",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 2,
            label: "Porównawcze (Comparison)",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 2,
            label: "Logiczne",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 2,
            label: "Bitowe (Bitwise)",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },

        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 0,
            label: "Modyfikowanie wartości danych (Data Manipulation Language)",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 30,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [
                  {
                    imagePath: "https://placehold.co/1200x400",
                  },
                  {
                    imagePath: "https://placehold.co/770x700",
                  },
                  {
                    imagePath: "https://placehold.co/666x666",
                  },
                  {
                    imagePath: "https://placehold.co/20x70",
                  },
                ],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 1,
            label: "Zależne od SELECT",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 30,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 2,
            label: "SELECT",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 30,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "Wybieram ciebie, seler!",
                    },
                    serious: {
                      text: "Wybiera kolumny tabeli (z bazy danych), które chcesz wyświetlić",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/SELECT.png",
                      },
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/SELECT3.png",
                      },
                      {
                        typeOfContent: "txt",
                        content:
                          "( ! ) Samo SELECT nic nie zwróci. Niezbędne będą dodatkowe słowa klucze",
                      },
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/SELECT2.png",
                      },
                    ],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 2,
            label: "FROM",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 30,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "Określa tabele, z których należy dokonać wyszukiwania",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/FROM.png",
                      },
                      {
                        typeOfContent: "txt",
                        content:
                          "Wskazówka - FROM nie ogranicza się to tylko do SELECT. Ma zastosowanie również do innych operacji, np. UPDATE i DELETE, które omówimy w inych rozdziałach",
                      },
                    ],
                  },
                },
                exercisesWithSolutions: [],

                linksToExercises: [
                  "https://www.w3schools.com/sql/exercise.asp?filename=exercise_select1",
                ],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 2,
            label: "WHERE",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 30,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "Jeżeli warunek określony w klauzuli WHERE jest spełniony, to dopiero zwraca konkretną wartość z tabeli",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/WHERE.png",
                      },
                    ],
                  },
                },
                exercisesWithSolutions: [],

                linksToExercises: [
                  "https://www.w3schools.com/sql/exercise.asp?filename=exercise_where1",
                ],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 2,
            label: "ORDER BY",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 30,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "Sortuje wyniki z instrukcji SELECT w kolejności rosnącej lub malejącej",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/ORDERBY.png",
                      },
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/ORDERBY2.png",
                      },
                    ],
                  },
                },
                exercisesWithSolutions: [],

                linksToExercises: [
                  "https://www.w3schools.com/sql/exercise.asp?filename=exercise_orderby1",
                ],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 2,
            label:
              "Inne, wyjaśnione w dalszej części kursu (GROUP BY, HAVING, JOIN)",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 30,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },

        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 1,
            label: "Niezależne od SELECT",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 30,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 2,
            label: "INSERT",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 30,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "Dodaje nowy wiersz danych do wszystkich lub konkretnych, wybranych kolumn tabeli",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/INSERT.png",
                      },
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/INSERT2.png",
                      },
                      {
                        typeOfContent: "txt",
                        content:
                          "( ! ) kolumny w poleceniu SELECT i INSERT INTO muszą być ułożone w tej samej kolejności, a ich typy danych muszą być zgodne.",
                      },
                      {
                        typeOfContent: "txt",
                        content:
                          "( ! ) Upewnij się, że tabela bazy danych ma wystarczającą ilość miejsca do przechowywania wstawionych danych, w przeciwnym razie spowoduje to błąd OVERFLOW.",
                      },
                      {
                        typeOfContent: "txt",
                        content:
                          "( ! ) Zawsze upewnij się, że w kolumnach podano prawidłowe i zgodne typy danych. Silnik SQL nie pozwoli na dodanie danych, które nie odpowiadają zadeklarowanemu typowi danych kolumny.",
                      },
                    ],
                  },
                },
                exercisesWithSolutions: [
                  {
                    imagePath: "/images/roadmaps/INSERT-1-PYT.png",
                  },
                  {
                    imagePath: "/images/roadmaps/INSERT-1-ODP.png",
                  },
                  {
                    imagePath: "/images/roadmaps/INSERT-2-PYT.png",
                  },
                  {
                    imagePath: "/images/roadmaps/INSERT-2-ODP.png",
                  },
                  {
                    imagePath: "/images/roadmaps/INSERT-3-PYT.png",
                  },
                  {
                    imagePath: "/images/roadmaps/INSERT-3-ODP.png",
                  },
                ],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 2,
            label: "UPDATE",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 30,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "Aktualizuje / modyfikuje wartość wierszy w wybranych kolumnach",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [
                      {
                        typeOfContent: "txt",
                        content:
                          "( ! ) Klauzula WHEREw UPDATEinstrukcji określa, które rekordy należy zmodyfikować. Jeżeli pominiesz WHEREklauzulę, wszystkie rekordy w tabeli zostaną zaktualizowane",
                      },
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/UPDATE.png",
                      },
                    ],
                  },
                },
                exercisesWithSolutions: [],

                linksToExercises: [
                  "https://www.w3schools.com/sql/exercise.asp?filename=exercise_update1",
                ],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 2,
            label: "DELETE",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 30,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "Służy do usuwania istniejących wierszy w tabeli. Nie można tego cofnąć.",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [
                      {
                        typeOfContent: "txt",
                        content:
                          "( ! ) Zachowaj szczególną ostrożność podczas używania instrukcji DELETE. Jeśli pominiesz klauzulę WHERE, wszystkie rekordy zostaną usunięte!",
                      },
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/DELETE.png",
                      },
                      {
                        typeOfContent: "txt",
                        content:
                          "( ! ) Pamiętaj, zawsze upewnij się, że masz kopię zapasową i potwierdź, że usuwasz prawidłowe dane przed uruchomieniem polecenia DELETE",
                      },
                    ],
                  },
                },
                exercisesWithSolutions: [],
                linksToExercises: [
                  "https://www.w3schools.com/sql/exercise.asp?filename=exercise_delete1",
                ],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 0,
            label:
              "Modyfikowanie sposobu budowy danych (Data Definition Language)",
            // label: "Data Definition Language (DDL)",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [
                  {
                    imagePath: "https://placehold.co/1200x400",
                  },
                  {
                    imagePath: "https://placehold.co/770x700",
                  },
                  {
                    imagePath: "https://placehold.co/666x666",
                  },
                  {
                    imagePath: "https://placehold.co/20x70",
                  },
                ],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 1,
            label: "CREATE",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 1,
            label: "DROP",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 1,
            label: "ALTER",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 1,
            label: "TRUNCATE",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 1,
            label: "RENAME",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 0,
            label: "Agregowanie zapytań (Aggregate queries)",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 7,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [
                  {
                    imagePath: "https://placehold.co/1200x400",
                  },
                  {
                    imagePath: "https://placehold.co/770x700",
                  },
                  {
                    imagePath: "https://placehold.co/666x666",
                  },
                  {
                    imagePath: "https://placehold.co/20x70",
                  },
                ],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 1,
            label: "Gromadzenie startowych kolumn (Zależne od SELECT)",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 2,
            label: "SUM",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 2,
            label: "COUNT",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 2,
            label: "AVG",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 2,
            label: "MIN",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 2,
            label: "MAX",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 1,
            label: "Gromadzenie końcowych wyników",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 2,
            label: "GROUP BY",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 2,
            label: "HAVING",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 0,
            label: "Narzucanie ograniczeń na dane (Data Constraints)",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 7,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "Ograniczenia służą do ograniczania typu danych, które można umieścić w tabeli. Zapewnia to dokładność i wiarygodność danych w tabeli.",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [
                  {
                    imagePath: "https://placehold.co/1200x400",
                  },
                  {
                    imagePath: "https://placehold.co/770x700",
                  },
                  {
                    imagePath: "https://placehold.co/666x666",
                  },
                  {
                    imagePath: "https://placehold.co/20x70",
                  },
                ],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 1,
            label: "Klucz główny (Primary key)",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "Ogranicza tą wartość 'Musisz być wyjątkowa w każdym wierszu'. Dzięki temu wartość przeznaczona jest wtedy do jednoznacznej identyfikacji każdego z rekordów tabeli.",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [
                      {
                        typeOfContent: "txt",
                        content:
                          "Klucze podstawowe muszą zawierać UNIKALNE wartości. Dokładnie tak samo, jak ograniczenie UNIQUE, ale w tabeli może znajdować się wiele unikalnych ograniczeń, ale tylko jedno ograniczenie PRIMARY KEY na tabelę.",
                      },
                      {
                        typeOfContent: "txt",
                        content:
                          "Możesz zdefiniować klucz podstawowy w SQL podczas tworzenia lub modyfikowania tabeli.",
                      },
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/PRIMARY-KEY.png",
                      },
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/PRIMARY-KEY2.png",
                      },
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/PRIMARY-KEY3.png",
                      },
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/PRIMARY-KEY4.png",
                      },
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/PRIMARY-KEY5.png",
                      },
                    ],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 1,
            label: "Klucz obcy (Foreign key)",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "KLUCZ OBCY to pole (lub zbiór pól) w jednej tabeli, które odnosi się do KLUCZA PODSTAWOWOWEGO w innej tabeli.   Zapobiega działaniom, które mogłyby zniszczyć połączenia między tabelami.  ",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [
                      {
                        typeOfContent: "txt",
                        content:
                          "Ograniczenie FOREIGN KEY uniemożliwia wstawienie nieprawidłowych danych do kolumny klucza obcego, ponieważ musi to być jedna z wartości zawartych w tabeli nadrzędnej.",
                      },
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/FOREIGN-KEY.png",
                      },
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/FOREIGN-KEY2.png",
                      },
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/FOREIGN-KEY3.png",
                      },
                    ],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 1,
            label: "Unikatowy (Unique)",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "zapewnia, że ​​wszystkie wartości w kolumnie są różne; oznacza to, że każda wartość w kolumnie powinna wystąpić tylko raz.",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [
                      {
                        typeOfContent: "txt",
                        content:
                          "Jaka jest różnica między UNIQUE a PRIMARY KEY? Obydwa ograniczenia UNIQUE i PRIMARY KEY zapewniają gwarancję niepowtarzalności kolumny lub zestawu kolumn. Jednak klucz podstawowy nie może zawierać wartości NULL, ponieważ jednoznacznie identyfikuje każdy wiersz, a każda tabela może mieć tylko jeden klucz podstawowy. Z drugiej strony UNIQUE dopuszcza jedną wartość NULL, a tabela może mieć wiele ograniczeń typu UNIQUE.",
                      },
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/UNIQUE.png",
                      },
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/UNIQUE2.png",
                      },
                    ],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 1,
            label: "NOT NULL",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "NOT NULL gwarantuje, że kolumna nie może mieć wiersa z wartością NULL (czyli braku wypełnienia tego pola). Jest to sposób na wymuszenie, aby dane pola były obowiązkowe podczas tworzenia/modyfikowania tabeli ",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/NOT-NULL.png",
                      },
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/NOT-NULL2.png",
                      },
                    ],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 1,
            label: "CHECK",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "ograniczenie ograniczające zakres wartości, które można umieścić w kolumnie, np. 'wartość ta musi być między 5 a 25'",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/CHECK.png",
                      },
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/CHECK2.png",
                      },
                    ],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 1,
            label: "DEFAULT",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "Zapewnia wartość domyślną dla wierszy tej kolumny, jeśli żadna nie została określona.",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/DEFAULT.png",
                      },
                    ],
                  },
                },
                // TODO: Add exervcises to all "ograniczenia (constraints)'
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 0,
            label: "Łączenie zapytań (JOIN queries)",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 14,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [
                  {
                    imagePath: "https://placehold.co/1200x400",
                  },
                  {
                    imagePath: "https://placehold.co/770x700",
                  },
                  {
                    imagePath: "https://placehold.co/666x666",
                  },
                  {
                    imagePath: "https://placehold.co/20x70",
                  },
                ],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 1,
            label: "INNER JOIN",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "Zwraca te rekordy (rezultaty) dwóch tabel, które mają pasujące wartości w obu tabelach. Rezultat jest zlepkiem kolumn z tych tabel.",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/JOINS-ALL.png",
                      },
                      {
                        typeOfContent: "img",
                        content:
                          "/images/roadmaps/TABLES-INNER-JOIN-AND-LEFT-JOIN.png",
                      },
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/INNER-JOIN.png",
                      },
                      {
                        typeOfContent: "txt",
                        content:
                          "( ! ) Zwraca tylko pasujące wiersze z obu tabel. Jeśli nie ma dopasowania, zwracany jest pusty wynik.  ",
                      },
                    ],
                  },
                },
                // TODO: add exercises to all "łączenie zapytań (JOIN queries)"
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 1,
            label: "LEFT JOIN",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "zwraca wszystkie rekordy z lewej tabeli i dopasowane rekordy z prawej tabeli. Wynik jest NULLpo prawej stronie, jeśli nie ma dopasowania.",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/JOINS-ALL.png",
                      },
                      {
                        typeOfContent: "img",
                        content:
                          "/images/roadmaps/TABLES-INNER-JOIN-AND-LEFT-JOIN.png",
                      },
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/LEFT-JOIN.png",
                      },
                    ],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 1,
            label: "RIGHT JOIN",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "zwraca wszystkie rekordy z prawej tabeli i dopasowane rekordy z lewej tabeli",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/JOINS-ALL.png",
                      },
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/TABLE-RIGHT-JOIN.png",
                      },
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/RIGHT-JOIN.png",
                      },
                    ],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 1,
            label: "FULL OUTER JOIN",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "łączy wyniki lewej i prawej tabeli. Zwraca wszystkie (dopasowane oraz te niedopasowane) wiersze z tabel.",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/JOINS-ALL.png",
                      },
                      {
                        typeOfContent: "img",
                        content:
                          "/images/roadmaps/TABLE-FULL-UNION-AND-CROSS-JOIN.png",
                      },
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/FULL-JOIN.png",
                      },
                    ],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 1,
            label: "Self Join",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "tabela jest łączona z kopią siebie. Np. tabela pracowników łączona z samą sobą, aby znaleźć menedżerów i podwładnych.",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [
                      {
                        typeOfContent: "txt",
                        content:
                          "Prosty przykład : Self join może być trudny do zrozumienia, ale spróbujmy tak - wyobraź sobie, że masz stół z klockami. Na tym stole są klocki, z których każdy ma etykietę z twoim imieniem i miastem, w którym mieszkasz. Teraz chcesz znaleźć inne osoby, które mieszkają w tym samym mieście co ty, ale nie są tobą.`SELF JOIN` to ogarnie.  `SELF JOIN`  jest jak to, że bierzesz dwie kopie tej samej listy klocków i sprawdzasz, czy którykolwiek klocek z jednej listy pasuje do klocka z drugiej listy pod względem miasta, ale nie jest taki sam jak twój. Na przykład, jeśli jesteś Tomkiem z miasta Warszawa, to self join pozwoliłby Ci znaleźć inne osoby z Warszawy na liście, ale nie obejmując Ciebie samego. To pozwala na znalezienie innych ludzi z twojego miasta na tej samej liście.",
                      },
                      {
                        typeOfContent: "txt",
                        content: "SQL'owski przykład",
                      },
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/SELF-JOIN.png",
                      },
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/SELF-JOIN2.png",
                      },
                      {
                        typeOfContent: "txt",
                        content:
                          "( ! ) Należy zauważyć, że ponieważ jest to operacja łączenia na tej samej tabeli, należy użyć aliasów dla tabel, aby uniknąć nieporozumień podczas operacji łączenia.",
                      },
                    ],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 1,
            label: "Union Join",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/JOINS-ALL.png",
                      },
                      {
                        typeOfContent: "img",
                        content:
                          "/images/roadmaps/TABLE-FULL-UNION-AND-CROSS-JOIN.png",
                      },
                      {
                        typeOfContent: "img",
                        content:
                          "/images/roadmaps/UNION-AND-UNION-ALL-JOIN.png",
                      },
                    ],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 1,
            label: "Cross join",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "służy do łączenia każdego wiersza pierwszej tabeli z każdym wierszem drugiej tabeli. Jest również znany jako iloczyn kartezjański dwóch tabel.",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [
                      {
                        typeOfContent: "txt",
                        content:
                          "( ! ) Problem z łączeniem krzyżowym polega na tym, że może skutkować dużą liczbą wierszy i dużym zużyciem zasobów. Dlatego niezwykle ważne jest, aby korzystać z nich mądrze i tylko wtedy, gdy jest to konieczne.",
                      },
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/JOINS-ALL.png",
                      },
                      {
                        typeOfContent: "img",
                        content:
                          "/images/roadmaps/TABLE-FULL-UNION-AND-CROSS-JOIN.png",
                      },
                      {
                        typeOfContent: "img",
                        content: "/images/roadmaps/CROSS-JOIN.png",
                      },
                    ],
                  },
                },
                exercisesWithSolutions: [],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 0,
            label: "Zapytania w zapytaniu... incepcja (Sub Queries)",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 14,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 0,
            label:
              "Zaawansowane funkcje SQL aka czary arcymaga (Advanced SQL functions)",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 14,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 0,
            label: "Widoki (Views)",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 14,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 0,
            label: "Transakcje (Transactions)",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 69,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 0,
            label: "... Ciąg dalszy nastąpi ...",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 30,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [],
          },
        },
      ],
    },
    php: {
      initialNodes: [
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 0,
            label: "___",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 14,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [
                  {
                    imagePath: "https://placehold.co/1200x400",
                  },
                  {
                    imagePath: "https://placehold.co/770x700",
                  },
                  {
                    imagePath: "https://placehold.co/666x666",
                  },
                  {
                    imagePath: "https://placehold.co/20x70",
                  },
                ],
              },
            ],
          },
        },
        {
          position: { x: 0, y: 0 },
          data: {
            levelOfNestedness: 0,
            label: "Tajemnice istnienia",
            imagePath: "https://placehold.co/600x400",
            daysBeforeRepetitionNeeded: 7,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "f quickshorrt",
                    },
                    serious: {
                      text: "s quickshort",
                    },
                  },

                  longFull: {
                    video: {
                      ytVideoId: "dQw4w9WgXcQ",
                      importantNotes: {
                        // proposalsToUpdateTheVideoWith: [],
                        friendlyProtips: [],
                      },
                      additionalLinks: [],
                    },
                    transcript: [],
                  },
                },
                exercisesWithSolutions: [
                  {
                    imagePath: "https://placehold.co/1200x400",
                  },
                  {
                    imagePath: "https://placehold.co/770x700",
                  },
                  {
                    imagePath: "https://placehold.co/666x666",
                  },
                  {
                    imagePath: "https://placehold.co/20x70",
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  };
