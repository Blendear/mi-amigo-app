/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { DayChooser } from "./PeriodOfDaysOfEating";
import { MealOfTheDayChooser } from "./MealOfTheDayChooser";
import { ChosenMealOfTheDay } from "./ChosenMealOfTheDay";
import { useForceRerender } from "@/hooks/useForceRerender";
import { CaloriesOfTodaysMeals } from "./CaloriesOfTodaysMeals";
import { UnplannedEatenCalories } from "./UnplannedEatenCalories";

const mealsFTCDCss = {
  container: css({}),

  explanation: css({ fontSize: "1.1rem", color: `lightgreen` }),
};

export const MealsForTheChosenDay = () => {
  useForceRerender("MealsForTheChosenDay");

  return (
    <section>
      <DayChooser />

      <MealOfTheDayChooser />

      <ChosenMealOfTheDay />

      {/* <p css={mealsFTCDCss.explanation}>
        {
          "* The sum of calories / prices of the meal & day won't change after you change the amount of the given ingredient. it's a future upgrade"
        }
      </p> */}

      <CaloriesOfTodaysMeals />

      <UnplannedEatenCalories />
    </section>
  );
};
