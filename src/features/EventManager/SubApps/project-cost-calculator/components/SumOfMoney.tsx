/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { SumOfMoneyProps } from "../types";
import { useContext, useEffect, useState } from "react";
import { ProjectCostCalculatorContext } from "../context/ProjectCostCalculatorContext";

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
  const { hourlyRate, sumOfTime } = useContext(ProjectCostCalculatorContext);

  const [sumOfMoneyState, setSumOfMoneyState] = useState<number>(0);

  useEffect(() => {
    const newSumOfMoney = hourlyRate.current * sumOfTime.current;
    setSumOfMoneyState(newSumOfMoney);
  }, [hourlyRate, sumOfTime]);

  return (
    <section css={universalCss.container}>
      <h2>Sum of cost</h2>
      <div>{sumOfMoneyState}</div>
    </section>
  );
};
