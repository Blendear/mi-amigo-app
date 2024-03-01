/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
// import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
// import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { useContext } from "react";
import { MealsAndMacrosContext } from "../context/MealsAndMacrosContext";

export const CaloriesOfTodaysMeals = () => {
  const { payload, dayOfMealPlanIndex, mealOfTheDayIndex } = useContext(
    MealsAndMacrosContext
  );

  const getTotalMealCalories = () => {
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
    <div>
      <p>{`Todays default calories | ${getTotalMealCalories()}`}</p>
    </div>
  );
};
