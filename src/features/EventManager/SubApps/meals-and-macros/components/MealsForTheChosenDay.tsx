/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { DayChooser } from "./PeriodOfDaysOfEating";
import { MealOfTheDayChooser } from "./MealOfTheDayChooser";
import { ChosenMealOfTheDay } from "./ChosenMealOfTheDay";
import { useForceRerender } from "@/hooks/useForceRerender";
import { CaloriesOfTodaysMeals } from "./CaloriesOfTodaysMeals";
import { UnplannedEatenCalories } from "./UnplannedEatenCalories";
import ImageWithWrapper from "@/components/ImageWithWrapper";

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

      <p css={{ color: "rgb(255,255,255,0.2)" }}>
        {" "}
        * Aim for 1845-1945 kcal a day to burn 600 kcal a day, since 2200 =
        keeping body mass | 1600 = 600 burned kcal per day | 245 = calories
        burned through 35-40 min of strength training or ~35-40 min of calm
        cycling{" "}
      </p>

      <ImageWithWrapper
        src="/images/subapps/meals-and-macros/vimed-kcal-1.jpg"
        width="100%"
        aspectRatio="3/4"
      />
      <ImageWithWrapper
        src="/images/subapps/meals-and-macros/vimed-kcal-2.jpg"
        width="100%"
        aspectRatio="3/4"
      />
    </section>
  );
};
