import { createContext } from "react";

type MealsAndMacrosContextType = {
  update: boolean;
  forceUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  dayOfMealPlanIndex: React.MutableRefObject<number>; // from 1 to infinity
  mealOfTheDayIndex: React.MutableRefObject<number>; // from 1 to infinity
};

export const MealsAndMacrosContext = createContext<MealsAndMacrosContextType>(
  {} as MealsAndMacrosContextType
);
