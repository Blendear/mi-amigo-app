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
  spaceBetweenSlides,
  activeSlide,
  setActiveSlide,
  forceUpdate,
  children,
}: SwiperCustomProps) => {
  return (
    <div css={swiperContainerCss}>
      <Swiper
        onSwiper={(swiper) => swiper.slideTo(activeSlide)}
        onSlideChange={(swiper) => {
          if (setActiveSlide) {
            setActiveSlide(swiper.activeIndex);
            forceUpdate && forceUpdate((prev) => !prev);
          }
        }}
        spaceBetween={`${spaceBetweenSlides || "1rem"}`}
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

import { SwiperCustom } from "./SwiperCustom";
import { SwiperSlide } from "swiper/react";
import "swiper/css";

const variantsCss = {
  container: css({
    ".swiper": {
      padding: "2rem 0",
      width: "20rem",
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

const WorkflowVariants = () => {
  const { workflowVariantIndex } = useContext(EventDisplayContext);

  return (
    <SwiperCustom
      swiperContainerCss={variantsCss.container}
      spaceBetweenSlides="10rem"
      activeSlide={workflowVariantIndex.current}
      setActiveSlide={(index) => (workflowVariantIndex.current = index)}
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

*/
