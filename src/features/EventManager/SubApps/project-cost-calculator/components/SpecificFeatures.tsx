/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { SpecificFeatureType, SpecificFeaturesProps } from "../types";
import { useContext, useEffect, useState } from "react";
import { ProjectDefaultCheckboxesAndFeaturesContext } from "../context/ProjectDefaultCheckboxesAndFeatures";
import { Feature } from "./Feature";

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

// get the speicif cfeatures orm tje project

// rendera  list of features
export const SpecificFeatures = ({}: SpecificFeaturesProps) => {
  const { userChoicesRef } = useContext(
    ProjectDefaultCheckboxesAndFeaturesContext
  );

  const [_, forceUpdate] = useState(false);

  useEffect(() => {
    forceUpdate((prev) => !prev);
  }, [userChoicesRef.current.finalChoice]);

  const features: SpecificFeatureType[] =
    userChoicesRef.current.finalChoice.calculationContent.specificFeatures;

  return (
    <div css={universalCss.container}>
      <h2>Features</h2>
      {features.map((feature, index) => {
        return <Feature key={index} feature={feature} featureIndex={index} />;
      })}
    </div>
  );
};
