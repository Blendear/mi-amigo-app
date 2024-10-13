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
import { useAppSelector } from "@/store/redux/hooks";
import { useForceRerender } from "@/hooks/useForceRerender";
import { TitleBarWithTogglableContent } from "@/components/TitleBarWithTogglableContent";

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

export const Meal = ({
  details,
  nonDefaultAmounts,
  hideContentUnderNamedButton,
}: MealProps) => {
  const { MealsAndMacros } = useAppSelector((state) => state.contextsReducer);

  const [hideDetails, setHideDetails] = useState(
    hideContentUnderNamedButton || false
  );

  const currentIngredients = useMemo(() => {
    return details.ingredientsIds.map((ingredientId) => {
      const searchedIngredient =
        MealsAndMacros.globalSubAppData.ingredientsAvailable.find(
          (ingredient) => ingredient.id === ingredientId
        );

      return searchedIngredient;
    });
  }, [
    details.ingredientsIds,
    MealsAndMacros.globalSubAppData.ingredientsAvailable,
  ]);

  const getTotalMealCalories = () => {
    let totalCalories = 0;

    currentIngredients.forEach((ingredient, index) => {
      const amount =
        nonDefaultAmounts.length > 0
          ? nonDefaultAmounts[index]
          : ingredient.amount;

      const addThisAmountOfCalories =
        (ingredient.macros.calories / ingredient.macros.forThisAmount) * amount;

      // "=== 0" so that we dont divide by zero
      totalCalories +=
        ingredient.macros.forThisAmount === 0 ? 0 : addThisAmountOfCalories;
    });

    return totalCalories;
  };

  const getTotalMealPrice = () => {
    let totalPrice = 0;

    currentIngredients.forEach((ingredient, index) => {
      const amount =
        nonDefaultAmounts.length > 0
          ? nonDefaultAmounts[index]
          : ingredient.amount;

      const addThisAmountOfPrice =
        (ingredient.priceDetails.price /
          ingredient.priceDetails.forThisAmount) *
        amount;

      totalPrice +=
        ingredient.priceDetails.forThisAmount === 0 ? 0 : addThisAmountOfPrice;
    });

    return totalPrice;
  };

  return (
    <div css={mealCss.container}>
      {/* Toggles the visibility of clicked meals - used in the "all-meals" visibility variant, to de-clutter the list from unwanted meal content */}
      {hideContentUnderNamedButton && (
        <button
          onClick={() => {
            setHideDetails((prev) => !prev);
          }}
        >
          <ImageWithWrapper
            src={details.imagePaths}
            wrapperCss={{
              width: "16rem",
            }}
          />
          <p>{details.name}</p>
          {/* <p>a</p> */}
          <p css={{ fontSize: "0.8rem" }}>
            {details.description ? details.description : ""}
          </p>
        </button>
      )}

      {/* Content of the meal */}
      {(!hideContentUnderNamedButton || !hideDetails) && (
        <div>
          <Video yTvideoId={details.ytVideoId} />
          <ul>
            {currentIngredients.map((ingredient, index) => {
              return (
                <Ingredient
                  key={index}
                  details={ingredient}
                  nonDefaultAmount={
                    nonDefaultAmounts.length > 0
                      ? nonDefaultAmounts[index]
                      : null
                  }
                />
              );
            })}
          </ul>
          <div css={mealCss.totalCalories}>
            <p>{`Meal *`}</p>
            <div>
              <div>{`${getTotalMealCalories().toFixed(0)}`}</div>
              <span>🔥</span>
            </div>
            <div>
              <div>{`${getTotalMealPrice().toFixed(2)}`}</div>
              <span>💸</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
