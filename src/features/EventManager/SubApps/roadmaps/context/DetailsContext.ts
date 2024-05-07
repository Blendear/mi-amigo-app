import { createContext } from "react";
import { DetailsContextType } from "../types";

export const DetailsContext = createContext<DetailsContextType>(
  {} as DetailsContextType
);
