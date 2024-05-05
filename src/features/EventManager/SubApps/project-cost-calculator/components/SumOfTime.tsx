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
  const { numberOfHours, numberToMultiplyTheHoursWith, sumOfTime } = useContext(
    ProjectCostCalculatorContext
  );

  const [sumOfTimeState, setSumOfTimeState] = useState<number>(0);

  // recalculate the sum of time whenever the number of hours or the number to multiply the hours with changes
  useEffect(() => {
    const newSumOfTime =
      numberOfHours.current * numberToMultiplyTheHoursWith.current;
    sumOfTime.current = newSumOfTime;
    setSumOfTimeState(newSumOfTime);
  }, [numberOfHours, numberToMultiplyTheHoursWith, sumOfTime]);

  return (
    <section css={universalCss.container}>
      <h2>Sum of time</h2>
      <div>{sumOfTimeState}</div>
    </section>
  );
};
