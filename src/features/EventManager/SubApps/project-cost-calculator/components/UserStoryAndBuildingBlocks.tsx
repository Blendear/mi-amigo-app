/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { BuildingBlockType, CrunchProps } from "../types";
import { memo, useContext, useEffect, useState } from "react";
import { ProjectCostCalculatorContext } from "../context/ProjectCostCalculatorContext";
import { IoMdAddCircleOutline } from "react-icons/io";
import { BuildingBlock } from "./BuildingBlock";
import { TitleBarWithTogglableContent } from "@/components/TitleBarWithTogglableContent";
import { FeatureContext } from "../context/FeatureContext";
import { useAppSelector, useAppDispatch } from "@/store/redux/hooks";
import { forceRerenderSliceActions } from "@/store/redux/store-redux";
import { useForceRerender } from "@/hooks/useForceRerender";

// two words fully written, the rest are initials
const OneTwoTFWCNCss = {
  container: css({
    // gridRow: "1 / 3",
    // padding: "1rem",
    // width: "100%",
    // boxSizing: "border-box",
    // aspectRatio: "2/1",
    // backgroundColor: `rgb(${colors.primaryLight})`,
    // display: "grid",
    // gridTemplateRows: "1fr",
    // justifyItems: "center",
    // fontSize: "clamp(1rem, 4vw, 2rem)",
    // "& div:nth-child(1)": {
    //   backgroundColor: "yellow",
    // },
  }),
};

const placeholderBuildingBlock: BuildingBlockType = {
  name: "New Building Block",
  descriptionOrdeveloperComment: "New Building Block",
  needsResearchBeforeCalculationWillBePossible: false,
  thirdPartyCosts: 0,
  timeRangesByVariant: {
    logicalProblemsolving: {
      timeRange: { optimistic: 5, pessimistic: 30 },
    },
    creativeProblemsolving: {
      timeRange: { optimistic: 5, pessimistic: 30 },
    },
  },
  statesThatMultiplyTheTimeSum: {
    translationAutomatically: "no",
    responsiveForBrowsers: "all",
    responsiveForScreenSizes: "3",
    responsiveForDisabilities: "no",
    stylisationDesign: "design basic",
    stylisationAnimationAmountOfStates: "2",
    stylisationAnimationAmountOfComplexStates: "1",
  },
  copiesAmounts: {
    "100%": 1,
    "75-99%": 0,
    "50-74%": 2,
  },
};

const UserStoryAndBuildingBlocks = ({ feature, featureIndex }) => {
  useForceRerender("UserStoryAndBuildingBlocks");

  const dispatch = useAppDispatch();

  const addNewBuildingBlock = () => {
    feature.featureBuildingBlocks.push(placeholderBuildingBlock);
    dispatch(
      forceRerenderSliceActions.forceRerender("UserStoryAndBuildingBlocks")
    );
  };

  return (
    <TitleBarWithTogglableContent titleBarContent={<h3>{feature.name}</h3>}>
      <div css={universalCss.container}>
        <TitleBarWithTogglableContent titleBarContent={<h4>User Story</h4>}>
          {feature.userStory}
        </TitleBarWithTogglableContent>
      </div>

      <div css={universalCss.container}>
        <div>
          <h4>Building Blocks</h4>
          <button onClick={addNewBuildingBlock}>
            <IoMdAddCircleOutline />
          </button>
        </div>

        {feature.featureBuildingBlocks.map((block, index) => {
          return (
            <BuildingBlock
              key={index}
              block={block}
              featureIndex={featureIndex}
              blockIndex={index}
            />
          );
        })}
      </div>
    </TitleBarWithTogglableContent>
  );
};

export default memo(UserStoryAndBuildingBlocks);
