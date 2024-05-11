import { createContext } from "react";
import { ProjectDefaultCheckboxesAndFeaturesContextType } from "../types";

export const ProjectDefaultCheckboxesAndFeaturesContext =
  createContext<ProjectDefaultCheckboxesAndFeaturesContextType>(
    {} as ProjectDefaultCheckboxesAndFeaturesContextType
  );
