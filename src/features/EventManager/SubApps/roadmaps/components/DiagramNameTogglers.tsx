/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { diagramsData } from "../data/diagramsData";
import { useContext } from "react";
import { RoadmapsContext } from "../context/RoadmapsContext";

export const DiagramNameTogglers = () => {
  const { diagramName, setDiagramName } = useContext(RoadmapsContext);
  return (
    <div css={{ display: "grid", gridAutoFlow: "column" }}>
      {Object.keys(diagramsData).map((currentName) => {
        return (
          <button
            key={currentName}
            css={[
              universalCss.container,
              universalCss.button(currentName === diagramName),
            ]}
            onClick={() => {
              setDiagramName(currentName);
            }}
          >
            {currentName}
          </button>
        );
      })}
    </div>
  );
};
