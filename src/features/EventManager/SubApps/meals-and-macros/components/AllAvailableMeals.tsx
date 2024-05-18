/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Meal } from "./Meal";
import { useAppSelector } from "@/store/redux/hooks";
// import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
// import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
// import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";

// two words fully written, the rest are initials
const OneTwoTFWCNCss = {
  container: css({
    // gridRow: "1 / 3",
    // padding: "1rem",
    //
    // width: "100%",
    // boxSizing: "border-box",
    // aspectRatio: "2/1",
    // backgroundColor: `rgb(${colors.primaryLight})`,
    //
    // display: "grid",
    // gridTemplateRows: "1fr",
    // rowGap: "1rem",
    // columnGap: "2rem",
    //
    // justifyItems: "center",
    // fontSize: variables.fontSize.heading,
    //
    // "@media (orientation: landscape)": {
    // ...
    // }
    //
    // "& div:nth-child(1)": {
    //   backgroundColor: "yellow",
    // },
    //
  }),
};

export const AllAvailableMeals = () => {
  const { MealsAndMacros } = useAppSelector((state) => state.contextsReducer);

  return (
    <section>
      {" "}
      <p>
        KOCHANIUTKI, widziana porcja oznacza 1/6 ugotowanej całości, żebyśmy -
        ja i Zuza - mieli 1 porcję danego dania przez 3 dni
      </p>
      {MealsAndMacros.globalSubAppData.mealsAvailable.map((meal, index) => {
        return <Meal hideContentUnderNamedButton details={meal} key={index} />;
      })}
    </section>
  );
};
