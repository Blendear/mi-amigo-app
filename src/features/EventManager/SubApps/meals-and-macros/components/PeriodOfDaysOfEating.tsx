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

export const PeriodOfDaysOfEating = ({}) => {
  const { forceUpdate, dayOfMealPlanIndex, mealOfTheDayIndex, payload } =
    useContext(MealsAndMacrosContext);

  return (
    <SwiperCustom
      swiperContainerCss={variantsCss.container}
      spaceBetweenSlides="10rem"
      activeSlide={dayOfMealPlanIndex.current - 1}
      setActiveSlide={(index) => (dayOfMealPlanIndex.current = index + 1)}
      forceUpdate={forceUpdate}
    >
      {Object.keys(payload.periodOfDaysOfEating).map((dayNumber, index) => (
        <SwiperSlide key={index}>
          <div
            css={[
              universalCss.button(
                index === dayOfMealPlanIndex.current - 1,
                `rgb(${colors.tertiaryLight})`,
                `rgb(${colors.whiteLight})`
              ),
              variantsCss.variant,
            ]}
          >
            {dayNumber}
          </div>
        </SwiperSlide>
      ))}
    </SwiperCustom>
  );
};
