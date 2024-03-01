import HowAndTips from "@/features/EventManager/Main/show-event-data/components/HowAndTips";
import { EventWithNeeds } from "@/features/EventManager/Main/show-event-data/types";

export type Chunk = {
  isAuthenticated: boolean;
};

export interface DialogModalProps {
  isOpen: boolean;
  onClose: () => void;
  zIndex?: number;
  children: React.ReactNode;
}

export type ImageWithWrapperProps = {
  width?: string;
  height?: string;
  aspectRatio?: string;
  src: string;
  alt?: string;
  wrapperCss?: {};
};

export type Ingredient = {
  name: string;
  amount: number;
  unit: string; // of measurement
  macros: {
    forThisAmount: number;
    forThisUnit: string;
    calories: number;
    proteins?: number;
    carbs?: number;
    fats?: number;
  };
};

export type Meal = {
  name: string;
  imagePaths: string;
  ytVideoId: string; // "how to prepare it" video
  ingredients: Ingredient[];
};

export type MealsAndMacrosSubAppPayload = {
  mealsAvailable: Meal[];
  periodOfDaysOfEating: {
    [dayIndex: number]: Meal[];
  };
};

export type YTVideoWatcherSubAppPayload = {
  ytVideoIds: string[];
};

export type SubappPayloads = {
  "yt-video-watcher": YTVideoWatcherSubAppPayload;
  "meals-and-macros": MealsAndMacrosSubAppPayload;
  // Add more subapps and their respective payload types as needed
};

export type Subapp = {
  subappName: keyof SubappPayloads;
  payload: SubappPayloads[keyof SubappPayloads];
};

export type RGBColorString = string | `rgb(${string})`;

export type YouTubeVideoIFrameProps = {};

export type ModifyContentButtonsProps = {};

export type AppDataOfCurrentUser = {
  eventsWithNeeds: {
    chestWithAllDayLongEvents: {
      necessary: EventWithNeeds[];
      oneDay: EventWithNeeds[];

      // temporarily added here, before creating separate places for them
      libraryOfTemplateEvents?: EventWithNeeds[];
      monstersManual?: EventWithNeeds[];
    };
    libraryOfTemplateEvents: EventWithNeeds[];
    sheduleOfHourlyPlannedEvents: any[]; // TODO: TS types and implement
  };
  // The SubApp payload for the given event is stored in the state of the event. Because oftenly,
  // like in Yt Watcher, the videos are depended on the event. Not one global state
};
