import { createContext } from "react";
import { ProjectCostCalculatorContextType } from "../types";

export const ProjectCostCalculatorContext =
  createContext<ProjectCostCalculatorContextType>(
    {} as ProjectCostCalculatorContextType
  );
