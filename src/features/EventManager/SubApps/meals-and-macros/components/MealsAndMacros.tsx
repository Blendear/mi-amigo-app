/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MealsAndMacrosProps } from "../types";
import { useRef, useState } from "react";
import { MealsAndMacrosContext } from "../context/MealsAndMacrosContext";
import { PeriodOfDaysOfEating } from "./PeriodOfDaysOfEating";
import { MealOfTheDay } from "./MealOfTheDay";
import { Meal } from "./Meal";
import { CaloriesOfTodaysMeals } from "./CaloriesOfTodaysMeals";
import { useEffect } from "react";

export const MealsAndMacros = ({ payload }: MealsAndMacrosProps) => {
  const [update, forceUpdate] = useState(false);
  const dayOfMealPlanIndex = useRef(1);
  const mealOfTheDayIndex = useRef(0);
  const [contentVariant, setContentVariant] = useState<"periods" | "all-meals">(
    "periods"
  );

  const [additionalCalories, setAdditionalCalories] = useState(() => {
    // Get value from local storage, default to 0 if not present
    return localStorage.getItem("additionalCalories") || "0";
  });

  useEffect(() => {
    // Store additional calories in local storage whenever it changes
    localStorage.setItem("additionalCalories", additionalCalories);
  }, [additionalCalories]);

  return (
    <MealsAndMacrosContext.Provider
      value={{
        update,
        forceUpdate,
        payload,
        dayOfMealPlanIndex,
        mealOfTheDayIndex,
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
            <div>
              <label htmlFor="additionalCalories">
                Additional calories eaten:
              </label>
              <input
                type="number"
                id="additionalCalories"
                defaultValue={additionalCalories}
                onChange={(e) => setAdditionalCalories(e.target.value)}
              />
            </div>
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
