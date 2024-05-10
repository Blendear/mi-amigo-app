/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
// import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { useContext, useMemo } from "react";
import { MealsAndMacrosContext } from "../context/MealsAndMacrosContext";

const caloriesOfTodaysMealsCss = {
  container: css([
    universalCss.container,
    {
      margin: "3rem 0 0 0",
      display: "grid",
      gridAutoFlow: "column",
      gridTemplateColumns: "7fr 3fr",
      justifyItems: "start",
      fontSize: "2rem",

      "& *": {
        color: "orange",
      },

      "& > div": {
        justifySelf: "end",
        display: "flex",
      },
    },
  ]),
};

export const CaloriesOfTodaysMeals = () => {
  const { payload, dayOfMealPlanIndex, mealOfTheDayIndex } = useContext(
    MealsAndMacrosContext
  );

  const getTotalDailyCalories = () => {
    let totalCalories = 0;

    payload.periodOfDaysOfEating[dayOfMealPlanIndex.current].forEach(
      (mealReference) => {
        payload.mealsAvailable[mealReference.mealId].ingredientsIds.forEach(
          (ingredientId) => {
            const currentIngredient =
              payload.ingredientsAvailable[ingredientId];
            totalCalories +=
              (currentIngredient.macros.calories /
                currentIngredient.macros.forThisAmount) *
              currentIngredient.amount;
          }
        );
      }
    );

    return totalCalories;
  };

  return (
    <div css={caloriesOfTodaysMealsCss.container}>
      <p>{`Daily *`}</p>
      <div>
        <div>{`${getTotalDailyCalories()}`}</div>
        <span>🔥</span>
      </div>
    </div>
  );
};
