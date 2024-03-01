/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
// import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
// import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { IngredientProps } from "../types";
import { useState } from "react";

export const Ingredient = ({ details }: IngredientProps) => {
  const [amount, setAmount] = useState(details.amount);

  return (
    <div>
      <h3>
        <span>{details.name}</span>
        <span>{`${amount} ${details.unit}`}</span>
      </h3>
      <div css={{ display: "flex" }}>
        <div>Amount</div> <input type="number" value={details.amount} />
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
