/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
// import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { useContext, useMemo } from "react";
import { MealsAndMacrosContext } from "../context/MealsAndMacrosContext";
import { useAppSelector } from "@/store/redux/hooks";

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
  const { MealsAndMacros } = useAppSelector((state) => state.contextsReducer);

  // const [additionalCalories, setAdditionalCalories] = useState(() => {
  //   // Get value from local storage, default to 0 if not present
  //   return "0";
  //   // return global?.localStorage.getItem("additionalCalories") || "0";
  // });

  // useEffect(() => {
  //   // Store additional calories in local storage whenever it changes
  //   global?.localStorage.setItem("additionalCalories", additionalCalories);
  // }, [additionalCalories]);

  const getTotalDailyCalories = () => {
    let totalCalories = 0;

    // Yes, all the ingredients of all the meals of the day are counted
    // since nothing is actually calculating all the meals calories/prices
    // The meal calories / price calculation is only for the chosen meal,
    // not for all of the daily meals
    MealsAndMacros.globalSubAppData.periodOfDaysOfEating[
      MealsAndMacros.dayOfMealPlanIndex
    ].forEach((mealReference) => {
      MealsAndMacros.globalSubAppData.mealsAvailable[
        mealReference.mealId
      ].ingredientsIds.forEach((ingredientId) => {
        const currentIngredient =
          MealsAndMacros.globalSubAppData.ingredientsAvailable[ingredientId];

        const caloriesToAdd =
          (currentIngredient.macros.calories /
            currentIngredient.macros.forThisAmount) *
          currentIngredient.amount;

        // "=== 0" to prevent division by zero
        totalCalories +=
          currentIngredient.macros.forThisAmount === 0 ? 0 : caloriesToAdd;
      });
    });

    return totalCalories;
  };

  return (
    <div css={caloriesOfTodaysMealsCss.container}>
      <p>{`Daily *`}</p>
      <div>
        <div>{`${getTotalDailyCalories().toFixed(0)}`}</div>
        <span>🔥</span>
      </div>
    </div>
  );
};
