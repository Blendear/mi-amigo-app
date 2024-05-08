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
            label: "Zależne od SELECT",
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
            label: "SELECT",
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
            label: "Niezależne od SELECT",
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
            label: "INSERT",
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
            label: " Klucz główny (Primary key)",
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
