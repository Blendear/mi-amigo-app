/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { useState } from "react";

const RateCss = {};

export const Rate = ({ inputsHtmlFor, label, onChangeOfAnyRate }) => {
  const [inputNumber, setInputNumber] = useState<number>(60);

  const onChangeOfSingleRate = (event) => {
    const newValue = parseInt(event.target.value);

    setInputNumber(newValue);

    onChangeOfAnyRate(inputsHtmlFor, newValue);
  };

  return (
    <div>
      <h3>
        <label htmlFor="sprintCall">{label}</label>
      </h3>

      <input
        css={{ backgroundColor: "rgb(255,255,255,0.2)" }}
        type="number"
        id="sprintCall"
        value={inputNumber}
        onChange={onChangeOfSingleRate}
        placeholder="Enter a number"
      />
    </div>
  );
};
