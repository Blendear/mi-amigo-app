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
      // number index will be connecte to the ingredient index, which are added to the meal
      // 2, 40, 3, 7 = 1st ingredient amount is set to 2, 2nd to 40, 3rd is set to 3, 4th is set to 7
      //
      // EVERY number overwrites the default one, so you need to give exactly as many numbers as there are ingredients
      nonDefaultAmounts: number[];
    }[];
  };
};

export type MealsAndMacrosSubAppPayload = MealsAndMacrosProps;

export type SubappPayloads = {
  "yt-video-watcher": YTWatcherProps;
  "meals-and-macros": MealsAndMacrosProps;
  // Add more subapps and their respective payload types as needed
};

export type SubappIdentifier = {
  name: keyof SubappPayloads;
  variant: string;
  imagePath: string;
};

export type RGBColorString = string | `rgb(${string})`;

export type YouTubeVideoIFrameProps = {};

export type ModifyContentButtonsProps = {};

export type YTWatcherProps = {
  playlists: {
    name: string;
    imagePath: string;
    ytVideoIds: string[];
    thirdPartyLinks: {
      title: string;
      imageOrGifPath: string;
      linkURL: string;
    }[];
  }[];
};

export type SubAppaGlobalData = {
  "yt-video-watcher": {
    [variantName: string]: YTWatcherProps;
  };
  "meals-and-macros": {
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
    sheduleOfHourlyPlannedEvents: TemporaryTypeForPartialEventDataObjectType[]; // TODO: TS types and implement
  };

  // All properties will be an object of variants kets, which will store the variant of data for the subappa
  // YTWatcher will have different content depending on the event type for example
  // App will allow to create your own variants in the future
  subAppsGlobalData: SubAppaGlobalData;
};

//TODO: Remove it in the future, since all features should use the same event data object type
export type TemporaryTypeForPartialEventDataObjectType = {
  id: number;
  title: string;
  startDate: Date;
  endDate: Date;
  image: string;
  soundToHowl: string;
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
