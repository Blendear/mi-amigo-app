/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { DayChooser } from "./PeriodOfDaysOfEating";
import { MealOfTheDayChooser } from "./MealOfTheDayChooser";
import { ChosenMealOfTheDay } from "./ChosenMealOfTheDay";
import { useForceRerender } from "@/hooks/useForceRerender";
import { CaloriesOfTodaysMeals } from "./CaloriesOfTodaysMeals";
import { UnplannedEatenCalories } from "./UnplannedEatenCalories";
// import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
// import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
// import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";

// two words fully written, the rest are initials
const mealsFTCDCss = {
  container: css({
    // gridRow: "1 / 3",
    // padding: "1rem",
    //
    // width: "100%",
    // boxSizing: "border-box",
    // aspectRatio: "2/1",
    // backgroundColor: `rgb(${colors.primaryLight})`,
    //
    // display: "grid",
    // gridTemplateRows: "1fr",
    // rowGap: "1rem",
    // columnGap: "2rem",
    //
    // justifyItems: "center",
    // fontSize: variables.fontSize.heading,
    //
    // "@media (orientation: landscape)": {
    // ...
    // }
    //
    // "& div:nth-child(1)": {
    //   backgroundColor: "yellow",
    // },
    //
  }),

  explanation: css({ fontSize: "1.1rem", color: `lightgreen` }),
};

export const MealsForTheChosenDay = () => {
  useForceRerender("MealsForTheChosenDay");

  return (
    <section>
      <DayChooser />

      <MealOfTheDayChooser />

      <ChosenMealOfTheDay />

      <p css={mealsFTCDCss.explanation}>
        {
          "* The sum of calories / prices of the meal & day won't change after you change the amount of the given ingredient. it's a future upgrade"
        }
      </p>

      <CaloriesOfTodaysMeals />

      <UnplannedEatenCalories />
    </section>
  );
};
