/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
// import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { IngredientProps } from "../types";
import { useRef, useState } from "react";

const ingredientCss = {
  container: css(universalCss.container),

  header: css({
    display: "grid",
    gridAutoFlow: "column",
    gridTemplateColumns: "1fr max-content",
    justifyItems: "start",
    borderBottom: "1px solid rgb(255,255,255,0.5)",

    "& > span:nth-of-type(2)": {
      justifySelf: "end",
    },
  }),

  amount: css({
    display: "grid",
    gridTemplateColumns: "1fr max-content max-content",
    justifyItems: "end",

    "& *": {
      color: "rgb(255,255,255,0.5)",
    },

    "& > div:first-of-type": {
      justifySelf: "start",
    },
    "& > input": {
      backgroundColor: "rgb(255,255,255,0.125)",
      width: "5rem",
      textAlign: "end",
    },

    "& > div": {
      justifySelf: "end",
      display: "flex",
    },
  }),

  macrosList: css({
    "& *": {
      color: "rgb(255,255,255,0.5)",
    },

    // add a line to divide the list with the amount
    "&:before": {
      content: '""',
      display: "block",
      height: "1px",
      width: "100%",
      backgroundColor: "rgb(255,255,255,0.5)",
      margin: "0.5rem 0",
    },

    "& > li": {
      display: "grid",
      gridTemplateColumns: "1fr max-content",
      justifyItems: "start",

      "& > div:nth-of-type(2)": {
        justifySelf: "end",
      },
    },
  }),
};

export const Ingredient = ({ details }: IngredientProps) => {
  // const amount = useRef(details.amount);
  const [amount, setAmount] = useState(details.amount);
  return (
    <div css={ingredientCss.container}>
      <h3 css={ingredientCss.header}>
        <span>{details.name}</span>
        <span>{` ${
          (details.macros.calories * amount) / details.macros.forThisAmount
        } kcal`}</span>
      </h3>

      <div css={ingredientCss.amount}>
        <div>Amount</div>
        <input
          type="number"
          defaultValue={amount}
          onChange={(e) => {
            setAmount(Number(e.target.value));
          }}
        />
        <div>{details.unit}</div>
      </div>

      <ul css={ingredientCss.macrosList}>
        <li>
          <div>kcal</div>
          <div>{`${details.macros.calories} / ${details.macros.forThisAmount}${details.unit}`}</div>
        </li>
        {details.macros.proteins && (
          <li css={{ display: "flex" }}>
            <div>Proteins</div>
            <div>{`${details.macros.proteins} / ${details.macros.forThisAmount}${details.unit}`}</div>
          </li>
        )}
        {details.macros.carbs && (
          <li css={{ display: "flex" }}>
            <div>Carbs</div>
            <div>{`${details.macros.carbs} / ${details.macros.forThisAmount}${details.unit}`}</div>
          </li>
        )}
        {details.macros.fats && (
          <li css={{ display: "flex" }}>
            <div>Fats</div>
            <div>{`${details.macros.fats} / ${details.macros.forThisAmount}${details.unit}`}</div>
          </li>
        )}
      </ul>
    </div>
  );
};
