/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { StepsProps } from "../types";

import { SwiperSlide } from "swiper/react";
import "swiper/css";

import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { SwiperCustom } from "./SwiperCustom";
import { formatToRomanNumber } from "../utils/formatToRomanNumber";

const stepsCss = {
  container: css({
    ".swiper": {
      padding: "2rem 0",
      width: "20rem",
    },

    ".swiper-slide": {
      borderRadius: "100%",
      border: "0.3rem solid white",
      background: "linear-gradient(to top, #000000, #414141)",
      width: "6rem",
      aspectRatio: "1/1",
      display: "grid",
      justifyItems: "center",
      alignItems: "center",
      fontSize: variables.fontSize.subheading,
    },
  }),
};

const Steps = ({}: StepsProps) => {
  return (
    <SwiperCustom swiperContainerCss={stepsCss.container}>
      {[1, 2, 3, 4].map((slide, index) => (
        <SwiperSlide key={index}>
          <div>{formatToRomanNumber(slide)}</div>
        </SwiperSlide>
      ))}
    </SwiperCustom>
  );
};

export default Steps;
