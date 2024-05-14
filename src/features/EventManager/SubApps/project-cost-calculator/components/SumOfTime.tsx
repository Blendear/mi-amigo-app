/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { SumOfHoursByRateType, SumOfTimeProps } from "../types";
import { useContext, useEffect, useState } from "react";
import { ProjectCostCalculatorContext } from "../context/ProjectCostCalculatorContext";
import { RangesOfSums } from "./RangesOfSums";

const SumOfTimeCss = {
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

export const SumOfTime = ({}: SumOfTimeProps) => {
  const {
    sumOfHoursByRateType,
    multipliersForAllFeaturesAsOne,
    finalMultiplier,
    sumOfTime,
  } = useContext(ProjectCostCalculatorContext);

  const [sum, setSum] = useState({
    optimistic: 0,
    pessimistic: 0,
  });

  useEffect(() => {
    const newFinalMultiplier = Object.values(
      multipliersForAllFeaturesAsOne.current
    ).reduce((sum, currentNumber) => sum + currentNumber);

    finalMultiplier.current = newFinalMultiplier;

    const newSumOfHoursByRateType: SumOfHoursByRateType =
      // every optimistic and [pessimistic shouldsimply be multiplied by the newFinalMultiplier
      {
        sprintCall: {
          optimistic:
            sumOfHoursByRateType.current.sprintCall.optimistic *
            newFinalMultiplier,
          pessimistic:
            sumOfHoursByRateType.current.sprintCall.pessimistic *
            newFinalMultiplier,
        },
        logicalProblemsolving: {
          optimistic:
            sumOfHoursByRateType.current.logicalProblemsolving.optimistic *
            newFinalMultiplier,
          pessimistic:
            sumOfHoursByRateType.current.logicalProblemsolving.pessimistic *
            newFinalMultiplier,
        },
        creativeProblemsolving: {
          optimistic:
            sumOfHoursByRateType.current.creativeProblemsolving.optimistic *
            newFinalMultiplier,
          pessimistic:
            sumOfHoursByRateType.current.creativeProblemsolving.pessimistic *
            newFinalMultiplier,
        },
      };

    sumOfHoursByRateType.current = newSumOfHoursByRateType;

    const newSumOfSums = {
      optimistic: Object.values(newSumOfHoursByRateType).reduce(
        (acc, rateType) => acc + rateType.optimistic,
        0
      ),
      pessimistic: Object.values(newSumOfHoursByRateType).reduce(
        (acc, rateType) => acc + rateType.pessimistic,
        0
      ),
    };

    sumOfTime.current = newSumOfSums;

    setSum(newSumOfSums);
  }, [
    sumOfHoursByRateType,
    multipliersForAllFeaturesAsOne,
    finalMultiplier,
    sumOfTime,
  ]);

  return (
    <section css={universalCss.container}>
      <h2>Sum of time</h2>
      {/* <div>
        {sum.optimistic.toFixed(2)} - {sum.pessimistic.toFixed(2)}
      </div> */}
      <RangesOfSums
        variant={{ resource: "time", isMainSum: true }}
        logicalRangeOfSums={{
          pessimistic: 5,
          optimistic: 30,
        }}
        creativeRangeOfSums={{
          pessimistic: 30,
          optimistic: 60,
        }}
      />
    </section>
  );
};
