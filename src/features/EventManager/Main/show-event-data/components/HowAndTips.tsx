/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { HowAndTipsProps } from "../types";
import VideoEditable from "@/features/EventManager/SubApps/yt-watcher/components/VideoEditable";
import { useContext } from "react";
import EventDisplayContext from "../context/EventDisplayContext";
import { useState } from "react";

const HowAndTips = ({ content }: HowAndTipsProps) => {
  const { isShowing, formDataRef, handleDataChange } =
    useContext(EventDisplayContext);

  const [shownDescriptionID, setShownDescriptionID] = useState<number | null>(
    null
  );

  const handleClickTitle = (index: number) => {
    if (shownDescriptionID === index) {
      setShownDescriptionID(null);
    } else {
      setShownDescriptionID(index);
    }
  };

  return (
    <section>
      {content ? (
        <>
          <VideoEditable
            isShowing={!isShowing.current}
            yTvideoId={content.ytVideoId}
          />
          <ul>
            {content.notes.map((note, index) => {
              return (
                <li key={index} css={{ display: "grid" }}>
                  <input
                    css={[
                      universalCss.container,
                      {
                        borderColor: "purple",
                        gridRow: "1",
                        gridColumn: "1",
                      },
                    ]}
                    disabled={isShowing.current}
                    aria-label="Title"
                    type="text"
                    placeholder={note.title}
                    // placeholder={formDataRef.current.name}
                    // onChange={(e) => handleDataChange(formDataRef, "name", e.target.value)}
                  />
                  <button
                    css={{
                      gridRow: "1",
                      gridColumn: "1",
                    }}
                    onClick={() => handleClickTitle(index)}
                  ></button>
                  {shownDescriptionID === index && (
                    <div>
                      <textarea
                        css={universalCss.container}
                        disabled={isShowing.current}
                        aria-label="Description"
                        placeholder={note.description}
                        // placeholder={formDataRef.current.description}
                        // onChange={(e) =>
                        //   handleDataChange(formDataRef, "description", e.target.value)
                        // }
                      />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <p>No content</p>
      )}
    </section>
  );
};

export default HowAndTips;
