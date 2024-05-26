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
import { hardcodedEventsBecauseOfTheLackOfTime } from "@/features/EventManager/Main/show-event-data/data/hardcodedEventsBecauseOfTheLackOfTime";

const mealsAndMacrosCss = {
  container: css({
    padding: "1rem 1rem 15rem 1rem",
  }),
};

export const MealsAndMacros = ({ globalSubAppData }: MealsAndMacrosProps) => {
  const { MealsAndMacros } = useAppSelector((state) => state.contextsReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      contextsSliceActions.setContextKeyValue({
        contextName: "MealsAndMacros",
        keyName: "globalSubAppData",
        // TODO: Remake in the final app, so that it's taken from the users local storage
        // For now it will only used by me, so I can just leave it hardcoded
        newValue:
          hardcodedEventsBecauseOfTheLackOfTime.subAppsGlobalData
            .MealsAndMacros["healthy-diet"],
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
