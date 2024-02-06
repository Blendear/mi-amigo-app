/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { WhereAndToolsProps } from "../types";
import PortalesqueLink from "./PortalesqueLink";
import { useContext, useMemo } from "react";
import EventDisplayContext from "../context/EventDisplayContext";
import { booksOfAddonsNames } from "../data/booksOfAddonsNames";

const whereAndToolsCss = {
  container: css({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
  }),
};

const WhereAndTools = ({ content }: WhereAndToolsProps) => {
  // TODO: Conditionally activate a subapp || the current link, depending no the content type
  // For now it's only the link 3rd party functionality or no link at all (for the physical tools)
  return content ? (
    <ul css={whereAndToolsCss.container}>
      {content.map((portal, index) => {
        return (
          <li key={index}>
            <PortalesqueLink
              title={portal.title}
              linkURL={portal.linkURL}
              imageOrGifPath={portal.imageOrGifPath}
            />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No content</p>
  );
};

export default WhereAndTools;
