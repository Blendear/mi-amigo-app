import { createContext } from "react";
import { FeatureContextType } from "../types";

export const FeatureContext = createContext<FeatureContextType>(
  {} as FeatureContextType
);
