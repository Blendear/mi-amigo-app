/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import { useContext, useState } from "react";
import { ContentVariantContext } from "../context/ContentVariantContext";
import Video from "../../yt-watcher/components/Video";
import { FaLink, FaExclamation } from "react-icons/fa";
import { Exercises } from "./Exercises";

export const ExplanationLongFull = () => {
  const { contentChosen } = useContext(ContentVariantContext);

  const [explanationVariant, setExplanationVariant] = useState("video");

  const videoVariant = contentChosen.explanation.longFull.video;

  const transcriptVariant = contentChosen.explanation.longFull.transcript;

  return (
    <section>
      {/* Explanation */}
      <h2 css={universalCss.container}>Wyjaśnienie - Długie</h2>

      {/* Variant Toggler  */}
      <button
        css={[
          universalCss.container,
          {
            width: "max-content",
            backgroundColor: "white",
            color: "black",
          },
        ]}
        onClick={() => {
          setExplanationVariant(
            explanationVariant === "video" ? "transcript" : "video"
          );
        }}
      >
        Pokaż video / transkrypt
      </button>

      {explanationVariant === "video" ? (
        // Explanation - Video
        <div>
          <Video yTvideoId={videoVariant.ytVideoId} />

          <div
            css={{
              width: "max-content",
            }}
          >
            {videoVariant.importantNotes.friendlyProtips.map(
              (protip, index) => (
                <div
                  key={index}
                  css={{ display: "grid", gridAutoFlow: "column" }}
                >
                  <FaExclamation />
                  <p key={index}>{protip}</p>
                </div>
              )
            )}
          </div>

          <div
            css={{
              width: "max-content",
            }}
          >
            {videoVariant.additionalLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                css={{ display: "grid", gridAutoFlow: "column" }}
              >
                <FaLink />
                <p>{link.title}</p>
              </a>
            ))}
          </div>
        </div>
      ) : (
        // Explanation - Transcript
        <div>
          {transcriptVariant.map((transcriptChunk, index) => {
            return transcriptChunk.typeOfContent === "img" ? (
              <ImageWithWrapper key={index} src={transcriptChunk.content} />
            ) : (
              <p key={index}>{transcriptChunk.content}</p>
            );
          })}
        </div>
      )}

      {/* Exercises */}
      <Exercises contentChosen={contentChosen} />
    </section>
  );
};
