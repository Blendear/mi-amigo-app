/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import AddOnType from "./AddOnType"; // Adjust the path based on your project structure
import { SwiperCustom } from "./SwiperCustom";
import { formatToRomanNumber } from "../utils/formatToRomanNumber";
import EventDisplayContext from "../context/EventDisplayContext";
import { useContext } from "react";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { useState } from "react";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";

const addOnsCss = {
  container: css({
    fontSize: variables.fontSize.regular,
  }),

  swiperWrapper: css({
    ".swiper": {
      padding: "2rem 0 1rem 0",
      width: "20rem",
      height: "max-content",
    },

    ".swiper-slide": {
      width: "10rem",
    },
  }),

  addOn: css({}),
};

const types = [
  "habits",
  "how-and-tips",
  "where",
  "tool-subapp",
  "tool-physical-or-3rd-party",
];

const AddOns = () => {
  const { workflowBookOfAddonsIndex } = useContext(EventDisplayContext);
  const [, forceUpdate] = useState(false);

  return (
    <div>
      <div css={addOnsCss.container}>
        <SwiperCustom
          swiperContainerCss={addOnsCss.swiperWrapper}
          spaceBetweenSlides="20rem"
          activeSlide={workflowBookOfAddonsIndex.current}
          setActiveSlide={(index) =>
            (workflowBookOfAddonsIndex.current = index)
          }
          forceUpdate={forceUpdate}
        >
          {types.map((slide, index) => (
            <SwiperSlide key={index}>
              <ImageWithWrapper
                src={`/images/events-manager/addons/${slide}.png`}
                wrapperCss={addOnsCss.addOn}
                width="10rem"
              />
            </SwiperSlide>
          ))}
        </SwiperCustom>
        <p>{types[workflowBookOfAddonsIndex.current]}</p>
      </div>
    </div>
  );
};

export default AddOns;
