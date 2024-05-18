/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { DayChooser } from "./PeriodOfDaysOfEating";
import { MealOfTheDayChooser } from "./MealOfTheDayChooser";
import { ChosenMealOfTheDay } from "./ChosenMealOfTheDay";
import { useForceRerender } from "@/hooks/useForceRerender";
import { CaloriesOfTodaysMeals } from "./CaloriesOfTodaysMeals";
// import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
// import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
// import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";

// two words fully written, the rest are initials
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

  console.log("MealsForTheChosenDay");
  return (
    <section>
      <DayChooser />

      <MealOfTheDayChooser />

      <ChosenMealOfTheDay />

      <CaloriesOfTodaysMeals />

      {/* save and get it from local storage */}
      {/* <div css={mealsAndMacrosCss.additionalCalories}>
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
        {"* Default value, without recounting after ingredient amounts change"}
      </p> */}
    </section>
  );
};
