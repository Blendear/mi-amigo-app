/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import AddOnType from "./AddOnType"; // Adjust the path based on your project structure
import { SwiperCustom } from "./SwiperCustom";
import { formatToRomanNumber } from "../utils/formatToRomanNumber";
import EventDisplayContext from "../context/EventDisplayContext";
import { useContext } from "react";
import { useState } from "react";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import HowAndTips from "./HowAndTips";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import WhereAndTools from "./WhereAndTools";
import { booksOfAddonsNames } from "../data/booksOfAddonsNames";

const addOnsCss = {
  container: css({
    fontSize: variables.fontSize.regular,
  }),

  swiperWrapper: css({
    ".swiper": {
      padding: "2rem 0 1rem 0",
      width: "80vw",
      height: "max-content",
    },

    ".swiper-slide": {
      width: "10rem",
    },
  }),

  bookOfAddons: (isActive: boolean) =>
    css([{}, !isActive && universalCss.disabled]),

  addOn: css({
    margin: "1.5rem",
  }),
};

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
          {booksOfAddonsNames.map((slide, index) => (
            <SwiperSlide key={index}>
              <ImageWithWrapper
                src={`/images/events-manager/addons/${slide}.png`}
                wrapperCss={addOnsCss.bookOfAddons(
                  workflowBookOfAddonsIndex.current === index
                )}
                width="10rem"
              />
            </SwiperSlide>
          ))}
        </SwiperCustom>
        <p>{booksOfAddonsNames[workflowBookOfAddonsIndex.current]}</p>
        <div css={addOnsCss.addOn}>
          {
            {
              habits: <></>,
              "how-and-tips": <HowAndTips />,
              where: <WhereAndTools />,
              "tool-subapp": <WhereAndTools />,
              "tool-physical-or-3rd-party": <WhereAndTools />,
            }[booksOfAddonsNames[workflowBookOfAddonsIndex.current]]
          }
        </div>
      </div>
    </div>
  );
};

export default AddOns;
