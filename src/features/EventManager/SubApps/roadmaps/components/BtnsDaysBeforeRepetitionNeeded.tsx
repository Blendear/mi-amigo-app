/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { useState } from "react";

export const BtnsDaysBeforeRepetitionNeeded = ({ nodeDataRef }) => {
  const titles = [1, 3, 7, 14, 30, "TODO"];

  const [currentTitle, setCurrentTitle] = useState(
    nodeDataRef.current.daysBeforeRepetitionNeeded
  );

  return (
    <div css={{ display: "grid", gridAutoFlow: "column" }}>
      {titles.map((title, index) => {
        return (
          <button
            key={index}
            css={[
              universalCss.container,
              universalCss.button(currentTitle === title),
            ]}
            onClick={() => {
              setCurrentTitle(titles[index]);
              nodeDataRef.current.daysBeforeRepetitionNeeded = title;
            }}
          >
            {title} {title === "TODO" ? "" : "days"}
          </button>
        );
      })}
    </div>
  );
};
