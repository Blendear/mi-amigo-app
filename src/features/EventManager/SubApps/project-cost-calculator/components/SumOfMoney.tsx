/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { SumOfMoneyProps } from "../types";
import { useContext, useEffect, useRef, useState } from "react";
import { ProjectCostCalculatorContext } from "../context/ProjectCostCalculatorContext";
import { sum } from "cypress/types/lodash";
import { RangesOfSums } from "./RangesOfSums";

const SumOfMoneyCss = {
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

export const SumOfMoney = ({}: SumOfMoneyProps) => {
  const { hourlyRate, sumOfHoursByRateType, sumOfTime, sumOfMoney } =
    useContext(ProjectCostCalculatorContext);

  // The sum of money will be multiplied by the VATDivider, which is 12% by default
  // & 32% if the sum of money is more than 120000 (10k a month)
  // It changes will change whenever the sum of money changes
  const VATDivider = useRef(0.12);

  const [sum, setSum] = useState({
    optimistic: 0,
    pessimistic: 0,
  });

  useEffect(() => {
    const newSumOfMoney = {
      optimistic: sumOfTime.current.optimistic * sumOfTime.current.optimistic,
      pessimistic:
        sumOfTime.current.pessimistic * sumOfTime.current.pessimistic,
    };

    sumOfMoney.current = newSumOfMoney;

    setSum(newSumOfMoney);

    if (newSumOfMoney.optimistic > 120000) {
      VATDivider.current = 0.32;
    } else {
      VATDivider.current = 0.12;
    }
  }, [hourlyRate, sumOfTime, sumOfMoney]);

  return (
    <section css={universalCss.container}>
      <h2>Sum of cost</h2>
      {/* <div>
        {sum.optimistic} - {sum.pessimistic}
      </div> */}
      <RangesOfSums
        variant={{ resource: "time", resourceVariant: "min", isMainSum: true }}
        logicalRangeOfSums={{
          pessimistic: 5,
          optimistic: 30,
        }}
        creativeRangeOfSums={{
          pessimistic: 30,
          optimistic: 60,
        }}
      />
      <h2>Sum of actual money for the developer</h2>
      {/* <div>
        {(sum.optimistic / VATDivider.current).toFixed(2)} -
        {(sum.pessimistic / VATDivider.current).toFixed(2)}
      </div> */}
      <RangesOfSums
        variant={{
          resource: "time",
          resourceVariant: "min",
          isMainSum: true,
          showFinalSumOnly: true,
        }}
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
