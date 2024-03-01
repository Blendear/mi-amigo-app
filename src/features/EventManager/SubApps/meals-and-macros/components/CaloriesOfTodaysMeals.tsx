/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
// import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
// import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { useContext } from "react";
import { MealsAndMacrosContext } from "../context/MealsAndMacrosContext";

export const CaloriesOfTodaysMeals = () => {
  const { caloriesOfChosenDay } = useContext(MealsAndMacrosContext);

  return (
    <div>
      <p>{`Todays calories | ${caloriesOfChosenDay.current}`}</p>
    </div>
  );
};
