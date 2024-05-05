/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { PaymentProps } from "../types";
import { useContext } from "react";
import { ProjectCostCalculatorContext } from "../context/ProjectCostCalculatorContext";

// two words fully written, the rest are initials
const PaymentCss = {
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

export const Payment = ({}: PaymentProps) => {
  const { hourlyRate, numberOfHours, sumOfTime } = useContext(
    ProjectCostCalculatorContext
  );

  return <div>AComponent</div>;
};
