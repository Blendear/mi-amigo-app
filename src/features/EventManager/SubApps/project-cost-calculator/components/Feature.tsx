/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { SpecificFeaturesProps } from "../types";
import { useRef } from "react";

// two words fully written, the rest are initials
const SpecificFeaturesCss = {
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

export const ListOfSpecificFeatures = ({}: SpecificFeaturesProps) => {
  // They will multiply the SINGLE sum of hours of a feature if its "isResponsive", "isTranslated","isStylised" etc. is true
  const multipliersForSpecificFeatures = useRef({
    translation: 0,
    responsiveness: 0,
    stylisation: 0,
  });

  return <div>AComponent</div>;
};
