import { ProjectVariantType } from "../types";

export const placeholderprojectsAvailable: ProjectVariantType[] = [
  {
    name: "Custom",
    imagePath: "/images/111",
    projects: [
      { name: "New project", imagePath: "/images/aaa", calculationContent: {} },
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
