/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { FeatureProps, SpecificFeaturesProps } from "../types";
import { useRef } from "react";
import { TitleBarWithTogglableContent } from "@/components/TitleBarWithTogglableContent";
import { BuildingBlock } from "./BuildingBlock";

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

export const Feature = ({ feature, featureIndex }: FeatureProps) => {
  // They will multiply the SINGLE sum of hours of a feature if its "isResponsive", "isTranslated","isStylised" etc. is true
  const multipliersForSpecificFeatures = useRef({
    translation: 0,
    responsiveness: 0,
    stylisation: 0,
  });

  return (
    <div css={universalCss.container}>
      <TitleBarWithTogglableContent titleBarContent={<h3>{feature.name}</h3>}>
        <div css={universalCss.container}>
          <TitleBarWithTogglableContent titleBarContent={<h4>User Story</h4>}>
            {feature.userStory}
          </TitleBarWithTogglableContent>
        </div>
        <div css={universalCss.container}>
          <TitleBarWithTogglableContent
            titleBarContent={<h4>Building Blocks</h4>}
          >
            {feature.featureBuildingBlocks.map((block, index) => {
              return (
                <BuildingBlock
                  key={index}
                  block={block}
                  featureIndex={featureIndex}
                  blockIndex={index}
                />
              );
            })}
          </TitleBarWithTogglableContent>
        </div>
      </TitleBarWithTogglableContent>
    </div>
  );
};
