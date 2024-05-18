import { Ingredient, MealsAndMacrosSubAppPayload } from "@/types";

export type MealsAndMacrosProps = {
  globalSubAppData: MealsAndMacrosSubAppPayload;
};

export type MealProps = {
  details: MealsAndMacrosSubAppPayload["mealsAvailable"][0];
  // "true" is used for the lsit of all meals, so that I can show the list of meals,
  // instead of all the details too
  hideContentUnderNamedButton?: true;
};

export type IngredientProps = {
  details: Ingredient;
};
