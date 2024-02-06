/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import Video from "./Video";
import { FaYoutube } from "react-icons/fa";

const VideoEditable = ({ isShowing, yTvideoId }) => {
  return (
    <div>
      <Video yTvideoId={yTvideoId} />
      {!isShowing && (
        <>
          <div
            css={[
              universalCss.button(true),
              universalCss.wrapperWithCenteredSvg("5rem", "70%"),
            ]}
          >
            <FaYoutube />
          </div>
          <input
            disabled={isShowing}
            aria-label="YouTube video ID"
            type="text"
            placeholder={yTvideoId}
            onChange={(e) => {
              // handleDataChange(formDataRef, "imagePath", e.target.value),
              //   setImagePath(generateImagePath(e.target.value));
            }}
          />
        </>
      )}
    </div>
  );
};
export default VideoEditable;
