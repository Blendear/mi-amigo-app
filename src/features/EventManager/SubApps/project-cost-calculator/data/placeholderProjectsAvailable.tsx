import { ProjectVariantType } from "../types";

export const placeholderprojectsAvailable: ProjectVariantType[] = [
  {
    name: "Custom",
    imagePath: "/images/111",
    projects: [
      {
        name: "New project",
        imagePath: "/images/aaa",
        isAPrebuildOne: false,
        calculationContent: {
          defaultStatesThatMultiplyTheTimeSum: {
            translationAutomatically: {
              value: "no",
              possibleOptions: ["no", "yes"],
            },
            responsiveForBrowsers: {
              value: "single",
              possibleOptions: ["single", "all"],
            },
            responsiveForScreenSizes: {
              value: "1",
              possibleOptions: ["1", "2", "3"],
            },
            responsiveForDisabilities: {
              value: "no",
              possibleOptions: ["no", "yes"],
            },
            stylisationDesign: {
              value: "mvp",
              possibleOptions: ["mvp", "design basic", "design unique"],
            },
            stylisationAnimationAmountOfStates: {
              value: "0",
              possibleOptions: ["0", "1", "2", "3", "4", "5"],
            },
            stylisationAnimationAmountOfComplexStates: {
              value: "0",
              possibleOptions: ["0", "1", "2", "3", "4", "5"],
            },
          },
          specificFeatures: [
            {
              name: "List of products",
              userStory:
                "As a user I want to be able to see the list of all the products",
              featureBuildingBlocks: [
                {
                  name: "Name",
                  developerComment: "Comment",
                  needsResearchBeforeCalculationWillBePossible: false,
                  thirdPartyCosts: 0,
                  timeRangesByVariant: {
                    logicalProblemsolving: {
                      timeRange: {
                        optimistic: 30,
                        pessimistic: 60,
                      },
                    },
                    creativeProblemsolving: {
                      timeRange: {
                        optimistic: 120,
                        pessimistic: 240,
                      },
                    },
                  },
                  statesThatMultiplyTheTimeSum: {
                    translationAutomatically: "no",
                    responsiveForBrowsers: "all",
                    responsiveForScreenSizes: "3",
                    responsiveForDisabilities: "no",
                    stylisationDesign: "design basic",
                    stylisationAnimationAmountOfStates: "2",
                    stylisationAnimationAmountOfComplexStates: "1",
                  },
                  copiesAmounts: {
                    "100%": 1,
                    "75-99%": 0,
                    "50-74%": 2,
                  },
                },
              ],
            },
          ],
          multipliersForAllFeaturesAsOne: {
            crunch: 0,
            payment: 0,
          },
        },
      },
    ],
  },
  {
    name: "Web App",
    imagePath: "/images/222",
    projects: [
      {
        name: "INFINITI App",
        imagePath: "/images/bbb",
        isAPrebuildOne: true,
        calculationContent: {
          defaultStatesThatMultiplyTheTimeSum: {
            translationAutomatically: {
              value: "no",
              possibleOptions: ["no", "yes"],
            },
            responsiveForBrowsers: {
              value: "single",
              possibleOptions: ["single", "all"],
            },
            responsiveForScreenSizes: {
              value: "1",
              possibleOptions: ["1", "2", "3"],
            },
            responsiveForDisabilities: {
              value: "no",
              possibleOptions: ["no", "yes"],
            },
            stylisationDesign: {
              value: "mvp",
              possibleOptions: ["mvp", "design basic", "design unique"],
            },
            stylisationAnimationAmountOfStates: {
              value: "0",
              possibleOptions: ["0", "1", "2", "3", "4", "5"],
            },
            stylisationAnimationAmountOfComplexStates: {
              value: "0",
              possibleOptions: ["0", "1", "2", "3", "4", "5"],
            },
          },
          specificFeatures: [],
          multipliersForAllFeaturesAsOne: {
            crunch: 0,
            payment: 0,
          },
        },
      },
      {
        name: "Wrld App",
        imagePath: "/images/ccc",
        isAPrebuildOne: true,
        calculationContent: {},
      },
    ],
  },
];
