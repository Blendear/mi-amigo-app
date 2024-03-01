/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MealsAndMacrosProps } from "../types";
import { useRef, useState } from "react";
import { MealsAndMacrosContext } from "../context/MealsAndMacrosContext";
import { PeriodOfDaysOfEating } from "./PeriodOfDaysOfEating";
import { MealOfTheDay } from "./MealOfTheDay";

export const MealsAndMacros = ({}: MealsAndMacrosProps) => {
  const [update, forceUpdate] = useState(false);
  const dayOfMealPlanIndex = useRef(1);
  const mealOfTheDayIndex = useRef(1);

  return (
    <MealsAndMacrosContext.Provider
      value={{ update, forceUpdate, dayOfMealPlanIndex, mealOfTheDayIndex }}
    >
      <section>
        <button>Show all available meals</button>
        <PeriodOfDaysOfEating />
        <MealOfTheDay />
        <p>Sum of the macros of the meals of the day</p>
      </section>
    </MealsAndMacrosContext.Provider>
  );
};
