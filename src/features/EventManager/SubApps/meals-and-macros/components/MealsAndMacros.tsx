/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { MealsAndMacrosProps } from "../types";
import { useRef, useState } from "react";
import { MealsAndMacrosContext } from "../context/MealsAndMacrosContext";
import { PeriodOfDaysOfEating } from "./PeriodOfDaysOfEating";
import { MealOfTheDay } from "./MealOfTheDay";
import { Meal } from "./Meal";
import { CaloriesOfTodaysMeals } from "./CaloriesOfTodaysMeals";
import { useEffect } from "react";

const mealsAndMacrosCss = {
  container: css({
    padding: "1rem 1rem 3rem 1rem",
  }),

  additionalCalories: css([
    universalCss.container,
    {
      display: "grid",
      gridAutoFlow: "column",
      gridTemplateColumns: "7fr 3fr",
      justifyItems: "start",

      "& *": {
        color: "orange",
        fontSize: "2rem",
      },

      "& > div": {
        justifySelf: "end",
        display: "flex",

        "& > input": {
          width: "5rem",
          textAlign: "end",
        },
      },
    },
  ]),

  explanation: css({ fontSize: "1.1rem", color: `darkgrey` }),
};

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
      <section css={mealsAndMacrosCss.container}>
        <button
          css={[universalCss.container, universalCss.button]}
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
            <div css={mealsAndMacrosCss.additionalCalories}>
              <label htmlFor="additionalCalories">Additional</label>
              <div>
                <input
                  type="number"
                  id="additionalCalories"
                  defaultValue={additionalCalories}
                  onChange={(e) => setAdditionalCalories(e.target.value)}
                />
                <span>🔥</span>
              </div>
            </div>

            <p css={mealsAndMacrosCss.explanation}>
              {
                "* Default value, without recounting after ingredient amounts change"
              }
            </p>
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
