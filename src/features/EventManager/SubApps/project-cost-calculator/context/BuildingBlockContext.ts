import { createContext } from "react";
import { BuildingBlockContextType } from "../types";

export const BuildingBlockContext = createContext<BuildingBlockContextType>(
  {} as BuildingBlockContextType
);
