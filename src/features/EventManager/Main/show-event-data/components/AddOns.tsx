/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import { SwiperCustom } from "./SwiperCustom";
import { formatToRomanNumber } from "../utils/formatToRomanNumber";
import EventDisplayContext from "../context/EventDisplayContext";
import { useContext } from "react";
import { useState, useEffect } from "react";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import HowAndTips from "./HowAndTips";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import WhereAndTools from "./WhereAndTools";
import { booksOfAddonsNames } from "../data/booksOfAddonsNames";
import WorkflowsContext from "../context/WorkflowsContext";

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
  const {
    formDataRef,
    workflowVariantIndex,
    worfklowStepIndex,
    workflowBookOfAddonsIndex,
  } = useContext(EventDisplayContext);
  // const [, forceUpdate] = useState(false);
  const { update, forceUpdate } = useContext(WorkflowsContext);
  // TODO: Add the book content dynamically, like in steps

  const [addOnData, setAddOnData] = useState({});

  useEffect(() => {
    // TODO: Refactor this patological data getting here & inside "Steps.tsx" one day
    setAddOnData(
      // And I did the same with the stepsByVariants
      formDataRef.current.addOnsByVariants[
        // And I did the same with the stepsByVariants
        Object.keys(formDataRef.current.addOnsByVariants)[
          workflowVariantIndex.current
        ]
      ][
        Object.keys(
          formDataRef.current.addOnsByVariants[
            Object.keys(formDataRef.current.addOnsByVariants)[
              workflowVariantIndex.current
            ]
          ]
        )[worfklowStepIndex.current]
      ]
    );
    console.log("addOnData", addOnData);
  }, [update]);

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
