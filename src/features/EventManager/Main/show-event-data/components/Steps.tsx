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
import { useState } from "react";

const stepsCss = {
  container: css({
    padding: "0 0 2rem 0",
    display: "grid",
    fontSize: variables.fontSize.regular,
  }),

  swiperWrapper: css({
    ".swiper": {
      padding: "2rem 0 1rem 0",
      width: "20rem",
      height: "max-content",
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

const placeholderSteps = [
  { name: "Sranie z biodra" },
  { name: "Stretching odbytem" },
  { name: "Obczajanie dupeczek" },
  { name: "Wertowanie Biblii" },
];

const Steps = ({}: StepsProps) => {
  const { worfklowStepIndex } = useContext(EventDisplayContext);
  const [, forceUpdate] = useState(false);

  return (
    <div css={stepsCss.container}>
      <SwiperCustom
        swiperContainerCss={stepsCss.swiperWrapper}
        spaceBetweenSlides="20rem"
        activeSlide={worfklowStepIndex.current}
        setActiveSlide={(index) => (worfklowStepIndex.current = index)}
        forceUpdate={forceUpdate}
      >
        {placeholderSteps.map((slide, index) => (
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
              {formatToRomanNumber(index + 1)}
            </div>
          </SwiperSlide>
        ))}
      </SwiperCustom>
      <p>{placeholderSteps[worfklowStepIndex.current].name}</p>
    </div>
  );
};

export default Steps;
