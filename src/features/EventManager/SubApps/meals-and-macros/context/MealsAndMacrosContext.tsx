import { createContext } from "react";
import { MealsAndMacrosSubAppPayload } from "@/types";

type MealsAndMacrosContextType = {
  update: boolean;
  forceUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  payload: MealsAndMacrosSubAppPayload;
  dayOfMealPlanIndex: React.MutableRefObject<number>; // from 1 to infinity
  mealOfTheDayIndex: React.MutableRefObject<number>; // from 1 to infinity
  caloriesOfChosenDay: React.MutableRefObject<number>;
};

export const MealsAndMacrosContext = createContext<MealsAndMacrosContextType>(
  {} as MealsAndMacrosContextType
);
