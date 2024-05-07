import { createContext } from "react";
import { RoadmapsContextType } from "../types";

export const RoadmapsContext =
  createContext<RoadmapsContextType>(
    {} as RoadmapsContextType
  );
