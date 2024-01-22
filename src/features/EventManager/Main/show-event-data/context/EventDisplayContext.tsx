import { createContext } from "react";
import { EventDisplayContextType } from "../types";

const EventDisplayContext = createContext<EventDisplayContextType>(
  {} as EventDisplayContextType
);

export default EventDisplayContext;
