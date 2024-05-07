/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import { useContext } from "react";
import { ContentVariantContext } from "../context/ContentVariantContext";
import { TitleBarWithTogglableContent } from "@/components/TitleBarWithTogglableContent";

export const ExplanationQuickShort = () => {
  const { contentChosen } = useContext(ContentVariantContext);

  return (
    <TitleBarWithTogglableContent
      titleBarContent={
        <h2 css={universalCss.container}>Wyjaśnienie - Krótkie</h2>
      }
    >
      <p>{contentChosen.explanation.quickShort.serious.text}</p>

      {/* fun */}
      <ImageWithWrapper
        src={contentChosen.explanation.quickShort.fun.imagePath}
        width="100%"
        aspectRatio="16/9"
        alt="visualisation of the more fun, quick reminder"
      />

      <p>{contentChosen.explanation.quickShort.fun.text}</p>
    </TitleBarWithTogglableContent>
  );
};
