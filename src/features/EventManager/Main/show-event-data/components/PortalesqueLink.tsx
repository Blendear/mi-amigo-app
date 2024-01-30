/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { PortalesqueLinkProps } from "../types";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import EventDisplayContext from "../context/EventDisplayContext";
import { useContext } from "react";

const portalesqueLinkCss = {
  container: css({}),

  portalWithVisual: css({
    display: "grid",
    justifyItems: "center",
    alignItems: "center",

    "& > div": {
      gridRow: "1",
      gridColumn: "1",
    },

    "& > div:nth-of-type(2)": {
      margin: "1rem 0 0 0.5rem",
      "& > span": {
        borderRadius: "100%",
      },
    },
  }),
};

const portalGifUrl =
  "https://media.tenor.com/BgR83Df82t0AAAAi/portal-rick-and-morty.gif";

const PortalesqueLink = ({
  title,
  linkURL,
  imageOrGifPath,
}: PortalesqueLinkProps) => {
  const { isShowing, formDataRef, handleDataChange } =
    useContext(EventDisplayContext);

  return (
    <div css={portalesqueLinkCss.container}>
      <a
        css={portalesqueLinkCss.portalWithVisual}
        href={linkURL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ImageWithWrapper src={portalGifUrl} width="100%" aspectRatio="1/1" />
        <ImageWithWrapper src={imageOrGifPath} width="50%" aspectRatio="1/1" />
      </a>

      <input
        css={universalCss.container}
        disabled={isShowing.current}
        aria-label="Title"
        type="text"
        placeholder={title}
        // placeholder={formDataRef.current.name}
        // onChange={(e) => handleDataChange(formDataRef, "name", e.target.value)}
      />
      <input
        css={universalCss.container}
        disabled={isShowing.current}
        aria-label="Link URL"
        type="text"
        placeholder={linkURL}
        // placeholder={formDataRef.current.name}
        // onChange={(e) => handleDataChange(formDataRef, "name", e.target.value)}
      />
      <input
        css={universalCss.container}
        disabled={isShowing.current}
        aria-label="Image or GIF URL path"
        type="text"
        placeholder={imageOrGifPath}
        // placeholder={formDataRef.current.name}
        // onChange={(e) => handleDataChange(formDataRef, "name", e.target.value)}
      />
    </div>
  );
};

export default PortalesqueLink;
