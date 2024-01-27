/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import EventDisplayContext from "../context/EventDisplayContext";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { chaptersData } from "../data/chaptersData";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";

const togglersCss = {
  container: css({
    display: "grid",
    gridAutoFlow: "column",
    columnGap: "1rem",
  }),

  toggler: css({
    "& > button": {
      fontSize: variables.fontSize.heading,
    },
  }),
};

const TogglersOfChapters = () => {
  const { currentChapterOfInfo, setCurrentChapterOfInfo } =
    useContext(EventDisplayContext);

  return (
    <ul css={togglersCss.container}>
      {chaptersData.map((chapter, index) => (
        <li
          key={index}
          css={[
            universalCss.button(chapter.name === currentChapterOfInfo),
            togglersCss.toggler,
          ]}
        >
          <button
            onClick={() => {
              setCurrentChapterOfInfo(chapter.name);
            }}
          >
            {chapter.svg}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TogglersOfChapters;
