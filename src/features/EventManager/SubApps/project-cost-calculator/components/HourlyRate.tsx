/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { HourlyRateProps } from "../types";
import { useContext, useState } from "react";
import { parse } from "path";
import { ProjectCostCalculatorContext } from "../context/ProjectCostCalculatorContext";

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

  const [inputNumber, setInputNumber] = useState<number>(60);

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value);
    setInputNumber(newValue);
    hourlyRate.current = newValue;
  };

  return (
    <section css={universalCss.container}>
      <h2>
        <label htmlFor="numberInput">Hourly rate</label>
      </h2>
      <input
        css={{ backgroundColor: "rgb(255,255,255,0.2)" }}
        type="number"
        id="numberInput"
        value={inputNumber}
        onChange={handleChange}
        placeholder="Enter a number"
      />
    </section>
  );
};
