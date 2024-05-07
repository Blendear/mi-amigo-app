/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { useState } from "react";
import Video from "../../yt-watcher/components/Video";
import { DataPropertyOfTheinitialNode } from "../types";

export type DetailsBasedOnVariantProps = {
  nodeDataRef: React.MutableRefObject<DataPropertyOfTheinitialNode>;
  //TODO : add the type
  nodeId;
};

export const DetailsBasedOnVariant = ({
  nodeDataRef,
  nodeId,
}: DetailsBasedOnVariantProps) => {
  const [variantIndex, setVariantIndex] = useState(0);

  const contentVariantsAmount =
    nodeDataRef.current.videosAndNotesByVariants.length;

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
      {nodeId && contentVariantsAmount > 0 ? (
        <>
          {/* There's no point of showing multiple ways of teaching to choose from, if there's only one currently available */}
          {contentVariantsAmount > 1 && (
            <div css={{ display: "grid", gridAutoFlow: "column" }}>
              {btnsVariantSetters}
            </div>
          )}

          {/* <Video
            yTvideoId={
              nodeDataRef.current.videosAndNotesByVariants[variantIndex]
                .ytVideoId || ""
            }
          /> */}
          {/* 
          <p>
            {
              nodeDataRef.current.videosAndNotesByVariants[variantIndex]
                .description
            }
          </p> */}
          {/* 
          {nodeDataRef.current.videosAndNotesByVariants[variantIndex]
            .notesToTheVideo.length > 0 && (
            <div css={universalCss.container}>
              <h2>Notes to include in the video</h2>
              <ul>
                {nodeDataRef.current.videosAndNotesByVariants[
                  variantIndex
                ].notesToTheVideo.map((note, index) => {
                  return <li key={index}>{note}</li>;
                })}
              </ul>
            </div>
          )}

          {nodeDataRef.current.videosAndNotesByVariants[variantIndex]
            .additionalLinks.length > 0 && (
            <div css={universalCss.container}>
              <h2>Notes to include in the video</h2>
              <ul>
                {nodeDataRef.current.videosAndNotesByVariants[
                  variantIndex
                ].additionalLinks.map((link, index) => {
                  return (
                    <li key={index}>
                      <a href={link} target="_blank" rel="noreferrer">
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )} */}
        </>
      ) : (
        <p css={{ color: "red" }}>No videosAndNotesByVariants </p>
      )}
    </>
  );
};
