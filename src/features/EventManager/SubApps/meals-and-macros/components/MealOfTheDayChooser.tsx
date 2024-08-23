/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SwiperCustom } from "@/features/EventManager/Main/show-event-data/components/SwiperCustom";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { useState } from "react";
import { useContext, useEffect } from "react";
import { MealsAndMacrosContext } from "../context/MealsAndMacrosContext";
import { useAppDispatch, useAppSelector } from "@/store/redux/hooks";
import {
  contextsSliceActions,
  forceRerenderSliceActions,
} from "@/store/redux/store-redux";
import ImageWithWrapper from "@/components/ImageWithWrapper";

const variantsCss = {
  container: css({
    ".swiper": {
      padding: "2rem 0",
      width: "80vw",
    },

    ".swiper-slide": {
      width: "max-content",
      maxWidth: "200px",
      display: "grid",
      justifyItems: "center",
      alignItems: "center",
      fontSize: variables.fontSize.regular,

      "& > div": {
        padding: "7.5px",
      },
    },
  }),

  variant: css({
    padding: "1rem 2rem",
  }),
};

export const MealOfTheDayChooser = ({}) => {
  const { MealsAndMacros } = useAppSelector((state) => state.contextsReducer);
  const dispatch = useAppDispatch();

  return (
    <SwiperCustom
      swiperContainerCss={variantsCss.container}
      spaceBetweenSlides="10rem"
      activeSlide={MealsAndMacros.mealOfTheDayIndex}
      setActiveSlide={(index) => {
        dispatch(
          contextsSliceActions.setContextKeyValue({
            contextName: "MealsAndMacros",
            keyName: "mealOfTheDayIndex",
            newValue: index,
          })
        );

        dispatch(forceRerenderSliceActions.forceRerender("Ingredient"));
      }}
      forceUpdate={() => {
        dispatch(
          forceRerenderSliceActions.forceRerender("MealsForTheChosenDay")
        );
      }}
    >
      {MealsAndMacros.globalSubAppData.periodOfDaysOfEating[
        MealsAndMacros.dayOfMealPlanIndex
      ].map((meal, index) => (
        <SwiperSlide key={index}>
          <div
            css={[
              universalCss.button(
                index === MealsAndMacros.mealOfTheDayIndex,
                `rgb(${colors.tertiaryLight})`,
                `rgb(${colors.whiteLight})`
              ),
              variantsCss.variant,
            ]}
          >
            {/* {MealsAndMacros.globalSubAppData.mealsAvailable[meal.mealId].name} */}
            <ImageWithWrapper
              src={
                MealsAndMacros.globalSubAppData.mealsAvailable[meal.mealId]
                  .imagePaths
              }
              alt={
                MealsAndMacros.globalSubAppData.mealsAvailable[meal.mealId].name
              }
              wrapperCss={{
                width: "85px",
                height: "85px",
              }}
            />
          </div>
        </SwiperSlide>
      ))}
    </SwiperCustom>
  );
};
