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

const variantsCss = {
  container: css({
    ".swiper": {
      padding: "2rem 0",
      width: "80vw",
    },

    ".swiper-slide": {
      width: "max-content",
      display: "grid",
      justifyItems: "center",
      alignItems: "center",
      fontSize: variables.fontSize.regular,
    },
  }),

  variant: css({
    padding: "1rem 2rem",
  }),
};

export const DayChooser = ({}) => {
  const { MealsAndMacros } = useAppSelector((state) => state.contextsReducer);
  const dispatch = useAppDispatch();

  return (
    <SwiperCustom
      swiperContainerCss={variantsCss.container}
      spaceBetweenSlides="10rem"
      activeSlide={MealsAndMacros.dayOfMealPlanIndex - 1}
      setActiveSlide={(index) => {
        dispatch(
          contextsSliceActions.setContextKeyValue({
            contextName: "MealsAndMacros",
            keyName: "mealOfTheDayIndex",
            newValue: 0,
          })
        ),
          dispatch(
            contextsSliceActions.setContextKeyValue({
              contextName: "MealsAndMacros",
              keyName: "dayOfMealPlanIndex",
              newValue: index + 1,
            })
          );
      }}
      forceUpdate={() => {
        dispatch(
          forceRerenderSliceActions.forceRerender("MealsForTheChosenDay")
        );
      }}
    >
      {Object.keys(MealsAndMacros.globalSubAppData.periodOfDaysOfEating).map(
        (dayNumber, index) => (
          <SwiperSlide key={index}>
            <div
              css={[
                universalCss.button(
                  index === MealsAndMacros.dayOfMealPlanIndex - 1,
                  `rgb(${colors.tertiaryLight})`,
                  `rgb(${colors.whiteLight})`
                ),
                variantsCss.variant,
              ]}
            >
              {dayNumber}
            </div>
          </SwiperSlide>
        )
      )}
    </SwiperCustom>
  );
};
