/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import { SwiperCustom } from "./SwiperCustom";
import { formatToRomanNumber } from "../utils/formatToRomanNumber";
import EventDisplayContext from "../context/EventDisplayContext";
import { useContext } from "react";
import { useState, useEffect, useRef } from "react";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import HowAndTips from "./HowAndTips";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import WhereAndTools from "./WhereAndTools";
import { booksOfAddonsNames } from "../data/booksOfAddonsNames";
import WorkflowsContext from "../context/WorkflowsContext";
import { AddOn } from "../types";
import SubAppsTogglers from "./SubAppsTogglers";
import { add, set } from "cypress/types/lodash";

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
    height: "65vh",
    overflowY: "scroll",

    "&::-webkit-scrollbar": {
      display: "none",
    },
  }),
};

const AddOns = () => {
  const {
    formDataRef,
    workflowVariantIndex,
    worfklowStepIndex,
    workflowBookOfAddonsIndex,
  } = useContext(EventDisplayContext);

  const { update, forceUpdate } = useContext(WorkflowsContext);

  const targetToScrollRef = useRef(null);

  const [addOnData, setAddOnData] = useState<AddOn>({});
  const [existingBooksOfAddonsNames, setExistingBooksOfAddonsNames] =
    useState(booksOfAddonsNames);

  const scrollToThisTarget = () => {
    targetToScrollRef.current?.scrollIntoView();
  };

  useEffect(() => {
    // TODO: Refactor this patological data getting here & inside "Steps.tsx" one day
    const currentStepName = Object.keys(
      formDataRef.current.addOnsByVariants[
        Object.keys(formDataRef.current.addOnsByVariants)[
          workflowVariantIndex.current
        ]
      ]
    )[worfklowStepIndex.current];

    const currentAddOnData = // And I did the same with the stepsByVariants
      formDataRef.current.addOnsByVariants[
        // And I did the same with the stepsByVariants
        Object.keys(formDataRef.current.addOnsByVariants)[
          workflowVariantIndex.current
        ]
      ][currentStepName];

    setAddOnData(currentAddOnData || {});

    // Add only the books that have data to the swiper slides
    const booksToRender = [];

    if (currentAddOnData.habits) {
      booksToRender.push("habits");
    }
    if (currentAddOnData.howAndTips) {
      booksToRender.push("how-and-tips");
    }
    if (currentAddOnData.toolsWhere) {
      booksToRender.push("where");
    }
    if (currentAddOnData.toolsSubApps) {
      booksToRender.push("tool-subapp");
    }
    if (currentAddOnData.toolsPhysicalOrThirdParty) {
      booksToRender.push("tool-physical-or-3rd-party");
    }

    setExistingBooksOfAddonsNames(booksToRender);
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
          additionalOnSlideChange={scrollToThisTarget}
        >
          {existingBooksOfAddonsNames.map((addOnName, index) => (
            <SwiperSlide key={index}>
              <ImageWithWrapper
                src={`/images/events-manager/addons/${addOnName}.png`}
                wrapperCss={addOnsCss.bookOfAddons(
                  workflowBookOfAddonsIndex.current === index
                )}
              />
            </SwiperSlide>
          ))}
        </SwiperCustom>
        <p>{existingBooksOfAddonsNames[workflowBookOfAddonsIndex.current]}</p>
        <div css={addOnsCss.addOn} ref={targetToScrollRef}>
          {
            {
              habits: <>{/* addOnData.habits */}</>,
              "how-and-tips": <HowAndTips content={addOnData.howAndTips} />,
              where: <WhereAndTools content={addOnData.toolsWhere} />,
              "tool-subapp": (
                <SubAppsTogglers subappsToToggle={addOnData.toolsSubApps} />
              ),
              "tool-physical-or-3rd-party": (
                <WhereAndTools content={addOnData.toolsPhysicalOrThirdParty} />
              ),
            }[existingBooksOfAddonsNames[workflowBookOfAddonsIndex.current]]
          }
        </div>
      </div>
    </div>
  );
};

export default AddOns;
