/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
// import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { useContext } from "react";
import { MealsAndMacrosContext } from "../context/MealsAndMacrosContext";

const caloriesOfTodaysMealsCss = {
  container: css([
    universalCss.container,
    {
      display: "grid",
      gridAutoFlow: "column",
      gridTemplateColumns: "7fr 3fr",
      justifyItems: "start",

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

    payload.periodOfDaysOfEating[dayOfMealPlanIndex.current].forEach((meal) => {
      meal.ingredients.forEach((ingredient) => {
        totalCalories +=
          (ingredient.macros.calories / ingredient.macros.forThisAmount) *
          ingredient.amount;
      });
    });

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
