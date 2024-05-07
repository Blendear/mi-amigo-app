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
                      text: "fun quickshorrt",
                    },
                    serious: {
                      text: "serious quickshort",
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
                      text: "fun quickshorrt",
                    },
                    serious: {
                      text: "serious quickshort",
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
            daysBeforeRepetitionNeeded: 3,
            lastRepeatDateString: "2024-05-01T00:00:00",
            videosAndNotesByVariants: [
              {
                variant: "My way",
                explanation: {
                  quickShort: {
                    fun: {
                      imagePath: "https://placehold.co/600x400",
                      text: "fun quickshorrt",
                    },
                    serious: {
                      text: "serious quickshort",
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
                      text: "fun quickshorrt",
                    },
                    serious: {
                      text: "serious quickshort",
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
            label: "Modyfikowanie wartości danych (Data Manipulation Language)",
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
                      text: "fun quickshorrt",
                    },
                    serious: {
                      text: "serious quickshort",
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
                      text: "fun quickshorrt",
                    },
                    serious: {
                      text: "serious quickshort",
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
                      text: "fun quickshorrt",
                    },
                    serious: {
                      text: "serious quickshort",
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
                      text: "fun quickshorrt",
                    },
                    serious: {
                      text: "serious quickshort",
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
                      text: "fun quickshorrt",
                    },
                    serious: {
                      text: "serious quickshort",
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
                      text: "fun quickshorrt",
                    },
                    serious: {
                      text: "serious quickshort",
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
