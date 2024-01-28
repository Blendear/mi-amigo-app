/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { SwiperCustomProps } from "../types";

// Example use case on the bottom of this file
export const SwiperCustom = ({
  swiperContainerCss,
  children,
}: SwiperCustomProps) => {
  return (
    <div css={swiperContainerCss}>
      <Swiper
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
        {children}
      </Swiper>
    </div>
  );
};

/*
Example use case, using the build in swiper class names:

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
    <SwiperCustom swiperContainerCss={stepsCss.container}>
        {[1, 2, 3, 4].map((slide, index) => (
          <SwiperSlide key={index}>
            <div>{formatToRomanNumber(slide)}</div>
          </SwiperSlide>
        ))}
    </SwiperCustom>
    
*/
