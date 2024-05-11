import { createContext } from "react";
import { DefaultCheckboxStatesSettersContextType } from "../types";

export const DefaultCheckboxStatesSettersContext =
  createContext<DefaultCheckboxStatesSettersContextType>(
    {} as DefaultCheckboxStatesSettersContextType
  );
