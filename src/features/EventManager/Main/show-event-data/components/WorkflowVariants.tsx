/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { WorkflowVariantsProps } from "../types";
import { SwiperCustom } from "./SwiperCustom";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { useState } from "react";
import EventDisplayContext from "../context/EventDisplayContext";
import { useContext, useEffect } from "react";

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

const WorkflowVariants = ({}: WorkflowVariantsProps) => {
  const { workflowVariantIndex } = useContext(EventDisplayContext);
  const [, forceUpdate] = useState(false);

  return (
    <SwiperCustom
      swiperContainerCss={variantsCss.container}
      spaceBetweenSlides="10rem"
      activeSlide={workflowVariantIndex.current}
      setActiveSlide={(index) => (workflowVariantIndex.current = index)}
      forceUpdate={forceUpdate}
    >
      {[1, 2, 3, 4].map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            css={[
              universalCss.button(
                index === workflowVariantIndex.current,
                `rgb(${colors.tertiaryLight})`,
                `rgb(${colors.whiteLight})`
              ),
              variantsCss.variant,
            ]}
          >
            aaaaaaa
          </div>
        </SwiperSlide>
      ))}
    </SwiperCustom>
  );
};

export default WorkflowVariants;