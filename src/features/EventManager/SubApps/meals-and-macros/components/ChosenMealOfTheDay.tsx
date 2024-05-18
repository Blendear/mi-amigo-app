/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { useAppDispatch, useAppSelector } from "@/store/redux/hooks";
import { contextsSliceActions } from "@/store/redux/store-redux";
import { Meal } from "./Meal";
import { useForceRerender } from "@/hooks/useForceRerender";

// two words fully written, the rest are initials
const WhichMealsTSCCss = {
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

export const ChosenMealOfTheDay = () => {
  const { MealsAndMacros } = useAppSelector((state) => state.contextsReducer);

  useForceRerender("ChosenMealOfTheDay");

  return (
    <Meal
      details={
        MealsAndMacros.globalSubAppData.mealsAvailable[
          MealsAndMacros.globalSubAppData.periodOfDaysOfEating[
            MealsAndMacros.dayOfMealPlanIndex
          ][MealsAndMacros.mealOfTheDayIndex].mealId
        ]
      }
    />
  );
};
