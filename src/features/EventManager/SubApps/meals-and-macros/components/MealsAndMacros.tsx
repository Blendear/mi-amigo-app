/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MealsAndMacrosProps } from "../types";
import { useRef, useState } from "react";
import { MealsAndMacrosContext } from "../context/MealsAndMacrosContext";
import { PeriodOfDaysOfEating } from "./PeriodOfDaysOfEating";
import { MealOfTheDay } from "./MealOfTheDay";
import { Meal } from "./Meal";
import { CaloriesOfTodaysMeals } from "./CaloriesOfTodaysMeals";

export const MealsAndMacros = ({ payload }: MealsAndMacrosProps) => {
  const [update, forceUpdate] = useState(false);
  const dayOfMealPlanIndex = useRef(1);
  const mealOfTheDayIndex = useRef(0);
  const [contentVariant, setContentVariant] = useState<"periods" | "all-meals">(
    "periods"
  );
  const caloriesOfChosenDay = useRef(0);

  return (
    <MealsAndMacrosContext.Provider
      value={{
        update,
        forceUpdate,
        payload,
        dayOfMealPlanIndex,
        mealOfTheDayIndex,
        caloriesOfChosenDay,
      }}
    >
      <section>
        <button
          onClick={() => {
            setContentVariant((prev) => {
              return prev === "periods" ? "all-meals" : "periods";
            });
          }}
        >
          {contentVariant}
        </button>
        {contentVariant === "periods" ? (
          <div>
            <PeriodOfDaysOfEating />
            <MealOfTheDay />
            {/* Shows only the chosen meal of the chosen day */}
            <Meal
              details={
                payload.periodOfDaysOfEating[dayOfMealPlanIndex.current][
                  mealOfTheDayIndex.current
                ]
              }
            />
            <CaloriesOfTodaysMeals />
            {/* save and get it from local storage */}
            <div>{`Additional calories eaten: ${"1"}`}</div>
          </div>
        ) : (
          // Show all meals
          <div>
            {payload.mealsAvailable.map((meal, index) => (
              <Meal hideContentUnderNamedButton details={meal} key={index} />
            ))}
          </div>
        )}
      </section>
    </MealsAndMacrosContext.Provider>
  );
};
