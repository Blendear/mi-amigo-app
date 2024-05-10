/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
// import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { MealProps } from "../types";
import { useMemo, useState } from "react";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import Video from "@/features/EventManager/SubApps/yt-watcher/components/Video";
import { Ingredient } from "./Ingredient";
import { MealsAndMacrosContext } from "../context/MealsAndMacrosContext";
import { useContext } from "react";

const mealCss = {
  container: css(universalCss.container),

  totalCalories: css([
    universalCss.container,
    {
      display: "grid",
      gridTemplateColumns: "7fr 3fr",
      justifyItems: "start",

      "& *": {
        color: "orange",
      },

      "& > div": {
        justifySelf: "end",
        display: "flex",
      },

      "& > div:nth-of-type(2)": {
        gridColumn: "2 / 3",
        color: "darkgrey",
      },
    },
  ]),
};

export const Meal = ({ details, hideContentUnderNamedButton }: MealProps) => {
  const { payload, dayOfMealPlanIndex, mealOfTheDayIndex } = useContext(
    MealsAndMacrosContext
  );

  const [hideDetails, setHideDetails] = useState(
    hideContentUnderNamedButton || false
  );

  const currentMeal = useMemo(() => {
    return payload.mealsAvailable[
      payload.periodOfDaysOfEating[dayOfMealPlanIndex.current][
        mealOfTheDayIndex.current
      ].mealId
    ];
  }, [
    dayOfMealPlanIndex,
    mealOfTheDayIndex,
    payload.mealsAvailable,
    payload.periodOfDaysOfEating,
  ]);

  const getTotalMealCalories = () => {
    let totalCalories = 0;

    currentMeal.ingredients.forEach((ingredient) => {
      totalCalories +=
        (ingredient.macros.calories / ingredient.macros.forThisAmount) *
        ingredient.amount;
    });

    return totalCalories;
  };

  const getTotalMealPrice = () => {
    let totalPrice = 0;

    currentMeal.ingredients.forEach((ingredient) => {
      totalPrice +=
        (ingredient.priceDetails.price /
          ingredient.priceDetails.forThisAmount) *
        ingredient.amount;
    });

    return totalPrice;
  };

  return (
    <div css={mealCss.container}>
      {hideContentUnderNamedButton && (
        <button
          onClick={() => {
            setHideDetails((prev) => !prev);
          }}
        >
          <ImageWithWrapper src={details.imagePaths} width="16rem" />
          <p>{details.name}</p>
          <p css={{ fontSize: "0.8rem" }}>
            {details.description ? details.description : ""}
          </p>
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
          <div css={mealCss.totalCalories}>
            <p>{`Meal *`}</p>
            <div>
              <div>{`${getTotalMealCalories()}`}</div>
              <span>🔥</span>
            </div>
            <div>
              <div>{`${getTotalMealPrice()}`}</div>
              <span>💸</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
