/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import {
  BuildingBlockType,
  FeatureProps,
  HourlyRateType,
  SpecificFeatureType,
  SpecificFeaturesProps,
} from "../types";
import { useContext, useEffect, useRef, useState } from "react";
import { TitleBarWithTogglableContent } from "@/components/TitleBarWithTogglableContent";
import { BuildingBlock } from "./BuildingBlock";
import { IoMdAddCircleOutline } from "react-icons/io";
import { RangesOfSums } from "./RangesOfSums";
import { ProjectDefaultCheckboxesAndFeaturesContext } from "../context/ProjectDefaultCheckboxesAndFeatures";
import { parse } from "path";
import { ProjectCostCalculatorContext } from "../context/ProjectCostCalculatorContext";

// two words fully written, the rest are initials
const SpecificFeaturesCss = {
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

export const Feature = ({ feature, featureIndex }: FeatureProps) => {
  // They will multiply the SINGLE sum of hours of a feature if its "isResponsive", "isTranslated","isStylised" etc. is true

  const { userChoicesRef } = useContext(
    ProjectDefaultCheckboxesAndFeaturesContext
  );

  const multipliersForSpecificFeatures = useRef({
    translation: 0,
    responsiveness: 0,
    stylisation: 0,
  });

  const addNewBuildingBlock = () => {
    feature.featureBuildingBlocks.push(placeholderBuildingBlock);

    console.log("feature.featureBuildingBlocks", feature.featureBuildingBlocks);
  };

  return (
    <div css={universalCss.container}>
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

      <Ranges featureIndex={featureIndex} />
    </div>
  );
};

export const Ranges = ({ featureIndex }) => {
  const { hourlyRate } = useContext(ProjectCostCalculatorContext);

  const { userChoicesRef } = useContext(
    ProjectDefaultCheckboxesAndFeaturesContext
  );

  const [currentFeature, setFeature] = useState<SpecificFeatureType>(
    userChoicesRef.current.finalChoice.calculationContent.specificFeatures[
      featureIndex
    ]
  );

  useEffect(() => {
    setFeature(
      userChoicesRef.current.finalChoice.calculationContent.specificFeatures[
        featureIndex
      ]
    );
  }, [userChoicesRef, featureIndex]);

  console.log(
    "calculateFinalRangeOfSums()",
    calculateFinalRangeOfSums(currentFeature, hourlyRate.current)
  );
  return (
    <>
      <RangesOfSums
        variant={{ resource: "time", resourceVariant: "min", isMainSum: false }}
        logicalRangeOfSums={{
          pessimistic: 5,
          optimistic: 30,
        }}
        creativeRangeOfSums={{
          pessimistic: 30,
          optimistic: 60,
        }}
      />

      <RangesOfSums
        variant={{ resource: "money", isMainSum: false }}
        logicalRangeOfSums={{
          pessimistic: 5,
          optimistic: 30,
        }}
        creativeRangeOfSums={{
          pessimistic: 30,
          optimistic: 60,
        }}
      />
    </>
  );
};

export const calculateFinalRangeOfSums = (
  currentFeature,
  hourlyRate: HourlyRateType
) => {
  const sumOfLogicalTime = {
    optimistic: 0,
    pessimistic: 0,
  };

  const sumOfCreativeTime = {
    optimistic: 0,
    pessimistic: 0,
  };

  const sumOfBothLogicalAndCreativeTimes = {
    optimistic: 0,
    pessimistic: 0,
  };

  const sumOfLogicalMoney = {
    optimistic: 0,
    pessimistic: 0,
  };

  const sumOfCreativeMoney = {
    optimistic: 0,
    pessimistic: 0,
  };

  const sumOfBothLogicalAndCreativeMoney = {
    optimistic: 0,
    pessimistic: 0,
  };

  currentFeature.featureBuildingBlocks.forEach((block) => {
    // Count the logical and creative problemsolving minutes/hours from all building blocks
    sumOfLogicalTime.optimistic +=
      block.timeRangesByVariant.logicalProblemsolving.timeRange.optimistic;
    sumOfLogicalTime.pessimistic +=
      block.timeRangesByVariant.logicalProblemsolving.timeRange.pessimistic;

    sumOfCreativeTime.optimistic +=
      block.timeRangesByVariant.creativeProblemsolving.timeRange.optimistic;
    sumOfCreativeTime.pessimistic +=
      block.timeRangesByVariant.creativeProblemsolving.timeRange.pessimistic;

    // TODO: Check if the times added/multiplied are legit

    // "translationAutomatically" = "yes"   ->   + 5 minutes
    if (block.statesThatMultiplyTheTimeSum.translationAutomatically === "yes") {
      sumOfLogicalTime.optimistic += 5;
      sumOfLogicalTime.pessimistic += 5;
    }
    // "responsiveForBrowsers" = "all"   ->   + 10 minutes
    if (block.statesThatMultiplyTheTimeSum.responsiveForBrowsers === "all") {
      sumOfLogicalTime.optimistic += 10;
      sumOfLogicalTime.pessimistic += 10;
    }
    // "responsiveForScreenSizes" = "2"   ->    + 20 minutes
    // "responsiveForScreenSizes" = "3"   ->    + 40 minutes
    if (block.statesThatMultiplyTheTimeSum.responsiveForScreenSizes === "2") {
      sumOfLogicalTime.optimistic += 20;
      sumOfLogicalTime.pessimistic += 20;
    }
    if (block.statesThatMultiplyTheTimeSum.responsiveForScreenSizes === "3") {
      sumOfLogicalTime.optimistic += 40;
      sumOfLogicalTime.pessimistic += 40;
    }
    // "responsiveForDisabilities" = "yes"   ->   + 15 minutes
    if (
      block.statesThatMultiplyTheTimeSum.responsiveForDisabilities === "yes"
    ) {
      sumOfLogicalTime.optimistic += 15;
      sumOfLogicalTime.pessimistic += 15;
    }
    // TODO
    // "stylisationDesign" = IT DOESNT DO ADDITIONAL CALCULATIONS - just notify the user, that you need to acount for it
    // when writing the logical and creative problemsolving times

    // "stylisationAnimationAmountOfStates" = whatever, but NOT "none"  ->
    //      1. Count amountOfNonComplexStates = "stylisationAnimationAmountOfStates - stylingAnimationAmountOfComplexStates"
    //      2.  -> + (amountOfNonComplexStates * 15 minutes)
    //      3.  -> + ( (stylisationAnimationAmountOfStates - amountOfNonComplexStates) * 30 minutes)
    if (
      block.statesThatMultiplyTheTimeSum.stylisationAnimationAmountOfStates !==
      "0"
    ) {
      const amountOfNonComplexStates =
        parseInt(
          block.statesThatMultiplyTheTimeSum.stylisationAnimationAmountOfStates
        ) -
        parseInt(
          block.statesThatMultiplyTheTimeSum
            .stylisationAnimationAmountOfComplexStates
        );

      sumOfLogicalTime.optimistic += amountOfNonComplexStates * 15;
      sumOfLogicalTime.pessimistic += amountOfNonComplexStates * 15;

      sumOfLogicalTime.optimistic +=
        (parseInt(
          block.statesThatMultiplyTheTimeSum.stylisationAnimationAmountOfStates
        ) -
          amountOfNonComplexStates) *
        30;
      sumOfLogicalTime.pessimistic +=
        (parseInt(
          block.statesThatMultiplyTheTimeSum.stylisationAnimationAmountOfStates
        ) -
          amountOfNonComplexStates) *
        30;
    }
    // copies:
    // "100%" = any value > 0   ->   + (any value * 1) minutes
    if (block.copiesAmounts["100%"] > 0) {
      sumOfLogicalTime.optimistic += parseInt(block.copiesAmounts["100%"]);
      sumOfLogicalTime.pessimistic += parseInt(block.copiesAmounts["100%"]);
      sumOfCreativeTime.optimistic += parseInt(block.copiesAmounts["100%"]);
      sumOfCreativeTime.pessimistic += parseInt(block.copiesAmounts["100%"]);
    }
    // "75-99%" = any value > 0   ->   sum * 1.25
    if (block.copiesAmounts["75-99%"] > 0) {
      sumOfLogicalTime.optimistic *=
        parseInt(block.copiesAmounts["75-99%"]) * 1.25;
      sumOfLogicalTime.pessimistic *=
        parseInt(block.copiesAmounts["75-99%"]) * 1.25;
      sumOfCreativeTime.optimistic *=
        parseInt(block.copiesAmounts["75-99%"]) * 1.25;
      sumOfCreativeTime.pessimistic *=
        parseInt(block.copiesAmounts["75-99%"]) * 1.25;
    }
    // "50-74%" = any value > 0   ->    sum * 1.5
    if (block.copiesAmounts["50-74%"] > 0) {
      sumOfLogicalTime.optimistic *=
        parseInt(block.copiesAmounts["50-74%"]) * 1.5;
      sumOfLogicalTime.pessimistic *=
        parseInt(block.copiesAmounts["50-74%"]) * 1.5;
      sumOfCreativeTime.optimistic *=
        parseInt(block.copiesAmounts["50-74%"]) * 1.5;
      sumOfCreativeTime.pessimistic *=
        parseInt(block.copiesAmounts["50-74%"]) * 1.5;
    }
  });

  // Count both sums of money by
  //     ) Dividng by 60 to get the hours
  //     ) Multiplying the hours by the hourly rate of the SPECIFIC TYPE of problemsolving
  //     ) Round (equalor higher) the result to the nearest integer
  sumOfLogicalMoney.pessimistic = Math.ceil(
    (sumOfLogicalTime.pessimistic / 60) * hourlyRate.logicalProblemsolving
  );
  sumOfLogicalMoney.optimistic = Math.ceil(
    (sumOfLogicalTime.optimistic / 60) * hourlyRate.logicalProblemsolving
  );

  sumOfCreativeMoney.pessimistic = Math.ceil(
    (sumOfCreativeTime.pessimistic / 60) * hourlyRate.creativeProblemsolving
  );
  sumOfCreativeMoney.optimistic = Math.ceil(
    (sumOfCreativeTime.optimistic / 60) * hourlyRate.creativeProblemsolving
  );

  // Add the third party costs to the logical sum of money
  currentFeature.featureBuildingBlocks.forEach((block) => {
    // TODO: Add inputs dedicated to third party costs a
    sumOfLogicalMoney.optimistic += block.thirdPartyCosts;
    sumOfLogicalMoney.pessimistic += block.thirdPartyCosts;
  });

  // Sum up times
  sumOfBothLogicalAndCreativeTimes.pessimistic =
    sumOfLogicalTime.pessimistic + sumOfCreativeTime.pessimistic;
  sumOfBothLogicalAndCreativeTimes.optimistic =
    sumOfLogicalTime.optimistic + sumOfCreativeTime.optimistic;

  // Sum up money
  sumOfBothLogicalAndCreativeMoney.pessimistic =
    sumOfLogicalMoney.pessimistic + sumOfCreativeMoney.pessimistic;
  sumOfBothLogicalAndCreativeMoney.optimistic =
    sumOfLogicalMoney.optimistic + sumOfCreativeMoney.optimistic;

  return {
    sumOfLogicalTime,
    sumOfCreativeTime,
    sumOfBothLogicalAndCreativeTimes,
    sumOfLogicalMoney,
    sumOfCreativeMoney,
    sumOfBothLogicalAndCreativeMoney,
  };
};
