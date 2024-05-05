/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { SumOfTimeProps } from "../types";
import { useContext, useEffect, useState } from "react";
import { ProjectCostCalculatorContext } from "../context/ProjectCostCalculatorContext";

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
    numberOfHours,
    listOfnumbersToMultiplyTheHoursWith,
    finalMultiplier,
    sumOfTime,
  } = useContext(ProjectCostCalculatorContext);

  const [sum, setSum] = useState({
    optimistic: 0,
    pessimistic: 0,
  });

  useEffect(() => {
    const newFinalMultiplier = Object.values(
      listOfnumbersToMultiplyTheHoursWith.current
    ).reduce((sum, currentNumber) => sum + currentNumber);

    finalMultiplier.current = newFinalMultiplier;

    const newSum = {
      optimistic: numberOfHours.current.optimistic * finalMultiplier.current,
      pessimistic: numberOfHours.current.pessimistic * finalMultiplier.current,
    };

    sumOfTime.current = newSum;

    setSum(newSum);
  }, [
    numberOfHours,
    listOfnumbersToMultiplyTheHoursWith,
    finalMultiplier,
    sumOfTime,
  ]);

  return (
    <section css={universalCss.container}>
      <h2>Sum of time</h2>
      <div>
        {sum.optimistic} - {sum.pessimistic}
      </div>
    </section>
  );
};
