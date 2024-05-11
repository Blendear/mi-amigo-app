import { ProjectVariantType } from "../types";

export const placeholderprojectsAvailable: ProjectVariantType[] = [
  {
    name: "Custom",
    imagePath: "/images/111",
    projects: [
      {
        name: "New project",
        imagePath: "/images/aaa",
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
    ],
  },
  {
    name: "Web App",
    imagePath: "/images/222",
    projects: [
      {
        name: "INFINITI App",
        imagePath: "/images/bbb",
        calculationContent: {},
      },
      {
        name: "Wrld App",
        imagePath: "/images/ccc",
        calculationContent: {},
      },
    ],
  },
];
