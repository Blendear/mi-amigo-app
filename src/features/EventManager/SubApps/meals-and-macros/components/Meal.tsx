/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
// import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
// import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { MealProps } from "../types";
import { useState } from "react";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import Video from "@/features/EventManager/SubApps/yt-watcher/components/Video";
import { Ingredient } from "./Ingredient";
import { MealsAndMacrosContext } from "../context/MealsAndMacrosContext";
import { useContext } from "react";

export const Meal = ({ details, hideContentUnderNamedButton }: MealProps) => {
  const { payload, dayOfMealPlanIndex, mealOfTheDayIndex } = useContext(
    MealsAndMacrosContext
  );

  const [hideDetails, setHideDetails] = useState(
    hideContentUnderNamedButton || false
  );

  const [caloriesOfThisMeal, setCaloriesOfThisMeal] = useState(0);

  const getTotalMealCalories = () => {
    let totalCalories = 0;

    payload.periodOfDaysOfEating[dayOfMealPlanIndex.current][
      mealOfTheDayIndex.current
    ].ingredients.forEach((ingredient) => {
      totalCalories +=
        (ingredient.macros.calories / ingredient.macros.forThisAmount) *
        ingredient.amount;
    });

    return totalCalories;
  };

  return (
    <div>
      {hideContentUnderNamedButton && (
        <button
          onClick={() => {
            setHideDetails((prev) => !prev);
          }}
        >
          <ImageWithWrapper src={details.imagePaths} />
          <p>{details.name}</p>
        </button>
      )}
      {(!hideContentUnderNamedButton || !hideDetails) && (
        <div>
          <Video yTvideoId={details.ytVideoId} />
          <ul>
            {details.ingredients.map((ingredient, index) => {
              return <Ingredient key={index} details={ingredient} />;
            })}
          </ul>
          <div>{`Meals default calories | ${getTotalMealCalories()}`}</div>
        </div>
      )}
    </div>
  );
};
