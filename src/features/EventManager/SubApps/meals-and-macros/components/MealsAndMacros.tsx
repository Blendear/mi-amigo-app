/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { MealsAndMacrosProps } from "../types";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/redux/hooks";
import { contextsSliceActions } from "@/store/redux/store-redux";
import { MealsForTheChosenDay } from "./MealsForTheChosenDay";
import { AllAvailableMeals } from "./AllAvailableMeals";
import { WhichMealsToShowChooser } from "./WhichMealsToShowChooser";

const mealsAndMacrosCss = {
  container: css({
    padding: "1rem 1rem 3rem 1rem",
  }),

  additionalCalories: css([
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

  explanation: css({ fontSize: "1.1rem", color: `darkgrey` }),
};

export const MealsAndMacros = ({ globalSubAppData }: MealsAndMacrosProps) => {
  const { MealsAndMacros } = useAppSelector((state) => state.contextsReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      contextsSliceActions.setContextKeyValue({
        contextName: "MealsAndMacros",
        keyName: "globalSubAppData",
        newValue: globalSubAppData,
      })
    );
  }, []);

  return (
    <section css={mealsAndMacrosCss.container}>
      <WhichMealsToShowChooser />

      {/* It takes a split second for the context to update and create the globalSubAppData, that's why this
      ".mealsAvailable.length > 0" check is necessary, to not throw errors on the initial render */}
      {MealsAndMacros.globalSubAppData.mealsAvailable.length > 0 ? (
        MealsAndMacros.contentVariant === "periods" ? (
          <MealsForTheChosenDay />
        ) : (
          <AllAvailableMeals />
        )
      ) : (
        <div>
          No meals exist - you need to add at least one to use this subapp
        </div>
      )}
    </section>
  );
};
