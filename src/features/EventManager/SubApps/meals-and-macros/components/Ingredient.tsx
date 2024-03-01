/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
// import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
// import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { IngredientProps } from "../types";
import { useRef, useState } from "react";

const ingredientCss = {
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

export const Ingredient = ({ details }: IngredientProps) => {
  // const amount = useRef(details.amount);
  const [amount, setAmount] = useState(details.amount);
  return (
    <div css={ingredientCss}>
      <h3>
        <span>{details.name}</span>
        <span>{`${
          (details.macros.calories * amount) / details.macros.forThisAmount
        }`}</span>
      </h3>

      <div css={{ display: "flex" }}>
        <div>Amount</div>
        <input
          type="number"
          defaultValue={amount}
          onChange={(e) => {
            setAmount(Number(e.target.value));
          }}
        />
        <div>{details.macros.forThisUnit}</div>
      </div>

      <ul>
        <li css={{ display: "flex" }}>
          <div>kcal</div>
          <div>{`${details.macros.calories} / ${details.macros.forThisAmount}${details.macros.forThisUnit}`}</div>
        </li>
        {details.macros.proteins && (
          <li css={{ display: "flex" }}>
            <div>Proteins</div>
            <div>{`${details.macros.proteins} / ${details.macros.forThisAmount}${details.macros.forThisUnit}`}</div>
          </li>
        )}
        {details.macros.carbs && (
          <li css={{ display: "flex" }}>
            <div>Carbs</div>
            <div>{`${details.macros.carbs} / ${details.macros.forThisAmount}${details.macros.forThisUnit}`}</div>
          </li>
        )}
        {details.macros.fats && (
          <li css={{ display: "flex" }}>
            <div>Fats</div>
            <div>{`${details.macros.fats} / ${details.macros.forThisAmount}${details.macros.forThisUnit}`}</div>
          </li>
        )}
      </ul>
    </div>
  );
};
