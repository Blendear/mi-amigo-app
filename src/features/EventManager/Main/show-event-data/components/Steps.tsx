/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { StepsProps } from "../types";

import { SwiperSlide } from "swiper/react";
import "swiper/css";

import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { SwiperCustom } from "./SwiperCustom";
import { formatToRomanNumber } from "../utils/formatToRomanNumber";
import EventDisplayContext from "../context/EventDisplayContext";
import { useContext } from "react";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";

const stepsCss = {
  container: css({
    ".swiper": {
      padding: "2rem 0",
      width: "20rem",
    },

    ".swiper-slide": {
      width: "6rem",
    },
  }),

  step: css({
    width: "6rem",
    aspectRatio: "1/1",
    borderRadius: "100%",
    border: "0.3rem solid white",
    background: "linear-gradient(to top, #000000, #414141)",
    fontSize: variables.fontSize.subheading,
    display: "grid",
    justifyItems: "center",
    alignItems: "center",
  }),
};

const Steps = ({}: StepsProps) => {
  const { worfklowStepIndex } = useContext(EventDisplayContext);

  return (
    <SwiperCustom
      swiperContainerCss={stepsCss.container}
      spaceBetweenSlides="20rem"
      activeSlide={worfklowStepIndex.current}
      setActiveSlide={(index) => (worfklowStepIndex.current = index)}
    >
      {[1, 2, 3, 4].map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            css={[
              universalCss.button(
                index === worfklowStepIndex.current,
                `rgb(${colors.whiteLight})`
              ),
              stepsCss.step,
            ]}
          >
            {formatToRomanNumber(slide)}
          </div>
        </SwiperSlide>
      ))}
    </SwiperCustom>
  );
};

export default Steps;
