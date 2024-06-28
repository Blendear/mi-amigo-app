/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
// import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
// import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { SubAppsTogglersProps } from "../types";
import PortalesqueLink from "./PortalesqueLink";
import Link from "next/link";

const subAppsTogglersCss = {
  container: css({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
  }),
};

const SubAppsTogglers = ({ subappsToToggle }: SubAppsTogglersProps) => {
  return (
    <div css={subAppsTogglersCss.container}>
      {subappsToToggle ? (
        <ul>
          {subappsToToggle.map((identifyingData, index) => {
            return (
              <li key={index}>
                <PortalesqueLink
                  title={identifyingData.name}
                  imageOrGifPath={identifyingData.imagePath}
                  linkURL={`/subapp?name=${identifyingData.name}&variant=${identifyingData.variant}`}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No subappsToToggle</p>
      )}
    </div>
  );
};

export default SubAppsTogglers;
