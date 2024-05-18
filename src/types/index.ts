import HowAndTips from "@/features/EventManager/Main/show-event-data/components/HowAndTips";
import { EventWithNeeds } from "@/features/EventManager/Main/show-event-data/types";
import { Ingredient } from "@/features/EventManager/SubApps/meals-and-macros/components/Ingredient";

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
  id: number;
  name: string;
  description?: string;
  amount: number;
  unit: string; // of measurement
  macros: {
    forThisAmount: number;
    calories: number;
    proteins?: number;
    carbs?: number;
    fats?: number;
  };
  priceDetails: {
    price: number;
    forThisAmount: number;
  };
};

export type Meal = {
  id: number;
  name: string;
  description?: string;
  imagePaths: string;
  ytVideoId: string; // "how to prepare it" video
  ingredientsIds: number[];
};

export type MealsAndMacrosProps = {
  ingredientsAvailable: Ingredient[];
  mealsAvailable: Meal[];
  periodOfDaysOfEating: {
    // index and an optional "nonDefaultAmount" ais more optimal instead of writing aaaaaaaaaaaaaaa
    // duplicate "Meal" objectsa ain two places on every updatea of its data
    [dayIndex: number]: {
      mealId: number;
      // it must be an array of numbers,a since it will be used for an array of ingredients
      // (3 values will be needed to uverwrite - 0 means "dont change default in this ingredient")
      nonDefaultAmounts?: number[];
    }[];
  };
};

export type MealsAndMacrosSubAppPayload = MealsAndMacrosProps;

export type YTVideoWatcherSubAppPayload = {
  ytVideoIds: string[];
};

export type SubappPayloads = {
  "yt-video-watcher": YTVideoWatcherSubAppPayload;
  "meals-and-macros": MealsAndMacrosProps;
  // Add more subapps and their respective payload types as needed
};

export type Subapp = {
  subappName: keyof SubappPayloads;
  payload: SubappPayloads[keyof SubappPayloads];
};

export type RGBColorString = string | `rgb(${string})`;

export type YouTubeVideoIFrameProps = {};

export type ModifyContentButtonsProps = {};

export type YTWatcherProps = {
  listOfYouTubeVideoIDs: string[];
};

export type SubAppaGlobalData = {
  YTWatcher: {
    [variantName: string]: YTWatcherProps;
  };
  MealsAndMacros: {
    [variantName: string]: MealsAndMacrosProps;
  };
};

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

  // All properties will be an object of variants kets, which will store the variant of data for the subappa
  // YTWatcher will have different content depending on the event type for example
  // App will allow to create your own variants in the future
  subAppsGlobalData: SubAppaGlobalData;
};

export type GlobalReduxContextsType = {
  // ONLY non-dyanmic data, aka not the data that will be change depending on the user
  // &
  // data (even the dynamic, user specific one) that would create prop drilling if stored as a context value
  Global: {};

  MealsAndMacros: {
    globalSubAppData: MealsAndMacrosProps;
    dayOfMealPlanIndex: number; // starts from 1
    mealOfTheDayIndex: number;
    contentVariant: "periods" | "all-meals";
    additionalCalories: number;
  };
};
