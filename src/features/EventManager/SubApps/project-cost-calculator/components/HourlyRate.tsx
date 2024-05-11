/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { HourlyRateProps } from "../types";
import { useContext, useState } from "react";
import { parse } from "path";
import { ProjectCostCalculatorContext } from "../context/ProjectCostCalculatorContext";
import { Rate } from "./Rate";

// two words fully written, the rest are initials
const HourlyRateCss = {
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

export const HourlyRate = ({}: HourlyRateProps) => {
  const { hourlyRate } = useContext(ProjectCostCalculatorContext);

  const onChangeOfAnyRate = (
    rateType: "sprintCall" | "logicalProblemSolving" | "creativeProblemSolving",
    newAmount: number
  ) => {
    hourlyRate.current = { ...hourlyRate.current, [rateType]: newAmount };
  };

  return (
    <section css={universalCss.container}>
      <h2>Hourly Rates</h2>

      <Rate
        inputsHtmlFor="sprintCall"
        label="Pre / Post Sprint Call"
        onChangeOfAnyRate={onChangeOfAnyRate}
      />

      <Rate
        inputsHtmlFor="logicalProblemsolving"
        label="Logical Problemsolving"
        onChangeOfAnyRate={onChangeOfAnyRate}
      />

      <Rate
        inputsHtmlFor="creativeProblemsolving"
        label="Creative Problemsolving"
        onChangeOfAnyRate={onChangeOfAnyRate}
      />
    </section>
  );
};
