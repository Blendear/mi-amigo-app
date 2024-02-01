/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { StepsProps } from "../types";

import { SwiperSlide } from "swiper/react";
import "swiper/css";

import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { SwiperCustom } from "./SwiperCustom";
import { formatToRomanNumber } from "../utils/formatToRomanNumber";
import EventDisplayContext from "../context/EventDisplayContext";
import { useContext, useEffect } from "react";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { useState } from "react";
import WorkflowsContext from "../context/WorkflowsContext";

const stepsCss = {
  container: css({
    padding: "0 0 2rem 0",
    display: "grid",
    fontSize: variables.fontSize.regular,
  }),

  swiperWrapper: css({
    ".swiper": {
      padding: "2rem 0 1rem 0",
      width: "80vw",
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
  const { formDataRef, workflowVariantIndex, worfklowStepIndex } =
    useContext(EventDisplayContext);

  const { update, forceUpdate } = useContext(WorkflowsContext);

  const [stepsNames, setStepsNames] = useState([]);

  useEffect(() => {
    setStepsNames(
      // I wrote the addOnsByVariants as an {} with variantNames as string keys, thats why I need to use Object.keys
      Object.keys(
        formDataRef.current.addOnsByVariants[
          // And I did the same with the stepsByVariants
          Object.keys(formDataRef.current.addOnsByVariants)[
            workflowVariantIndex.current
          ]
        ]
      )
    );
  }, [update]);

  return (
    <div css={stepsCss.container}>
      <SwiperCustom
        swiperContainerCss={stepsCss.swiperWrapper}
        spaceBetweenSlides="20rem"
        activeSlide={worfklowStepIndex.current}
        setActiveSlide={(index) => (worfklowStepIndex.current = index)}
        forceUpdate={forceUpdate}
      >
        {stepsNames.map((slide, index) => (
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
      <p>{stepsNames[worfklowStepIndex.current]}</p>
    </div>
  );
};

export default Steps;
