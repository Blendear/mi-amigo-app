import { Ingredient, MealsAndMacrosSubAppPayload } from "@/types";

export type MealsAndMacrosProps = {
  globalSubAppData: MealsAndMacrosSubAppPayload;
};

export type MealProps = {
  details: MealsAndMacrosSubAppPayload["mealsAvailable"][0];
  // empty array means that the default amount is used for every ingredient
  nonDefaultAmounts: number[];
  // "true" is used for the lsit of all meals, so that I can show the list of meals,
  // instead of all the details too
  hideContentUnderNamedButton?: true;
};

export type IngredientProps = {
  details: Ingredient;
  nonDefaultAmount: number | null;
};
