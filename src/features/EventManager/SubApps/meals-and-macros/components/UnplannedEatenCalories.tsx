/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { useAppDispatch, useAppSelector } from "@/store/redux/hooks";
import { contextsSliceActions } from "@/store/redux/store-redux";
import { Meal } from "./Meal";
import { useForceRerender } from "@/hooks/useForceRerender";
import { useEffect, useState } from "react";

const unplannedEatenCCss = {
  container: css([
    universalCss.container,
    {
      display: "grid",
      gridAutoFlow: "column",
      gridTemplateColumns: "7fr 3fr",
      justifyItems: "start",

      "& *": {
        color: "orange",
        fontSize: "2rem",
      },

      "& > div": {
        justifySelf: "end",
        display: "flex",

        "& > input": {
          width: "5rem",
          textAlign: "end",
        },
      },
    },
  ]),
};

export const UnplannedEatenCalories = () => {
  const { MealsAndMacros } = useAppSelector((state) => state.contextsReducer);

  const [additionalCalories, setAdditionalCalories] = useState(() => {
    // Get value from local storage, default to 0 if not present yet
    return global?.localStorage.getItem("additionalCalories") || "0";
  });

  useEffect(() => {
    // Store additional calories in local storage whenever it changes
    global?.localStorage.setItem("additionalCalories", additionalCalories);
  }, [additionalCalories]);

  return (
    <div css={unplannedEatenCCss.container}>
      <label htmlFor="additionalCalories">Additional</label>
      <div>
        <input
          type="number"
          id="additionalCalories"
          defaultValue={additionalCalories}
          onChange={(e) => setAdditionalCalories(e.target.value)}
        />
        <span>🔥</span>
      </div>
    </div>
  );
};
