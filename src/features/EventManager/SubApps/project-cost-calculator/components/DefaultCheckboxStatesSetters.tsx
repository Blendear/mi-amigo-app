/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { useContext, useMemo, useRef, useState } from "react";
import { DefaultState } from "./DefaultState";
import { ProjectDefaultCheckboxesAndFeaturesContext } from "../context/ProjectDefaultCheckboxesAndFeatures";
import { DefaultCheckboxStatesSettersContext } from "../context/DefaultCheckboxStatesSetters";

const defaultCheckboxSSCss = {
  container: css([
    universalCss.container,
    {
      display: "grid",
      rowGap: "2rem",
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
    },
  ]),
};

export const DefaultCheckboxStatesSetters = () => {
  const { userChoicesRef } = useContext(
    ProjectDefaultCheckboxesAndFeaturesContext
  );

  const defaultStates =
    userChoicesRef.current.finalChoice.calculationContent
      .defaultStatesThatMultiplyTheTimeSum;

  return (
    <DefaultCheckboxStatesSettersContext.Provider value={{}}>
      <div css={defaultCheckboxSSCss.container}>
        {Object.keys(defaultStates).map((stateName, index) => {
          // Needs to be saved as a variable, since it's an object
          const state = defaultStates[stateName];

          return (
            <DefaultState
              key={index}
              stateName={state.value}
              radioValues={state.possibleOptions}
            />
          );
        })}

        {/* Yup, it's always enabled */}
        <button>Confirm default states</button>
      </div>
    </DefaultCheckboxStatesSettersContext.Provider>
  );
};
