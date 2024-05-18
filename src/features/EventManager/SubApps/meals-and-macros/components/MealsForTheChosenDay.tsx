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

const OneTwoTFWCNCss = {
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
};

export const MealsForTheChosenDay = () => {
  useForceRerender("MealsForTheChosenDay");

  return (
    <section>
      <DayChooser />

      <MealOfTheDayChooser />

      <ChosenMealOfTheDay />

      <CaloriesOfTodaysMeals />

      <UnplannedEatenCalories />
    </section>
  );
};
