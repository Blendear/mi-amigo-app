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
import { memo, useContext, useEffect, useRef, useState } from "react";
import { TitleBarWithTogglableContent } from "@/components/TitleBarWithTogglableContent";
import { BuildingBlock } from "./BuildingBlock";
import { IoMdAddCircleOutline } from "react-icons/io";
import { RangesOfSums } from "./RangesOfSums";
import { ProjectDefaultCheckboxesAndFeaturesContext } from "../context/ProjectDefaultCheckboxesAndFeatures";
import { parse } from "path";
import { ProjectCostCalculatorContext } from "../context/ProjectCostCalculatorContext";
import { FeatureContext } from "../context/FeatureContext";
import UserStoryAndBuildingBlocks from "./UserStoryAndBuildingBlocks";
import { useAppSelector, useAppDispatch } from "@/store/redux/hooks";
import { fRFeaturesRangesSliceActions } from "@/store/redux/store-redux";

const featuresCss = {
  container: css({}),
};

export const Feature = ({ feature, featureIndex }: FeatureProps) => {
  return (
    <div css={universalCss.container}>
      <UserStoryAndBuildingBlocks
        feature={feature}
        featureIndex={featureIndex}
      />

      <FeaturesRanges featureIndex={featureIndex} />
    </div>
  );
};

export const FeaturesRanges = ({ featureIndex }) => {
  const { fRFeaturesRanges } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  const { hourlyRate } = useContext(ProjectCostCalculatorContext);

  const { userChoicesRef } = useContext(
    ProjectDefaultCheckboxesAndFeaturesContext
  );

  const [featuresRangesOfSums, setFeaturesRangesOfSums] = useState(
    calculateFinalRangeOfSums(
      userChoicesRef.current.finalChoice.calculationContent.specificFeatures[
        featureIndex
      ],
      hourlyRate.current
    )
  );

  useEffect(() => {
    setFeaturesRangesOfSums(
      calculateFinalRangeOfSums(
        userChoicesRef.current.finalChoice.calculationContent.specificFeatures[
          featureIndex
        ],
        hourlyRate.current
      )
    );
  }, [fRFeaturesRanges, featureIndex, hourlyRate, userChoicesRef]);

  return (
    <>
      <RangesOfSums
        variant={{
          resource: "time",
          resourceVariant: "min",
          isMainSum: false,
        }}
        logicalRangeOfSums={featuresRangesOfSums.sumOfLogicalTime}
        creativeRangeOfSums={featuresRangesOfSums.sumOfCreativeTime}
      />

      <RangesOfSums
        variant={{ resource: "money", isMainSum: false }}
        logicalRangeOfSums={featuresRangesOfSums.sumOfLogicalMoney}
        creativeRangeOfSums={featuresRangesOfSums.sumOfCreativeMoney}
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

    // TODO: Check if the values oftimes added/multiplied are legit
    // TODO: Check if the calculations are correct in the end

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

  // Format the sums of times into hours (keep only 2 decimal places)
  sumOfLogicalTime.optimistic = parseFloat(
    (sumOfLogicalTime.optimistic / 60).toFixed(2)
  );
  sumOfLogicalTime.pessimistic = parseFloat(
    (sumOfLogicalTime.pessimistic / 60).toFixed(2)
  );

  sumOfCreativeTime.optimistic = parseFloat(
    (sumOfCreativeTime.optimistic / 60).toFixed(2)
  );
  sumOfCreativeTime.pessimistic = parseFloat(
    (sumOfCreativeTime.pessimistic / 60).toFixed(2)
  );

  // Count both sums of money by
  //     ) Multiplying the hours by the hourly rate of the SPECIFIC TYPE of problemsolving
  //     ) Round (equalor higher) the result to the nearest integer
  sumOfLogicalMoney.pessimistic = Math.ceil(
    sumOfLogicalTime.pessimistic * hourlyRate.logicalProblemsolving
  );
  sumOfLogicalMoney.optimistic = Math.ceil(
    sumOfLogicalTime.optimistic * hourlyRate.logicalProblemsolving
  );

  sumOfCreativeMoney.pessimistic = Math.ceil(
    sumOfCreativeTime.pessimistic * hourlyRate.creativeProblemsolving
  );
  sumOfCreativeMoney.optimistic = Math.ceil(
    sumOfCreativeTime.optimistic * hourlyRate.creativeProblemsolving
  );

  // Add the third party costs to the logical sum of money
  currentFeature.featureBuildingBlocks.forEach((block) => {
    // TODO: Add inputs dedicated to third party costs a
    sumOfLogicalMoney.optimistic += block.thirdPartyCosts;
    sumOfLogicalMoney.pessimistic += block.thirdPartyCosts;
  }); //

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
