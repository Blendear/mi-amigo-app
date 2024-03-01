import { MealsAndMacrosSubAppPayload } from "@/types";

export type MealsAndMacrosProps = { payload: MealsAndMacrosSubAppPayload };

export type MealProps = {
  details: MealsAndMacrosSubAppPayload["mealsAvailable"][0];
};
