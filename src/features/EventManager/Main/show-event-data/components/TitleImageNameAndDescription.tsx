/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useContext } from "react";
import { EventFormSegmentProps } from "../types";
import { placeholderImagePath } from "../data/placeholderImagePath";
import { generateImagePath } from "../utils/generateImagePath";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import EventDisplayContext from "../context/EventDisplayContext";
import { CiImageOn } from "react-icons/ci";
import { MdGif } from "react-icons/md";
import { contentWithBorder } from "@/styles/emotion-css-experiment/abstracts/universal-styles";
import { button } from "@/styles/emotion-css-experiment/abstracts/mixins";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { wrapperWithCenteredSvg } from "@/styles/emotion-css-experiment/abstracts/universal-styles";

const titleINADCss = {
  container: css({
    width: "100%",
    display: "grid",
  }),

  visualWithInput: css({
    display: "grid",
    gridTemplateRows: "1fr max-content",

    "& > div:nth-of-type(1)": {
      gridRow: "1/3",
      gridColumn: "1",

      " & > span": {
        borderRadius: `${variables.borderRadius.md} ${variables.borderRadius.md} 0 0`,
      },
    },

    "& > div:nth-of-type(2)": {
      zIndex: 1,
      gridRow: "2/3",
      gridColumn: "1",
      backgroundColor: `rgba(${colors.tertiaryLight},0.8)`,
      display: "grid",
      gridTemplateColumns: "1fr 3fr 1fr",
    },
  }),

  name: css([{ gridRow: "2 / 4", gridColumn: "1" }, contentWithBorder]),

  description: css([{ gridRow: "3 / 5", gridColumn: "1" }, contentWithBorder]),
};

const TitleImageNameAndDescription = () => {
  const { formDataRef, handleDataChange, isShowing } =
    useContext(EventDisplayContext);

  // States for rerendering the image/gif after changing url string
  // "formDataRef" is a useRef object, so changing it wouldn't cause a rerender
  const [imagePath, setImagePath] = useState<string>(
    formDataRef.current.imagePath || placeholderImagePath
  );
  const [GIFPath, setGIFPath] = useState<string>(
    formDataRef.current.imagePath || placeholderImagePath
  );

  const [showGIF, setShowGIF] = useState<boolean>(false);
  const [showDescription, setShowDescription] = useState<boolean>(false);

  return (
    <section css={titleINADCss.container}>
      <div css={titleINADCss.visualWithInput}>
        <ImageWithWrapper
          src={formDataRef.current.GIFPath ? GIFPath : imagePath}
          width="100%"
          aspectRatio="1.82/1"
        />
        {2 > 1 && (
          // !isShowing.current
          <div>
            <button
              css={[button(!showGIF), wrapperWithCenteredSvg("5rem", "70%")]}
              onClick={() => {
                setShowGIF(false);
              }}
            >
              <CiImageOn />
            </button>
            <input
              css={css(showGIF ? { display: "none" } : {})}
              disabled={isShowing.current}
              aria-label="Image URL Path"
              type="text"
              placeholder={imagePath}
              onChange={(e) => {
                handleDataChange(formDataRef, "imagePath", e.target.value),
                  setImagePath(generateImagePath(e.target.value));
              }}
            />
            <input
              css={css(!showGIF ? { display: "none" } : {})}
              disabled={isShowing.current}
              aria-label="GIF URL Path"
              type="text"
              placeholder={GIFPath}
              onChange={(e) => {
                handleDataChange(formDataRef, "GIFPath", e.target.value),
                  setGIFPath(generateImagePath(e.target.value));
              }}
            />
            <button
              css={[button(showGIF), wrapperWithCenteredSvg("5rem", "70%")]}
              onClick={() => {
                setShowGIF(true);
              }}
            >
              <MdGif />
            </button>
          </div>
        )}
      </div>
      <input
        css={titleINADCss.name}
        disabled={isShowing.current}
        aria-label="Name"
        type="text"
        placeholder={formDataRef.current.name}
        onChange={(e) => handleDataChange(formDataRef, "name", e.target.value)}
      />
      {2 > 1 && (
        // showDescription || !isShowing.current
        <textarea
          css={titleINADCss.description}
          disabled={isShowing.current}
          aria-label="Description"
          placeholder={formDataRef.current.description}
          onChange={(e) =>
            handleDataChange(formDataRef, "description", e.target.value)
          }
        />
      )}
    </section>
  );
};

export default TitleImageNameAndDescription;
