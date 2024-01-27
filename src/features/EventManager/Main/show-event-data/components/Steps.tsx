/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { StepsProps } from "../types";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";

const stepsCss = {
  container: css({
    ".swiper": {
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

  swiper: css({ padding: "2rem 0" }),

  slide: css({}),
};

const Steps = ({}: StepsProps) => {
  return (
    <div css={stepsCss.container}>
      <Swiper
        css={stepsCss.swiper}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
      >
        {["I", "II", "III", "IV", "V", "VI", "VII", "VIII"].map(
          (slide, index) => (
            <SwiperSlide key={index}>
              <div css={stepsCss.slide}>{slide}</div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default Steps;
