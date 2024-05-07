/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { useState } from "react";
import Video from "../../yt-watcher/components/Video";

export const DetailsBasedOnVariant = ({ nodeDataRef, nodeId }) => {
  const [variantIndex, setVariantIndex] = useState(0);

  const btnsVariantSetters = nodeDataRef.current.videosAndNotesByVariants.map(
    (variant, index) => {
      return (
        <button
          key={index}
          css={[
            universalCss.container,
            universalCss.button(variantIndex === index),
          ]}
          onClick={() => {
            setVariantIndex(index);
          }}
        >
          {variant.variant}
        </button>
      );
    }
  );

  return (
    <>
      <div css={{ display: "grid", gridAutoFlow: "column" }}>
        {btnsVariantSetters}
      </div>
      <p>
        {nodeId &&
          nodeDataRef.current.videosAndNotesByVariants[variantIndex]
            .description}
      </p>
      <Video
        yTvideoId={
          nodeDataRef.current.videosAndNotesByVariants[variantIndex]
            .ytVideoId || ""
        }
      />
    </>
  );
};
